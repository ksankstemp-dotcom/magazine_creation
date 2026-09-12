import os
import json
import urllib.request
import urllib.error
import concurrent.futures
import time

FAL_KEY = "be48e0ce-47ed-4476-b951-ac2ad6110d53:d9c37891a349dc81340bac0bd363aa91"
OUTPUT_DIR = r"c:\Users\smi\Client\Local_Umbrella_Media\assets\images\magazine"
os.makedirs(OUTPUT_DIR, exist_ok=True)

IMAGE_DEFINITIONS = [
    {
        "filename": "page01_cover_katie_courtney.jpg",
        "size": "portrait_4_3",
        "prompt": "High-end luxury editorial portrait of two successful female real estate partners in tailored designer blazers, standing on a sunlit modern La Jolla coastal terrace with ocean view, cinematic lighting, 8k, Architectural Digest cover quality"
    },
    {
        "filename": "page02_ad_jumbo_lending_estate.jpg",
        "size": "landscape_4_3",
        "prompt": "Ultra luxury modern architectural estate in Rancho Santa Fe with infinity pool at twilight, warm glowing interior lights, high-end real estate photography"
    },
    {
        "filename": "page03_publisher_brad_weber.jpg",
        "size": "square_hd",
        "prompt": "Warm professional portrait of a charismatic magazine publisher in his 40s in a modern executive media office in San Diego"
    },
    {
        "filename": "page04_toc_architectural_staircase.jpg",
        "size": "square_hd",
        "prompt": "Sleek architectural details of a luxury La Jolla home staircase with natural sunlight streaming through glass"
    },
    {
        "filename": "page05_directory_boardroom_header.jpg",
        "size": "landscape_4_3",
        "prompt": "Modern executive boardroom meeting overlooking San Diego bay with coffee and financial reports, sleek luxury atmosphere"
    },
    {
        "filename": "page06_rising_star_alexa_portrait.jpg",
        "size": "portrait_4_3",
        "prompt": "Editorial lifestyle portrait of an energetic 28-year old Latina real estate agent in stylish linen blazer standing in front of a modern Del Mar beachfront home, bright natural daylight"
    },
    {
        "filename": "page07_rising_star_patio_walkway.jpg",
        "size": "landscape_4_3",
        "prompt": "Young female realtor walking with happy luxury homebuyers on a sunny California patio, candid, professional, editorial"
    },
    {
        "filename": "page08_cover_story_glass_pavilion.jpg",
        "size": "portrait_4_3",
        "prompt": "Full page cinematic portrait of two female luxury real estate partners standing confidently in an ultra modern glass pavilion overlooking the Pacific ocean in La Jolla"
    },
    {
        "filename": "page09_kitchen_calacatta_marble.jpg",
        "size": "square_hd",
        "prompt": "Close-up detail of architectural floor plans and luxury brass keys on a calacatta marble kitchen island with fresh eucalyptus"
    },
    {
        "filename": "page10_strategy_session_tablet.jpg",
        "size": "landscape_4_3",
        "prompt": "Collaborative strategy session of two female real estate founders reviewing digital tablet in a sun-drenched coastal design office"
    },
    {
        "filename": "page11_mentorship_mastermind_brunch.jpg",
        "size": "landscape_4_3",
        "prompt": "Outdoor patio brunch mastermind with 5 female professionals in La Jolla discussing business with ocean views"
    },
    {
        "filename": "page12_title_officer_portrait.jpg",
        "size": "portrait_4_3",
        "prompt": "Professional portrait of senior title officer in luxury office in downtown San Diego with legal deeds and escrow seals"
    },
    {
        "filename": "page13_staging_boucle_living_room.jpg",
        "size": "landscape_4_3",
        "prompt": "Immaculately staged modern luxury living room with white boucle sofas, organic wood coffee table, and floor-to-ceiling windows"
    },
    {
        "filename": "page14_gala_sunset_toast.jpg",
        "size": "landscape_4_3",
        "prompt": "Glamorous evening gala reception on the lawn of Hotel del Coronado with strings of fairy lights, attendees raising champagne glasses at sunset"
    },
    {
        "filename": "page14_gala_awards_stage.jpg",
        "size": "landscape_4_3",
        "prompt": "Top real estate awards stage ceremony with crystal trophies and elegant floral backdrop"
    },
    {
        "filename": "page15_gala_teams_candids.jpg",
        "size": "landscape_4_3",
        "prompt": "Candid shot of top real estate agents smiling and laughing together at an outdoor evening banquet table in San Diego"
    },
    {
        "filename": "page15_gala_lenders_reception.jpg",
        "size": "landscape_4_3",
        "prompt": "Professional partners mingling in black-tie attire in a luxury ballroom foyer with ambient warm lighting"
    },
    {
        "filename": "page15_gala_charity_auction.jpg",
        "size": "landscape_4_3",
        "prompt": "Silent auction display of luxury wines and resort packages at an upscale San Diego charity gala"
    },
    {
        "filename": "page15_gala_vip_terrace.jpg",
        "size": "landscape_4_3",
        "prompt": "Elite coastal brokers enjoying cocktails on a terrace overlooking the Coronado oceanfront at dusk"
    },
    {
        "filename": "page16_back_cover_skyline_bridge.jpg",
        "size": "portrait_4_3",
        "prompt": "Sunset silhouette of San Diego skyline with Coronado bridge and golden coastal reflections"
    },
    {
        "filename": "postcard_front_coastal_villa.jpg",
        "size": "landscape_4_3",
        "prompt": "Ultra-luxury modern La Jolla coastal home with infinity pool overlooking the Pacific Ocean at golden hour"
    },
    {
        "filename": "postcard_back_agent_headshot.jpg",
        "size": "square_hd",
        "prompt": "Polished professional real estate agent headshot in navy blazer against neutral architectural background"
    },
    {
        "filename": "profile_marcus_vance_portrait.jpg",
        "size": "portrait_4_3",
        "prompt": "Charismatic coastal architect in his 40s in a sleek black turtleneck holding architectural sketches in a modern studio"
    },
    {
        "filename": "profile_marcus_vance_encinitas_house.jpg",
        "size": "landscape_4_3",
        "prompt": "Contemporary cedar and glass beachfront house in Encinitas with ocean waves in background"
    },
    {
        "filename": "profile_marcus_vance_blueprints.jpg",
        "size": "square_hd",
        "prompt": "Detailed hand-drawn architectural floor plan and mechanical pencil on drafting vellum paper"
    },
    {
        "filename": "profile_elena_rostova_portrait.jpg",
        "size": "portrait_4_3",
        "prompt": "Distinguished female biotech executive in modern glass laboratory in Torrey Pines San Diego"
    },
    {
        "filename": "profile_elena_rostova_cleanroom.jpg",
        "size": "landscape_4_3",
        "prompt": "Sleek cutting-edge biotechnology cleanroom with blue robotic automation instruments"
    },
    {
        "filename": "brand_real_producers_gold_crest.jpg",
        "size": "square_hd",
        "prompt": "Embossed gold foil luxury crest emblem on matte black cardstock, premium macro photography"
    },
    {
        "filename": "brand_local_umbrella_skyline.jpg",
        "size": "landscape_4_3",
        "prompt": "San Diego coastal aerial view of Point Loma and Pacific Beach at bright midday"
    },
    {
        "filename": "feature_hotel_del_aerial_view.jpg",
        "size": "landscape_4_3",
        "prompt": "Cinematic drone shot of historic Hotel del Coronado with red turrets and Pacific beach surf"
    }
]

