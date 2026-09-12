import os
import json
import urllib.request
import urllib.error
import concurrent.futures
import time

FAL_KEY = "be48e0ce-47ed-4476-b951-ac2ad6110d53:d9c37891a349dc81340bac0bd363aa91"
OUTPUT_DIR = r"c:\Users\smi\Client\Local_Umbrella_Media\assets\images\magazine"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 100% Architecture, Landscape, Real Estate, Editorial Still Life - ZERO PEOPLE
IMAGE_DEFINITIONS = [
    {
        "filename": "page01_cover_katie_courtney.jpg",
        "aspect_ratio": "3:4",
        "prompt": "Architectural Digest cover photograph, breathtaking modern coastal architectural estate in La Jolla cantilevered over Pacific ocean bluffs, sunset golden hour reflections on infinity pool, 300 DPI ultra-high-resolution print quality, 8k, raw photography, no people"
    },
    {
        "filename": "page02_ad_jumbo_lending_estate.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Ultra-luxury modern architectural estate in Rancho Santa Fe with travertine motor court, glowing glass facade, infinity pool at twilight, 300 DPI print quality, luxury real estate photography, no people"
    },
    {
        "filename": "page03_publisher_brad_weber.jpg",
        "aspect_ratio": "1:1",
        "prompt": "High-end editorial still life of an architect and publisher executive drafting desk with heavy architectural vellum blueprints, solid brass fountain pen, Leica camera, warm oak tabletop, soft morning sunlight, no people"
    },
    {
        "filename": "page04_toc_architectural_staircase.jpg",
        "aspect_ratio": "1:1",
        "prompt": "Sculptural spiral staircase in a luxury modern La Jolla architectural residence with white plaster, natural white oak treads, warm morning sunlight streaming through high glass windows, no people"
    },
    {
        "filename": "page05_directory_boardroom_header.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Ultra-sleek executive conference boardroom overlooking San Diego harbor skyline with Calacatta marble conference table, architectural building models, morning sunlight, no people"
    },
    {
        "filename": "page06_rising_star_alexa_portrait.jpg",
        "aspect_ratio": "3:4",
        "prompt": "Modern Del Mar coastal residence exterior with lush courtyard, olive tree in stone planter, board-formed concrete, warm cedar siding, bright natural California sunlight, architectural photography, no people"
    },
    {
        "filename": "page07_rising_star_patio_walkway.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Sun-drenched outdoor terrace lounge in Del Mar with limestone pavers, modern minimalist fire pit, panoramic Pacific ocean views, architectural luxury, no people"
    },
    {
        "filename": "page08_cover_story_glass_pavilion.jpg",
        "aspect_ratio": "3:4",
        "prompt": "Breathtaking architectural photograph of a minimalist glass and steel pavilion cantilevered over La Jolla ocean bluffs at dusk, warm interior glow, Pacific waves crashing below, Architectural Digest style, no people"
    },
    {
        "filename": "page09_kitchen_calacatta_marble.jpg",
        "aspect_ratio": "1:1",
        "prompt": "Gourmet luxury kitchen with book-matched Calacatta marble island, minimalist fluted oak cabinetry, brass designer faucet, fresh eucalyptus in ceramic vase, architectural real estate photography, no people"
    },
    {
        "filename": "page10_strategy_session_tablet.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Architectural design atelier studio table with material sample trays of Calacatta marble, brushed brass, fluted glass, large iPad Pro displaying 3D CAD coastal villa model, no people"
    },
    {
        "filename": "page11_mentorship_mastermind_brunch.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Oceanfront La Jolla coastal garden terrace overlooking the Pacific with teak lounge seating, manicured coastal succulents, clear ocean horizon at midday, no people"
    },
    {
        "filename": "page12_title_officer_portrait.jpg",
        "aspect_ratio": "3:4",
        "prompt": "Corner executive office in downtown San Diego with floor-to-ceiling glass windows overlooking the marina and Coronado bridge, leather armchairs, walnut desk, no people"
    },
    {
        "filename": "page13_staging_boucle_living_room.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Immaculately staged luxury living room with cream boucle curved sofa, organic travertine coffee table, large abstract canvas art, floor-to-ceiling windows with Pacific ocean view, no people"
    },
    {
        "filename": "page14_gala_sunset_toast.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Atmospheric sunset view of Hotel del Coronado beachfront lawn illuminated with glowing festoon lights, elegant banquet tables with floral centerpieces and champagne glasses, Pacific surf at dusk, no people"
    },
    {
        "filename": "page14_gala_awards_stage.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Grand luxury ballroom gala stage with dramatic architectural uplighting, crystal chandeliers, floral arrangements on pedestals, no people"
    },
    {
        "filename": "page15_gala_teams_candids.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Close-up luxury still life of crystal champagne flutes and floral arrangement on a marble outdoor terrace railing overlooking the Pacific ocean at golden hour sunset, no people"
    },
    {
        "filename": "page15_gala_lenders_reception.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Elegant glass crystal leadership awards and engraved silver trophies resting on a black velvet plinth with white orchids in an upscale ballroom foyer, no people"
    },
    {
        "filename": "page15_gala_charity_auction.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Silent auction luxury display table with magnum champagne bottles, architectural sketches in gilded frames, and orchids in soft spotlight, no people"
    },
    {
        "filename": "page15_gala_vip_terrace.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Modern outdoor gas fire table lounge on an oceanfront terrace at twilight with glowing blue glass stones and Pacific ocean backdrop, no people"
    },
    {
        "filename": "page16_ad_back_cover_coronado_twilight.jpg",
        "aspect_ratio": "3:4",
        "prompt": "Epic twilight panoramic skyline of downtown San Diego illuminated against deep indigo evening sky with Coronado bridge and smooth water reflections, 300 DPI print quality, no people"
    },
    {
        "filename": "page16_back_cover_skyline_bridge.jpg",
        "aspect_ratio": "3:4",
        "prompt": "Dramatic architectural long exposure of the San Diego Coronado Bridge curving gracefully over the bay at dusk with glowing city skyline, no people"
    },
    {
        "filename": "brand_local_umbrella_skyline.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Sunlit aerial landscape of San Diego bay, downtown skyline, and Balboa Park with lush jacaranda trees and Pacific coastline, no people"
    },
    {
        "filename": "brand_real_producers_gold_crest.jpg",
        "aspect_ratio": "1:1",
        "prompt": "Embossed gold foil architectural publisher seal on deep navy cotton archival paper, macro editorial detail, luxury print medallion"
    },
    {
        "filename": "feature_hotel_del_aerial_view.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Stunning aerial architectural photograph of the historic Victorian Hotel del Coronado and white sandy beach at golden hour, Pacific ocean surf, no people"
    },
    {
        "filename": "postcard_front_coastal_villa.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Ultra-luxury modern La Jolla coastal villa with infinity pool overlooking the Pacific Ocean at golden hour, no people"
    },
    {
        "filename": "postcard_back_agent_headshot.jpg",
        "aspect_ratio": "1:1",
        "prompt": "Modern luxury architectural brand emblem seal with gold foil monogram on deep navy cardstock, macro photography, no people"
    },
    {
        "filename": "profile_marcus_vance_portrait.jpg",
        "aspect_ratio": "3:4",
        "prompt": "Architectural studio drawing table with drafted coastal villa elevations, mechanical graphite pencils, brass rulers, and miniature basswood scale model, soft natural studio light, no people"
    },
    {
        "filename": "profile_marcus_vance_blueprints.jpg",
        "aspect_ratio": "1:1",
        "prompt": "Architectural blueprint drafting board with rolled blueprints, technical drafting compass, and scale ruler in sunlit studio, no people"
    },
    {
        "filename": "profile_marcus_vance_encinitas_house.jpg",
        "aspect_ratio": "4:3",
        "prompt": "Modern Encinitas coastal architectural home with glass cantilevered balconies, native landscaping, and ocean breeze, no people"
    },
    {
        "filename": "profile_elena_rostova_portrait.jpg",
        "aspect_ratio": "3:4",
        "prompt": "State-of-the-art biotechnology laboratory architecture with clean glass walls, stainless steel research consoles, and Torrey Pines ocean view in background, no people"
    },
    {
        "filename": "profile_elena_rostova_cleanroom.jpg",
        "aspect_ratio": "4:3",
        "prompt": "High-tech pristine cleanroom research laboratory interior with robotic instrumentation, glowing blue LEDs, and glass partitions, no people"
    }
]

