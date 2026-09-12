import os
import json
import urllib.request
import urllib.error
import concurrent.futures
import time

FAL_KEY = "be48e0ce-47ed-4476-b951-ac2ad6110d53:d9c37891a349dc81340bac0bd363aa91"
OUTPUT_DIR = r"c:\Users\smi\Client\Local_Umbrella_Media\assets\images\magazine"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 100% Architecture, Landscape, Interior Design, Real Estate - ZERO PEOPLE
IMAGE_DEFINITIONS = [
    {
        "filename": "page01_cover_katie_courtney.jpg",
        "size": "portrait_4_3",
        "prompt": "Architectural Digest cover photograph, breathtaking modern coastal architectural masterpiece estate in La Jolla cantilevered over Pacific ocean bluffs, floor-to-ceiling glass walls, sunset golden hour reflections on infinity pool, 300 DPI print quality, ultra-sharp architectural photography, no people, completely empty"
    },
    {
        "filename": "page02_ad_jumbo_lending_estate.jpg",
        "size": "landscape_4_3",
        "prompt": "Ultra-luxury modern architectural estate in Rancho Santa Fe with travertine motor court, glowing glass facade, infinity pool at twilight, 300 DPI print quality, luxury real estate photography, no people"
    },
    {
        "filename": "page03_publisher_brad_weber.jpg",
        "size": "square_hd",
        "prompt": "High-end editorial still life of an architect and publisher executive drafting desk with heavy architectural vellum blueprints, solid brass fountain pen, Leica camera, warm oak tabletop, soft morning sunlight, no people"
    },
    {
        "filename": "page04_toc_architectural_staircase.jpg",
        "size": "square_hd",
        "prompt": "Sculptural spiral staircase in a luxury modern La Jolla architectural residence with white plaster, natural white oak treads, warm morning sunlight streaming through high glass windows, no people"
    },
    {
        "filename": "page05_directory_boardroom_header.jpg",
        "size": "landscape_4_3",
        "prompt": "Ultra-sleek executive conference boardroom overlooking San Diego harbor skyline with Calacatta marble conference table, architectural building models, morning sunlight, no people"
    },
    {
        "filename": "page06_rising_star_alexa_portrait.jpg",
        "size": "portrait_4_3",
        "prompt": "Modern Del Mar coastal residence exterior with lush courtyard, olive tree in stone planter, board-formed concrete, warm cedar siding, bright natural California sunlight, architectural photography, no people"
    },
    {
        "filename": "page07_rising_star_patio_walkway.jpg",
        "size": "landscape_4_3",
        "prompt": "Sun-drenched outdoor terrace lounge in Del Mar with limestone pavers, modern minimalist fire pit, panoramic Pacific ocean views, architectural luxury, no people"
    },
    {
        "filename": "page08_cover_story_glass_pavilion.jpg",
        "size": "portrait_4_3",
        "prompt": "Breathtaking architectural photograph of a minimalist glass and steel pavilion cantilevered over La Jolla ocean bluffs at dusk, warm interior glow, Pacific waves crashing below, Architectural Digest style, no people"
    },
    {
        "filename": "page09_kitchen_calacatta_marble.jpg",
        "size": "square_hd",
        "prompt": "Gourmet luxury kitchen with book-matched Calacatta marble island, minimalist fluted oak cabinetry, brass designer faucet, fresh eucalyptus in ceramic vase, architectural real estate photography, no people"
    },
    {
        "filename": "page10_strategy_session_tablet.jpg",
        "size": "landscape_4_3",
        "prompt": "Architectural design atelier studio table with material sample trays of Calacatta marble, brushed brass, fluted glass, large iPad Pro displaying 3D CAD coastal villa model, no people"
    },
    {
        "filename": "page11_mentorship_mastermind_brunch.jpg",
        "size": "landscape_4_3",
        "prompt": "Oceanfront La Jolla coastal garden terrace overlooking the Pacific with teak lounge seating, manicured coastal succulents, clear ocean horizon at midday, no people"
    },
    {
        "filename": "page12_title_officer_portrait.jpg",
        "size": "portrait_4_3",
        "prompt": "Corner executive office in downtown San Diego with floor-to-ceiling glass windows overlooking the marina and Coronado bridge, leather armchairs, walnut desk, no people"
    },
    {
        "filename": "page13_staging_boucle_living_room.jpg",
        "size": "landscape_4_3",
        "prompt": "Immaculately staged luxury living room with cream boucle curved sofa, organic travertine coffee table, large abstract canvas art, floor-to-ceiling windows with Pacific ocean view, no people"
    },
    {
        "filename": "page14_gala_sunset_toast.jpg",
        "size": "landscape_4_3",
        "prompt": "Atmospheric sunset view of Hotel del Coronado beachfront lawn illuminated with glowing festoon lights, elegant banquet tables with floral centerpieces and champagne glasses, Pacific surf at dusk, no people"
    },
    {
        "filename": "page15_gala_teams_candids.jpg",
        "size": "landscape_4_3",
        "prompt": "Close-up luxury still life of crystal champagne flutes and floral arrangement on a marble outdoor terrace railing overlooking the Pacific ocean at golden hour sunset, no people"
    },
    {
        "filename": "page15_gala_lenders_reception.jpg",
        "size": "landscape_4_3",
        "prompt": "Elegant glass crystal leadership awards and engraved silver trophies resting on a black velvet plinth with white orchids in an upscale ballroom foyer, no people"
    },
    {
        "filename": "page15_gala_vip_terrace.jpg",
        "size": "landscape_4_3",
        "prompt": "Modern outdoor gas fire table lounge on an oceanfront terrace at twilight with glowing blue glass stones and Pacific ocean backdrop, no people"
    },
    {
        "filename": "page16_ad_back_cover_coronado_twilight.jpg",
        "size": "portrait_4_3",
        "prompt": "Epic twilight panoramic skyline of downtown San Diego illuminated against deep indigo evening sky with Coronado bridge and smooth water reflections, 300 DPI print quality, no people"
    },
    {
        "filename": "profile_marcus_vance_portrait.jpg",
        "size": "portrait_4_3",
        "prompt": "Architectural studio drawing table with drafted coastal villa elevations, mechanical graphite pencils, brass rulers, and miniature basswood scale model, soft natural studio light, no people"
    },
    {
        "filename": "profile_elena_rostova_portrait.jpg",
        "size": "portrait_4_3",
        "prompt": "State-of-the-art biotechnology laboratory architecture with clean glass walls, stainless steel research consoles, and Torrey Pines ocean view in background, no people"
    },
    {
        "filename": "postcard_front_coastal_villa.jpg",
        "size": "landscape_4_3",
        "prompt": "Ultra-luxury modern La Jolla coastal villa with infinity pool overlooking the Pacific Ocean at golden hour, no people"
    },
    {
        "filename": "postcard_back_agent_headshot.jpg",
        "size": "square_hd",
        "prompt": "Modern luxury architectural brand emblem seal with gold foil monogram on deep navy cardstock, macro photography, no people"
    }
]

def generate_and_save(item, index, total):
    filename = item["filename"]
    out_path = os.path.join(OUTPUT_DIR, filename)

    print(f"[{index+1}/{total}] Requesting fal.ai Flux: {filename} ({item['size']})...")
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
        with urllib.request.urlopen(req, timeout=45) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            img_url = data["images"][0]["url"]
            print(f"[{index+1}/{total}] Downloading {img_url[:40]}... -> {filename}")
            
            # Download image bytes
            img_req = urllib.request.Request(img_url, headers={"User-Agent": "AxiosMediaGroup/1.0"})
            with urllib.request.urlopen(img_req, timeout=45) as img_resp:
                img_data = img_resp.read()
                with open(out_path, "wb") as f:
                    f.write(img_data)
            print(f"[{index+1}/{total}] SUCCESS: Saved {filename} ({len(img_data)} bytes)")
            return True
    except Exception as e:
        print(f"[{index+1}/{total}] ERROR generating {filename}: {e}")
        return False

def main():
    print(f"Starting batch generation of {len(IMAGE_DEFINITIONS)} architectural/landscape magazine images via fal.ai (ZERO PEOPLE)...")
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