def generate_and_save(item, index, total):
    filename = item["filename"]
    out_path = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(out_path) and os.path.getsize(out_path) > 10000:
        print(f"[{index+1}/{total}] Already exists: {filename}")
        return True

    print(f"[{index+1}/{total}] Generating: {filename} ({item['size']})...")
    payload = json.dumps({
        "prompt": item["prompt"],
        "image_size": item["size"],
        "num_inference_steps": 4,
        "enable_safety_checker": False
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://fal.run/fal-ai/flux/schnell",
        data=payload,
        headers={
            "Authorization": f"Key {FAL_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "AxiosMediaGroup/1.0"
        }
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            img_url = data["images"][0]["url"]
            print(f"[{index+1}/{total}] Downloading {img_url[:40]}... -> {filename}")
            
            # Download image bytes
            img_req = urllib.request.Request(img_url, headers={"User-Agent": "AxiosMediaGroup/1.0"})
            with urllib.request.urlopen(img_req, timeout=30) as img_resp:
                with open(out_path, "wb") as f:
                    f.write(img_resp.read())
            print(f"[{index+1}/{total}] Saved {filename} ({os.path.getsize(out_path)} bytes)")
            return True
    except Exception as e:
        print(f"[{index+1}/{total}] ERROR generating {filename}: {e}")
        return False

def main():
    print(f"Starting batch generation of {len(IMAGE_DEFINITIONS)} distinct magazine images via fal.ai...")
    start_time = time.time()
    
    # Run with 4 concurrent worker threads
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = [
            executor.submit(generate_and_save, item, i, len(IMAGE_DEFINITIONS))
            for i, item in enumerate(IMAGE_DEFINITIONS)
        ]
        results = [f.result() for f in concurrent.futures.as_completed(futures)]

    success_count = sum(1 for r in results if r)
    elapsed = time.time() - start_time
    print(f"\n==========================================")
    print(f"Completed: {success_count}/{len(IMAGE_DEFINITIONS)} images generated in {elapsed:.1f}s")
    print(f"Output folder: {OUTPUT_DIR}")
    print(f"==========================================")

if __name__ == "__main__":
    main()
