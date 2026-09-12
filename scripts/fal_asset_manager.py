"""
Fal.ai Asset Manager & Custom Conditioned Image Generator
Axios Media Group // Local Umbrella Media Proofing Studio

This tool allows you to:
1. Upload local logos, client headshots, and brand assets directly to fal.ai CDN storage.
2. Maintain a persistent asset catalog in `assets/fal_assets_catalog.json`.
3. Use uploaded assets in Flux workflows (Subject Reference, Image-to-Image, Inpainting, ControlNet).
"""

import os
import sys
import json
import urllib.request
import urllib.error

FAL_KEY = os.environ.get("FAL_KEY", "be48e0ce-47ed-4476-b951-ac2ad6110d53:d9c37891a349dc81340bac0bd363aa91")
CATALOG_PATH = os.path.join(os.path.dirname(__file__), "..", "assets", "fal_assets_catalog.json")

def upload_file_to_fal(local_path, category="general", tenant_id="global"):
    """Uploads a local image file to fal.ai CDN storage with client tenant isolation and returns its persistent URL."""
    if not os.path.exists(local_path):
        raise FileNotFoundError(f"File not found: {local_path}")

    raw_filename = os.path.basename(local_path)
    # Namespaced file prefix to ensure physical separation across client buckets
    namespaced_filename = f"tenant_{tenant_id}_{raw_filename}" if tenant_id != "global" else raw_filename
    ext = os.path.splitext(raw_filename)[1].lower()
    content_type_map = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".webp": "image/webp",
        ".svg": "image/svg+xml"
    }
    content_type = content_type_map.get(ext, "image/jpeg")

    with open(local_path, "rb") as f:
        file_bytes = f.read()

    print(f"[*] Initiating upload for [{tenant_id}] {raw_filename} ({len(file_bytes)/1024:.1f} KB)...")
    
    # Step 1: Request presigned upload URL from fal.ai with namespaced key
    req = urllib.request.Request(
        "https://rest.alpha.fal.ai/storage/upload/initiate",
        data=json.dumps({
            "file_name": namespaced_filename,
            "content_type": content_type
        }).encode("utf-8"),
        headers={
            "Authorization": f"Key {FAL_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "AxiosMediaGroup/1.0"
        }
    )

    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        file_url = data["file_url"]
        upload_url = data["upload_url"]

    # Step 2: PUT the file bytes directly to the presigned S3/CDN upload URL
    put_req = urllib.request.Request(
        upload_url,
        data=file_bytes,
        method="PUT",
        headers={"Content-Type": content_type}
    )
    with urllib.request.urlopen(put_req) as put_resp:
        if put_resp.status in (200, 201, 204):
            print(f"[OK] Upload successful for Tenant [{tenant_id}]!")
            print(f"    CDN URL: {file_url}")
        else:
            raise RuntimeError(f"Upload failed with status {put_resp.status}")

    # Step 3: Register in multi-tenant catalog
    catalog = load_catalog()
    catalog[namespaced_filename] = {
        "tenant_id": tenant_id,
        "filename": raw_filename,
        "namespaced_filename": namespaced_filename,
        "local_path": local_path,
        "category": category,
        "fal_url": file_url,
        "size_bytes": len(file_bytes),
        "content_type": content_type
    }
    save_catalog(catalog)
    return file_url

def list_tenant_assets(tenant_id="global"):
    """Returns only the assets belonging to a specific client tenant (or all if global)."""
    catalog = load_catalog()
    if tenant_id == "global":
        return list(catalog.values())
    return [asset for asset in catalog.values() if asset.get("tenant_id") == tenant_id]

def load_catalog():
    if os.path.exists(CATALOG_PATH):
        try:
            with open(CATALOG_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_catalog(catalog):
    os.makedirs(os.path.dirname(CATALOG_PATH), exist_ok=True)
    with open(CATALOG_PATH, "w", encoding="utf-8") as f:
        json.dump(catalog, f, indent=2)

def generate_with_image_reference(prompt, image_url, model="fal-ai/flux-general/image-to-image", strength=0.75, aspect_ratio="3:4"):
    """
    Generates a new image conditioned on an uploaded asset URL.
    Supports Image-to-Image, Inpainting, and Reference Conditioning.
    """
    print(f"[*] Generating image using reference {image_url[:50]}... with prompt: '{prompt[:60]}...'")
    payload = {
        "prompt": prompt,
        "image_url": image_url,
        "strength": strength,
        "num_inference_steps": 28,
        "guidance_scale": 3.5,
        "output_format": "jpeg"
    }

    req = urllib.request.Request(
        f"https://queue.fal.run/{model}",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Key {FAL_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "AxiosMediaGroup/1.0"
        }
    )

    with urllib.request.urlopen(req) as resp:
        queue_data = json.loads(resp.read().decode("utf-8"))
        print(f"    Queued as request ID: {queue_data.get('request_id')}")
        return queue_data

if __name__ == "__main__":
    catalog = load_catalog()
    print("=========================================================")
    print("AXIOS MEDIA GROUP // FAL.AI ASSET MANAGER")
    print(f"Active Assets Registered: {len(catalog)}")
    for name, item in catalog.items():
        print(f" - [{item.get('category', 'asset')}] {name} -> {item.get('fal_url')}")
    print("=========================================================")