def generate_and_save(item, index, total):
    filename = item["filename"]
    out_path = os.path.join(OUTPUT_DIR, filename)

    print(f"[{index+1}/{total}] Queueing Fal Flux Pro Ultra: {filename} ({item['aspect_ratio']})...")
    payload = json.dumps({
        "prompt": item["prompt"],
        "aspect_ratio": item["aspect_ratio"],
        "raw": True,
        "output_format": "jpeg"
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://queue.fal.run/fal-ai/flux-pro/v1.1-ultra",
        data=payload,
        headers={
            "Authorization": f"Key {FAL_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "AxiosMediaGroup/1.0"
        }
    )

    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            status_url = data.get("status_url")
            response_url = data.get("response_url")

        if not status_url or not response_url:
            print(f"[{index+1}/{total}] ERROR: Invalid queue response for {filename}")
            return False

        # Poll for completion
        for _ in range(60):
            time.sleep(2)
            st_req = urllib.request.Request(status_url, headers={"Authorization": f"Key {FAL_KEY}"})
            with urllib.request.urlopen(st_req, timeout=30) as st_resp:
                st_data = json.loads(st_resp.read().decode("utf-8"))
                status = st_data.get("status")
                if status == "COMPLETED":
                    break
                elif status in ("FAILED", "ERROR"):
                    print(f"[{index+1}/{total}] Generation failed for {filename}")
                    return False

        # Retrieve result
        res_req = urllib.request.Request(response_url, headers={"Authorization": f"Key {FAL_KEY}"})
        with urllib.request.urlopen(res_req, timeout=30) as res_resp:
            res_data = json.loads(res_resp.read().decode("utf-8"))
            img_url = res_data["images"][0]["url"]
            img_w = res_data["images"][0].get("width")
            img_h = res_data["images"][0].get("height")

        # Download image bytes
        print(f"[{index+1}/{total}] Downloading {img_w}x{img_h} master -> {filename}...")
        img_req = urllib.request.Request(img_url, headers={"User-Agent": "AxiosMediaGroup/1.0"})
        with urllib.request.urlopen(img_req, timeout=60) as img_resp:
            img_data = img_resp.read()
            with open(out_path, "wb") as f:
                f.write(img_data)

        print(f"[{index+1}/{total}] SUCCESS: {filename} ({img_w}x{img_h}, {len(img_data)/1024:.1f} KB)")
        return True

    except Exception as e:
        print(f"[{index+1}/{total}] EXCEPTION for {filename}: {e}")
        return False

def main():
    total = len(IMAGE_DEFINITIONS)
    print(f"Starting FAL FLUX PRO ULTRA generation for {total} images (Zero People, 300 DPI Raw Quality)...")
    
    # Run with 4 workers in parallel for rapid generation
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = {
            executor.submit(generate_and_save, item, i, total): item["filename"]
            for i, item in enumerate(IMAGE_DEFINITIONS)
        }
        for future in concurrent.futures.as_completed(futures):
            fname = futures[future]
            try:
                res = future.result()
            except Exception as exc:
                print(f"Worker generated an exception for {fname}: {exc}")

    print("All Flux Pro Ultra generations finished!")

if __name__ == "__main__":
    main()
