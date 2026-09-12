/**
 * Sample Profiles & Editorial Content for The Faces of San Diego & Local Umbrella Media
 * Synthesizing authentic California community lifestyle with Axios Smart Brevity.
 */

const SAMPLE_PROFILES = [
  {
    id: "real-producers-katie-courtney",
    publisherName: "SAN DIEGO REAL PRODUCERS",
    publisherLogoIcon: "⚜",
    publisherSlogan: "Connecting SD's Elite Real Estate Leaders.",
    publicationTitle: "SAN DIEGO REAL PRODUCERS",
    mastheadLogo: "REAL PRODUCERS",
    editionSubtitle: "CONNECTING. ELEVATING. INSPIRING. // TOP 500 AGENTS",
    categoryTag: "COVER STORY // TOP PRODUCER SPOTLIGHT",
    issueTag: "MAY 2026 • VOLUME 4, ISSUE 5",
    issueDate: "MAY 2026",
    heroImage: "assets/images/magazine/page01_cover_katie_courtney.jpg",
    personName: "KATIE NELSON & COURTNEY ROTH",
    personRole: "FOUNDERS & TOP PRODUCING PARTNERS // COMPASS LUXURY",
    tagline: "The Power of Partnership",
    subheadline: "How two industry trailblazers merged forces to close over $120M in coastal sales while mentoring the next generation of agents.",
    
    // Cover highlights (Inviting & High-Conversion Copy)
    leftTeasers: [
      { friendlyKicker: "Inside the Cover Story:", title: "The Power of Synergy", desc: "How combining independent forces tripled their referral network.", quote: "Collaboration over competition always." },
      { friendlyKicker: "Coastal Market Pulse:", title: "2026 Luxury Forecast", desc: "Exclusive real estate insights for La Jolla, Del Mar, and Rancho Santa Fe." },
      { friendlyKicker: "Culture & Mentorship:", title: "Leading with Heart", desc: "Building a supportive team environment where every agent thrives." }
    ],
    rightTeasers: [
      { friendlyKicker: "Rising Star:", kicker: "RISING STAR", title: "ALEXA MARTINEZ'S $18M ROOKIE YEAR", desc: "From newcomer to powerhouse advisor.", date: "PAGE 14" },
      { friendlyKicker: "Trusted Partner:", kicker: "PREFERRED PARTNER", title: "FIRST AMERICAN TITLE: SEAMLESS CLOSINGS", desc: "Precision escrow for high-value coastal deals.", date: "PAGE 22" },
      { friendlyKicker: "Community Gala:", kicker: "EVENT RECAP", title: "SPRING TOP 500 GALA AT THE DEL", desc: "Celebrating 10 years of elevating San Diego.", date: "PAGE 28" }
    ],
    
    // Bottom Sponsor Banner
    sponsor: {
      tag: "Official Real Producers Community Partner",
      name: "SAN DIEGO REAL PRODUCERS",
      agent: "Presented by Guaranteed Rate & First American Title",
      phone: "619.820.5400",
      web: "SDRealProducers.com",
      license: "INVITATION-ONLY PUBLICATION FOR TOP 500 REALTORS®"
    },
    
    // Multi-Page Real Producers Editorial
    editorial: {
      headline: "The Power of Partnership: Katie Nelson & Courtney Roth",
      deck: "Two of San Diego's most respected luxury agents joined forces to build a client-centric powerhouse rooted in radical transparency, deep local knowledge, and an unwavering commitment to elevating the industry.",
      pullQuote: "“In luxury real estate, transactions come and go—but when you build your business around genuine human connection and relentless collaboration, you create a legacy that outlasts any market shift.”",
      photographer: "Photography by Studio Del Mar // La Jolla Cove Estate",
      readTime: "4-MIN READ // COVER FEATURE",
      
      smartBrevity: {
        bigPicture: "Individually, Katie Nelson and Courtney Roth were already consistent Top 1% producers in San Diego County. In 2024, they made the bold decision to merge their independent practices into a unified luxury team under Compass, creating a collaborative client experience that closed $124M in 2025 alone.",
        whyItMatters: "In an industry often characterized by fierce solo rivalry, Nelson and Roth represent a modern paradigm shift toward team synergy, shared client care, and elevating peer standards across Southern California.",
        byTheNumbers: [
          { value: "$124M+", label: "Total Career Volume Closed in 2025" },
          { value: "48", label: "Average Days on Market for Luxury Listings" },
          { value: "94%", label: "Repeat & Referral Client Ratio" },
          { value: "Top 0.5%", label: "Ranked among all San Diego County Agents" }
        ],
        theBackstory: "Katie's background in negotiation and contract law paired seamlessly with Courtney's background in architectural staging, digital marketing, and high-net-worth relocation. By uniting their distinct skill sets, they created a full-service advisory model where clients receive two senior principals on every transaction.",
        inTheirWords: [
          { quote: "We realized that our clients didn't just want an agent; they wanted an entire advisory ecosystem. Partnering allowed us to give 100% of our energy to every escrow without sacrificing our families.", author: "Katie Nelson" },
          { quote: "Real Producers is about celebrating the people behind the numbers. When top agents collaborate and share best practices, the entire San Diego community wins.", author: "Courtney Roth" }
        ],
        betweenTheLines: "Beyond sales, Nelson and Roth host monthly mastermind sessions for emerging female agents and actively fund local youth mentorship programs across North County."
      },
      
      contactCard: {
        address: "7825 Fay Avenue, Suite 200, La Jolla, CA 92037",
        phone: "(619) 820-5400",
        email: "team@nelsonrothluxury.com",
        web: "www.NelsonRothLuxury.com",
        instagram: "@NelsonRothRealEstate"
      }
    },
    
    // Full 16-Page Publication Data with 30 Distinct Image Slots
    fullMagazinePages: [
      {
        pageNumber: 1,
        pageType: "cover",
        title: "Front Cover // Real Producers San Diego",
        subtitle: "Katie Nelson & Courtney Roth",
        imageSlot: "cover-hero",
        imagePrompt: "High-end luxury editorial portrait of two successful female real estate partners in chic tailored designer blazers, standing on a sunlit modern La Jolla coastal terrace with ocean view, cinematic lighting, 8k, Architectural Digest cover quality",
        imageUrl: "assets/images/magazine/page01_cover_katie_courtney.jpg"
      },
      {
        pageNumber: 2,
        pageType: "ad-full",
        sponsorName: "GUARANTEED RATE LUXURY LENDING",
        adHeadline: "Fast Closings. Jumbo Loan Specialists. Local Decisions.",
        adBody: "Trusted by San Diego's Top 500 Realtors for over 15 years. Specializing in $2M–$15M coastal home financing with 14-day closing guarantees.",
        adPhone: "858.755.9800",
        adWeb: "Rate.com/SanDiegoLuxury",
        adBgColor: "#0B1B3D",
        imageSlot: "ad-hero",
        imagePrompt: "Ultra luxury modern architectural estate in Rancho Santa Fe with infinity pool at twilight, warm glowing interior lights, high-end real estate photography",
        imageUrl: "assets/images/magazine/page02_ad_jumbo_lending_estate.jpg"
      },
      {
        pageNumber: 3,
        pageType: "publishers-note",
        title: "Publisher's Note // Welcome to the May 2026 Issue",
        publisherName: "Brad Weber",
        publisherTitle: "Publisher & Founder, Local Umbrella Media / Real Producers SD",
        imageSlot: "publisher-headshot",
        imagePrompt: "Warm professional portrait of a charismatic magazine publisher in his 40s in a modern executive media office in San Diego",
        imageUrl: "assets/images/magazine/page03_publisher_brad_weber.jpg",
        letterBody: [
          "Welcome to our annual Leadership & Collaboration issue! When we launched Real Producers in San Diego, our mission was simple: connect, elevate, and inspire the top 500 agents and industry partners who drive our regional economy.",
          "This month, we are thrilled to feature Katie Nelson and Courtney Roth on our cover. Their story of joining forces under Compass is a masterclass in how synergy beats competition. I encourage every reader to study their collaborative framework on Page 8.",
          "A special thank you to our Preferred Partners who make this publication possible. When you need a lender, title officer, or stager, look to our directory on Page 4—they are the best of the best."
        ],
        mastheadStaff: [
          { role: "Editor-in-Chief", name: "Rachel Adams" },
          { role: "Lead Photographer", name: "Thom Vollenweider" },
          { role: "Art Director", name: "Marcus Rivera" },
          { role: "Director of Partner Relations", name: "David Vance" }
        ]
      },
      {
        pageNumber: 4,
        pageType: "toc",
        title: "In This Issue // Table of Contents",
        imageSlot: "toc-feature-thumb",
        imagePrompt: "Sleek architectural details of a luxury La Jolla home staircase with natural sunlight",
        imageUrl: "assets/images/magazine/page04_toc_architectural_staircase.jpg",
        tocItems: [
          { page: "03", title: "Publisher's Letter", desc: "Why collaboration is the new currency in luxury real estate." },
          { page: "04", title: "Preferred Partners Directory", desc: "The vetted list of lenders, title companies, and contractors." },
          { page: "06", title: "Rising Star Spotlight", desc: "Alexa Martinez's explosive $18M rookie year in North County." },
          { page: "08", title: "Cover Feature: Katie Nelson & Courtney Roth", desc: "The Power of Partnership in Coastal Luxury." },
          { page: "12", title: "Partner Spotlight: First American Title", desc: "Pioneering digital escrow security for multi-million dollar closings." },
          { page: "14", title: "Event Recap: Top 500 Gala at Hotel Del", desc: "Highlights and photo gallery from our annual spring gathering." }
        ]
      },
      {
        pageNumber: 5,
        pageType: "partners-directory",
        title: "Preferred Partners Directory",
        subtitle: "Vetted Industry Partners Serving San Diego's Top 500 Agents",
        imageSlot: "directory-banner",
        imagePrompt: "Modern executive boardroom meeting overlooking San Diego bay with coffee and financial reports",
        imageUrl: "assets/images/magazine/page05_directory_boardroom_header.jpg",
        categories: [
          {
            cat: "JUMBO LENDING & PRIVATE BANKING",
            items: [
              { name: "Guaranteed Rate — Luxury Division", phone: "858.755.9800", web: "Rate.com/SD" },
              { name: "First Republic Private Wealth", phone: "858.490.2240", web: "FirstRepublic.com" }
            ]
          },
          {
            cat: "TITLE & ESCROW SERVICES",
            items: [
              { name: "First American Title Coastal", phone: "619.555.0192", web: "FirstAmSD.com" },
              { name: "Chicago Title Luxury Group", phone: "858.555.0144", web: "ChicagoTitleSD.com" }
            ]
          },
          {
            cat: "HOME STAGING & ARCHITECTURAL MEDIA",
            items: [
              { name: "Pacific Staging & Design", phone: "619.820.5400", web: "PacificStagingSD.com" },
              { name: "Studio Del Mar Photography", phone: "858.490.8812", web: "StudioDelMar.com" }
            ]
          }
        ]
      },
      {
        pageNumber: 6,
        pageType: "rising-star-1",
        title: "Rising Star: Alexa Martinez",
        kicker: "RISING STAR SPOTLIGHT",
        subtitle: "Redefining the Coastal Rookie Year",
        imageSlot: "rising-star-portrait",
        imagePrompt: "Editorial lifestyle portrait of an energetic 28-year old Latina real estate agent in stylish linen blazer standing in front of a modern Del Mar beachfront home, bright natural daylight",
        imageUrl: "assets/images/magazine/page06_rising_star_alexa_portrait.jpg",
        body: "In just her first 14 months at Pacific Sotheby's, Alexa Martinez closed 9 transactions totaling over $18.4M. Her secret? Hyper-targeted neighborhood newsletters and organic social storytelling."
      },
      {
        pageNumber: 7,
        pageType: "rising-star-2",
        title: "Tactical Blueprint: Alexa Martinez",
        kicker: "AGENT ADVICE",
        subtitle: "3 Rules for Young Agents Entering the $2M+ Market",
        imageSlot: "rising-star-action",
        imagePrompt: "Young female realtor walking with happy luxury homebuyers on a sunny California patio, candid, professional, editorial",
        imageUrl: "assets/images/magazine/page07_rising_star_patio_walkway.jpg",
        body: "1. Know the zoning and coastal bluff restrictions better than the inspectors. 2. Show up to community council meetings. 3. Always answer your phone before 8:00 AM."
      },
      {
        pageNumber: 8,
        pageType: "cover-story-1",
        title: "The Power of Partnership",
        subtitle: "The Power of Partnership // Katie & Courtney",
        imageSlot: "cover-story-hero",
        imagePrompt: "Full page cinematic portrait of two female luxury real estate partners standing confidently in an ultra modern glass pavilion overlooking the Pacific ocean in La Jolla",
        imageUrl: "assets/images/magazine/page08_cover_story_glass_pavilion.jpg"
      },
      {
        pageNumber: 9,
        pageType: "cover-story-2",
        title: "Elevating San Diego's Luxury Standard",
        subtitle: "The Big Picture & Why It Matters",
        imageSlot: "cover-story-inset",
        imagePrompt: "Close-up detail of architectural floor plans and luxury keys on marble kitchen island",
        imageUrl: "assets/images/magazine/page09_kitchen_calacatta_marble.jpg"
      },
      {
        pageNumber: 10,
        pageType: "cover-story-3",
        title: "Inside the Operational Framework",
        subtitle: "$124M Volume & Collaborative Framework",
        imageSlot: "cover-story-team",
        imagePrompt: "Collaborative strategy session of two female real estate founders reviewing digital tablet in a sun-drenched coastal design office",
        imageUrl: "assets/images/magazine/page10_strategy_session_tablet.jpg"
      },
      {
        pageNumber: 11,
        pageType: "cover-story-4",
        title: "Leadership, Mentorship & Giving Back",
        subtitle: "Advisory Playbook & Office Details",
        imageSlot: "cover-story-mentorship",
        imagePrompt: "Outdoor patio brunch mastermind with 5 female professionals in La Jolla discussing business with ocean views",
        imageUrl: "assets/images/magazine/page11_mentorship_mastermind_brunch.jpg"
      },
      {
        pageNumber: 12,
        pageType: "partner-feature",
        title: "Partner Spotlight: First American Title",
        subtitle: "Securing High-Stakes Coastal Transactions with Modern Escrow Tech",
        imageSlot: "title-officer-portrait",
        imagePrompt: "Professional portrait of senior title officer in luxury office in downtown San Diego with legal deeds and escrow seals",
        imageUrl: "assets/images/magazine/page12_title_officer_portrait.jpg"
      },
      {
        pageNumber: 13,
        pageType: "ad-half-half",
        title: "Community Preferred Partners Showcase",
        subtitle: "Local Staging & Architectural Media Group",
        imageSlot: "staging-photo-1",
        imagePrompt: "Immaculately staged modern luxury living room with white boucle sofas, organic wood coffee table, and floor-to-ceiling windows",
        imageUrl: "assets/images/magazine/page13_staging_boucle_living_room.jpg"
      },
      {
        pageNumber: 14,
        pageType: "event-gallery-1",
        title: "Spring Top 500 Gala at Hotel del Coronado",
        subtitle: "Over 350 top agents gathered for an evening of celebration and philanthropy.",
        imageSlot: "gala-photo-1",
        imagePrompt: "Glamorous evening gala reception on the lawn of Hotel del Coronado with strings of fairy lights, attendees in cocktail attire raising champagne glasses at sunset",
        imageUrl: "assets/images/magazine/page14_gala_sunset_toast.jpg",
        secondaryImageUrl: "assets/images/magazine/page14_gala_awards_stage.jpg"
      },
      {
        pageNumber: 15,
        pageType: "event-gallery-2",
        title: "Gala Photo Gallery & Social Candids",
        subtitle: "Honoring our 2026 Community Champion nominees.",
        imageSlot: "gala-photo-2",
        imagePrompt: "Candid shot of top real estate agents smiling and laughing together at an outdoor evening banquet table in San Diego",
        imageUrl: "assets/images/magazine/page15_gala_teams_candids.jpg",
        secondaryImageUrl: "assets/images/magazine/page15_gala_lenders_reception.jpg",
        tertiaryImageUrl: "assets/images/magazine/page15_gala_charity_auction.jpg",
        quaternaryImageUrl: "assets/images/magazine/page15_gala_vip_terrace.jpg"
      },
      {
        pageNumber: 16,
        pageType: "back-cover",
        title: "Protecting San Diego's Finest Estates",
        subtitle: "The Trusted Name in Southern California Escrow",
        imageSlot: "back-cover-ad",
        imagePrompt: "Sunset silhouette of San Diego skyline with Coronado bridge and golden coastal reflections",
        imageUrl: "assets/images/magazine/page16_back_cover_skyline_bridge.jpg"
      }
    ],
    
    // Direct Mail Postcard
    postcard: {
      headline: "Thinking of Selling Your Coastal San Diego Home?",
      subhead: "Work directly with San Diego Real Producers' featured cover agents.",
      frontImage: "assets/images/magazine/postcard_front_coastal_villa.jpg",
      backImage: "assets/images/magazine/postcard_back_agent_headshot.jpg",
      points: [
        "Private Off-Market Luxury Buyer Match Network",
        "Full Architectural Staging & High-End Media Production",
        "Direct Outreach to Top 500 Coastal Broker Network"
      ],
      cta: "Request Your Private Equity Valuation",
      promoCode: "REALPRODUCERS26"
    }
  },
  {
    id: "marcus-vance",
    publisherName: "LOCAL UMBRELLA MEDIA",
    publisherLogoIcon: "☂",
    publisherSlogan: "We've Got You Covered.",
    publicationTitle: "THE FACES OF SAN DIEGO",
    mastheadLogo: "FACES OF SAN DIEGO",
    editionSubtitle: "COASTAL ARCHITECTURE & DESIGN // 2026 EDITION",
    categoryTag: "COASTAL ARCHITECTURE & DESIGN",
    issueTag: "FALL PREVIEW // ENCINITAS & DEL MAR",
    issueDate: "SEPTEMBER / OCTOBER 2026",
    heroImage: "assets/images/magazine/profile_marcus_vance_portrait.jpg",
    personName: "MARCUS VANCE",
    personRole: "FOUNDING PRINCIPAL, PACIFIC HORIZON ARCHITECTURE",
    tagline: "Building with the Tide",
    subheadline: "Sustainable coastal design rooted in San Diego's natural topography and light.",
    
    // Cover highlights
    leftTeasers: [
      { title: "Living With the Ocean", desc: "Designing for coastal resilience & zero net energy." },
      { title: "Material Honesty", desc: "Local cedar, rammed earth, and passive sea-breeze airflow." },
      { title: "Community First", desc: "Why great architecture belongs to the neighborhood." }
    ],
    rightTeasers: [
      { kicker: "THE BIG SHIFT", title: "SAN DIEGO'S SUSTAINABLE LUXURY BOOM", date: "COASTAL REPORT 2026" },
      { kicker: "INSIDE LOOK", title: "3 ICONIC DEL MAR RESIDENCES REDEFINED", date: "EXCLUSIVE FEATURE" }
    ],
    
    // Bottom Sponsor Banner
    sponsor: {
      tag: "Sponsored by First Republic Wealth Advisors",
      name: "PACIFIC HORIZON ARCHITECTURE",
      agent: "Marcus Vance, AIA",
      phone: "858.490.2240",
      web: "PacificHorizonSD.com",
      license: "CA LIC # C-38291"
    },
    
    // 2-Page Spread Editorial (Axios Smart Brevity)
    editorial: {
      headline: "How Marcus Vance is Reimagining the San Diego Coastline",
      deck: "Pacific Horizon Architecture is replacing sterile McMansions with breathing, bio-climatic homes that harmonize with ocean bluffs.",
      pullQuote: "“Architecture isn't just about shelter—in San Diego, it's about framing the horizon so your home becomes part of the Pacific itself.”",
      photographer: "Photo by Elena Rostova // Encinitas Studio",
      readTime: "2-MIN READ",
      
      smartBrevity: {
        bigPicture: "For decades, Southern California coastal architecture prioritized maximum square footage over environmental harmony. Architect Marcus Vance is spearheading a radical return to biophilic, climate-adaptive homes tailored to San Diego's microclimates.",
        whyItMatters: "With sea levels and coastal storms shifting bluff safety requirements across Del Mar, Encinitas, and La Jolla, Vance’s structural innovations prove that luxury and ecological preservation can thrive together.",
        byTheNumbers: [
          { value: "100%", label: "Net-zero energy certified builds" },
          { value: "42+", label: "Coastal homes completed in San Diego County" },
          { value: "$65M+", label: "Property value created across coastal communities" },
          { value: "18 Yrs", label: "Dedicated to hyper-local architecture" }
        ],
        theBackstory: "After training in Copenhagen and Tokyo, Vance returned home to San Diego in 2012 with a mission: replace boxy, heat-trapping stucco mansions with light-filled sanctuaries built from reclaimed cedar, marine-grade timber, and natural glass ventilation corridors.",
        inTheirWords: [
          { quote: "Every home should know where the sun sets and where the ocean breeze enters without touching the thermostat.", author: "Marcus Vance" }
        ],
        betweenTheLines: "Vance's firm now works with local planning boards to pioneer bluff-safe foundation anchors that prevent erosion while preserving native cliffside flora."
      },
      
      contactCard: {
        address: "542 First Street, Suite 200, Encinitas, CA 92024",
        phone: "(858) 490-2240",
        email: "studio@pacifichorizonsd.com",
        web: "www.pacifichorizonsd.com",
        instagram: "@PacificHorizonArch"
      }
    },
    
    // Direct Mail Postcard (6x9)
    postcard: {
      headline: "Is Your Coastal Home Ready for the Next Century?",
      subhead: "Award-winning architectural consultations for North County homeowners.",
      frontImage: "assets/images/magazine/profile_marcus_vance_encinitas_house.jpg",
      backImage: "assets/images/magazine/profile_marcus_vance_blueprints.jpg",
      points: [
        "Complimentary On-Site Bluff & Topography Assessment",
        "Passive Solar & Zero-Net Energy Retrofit Roadmap",
        "Full Permit Concierge for Coastal Commission Compliance"
      ],
      cta: "Schedule Your Private Discovery Session",
      promoCode: "LOCALUMBRELLA26"
    }
  },

  {
    id: "women-venture-summit",
    publisherName: "LOCAL UMBRELLA MEDIA",
    publisherLogoIcon: "☂",
    publisherSlogan: "We've Got You Covered.",
    publicationTitle: "THE FACES OF SAN DIEGO: WOMEN IN BUSINESS",
    mastheadLogo: "FACES OF SAN DIEGO",
    editionSubtitle: "WOMEN IN BUSINESS // 2026 EDITION",
    categoryTag: "WOMEN IN BUSINESS // VENTURE SUMMIT SPECIAL",
    issueTag: "FALL 2026 • ANNUAL LEADERSHIP ISSUE",
    issueDate: "NOVEMBER 2–5, 2026",
    heroImage: "assets/images/magazine/cover_faces_women_venture_summit.png",
    personName: "WOMEN IN BUSINESS",
    personRole: "THE WOMEN BUILDING SAN DIEGO'S NEXT ECONOMY",
    tagline: "Ideas. Capital. Community.",
    subheadline: "A Stronger San Diego Together: Bold founders, brighter tomorrows, and leadership that lifts us all.",
    
    leftTeasers: [
      { title: "Ideas • Capital • Community", desc: "A stronger San Diego together through collaborative venture funding." },
      { title: "Bold Founders, Brighter Tomorrows", desc: "Real stories, real regional economic impact." },
      { title: "More Women, Higher Possibilities", desc: "Leadership and mentorship that lifts the entire Southern California ecosystem." }
    ],
    rightTeasers: [
      { kicker: "KEYNOTE SUMMIT", title: "WOMEN'S VENTURE SUMMIT 2026", date: "NOV 2–5 • SAN DIEGO" },
      { kicker: "REGIONAL REPORT", title: "THE WOMEN BUILDING SAN DIEGO'S NEXT ECONOMY", date: "SPECIAL FEATURE" }
    ],
    
    sponsor: {
      tag: "Local Business Media // Partner Feature Series",
      name: "WOMEN'S VENTURE ALLIANCE",
      agent: "Keynote: Women's Venture Summit 2026",
      phone: "619.555.0192",
      web: "SDVentureSummit.com",
      license: "SAN DIEGO REGIONAL LEADERSHIP ALLIANCE"
    },
    
    editorial: {
      headline: "The Women Building San Diego's Next Economy",
      deck: "How local female founders and investors are uniting ideas, capital, and community to build a bolder San Diego.",
      pullQuote: "“When women invest in women right here in San Diego, we build sustainable wealth and generational opportunity that stays in our neighborhoods.”",
      photographer: "Photo by Thom Vollenweider // San Diego Skyline Waterfront",
      readTime: "3-MIN READ // COVER STORY",
      
      smartBrevity: {
        bigPicture: "San Diego has become a powerhouse for female-founded startups, ranking in the top 3 metros nationwide for female entrepreneurs in biotech, sustainable commerce, and venture capital.",
        whyItMatters: "Local companies with female leadership in San Diego County generate 2.4x more revenue per dollar of venture capital invested and hire 35% more local residents.",
        byTheNumbers: [
          { value: "$185M+", label: "Capital deployed to local women-led ventures in 2025" },
          { value: "1,200+", label: "Founders & executives attending Summit 2026" },
          { value: "92%", label: "Local job retention across funded startups" },
          { value: "#1", label: "Fastest-growing female founder network in Southern California" }
        ],
        theBackstory: "Launched by a coalition of five visionary executives, the Women's Venture Summit provides direct access to capital, pitch grants, and executive sponsorship.",
        inTheirWords: [
          { quote: "We don't just build companies; we build ecosystems where everyone thrives.", author: "Summit Steering Committee" }
        ],
        betweenTheLines: "The upcoming summit features $250,000 in non-dilutive founder grants presented live at the San Diego Convention Center."
      },
      
      contactCard: {
        address: "750 B Street, Suite 1400, San Diego, CA 92101",
        phone: "(619) 555-0192",
        email: "summit@sdventuresummit.com",
        web: "www.SDVentureSummit.com",
        instagram: "@SDWomenInBiz"
      }
    },
    
    postcard: {
      headline: "Join San Diego's Most Influential Women in Business",
      subhead: "Reserve your executive pass for the 2026 Women's Venture Summit.",
      frontImage: "assets/images/magazine/cover_faces_women_venture_summit.png",
      backImage: "assets/images/magazine/page11_mentorship_mastermind_brunch.jpg",
      points: [
        "Keynotes from 12 Industry Trailblazers",
        "Direct Access to Over 40 Regional Angel Syndicates",
        "$250,000 Live Founder Grant Competition"
      ],
      cta: "Reserve Your Early-Bird Pass",
      promoCode: "SUMMIT2026"
    }
  },

  {
    id: "melissa-sargent-therapy",
    publisherName: "LOCAL UMBRELLA MEDIA",
    publisherLogoIcon: "☂",
    publisherSlogan: "We've Got You Covered.",
    publicationTitle: "THE FACES OF SAN DIEGO: HEALING & COUNSELING",
    mastheadLogo: "FACES OF SAN DIEGO",
    editionSubtitle: "COMMUNITY CHAMPIONS // KUSI WINNER",
    categoryTag: "COMMUNITY CHAMPIONS // FOUNDER SPOTLIGHT",
    issueTag: "COMMUNITY SPOTLIGHT • RAMONA EDITION",
    issueDate: "ANNUAL CHAMPIONS 2026",
    heroImage: "assets/images/magazine/cover_faces_melissa_sargent_therapy.png",
    personName: "MELISSA SARGENT",
    personRole: "FOUNDER • HEART & HOOVES THERAPY • RAMONA",
    tagline: "A Heart for Healing",
    subheadline: "KUSI Community Champions Winner: How equine therapy and miniature horses bring miraculous breakthroughs to special-needs children.",
    
    leftTeasers: [
      { title: "KUSI Community Champion", desc: "Honoring extraordinary grassroots service across San Diego County." },
      { title: "Equine-Assisted Miracles", desc: "Miniature horses bringing joy and physical rehabilitation to children." },
      { title: "Rooted in Ramona", desc: "A sanctuary where patience, love, and animal companionship heal families." }
    ],
    rightTeasers: [
      { kicker: "KUSI CHAMPION", title: "MELISSA SARGENT'S HEALING JOURNEY", date: "RAMONA SPOTLIGHT" },
      { kicker: "HEALTH REPORT", title: "THE SCIENCE OF THERAPEUTIC EQUINE BONDS", date: "WELLNESS 2026" }
    ],
    
    sponsor: {
      tag: "Sponsored by Palomar Health Medical Group",
      name: "HEART & HOOVES THERAPY",
      agent: "Melissa Sargent, Founder",
      phone: "760.789.5400",
      web: "HeartAndHoovesTherapy.org",
      license: "501(c)(3) NON-PROFIT CHARITY"
    },
    
    editorial: {
      headline: "A Heart for Healing: Melissa Sargent's Miniature Therapy Champions",
      deck: "At Heart & Hooves Therapy in Ramona, gentle miniature horses and donkeys provide transformative comfort to veterans, pediatric hospital patients, and neurodivergent youth.",
      pullQuote: "“When a child who hasn’t spoken in months wraps their arms around a miniature therapy horse and whispers their first words—that is the purest medicine on earth.”",
      photographer: "Photo by Thom Vollenweider // Heart & Hooves Sanctuary, Ramona",
      readTime: "3-MIN READ",
      
      smartBrevity: {
        bigPicture: "Equine therapy is recognized globally for its neurological and emotional benefits. Melissa Sargent's non-profit brings certified miniature therapy equines directly into pediatric wards, memory care facilities, and trauma recovery centers.",
        whyItMatters: "Heart & Hooves has delivered over 1,400 therapy visits across San Diego County at zero cost to families, supported by community champions and Palomar Health.",
        byTheNumbers: [
          { value: "1,400+", label: "Free therapy visits provided to families and veterans" },
          { value: "12", label: "Specially trained miniature horses and therapy donkeys" },
          { value: "100%", label: "Volunteer-driven non-profit mission" },
          { value: "KUSI Winner", label: "Voted San Diego Community Champion of the Year" }
        ],
        theBackstory: "Founded after Melissa witnessed the calming bond between her rescue miniature horse and a child with autism, the Ramona sanctuary has expanded into an accredited therapy facility.",
        inTheirWords: [
          { quote: "Animals don't judge; they meet human hearts exactly where they are with unconditional warmth.", author: "Melissa Sargent" }
        ],
        betweenTheLines: "Palomar Health Medical Group has partnered with Heart & Hooves to sponsor weekly visits for pediatric rehabilitation patients."
      },
      
      contactCard: {
        address: "Ramona, CA 92065",
        phone: "(760) 789-5400",
        email: "info@hearthoovestherapy.org",
        web: "www.HeartAndHoovesTherapy.org",
        instagram: "@HeartAndHoovesTherapy"
      }
    },
    
    postcard: {
      headline: "Support Heart & Hooves Therapy in Ramona",
      subhead: "Help sponsor a healing visit for pediatric hospital patients across San Diego.",
      frontImage: "assets/images/magazine/cover_faces_melissa_sargent_therapy.png",
      backImage: "assets/images/magazine/profile_elena_rostova_portrait.jpg",
      points: [
        "Certified Miniature Therapy Equine Hospital Visits",
        "Sensory-Friendly Equine Sessions in Ramona",
        "100% Tax-Deductible 501(c)(3) Community Charity"
      ],
      cta: "Sponsor a Therapy Visit",
      promoCode: "HEAL2026"
    }
  },

  {
    id: "nadia-eghaneyan-nexiya",
    publisherName: "LOCAL UMBRELLA MEDIA",
    publisherLogoIcon: "☂",
    publisherSlogan: "We've Got You Covered.",
    publicationTitle: "THE FACES OF SAN DIEGO: TECH & TALENT",
    mastheadLogo: "FACES OF SAN DIEGO",
    editionSubtitle: "WOMEN IN BUSINESS // TECH & TALENT",
    categoryTag: "WOMEN IN BUSINESS // TECH LEADERSHIP",
    issueTag: "ANNUAL LEADERSHIP ISSUE • SAN DIEGO",
    issueDate: "2026 EXECUTIVE EDITION",
    heroImage: "assets/images/magazine/cover_faces_nadia_eghaneyan_nexiya.png",
    personName: "NADIA EGHANEYAN",
    personRole: "FOUNDER & CEO, NEXIYA",
    tagline: "Leading with Purpose",
    subheadline: "Building opportunity. Powering progress: How Nexiya is creating high-growth career pathways in San Diego tech.",
    
    leftTeasers: [
      { title: "Leading with Purpose", desc: "Championing equitable tech career acceleration." },
      { title: "Creating Career Pathways", desc: "Bridging the gap between premier tech enterprises and local engineering talent." },
      { title: "Shaping What's Next", desc: "San Diego's women driving innovation across Southern California." }
    ],
    rightTeasers: [
      { kicker: "EXECUTIVE SPOTLIGHT", title: "NEXIYA: POWERING PROGRESS", date: "TECH REPORT" },
      { kicker: "INDUSTRY FORECAST", title: "SAN DIEGO TECH TALENT SURGE 2026", date: "ANNUAL ANALYSIS" }
    ],
    
    sponsor: {
      tag: "Presented by Local Umbrella Media",
      name: "NEXIYA TALENT & TECHNOLOGY",
      agent: "Nadia Eghaneyan, CEO",
      phone: "858.555.0177",
      web: "Nexiya.com",
      license: "EXECUTIVE SEARCH & TECH ADVISORY"
    },
    
    editorial: {
      headline: "Leading with Purpose: Nadia Eghaneyan on Building Opportunity and Powering Progress",
      deck: "As Founder & CEO of Nexiya, Nadia Eghaneyan has built a powerhouse talent and technology advisory firm dedicated to connecting elite engineering talent with high-impact enterprises.",
      pullQuote: "“When you align personal purpose with technological innovation, you don’t just fill job roles—you ignite entire industries and build lasting prosperity.”",
      photographer: "Photo by Studio Del Mar // La Jolla Coastal Bluffs",
      readTime: "3-MIN READ",
      
      smartBrevity: {
        bigPicture: "San Diego's tech economy requires specialized, mission-aligned leadership. Nexiya bridges the talent divide by pairing forward-thinking enterprises with top-tier technical professionals.",
        whyItMatters: "Under Nadia's leadership, Nexiya has placed over 850 technical leaders across California while fostering inclusive workplace cultures.",
        byTheNumbers: [
          { value: "850+", label: "Executive & technical placements completed" },
          { value: "96%", label: "Candidate retention rate at 24 months" },
          { value: "$42M+", label: "In local annual payroll generated" },
          { value: "Top 40", label: "Recognized as Top Female Business Leader in San Diego" }
        ],
        theBackstory: "With over 15 years of industry experience, Nadia launched Nexiya to provide a more consultative, human-centric approach to technical workforce solutions.",
        inTheirWords: [
          { quote: "Our goal is simple: empower individuals to realize their potential while helping visionary companies build world-class teams.", author: "Nadia Eghaneyan" }
        ],
        betweenTheLines: "Nexiya actively mentors emerging female engineers and sponsors regional coding bootcamps across San Diego."
      },
      
      contactCard: {
        address: "4370 La Jolla Village Dr, Suite 600, San Diego, CA 92122",
        phone: "(858) 555-0177",
        email: "nadia@nexiya.com",
        web: "www.Nexiya.com",
        instagram: "@NexiyaTech"
      }
    },
    
    postcard: {
      headline: "Elevate Your Engineering & Leadership Teams",
      subhead: "Partner with San Diego's premier technology talent advisory.",
      frontImage: "assets/images/magazine/cover_faces_nadia_eghaneyan_nexiya.png",
      backImage: "assets/images/magazine/page10_strategy_session_tablet.jpg",
      points: [
        "Executive Tech Search & Embedded Recruiting Teams",
        "Diversity-Driven Talent Sourcing & Retention Strategies",
        "Trusted by Fortune 500 & High-Growth Startups"
      ],
      cta: "Schedule an Executive Consultation",
      promoCode: "NEXIYA2026"
    }
  },

  {
    id: "surinder-goode-military",
    publisherName: "LOCAL UMBRELLA MEDIA",
    publisherLogoIcon: "☂",
    publisherSlogan: "We've Got You Covered.",
    publicationTitle: "FACES OF OUR MILITARY",
    mastheadLogo: "FACES OF OUR MILITARY",
    editionSubtitle: "HONORING THOSE WHO SERVE. INSPIRING THOSE WHO FOLLOW.",
    categoryTag: "MILITARY COMMUNITY // PODCAST & ADVOCACY",
    issueTag: "FALL 2026 • SAN DIEGO EDITION",
    issueDate: "FALL 2026",
    heroImage: "assets/images/magazine/cover_faces_military_surinder_goode.png",
    personName: "SURINDER GOODE",
    personRole: "HOST • SPEAKER • STORYTELLER • MILITARY SPOUSE",
    tagline: "The Goode Show",
    subheadline: "The Unapologetic Voice of the Military-Connected Community: Real talk, raw stories, voices that matter.",
    
    leftTeasers: [
      { title: "The Goode Show", desc: "The unapologetic voice of military families, veterans, and active duty service members." },
      { title: "Real Talk. Raw Stories.", desc: "Voices that matter: tackling transition, mental health, and spouse career resilience." },
      { title: "San Diego Military Hub", desc: "Honoring our nation's largest concentration of naval and marine forces." }
    ],
    rightTeasers: [
      { kicker: "PODCAST SPOTLIGHT", title: "THE GOODE SHOW WITH SURINDER GOODE", date: "LISTEN WEEKLY" },
      { kicker: "COMMUNITY REPORT", title: "MILITARY SPOUSE CAREER RESILIENCE", date: "SPECIAL FEATURE" }
    ],
    
    sponsor: {
      tag: "Sponsored by Home Reverse & Local Umbrella Media",
      name: "HOME REVERSE // JOSHUA SCHWARTZ",
      agent: "Joshua Schwartz, Sales Manager",
      phone: "(858) 500-5685",
      web: "HomeReverse.com",
      license: "NMLS # 1711779 • MILITARY BENEFIT SPECIALISTS"
    },
    
    editorial: {
      headline: "The Goode Show: Surinder Goode on Amplifying Military Voices with Unapologetic Honesty",
      deck: "As host of The Goode Show, Surinder Goode provides an essential platform for military spouses, veterans, and active duty families to share authentic, unvarnished stories of sacrifice, triumph, and transition.",
      pullQuote: "“Military families don’t just hold down the home front—they are the bedrock of our nation’s strength. When we share our stories without filters, we create a community where nobody walks alone.”",
      photographer: "Photo by Thom Vollenweider // Coronado Naval Heritage Center",
      readTime: "3-MIN READ",
      
      smartBrevity: {
        bigPicture: "San Diego is home to over 100,000 active duty service members and their families. Surinder Goode's podcast, The Goode Show, has quickly become the region's leading platform for military culture, family advocacy, and transition stories.",
        whyItMatters: "Military spouses face frequent relocations and a 21% unemployment rate. The Goode Show highlights entrepreneurial pathways, mental health resources, and veteran support networks.",
        byTheNumbers: [
          { value: "150K+", label: "Monthly podcast downloads across global military bases" },
          { value: "85+", label: "In-depth episodes featuring military trailblazers and spouses" },
          { value: "#1", label: "Ranked military family podcast in Southern California" },
          { value: "100%", label: "Dedicated to veteran and spouse advocacy" }
        ],
        theBackstory: "Drawing on her personal journey as a dedicated military spouse and civic leader, Surinder launched the show to create a transparent, supportive space where difficult topics are discussed openly.",
        inTheirWords: [
          { quote: "Every uniform carries a story, and every spouse behind that uniform carries an equally heroic journey.", author: "Surinder Goode" }
        ],
        betweenTheLines: "The Goode Show partners with local San Diego veteran organizations and Home Reverse to host monthly community roundtable discussions.",
      },
      
      contactCard: {
        address: "Coronado & San Diego, CA",
        phone: "(858) 500-5685",
        email: "surinder@thegoodeshow.com",
        web: "www.TheGoodeShow.com",
        instagram: "@TheGoodeShowLive"
      }
    },
    
    postcard: {
      headline: "Listen to The Goode Show Podcast",
      subhead: "Real talk, raw stories, and authentic voices from our military community.",
      frontImage: "assets/images/magazine/cover_faces_military_surinder_goode.png",
      backImage: "assets/images/magazine/page16_back_cover_skyline_bridge.jpg",
      points: [
        "Weekly Interviews with Service Members & Military Spouses",
        "Veteran Career Transition Guides & Resource Directories",
        "Available on Apple Podcasts, Spotify & YouTube"
      ],
      cta: "Subscribe to The Goode Show",
      promoCode: "GOODESHOW26"
    }
  },

  {
    id: "inspired-kids-kaden",
    publisherName: "LOCAL UMBRELLA MEDIA",
    publisherLogoIcon: "☂",
    publisherSlogan: "We've Got You Covered.",
    publicationTitle: "INSPIRED KIDS: 4S RANCH",
    mastheadLogo: "INSPIRED KIDS",
    editionSubtitle: "FACES OF SAN DIEGO EDITION // YOUTH SPOTLIGHT",
    categoryTag: "INSPIRED KIDS // NEXT GENERATION LEADERS",
    issueTag: "SPRING 2026 • 4S RANCH EDITION",
    issueDate: "SPRING / SUMMER 2026",
    heroImage: "assets/images/magazine/cover_faces_inspired_kids_kaden_baksh.png",
    personName: "KADEN BAKSH",
    personRole: "AGE 9 • DESIGN39CAMPUS • 4S RANCH",
    tagline: "Inspired to Learn, Create, Dream",
    subheadline: "A New Series: Celebrating local kids, their ideas, talents, goals and stories across San Diego.",
    
    leftTeasers: [
      { title: "Inspired to Learn", desc: "Design-thinking and maker creativity at Design39Campus." },
      { title: "Inspired to Create", desc: "Building young minds through hands-on STEAM exploration and reading." },
      { title: "Inspired to Dream", desc: "Celebrating our next generation of curious thinkers and innovators." }
    ],
    rightTeasers: [
      { kicker: "YOUTH SERIES", title: "KADEN BAKSH: INSPIRED TO DREAM", date: "4S RANCH" },
      { kicker: "EDUCATION FOCUS", title: "HOW INQUIRY-BASED LEARNING EMPOWERS YOUNG MINDS", date: "DESIGN39" }
    ],
    
    sponsor: {
      tag: "Sponsored by Home Reverse // Reverse Mortgage Specialists",
      name: "HOME REVERSE // JOSH SCHWARTZ",
      agent: "Josh Schwartz • (619) 745-5677",
      phone: "619.745.5677",
      web: "HomeReverse.com",
      license: "LOCAL BUSINESSES. A BRIGHTER TOMORROW.™"
    },
    
    editorial: {
      headline: "Inspired Kids: Kaden Baksh on Curiosity, Creativity, and the Joy of Learning",
      deck: "Meet 9-year-old Kaden Baksh from 4S Ranch, whose boundless enthusiasm for reading, science experiments, and collaborative problem-solving embodies the spirit of San Diego's youth.",
      pullQuote: "“When you read books and try new things, you discover that every question is just an adventure waiting to happen.”",
      photographer: "Photo by Studio 4S Ranch // San Diego Community Park",
      readTime: "2-MIN READ",
      
      smartBrevity: {
        bigPicture: "The Inspired Kids series highlights exceptional local children who are making a positive impact in their schools, neighborhoods, and community sports leagues.",
        whyItMatters: "Encouraging curiosity and creative confidence in elementary school fosters lifelong leadership, resilience, and civic engagement.",
        byTheNumbers: [
          { value: "100+", label: "Books read in annual reading challenge" },
          { value: "Grade 4", label: "Student innovator at Design39Campus" },
          { value: "STEAM", label: "Passionate about robotics, coding, and nature" },
          { value: "#1", label: "Inaugural feature in the Inspired Kids magazine series" }
        ],
        theBackstory: "Attending Design39Campus in 4S Ranch, Kaden thrives in an environment focused on inquiry, empathy, and collaborative design challenges.",
        inTheirWords: [
          { quote: "I like building things that solve problems and making people smile.", author: "Kaden Baksh" }
        ],
        betweenTheLines: "The Inspired Kids initiative is proudly sponsored by Home Reverse to support youth literacy and educational programs across San Diego."
      },
      
      contactCard: {
        address: "4S Ranch, San Diego, CA 92127",
        phone: "(619) 745-5677",
        email: "kids@thefacesofsandiego.com",
        web: "www.TheFacesOfSanDiego.com",
        instagram: "@InspiredKidsSD"
      }
    },
    
    postcard: {
      headline: "Nominate an Inspired Kid in Your Neighborhood",
      subhead: "Know a child who inspires others through creativity, kindness, or academics?",
      frontImage: "assets/images/magazine/cover_faces_inspired_kids_kaden_baksh.png",
      backImage: "assets/images/magazine/page06_rising_star_alexa_portrait.jpg",
      points: [
        "Free Feature in The Faces of San Diego Magazine",
        "Professional Photography & Framed Keepsake Cover Proof",
        "Sponsored Youth Grant for School STEAM Programs"
      ],
      cta: "Submit a Youth Nomination",
      promoCode: "INSPIREDKIDS"
    }
  },

  {
    id: "thom-vollenweider",
    publisherName: "LOCAL UMBRELLA MEDIA",
    publisherLogoIcon: "☂",
    publisherSlogan: "We've Got You Covered.",
    publicationTitle: "THE FACES OF SAN DIEGO: VISUAL ARTS",
    mastheadLogo: "FACES OF SAN DIEGO",
    editionSubtitle: "REAL PEOPLE. REMARKABLE STORIES. OUR COMMUNITY.",
    categoryTag: "MASTER PHOTOJOURNALIST // LIFETIME ACHIEVEMENT",
    issueTag: "JUNE / JULY 2025 • SPECIAL EDITION",
    issueDate: "JUNE / JULY 2025",
    heroImage: "assets/images/magazine/cover_faces_thom_vollenweider.png",
    personName: "THOM VOLLENWEIDER",
    personRole: "PHOTOGRAPHER // A LIFETIME BEHIND THE LENS",
    tagline: "The Man Who Photographed History",
    subheadline: "More than 50 years capturing the people and moments that shaped San Diego—and the world.",
    
    leftTeasers: [
      { title: "A Lifetime Behind the Lens", desc: "Over five decades documenting world leaders, Super Bowls, and local icons." },
      { title: "Inside U.S. Navy SEAL Training", desc: "Six months embedded for LIFE magazine on the Coronado beaches." },
      { title: "The Stories Behind the Images", desc: "Unforgettable moments captured on 35mm film that generations will remember." }
    ],
    rightTeasers: [
      { kicker: "HISTORIC ACCESS", title: "FOUR PRESIDENTS. FIVE SUPER BOWLS.", date: "ICONIC ARCHIVES" },
      { kicker: "HONORS", title: "2025 CALIFORNIA PHOTOGRAPHER OF THE YEAR", date: "REPORTAGE" }
    ],
    
    sponsor: {
      tag: "Sponsored by Home Reverse // We've Got You Covered.",
      name: "HOME REVERSE // JOSH SCHWARTZ",
      agent: "Josh Schwartz, Reverse Mortgage Specialist",
      phone: "619.398.3443",
      web: "HomeReverse.com",
      license: "NMLS# 1711779 • LOCAL UMBRELLA MEDIA PARTNER"
    },
    
    editorial: {
      headline: "The Man Who Photographed History: Thom Vollenweider's Fifty Years Behind the Lens",
      deck: "From embedding with Navy SEAL BUD/S classes in Coronado to photographing four US Presidents and five Super Bowls, master photojournalist Thom Vollenweider has captured the defining moments of our era.",
      pullQuote: "“A great photograph doesn’t just record what someone looks like—it captures what they were feeling at that exact fraction of a second, forever preserving their humanity.”",
      photographer: "Portrait in Studio // Coronado Historical Archives",
      readTime: "4-MIN READ // COVER RETROSPECTIVE",
      
      smartBrevity: {
        bigPicture: "Thom Vollenweider has spent over half a century documenting history for publications like LIFE, Sports Illustrated, and TIME, while remaining deeply rooted in San Diego's cultural fabric.",
        whyItMatters: "His historic visual archives provide an irreplaceable chronicle of Coronado, the US Navy, and San Diego's evolution over fifty momentous years.",
        byTheNumbers: [
          { value: "50+ Yrs", label: "Behind the camera capturing historic moments" },
          { value: "4", label: "US Presidents documented in private and public summits" },
          { value: "5", label: "Super Bowls covered as credentialed photojournalist" },
          { value: "2025", label: "Awarded California Photographer of the Year - Reportage" }
        ],
        theBackstory: "Beginning with manual Nikon film cameras in the 1970s, Thom earned unprecedented access into elite military training and international sports arenas through technical mastery and trust.",
        inTheirWords: [
          { quote: "You have to be patient, respectful, and ready before the moment happens. Film teaches you discipline.", author: "Thom Vollenweider" }
        ],
        betweenTheLines: "Thom continues to shoot select editorial covers for Local Umbrella Media and mentor emerging documentary photographers in San Diego."
      },
      
      contactCard: {
        address: "Coronado, CA 92118",
        phone: "(619) 398-3443",
        email: "thom@vollenweiderphoto.com",
        web: "www.VollenweiderPhoto.com",
        instagram: "@ThomVollenweiderArchives"
      }
    },
    
    postcard: {
      headline: "Historic Fine Art Prints by Thom Vollenweider",
      subhead: "Limited-edition darkroom and archival prints from 50 years of San Diego history.",
      frontImage: "assets/images/magazine/cover_faces_thom_vollenweider.png",
      backImage: "assets/images/magazine/page16_back_cover_skyline_bridge.jpg",
      points: [
        "Signed Coronado Naval & Coastal Historic Prints",
        "Custom Archival Framing & Museum Glass Options",
        "Exclusive Collector Inquiries & Gallery Viewings"
      ],
      cta: "Explore the Archival Gallery",
      promoCode: "VOLLENWEIDER"
    }
  },

  {
    id: "dana-grizzel-nc",
    publisherName: "INDIE PUBLISHING NETWORK",
    publisherLogoIcon: "✦",
    publisherSlogan: "Hyper-Effective Local Magazine Systems.",
    publicationTitle: "FACES OF NORTH CAROLINA",
    mastheadLogo: "FACES OF NORTH CAROLINA",
    editionSubtitle: "PREMIERE EDITION // OCTOBER 2026",
    categoryTag: "PUBLISHING LEADERS // MEDIA PARTNERSHIP",
    issueTag: "PREMIERE EDITION • OCTOBER 2026",
    issueDate: "OCTOBER 2026",
    heroImage: "assets/images/magazine/cover_faces_dana_grizzel_nc.png",
    personName: "DANA GRIZZEL",
    personRole: "FOUNDER, INDIE PUBLISHING",
    tagline: "Local Stories Stronger Together",
    subheadline: "A Vision for Stronger Communities Through the Power of Print and Digital: Joining forces with Local Umbrella Media.",
    
    leftTeasers: [
      { title: "A Vision for Stronger Communities", desc: "Connecting local business leaders with hyper-targeted neighborhood readership." },
      { title: "Local Umbrella Media & Indie Publishing", desc: "Joining forces to create the most effective magazine marketing system for local businesses." },
      { title: "Local Stories Stronger Together", desc: "People, businesses, and communities making a brighter tomorrow." }
    ],
    rightTeasers: [
      { kicker: "PREMIERE EDITION", title: "EXPANDING TO NORTH CAROLINA", date: "OCTOBER 2026" },
      { kicker: "MEDIA ALLIANCE", title: "THE HYPER-LOCAL PRINT ADVANTAGE", date: "MARKET REPORT" }
    ],
    
    sponsor: {
      tag: "Local Businesses. A Brighter Tomorrow.™",
      name: "HOME REVERSE // JOSH SCHWARTZ",
      agent: "Josh Schwartz • (619) 745-5677",
      phone: "619.745.5677",
      web: "HomeReverse.com",
      license: "LOCAL UMBRELLA MEDIA & INDIE PUBLISHING ALLIANCE"
    },
    
    editorial: {
      headline: "Dana Grizzel on Hyper-Local Media, Community Trust, and the Power of Print",
      deck: "How Indie Publishing and Local Umbrella Media joined forces to bring authentic community storytelling and hyper-effective local magazine marketing to North Carolina.",
      pullQuote: "“In a world crowded with fleeting digital noise, high-quality print creates permanence, respect, and deep neighborly connection that nothing else can duplicate.”",
      photographer: "Photo by Studio Blue Ridge // Asheville Mountain Vista",
      readTime: "3-MIN READ",
      
      smartBrevity: {
        bigPicture: "Hyper-local print magazines are experiencing a renaissance. By focusing exclusively on local champions and verified neighborhood businesses, Indie Publishing delivers unmatched reader engagement.",
        whyItMatters: "Direct-mailed community magazines achieve a 84% read-through rate and remain on coffee tables for an average of 4.2 weeks per household.",
        byTheNumbers: [
          { value: "45K+", label: "Direct-mailed household circulation across North Carolina" },
          { value: "84%", label: "Verified household read-through rate" },
          { value: "12x", label: "Higher local business recall versus social media ads" },
          { value: "Oct 2026", label: "Official launch of Faces of North Carolina series" }
        ],
        theBackstory: "After decades of building successful independent publishing networks, Dana Grizzel allied with Brad Weber's Local Umbrella Media to syndicate proven editorial frameworks.",
        inTheirWords: [
          { quote: "Every community has heroes whose stories deserve to be told with dignity and beauty.", author: "Dana Grizzel" }
        ],
        betweenTheLines: "Faces of North Carolina will expand to four key regional markets over the next twelve months."
      },
      
      contactCard: {
        address: "Raleigh & Asheville, NC",
        phone: "(619) 745-5677",
        email: "dana@indiepublishing.com",
        web: "www.IndiePublishing.com",
        instagram: "@FacesOfNC"
      }
    },
    
    postcard: {
      headline: "Feature Your Business in Faces of North Carolina",
      subhead: "Direct-mail your brand to 45,000 affluent homeowners in your target market.",
      frontImage: "assets/images/magazine/cover_faces_dana_grizzel_nc.png",
      backImage: "assets/images/magazine/page05_directory_boardroom_header.jpg",
      points: [
        "100% Guaranteed Direct-Mail Postal Delivery",
        "Custom Professional Storytelling & Full Editorial Layout",
        "Category Exclusivity Available for Qualified Local Partners"
      ],
      cta: "Request Media Kit & Rates",
      promoCode: "NCLAUNCH26"
    }
  },

  {
    id: "senior-floyd-armstrong",
    publisherName: "LOCAL UMBRELLA MEDIA",
    publisherLogoIcon: "☂",
    publisherSlogan: "We've Got You Covered.",
    publicationTitle: "SAN DIEGO SENIOR",
    mastheadLogo: "SAN DIEGO SENIOR",
    editionSubtitle: "LIVING WELL • PLANNING AHEAD // FALL 2026",
    categoryTag: "SENIOR LIVING // MUSIC THERAPY FOR VETERANS",
    issueTag: "FALL 2026 • LIVING WELL & PLANNING AHEAD",
    issueDate: "FALL 2026",
    heroImage: "assets/images/magazine/cover_senior_floyd_armstrong.png",
    personName: "FLOYD ARMSTRONG",
    personRole: "FOUNDER, MUSIC THERAPY FOR VETERANS // 18 YRS WITH THE FIFTH DIVISION",
    tagline: "Serenading Seniors",
    subheadline: "Bringing his legendary voice to help seniors enjoy the music of their generation: Healing through music, honoring through service.",
    
    leftTeasers: [
      { title: "Serenading Seniors", desc: "Bringing his golden voice to help seniors relive the timeless music of their generation." },
      { title: "Music Therapy for Veterans", desc: "18 years with legendary group The Fifth Division, now healing souls through melodic therapy." },
      { title: "Living Well & Planning Ahead", desc: "Comprehensive senior health, wealth preservation, and memory care guidance." }
    ],
    rightTeasers: [
      { kicker: "TOP STORY", title: "SERENADING SENIORS WITH FLOYD ARMSTRONG", date: "FALL 2026" },
      { kicker: "VETERAN HEALING", title: "MUSIC THERAPY FOR VETERANS IN SAN DIEGO", date: "COMMUNITY" }
    ],
    
    sponsor: {
      tag: "Sponsored by Home Reverse // Sales Manager Joshua Schwartz",
      name: "HOME REVERSE // JOSHUA SCHWARTZ",
      agent: "Joshua Schwartz, Sales Manager • (858) 500-5685",
      phone: "858.500.5685",
      web: "HomeReverse.com",
      license: "NMLS# 1711779 • REVERSE MORTGAGE SPECIALISTS"
    },
    
    editorial: {
      headline: "Serenading Seniors: Floyd Armstrong on Music Therapy, Memory, and Veteran Healing",
      deck: "With eighteen years performing with legendary musical group The Fifth Division, Floyd Armstrong now dedicates his life to Music Therapy for Veterans and serenading senior communities across San Diego.",
      pullQuote: "“Music is the key that unlocks memories dementia thought it stole. When we sing the songs of their youth, you see the light immediately return to their eyes.”",
      photographer: "Photo by Thom Vollenweider // Balboa Park Pavilion",
      readTime: "3-MIN READ",
      
      smartBrevity: {
        bigPicture: "Neurological research confirms that music stimulates memory and emotional well-being faster than any medication. Floyd Armstrong's foundation brings live acoustic performances and vocal therapy into senior residences and VA hospitals.",
        whyItMatters: "Over 350,000 seniors and veterans in San Diego County benefit from community arts, companionship, and proactive legacy planning.",
        byTheNumbers: [
          { value: "18 Yrs", label: "Performing with legendary group The Fifth Division" },
          { value: "320+", label: "Senior center and VA hospital performances delivered" },
          { value: "100%", label: "Free therapeutic music outreach for local veterans" },
          { value: "501(c)(3)", label: "Accredited non-profit music therapy foundation" }
        ],
        theBackstory: "Floyd established Music Therapy for Veterans after witnessing how Motown, R&B, and jazz classics helped fellow veterans recover from trauma and cognitive decline.",
        inTheirWords: [
          { quote: "Honoring our elders and veterans isn't just an obligation; it's our greatest privilege.", author: "Floyd Armstrong" }
        ],
        betweenTheLines: "Home Reverse provides educational workshops alongside Floyd's performances to help seniors unlock home equity safely."
      },
      
      contactCard: {
        address: "San Diego, CA 92101",
        phone: "(858) 500-5685",
        email: "floyd@musictherapyforveterans.org",
        web: "www.MusicTherapyForVeterans.org",
        instagram: "@FloydArmstrongMusic"
      }
    },
    
    postcard: {
      headline: "Book Music Therapy for Your Senior Community",
      subhead: "Inspire your residents with live musical performances by Floyd Armstrong.",
      frontImage: "assets/images/magazine/cover_senior_floyd_armstrong.png",
      backImage: "assets/images/magazine/page14_gala_sunset_toast.jpg",
      points: [
        "Interactive Motown, Soul & Big Band Acoustic Concerts",
        "Cognitive & Memory-Enhancing Music Therapy Sessions",
        "Co-Sponsored by Home Reverse & Local Umbrella Media"
      ],
      cta: "Schedule a Community Performance",
      promoCode: "SERENADE26"
    }
  },

  {
    id: "monica-nash-compass",
    publisherName: "PACIFIC COASTAL LUXURY MEDIA",
    publisherLogoIcon: "⚓",
    publisherSlogan: "Elevating Regional Distinction.",
    publicationTitle: "REAL ESTATE WOMAN",
    mastheadLogo: "REAL ESTATE WOMAN",
    editionSubtitle: "EMPOWERING WOMEN IN REAL ESTATE // SUMMER 2025",
    categoryTag: "LUXURY ADVISOR // COMPASS REAL ESTATE",
    issueTag: "SUMMER 2025 • SOUTHERN CALIFORNIA EDITION",
    issueDate: "SUMMER 2025",
    heroImage: "assets/images/magazine/cover_real_estate_monica_nash.png",
    personName: "MONICA NASH",
    personRole: "REALTOR® | ADVISOR | ADVOCATE • COMPASS",
    tagline: "Be Unstoppable.",
    subheadline: "Your Partner in Real Estate: Guiding clients with knowledge, integrity and heart across Southern California.",
    
    leftTeasers: [
      { title: "Residential Sales & Strategy", desc: "Maximizing client equity through strategic staging, pricing, and coastal positioning." },
      { title: "First-Time Buyers & Families", desc: "Dedicated advocacy, patient guidance, and trusted financial advice." },
      { title: "Community Over Competition", desc: "Elevating women in real estate through faith, gratitude, and purpose." }
    ],
    rightTeasers: [
      { kicker: "OUT IN THE FIELD", title: "A TRUSTED RESOURCE WHO OPENS DOORS", date: "COMPASS LUXURY" },
      { kicker: "CORE VALUES", title: "BUILDING LASTING RELATIONSHIPS WITH HEART", date: "ADVISORY" }
    ],
    
    sponsor: {
      tag: "Compass // Local. Trusted. Proven.",
      name: "MONICA NASH HOMES • COMPASS",
      agent: "Monica Nash, Realtor® • 760.672.2166",
      phone: "760.672.2166",
      web: "MonicaNashHomes.com",
      license: "DRE # 01928472 • COMPASS SOUTHERN CALIFORNIA"
    },
    
    editorial: {
      headline: "Be Unstoppable: Monica Nash on Knowledge, Integrity, and Putting Clients First",
      deck: "For Monica Nash, real estate isn't just about closing sales—it's about advocating fiercely for families, mentoring fellow women in the industry, and building trust that lasts for generations.",
      pullQuote: "“With the right real estate advisor by your side, you can achieve anything. Real estate is personal; your dreams deserve someone who fights for you with both knowledge and heart.”",
      photographer: "Photo by Studio Del Mar // Encinitas Coastal Bluffs",
      readTime: "3-MIN READ",
      
      smartBrevity: {
        bigPicture: "In a dynamic Southern California real estate market, clients require more than generic listings—they need a trusted advocate who blends deep contract knowledge with genuine emotional empathy.",
        whyItMatters: "Monica Nash's client-first approach has resulted in a 98% referral rate and consistent top-tier client satisfaction ratings across North County and coastal San Diego.",
        byTheNumbers: [
          { value: "$68M+", label: "Career residential volume closed across Southern California" },
          { value: "98%", label: "Repeat & client referral benchmark" },
          { value: "14 Days", label: "Average escrow timeline with preferred lending partners" },
          { value: "Compass", label: "Backed by the nation's #1 independent luxury brokerage" }
        ],
        theBackstory: "Combining a passion for architectural design with rigorous contract negotiation, Monica built her practice on four pillars: lasting relationships, elevating women, community over competition, and leading with gratitude.",
        inTheirWords: [
          { quote: "When you lead with honesty and put your clients' long-term happiness first, everything else takes care of itself.", author: "Monica Nash" }
        ],
        betweenTheLines: "Monica hosts complimentary homebuyer readiness workshops and supports local military family housing transitions."
      },
      
      contactCard: {
        address: "Encinitas & Carlsbad, CA",
        phone: "(760) 672-2166",
        email: "monica@monicanashhomes.com",
        web: "www.MonicaNashHomes.com",
        instagram: "@MonicaNashHomes"
      }
    },
    
    postcard: {
      headline: "Are You Ready to Make Your Next Move?",
      subhead: "Work directly with Monica Nash & Compass Southern California.",
      frontImage: "assets/images/magazine/cover_real_estate_monica_nash.png",
      backImage: "assets/images/magazine/page02_ad_jumbo_lending_estate.jpg",
      points: [
        "Complimentary Home Equity & Staging Valuation",
        "Exclusive Compass Private Placement & Off-Market Listings",
        "Tailored First-Time Buyer & Military Family Concierge"
      ],
      cta: "Request Your Free Home Valuation",
      promoCode: "MONICANASH26"
    }
  }
];

const CONTINUAL_TASKS_DATA = {
  tasks: [
    {
      id: "task-1-direct-transfer",
      num: "01",
      title: "Direct Ad Page Transfer (PDF-to-PDF)",
      category: "Ad Production & Duplication",
      summary: "Extracting an existing advertisement page from one magazine PDF and inserting/duplicating it directly into another magazine PDF without design changes.",
      details: [
        "Lossless vector extraction from source publication PDF (e.g. Real Producers Vol. 4)",
        "Automated bleed and slug realignment to target issue margins (0.125\" bleed / 0.25\" safe zone)",
        "Zero raster recompression or DPI degradation — retains pristine 300+ DPI vector sharpness",
        "1-click batch duplication across multi-market sister publications (La Jolla, Del Mar, Coronado, North Carolina)"
      ],
      sampleSourcePages: [
        { id: "ad-jumbo-mortgage", name: "Jumbo Lending Inside Cover (Page 02)", pub: "Real Producers Top 500", img: "assets/images/magazine/page02_ad_jumbo_lending_estate.jpg", advertiser: "Guaranteed Rate / Jumbo Lending" },
        { id: "ad-first-american", name: "Title & Escrow Showcase (Page 12)", pub: "Real Producers Top 500", img: "assets/images/magazine/page12_title_officer_portrait.jpg", advertiser: "First American Title Coastal" },
        { id: "ad-pacific-staging", name: "Pacific Staging & Design (Page 13)", pub: "Real Producers Top 500", img: "assets/images/magazine/page13_staging_boucle_living_room.jpg", advertiser: "Pacific Staging & Design" },
        { id: "ad-home-reverse-goode", name: "Home Reverse - Joshua Schwartz Sponsor Arc", pub: "Faces of Our Military", img: "assets/images/magazine/cover_faces_military_surinder_goode.png", advertiser: "Home Reverse (Joshua Schwartz)" },
        { id: "ad-palomar-health-therapy", name: "Palomar Health Medical Group Sponsor", pub: "The Faces of San Diego: Melissa Sargent", img: "assets/images/magazine/cover_faces_melissa_sargent_therapy.png", advertiser: "Palomar Health Medical Group" },
        { id: "ad-monica-nash-compass", name: "Monica Nash Homes // Compass Ad Page", pub: "Real Estate Woman", img: "assets/images/magazine/cover_real_estate_monica_nash.png", advertiser: "Compass Luxury Real Estate" },
        { id: "ad-indie-publishing-nc", name: "Indie Publishing North Carolina Network", pub: "Faces of North Carolina", img: "assets/images/magazine/cover_faces_dana_grizzel_nc.png", advertiser: "Indie Publishing & Local Umbrella" },
        { id: "ad-music-therapy-veterans", name: "Music Therapy for Veterans Outreach", pub: "San Diego Senior", img: "assets/images/magazine/cover_senior_floyd_armstrong.png", advertiser: "Music Therapy for Veterans" }
      ]
    },
    {
      id: "task-2-creative-refresh",
      num: "02",
      title: "Ad Reimagining / Creative Refresh",
      category: "Creative Overhaul & Design",
      summary: "Taking an existing advertisement page and redesigning the layout, visuals, and structure while preserving the original core theme and branding.",
      details: [
        "Converts dated, cluttered legacy ads into modern luxury editorial layouts (Smart Brevity format)",
        "Retains client core color palette, logos, contact info, and value propositions",
        "Regenerates ultra-high resolution (4.24 Megapixel, 300 DPI) contextual background imagery",
        "Elevates typographic hierarchy with premium editorial pairings (Playfair Display & Oswald)"
      ],
      beforeAfterSample: {
        clientName: "Pacific Bay Jumbo Capital",
        before: {
          title: "Legacy Flat Ad (2023 Submission)",
          desc: "Low-res stock photo, cramped bullet points, standard Arial text, flat single-tone background with zero negative space.",
          img: "assets/images/magazine/page02_ad_jumbo_lending.jpg",
          critique: "Pixelated on print, generic stock clip, unreadable from reading distance."
        },
        after: {
          title: "Axios Reimagined Luxury Editorial (2026 Master)",
          desc: "Travertine estate visual plate, gold foil kicker accents, 3-point Smart Brevity breakdown, and high-contrast call-to-action bar.",
          img: "assets/images/magazine/page02_ad_jumbo_lending.jpg",
          improvements: "4.24 MP print master, 300 DPI CMYK ready, Axios editorial elegance."
        }
      }
    },
    {
      id: "task-3-custom-ad-creation",
      num: "03",
      title: "Full Custom Ad & Content Creation",
      category: "Autonomous Content Studio",
      summary: "Building a complete advertisement page from scratch by researching a company, scraping/extracting details from their website, and drafting original copy, articles, and graphic layouts.",
      details: [
        "Automated website & brand crawler: extracts color palettes, slogans, bios, and service tiers",
        "Smart Brevity copywriting engine: drafts high-impact headlines, editorial narratives, and metric callouts",
        "Generates tailored 300+ DPI background photography grounded in authentic Southern California architectural style",
        "Outputs both ready-to-print CMYK PDF and fully layered Photoshop (.PSD) packages"
      ]
    },
    {
      id: "task-4-cover-adaptation",
      num: "04",
      title: "Magazine Cover Template Adaptation",
      category: "Cover Production Engine",
      summary: "Modifying an established cover template by swapping the primary feature image (person, business, or product) and updating headline text and supporting copy while keeping the base layout intact.",
      details: [
        "1-click subject replacement with automated depth layering under gold embossed masthead",
        "Dynamic copy recalibration: adjusts font scales and leading to maintain negative space balance",
        "Preserves iconic Local Umbrella Media & Real Producers branding architecture across monthly issues",
        "Instant generation of matching 6x9 direct-mail postcard collateral"
      ]
    },
    {
      id: "task-5-content-library",
      num: "05",
      title: "Reusable Content Library Management",
      category: "25+ Page Issue Assembly",
      summary: "Setting up, organizing, and formatting an internal asset library of standardized, recurring pages and ads so they can be quickly accessed and assembled into new 25+ page magazine PDFs.",
      details: [
        "Modular building blocks: Mastheads, Publisher Letters, Table of Contents, Recurring Sponsor Spreads, and Classified Grids",
        "Drag-and-drop page sequencing with automated pagination, running headers, and folio numbering",
        "Pre-flight asset validation: flags low-res imagery, missing fonts, or RGB colors prior to assembly",
        "Scales seamlessly to 24, 32, 48, or 64-page magazine binding signatures"
      ]
    },
    {
      id: "task-6-intake-portal",
      num: "06",
      title: "Customer Intake & Approval Portal Development",
      category: "Client Experience & Review Workflow",
      summary: "Building a dedicated intake portal where clients can submit their business information and upload assets, routing submissions through your review and approval workflow before handing off to production.",
      architectureNote: {
        title: "Note on Custom Build vs. Third-Party Subscriptions",
        text: "While off-the-shelf SaaS tools and subscriptions exist for client intake, they are inherently cookie-cutter and limit control over data, design, and workflow changes. Juggling third-party subscriptions frequently leads to hidden costs—such as recurring license tiers, API usage credits, and fragmented customer support—while still leaving you boxed into rigid feature constraints. If you prefer using existing third-party platforms, we can integrate them for just the labor setup cost. However, we strongly recommend a custom-built, locally controlled solution developed from scratch. Owning the source code ensures a true one-stop-shop: zero dependency on cloud subscriptions, total data privacy, complete freedom to scale or pivot features, and the flexibility to implement any custom requirement without platform roadblocks."
      },
      intakeSubmissions: [
        {
          id: "sub-101",
          clientName: "David & Sarah Kensington",
          business: "Kensington Coastal Fine Homes",
          targetPub: "Real Producers (Top 500)",
          submittedDate: "Sept 8, 2026",
          status: "Under Review",
          statusClass: "status-review",
          filesCount: 4,
          heroImg: "assets/images/magazine/page01_cover_katie_courtney.jpg",
          headlineCopy: "Architectural Precision Meets Coastal Heritage in Rancho Santa Fe",
          notes: "Need 2-page center spread + inside back cover ad. High-res images uploaded."
        },
        {
          id: "sub-102",
          clientName: "Elena Vance",
          business: "Vance Structural Design",
          targetPub: "The Faces of San Diego",
          submittedDate: "Sept 9, 2026",
          status: "Approved for Press",
          statusClass: "status-approved",
          filesCount: 6,
          heroImg: "assets/images/magazine/page08_cover_story_glass_pavilion.jpg",
          headlineCopy: "Redefining Sustainable Pacific Residences from Bedrock to Cantilever",
          notes: "Client approved proof #2 without revisions. Ready for 300 DPI plate output."
        },
        {
          id: "sub-103",
          clientName: "Brian Thorne",
          business: "Coronado Private Wealth Management",
          targetPub: "Real Producers (Top 500)",
          submittedDate: "Sept 10, 2026",
          status: "Revision Requested",
          statusClass: "status-revision",
          filesCount: 2,
          heroImg: "assets/images/magazine/page14_contributor_roundtable_library.jpg",
          headlineCopy: "Tax-Advantaged Real Estate Exchange Strategies for HNW Families",
          notes: "Client requested swapping body paragraph 2 with updated 2026 1031 exchange data."
        }
      ]
    },
    {
      id: "task-7-tech-support",
      num: "07",
      title: "Ongoing Technical Support & Application Maintenance",
      category: "System Stability & Local Infrastructure",
      summary: "Providing continuous updates, local environment maintenance, system stability oversight, and troubleshooting for the custom intake workflow.",
      details: [
        "Local execution environment monitoring: zero external API downtime or broken dependencies",
        "Automated CMYK color profile and 300 DPI pre-flight checksum verifications",
        "Quarterly template library expansions, typography licensing audits, and security updates",
        "Direct developer access for custom feature additions and bespoke integration requests"
      ],
      systemDiagnostics: [
        { check: "Local Proofing Engine Runtimes", status: "Operational (Port 8080 Active)", ok: true },
        { check: "300 DPI Asset Master Pipeline", status: "31 Print Masters Verified (Zero Human Faces)", ok: true },
        { check: "Multi-Tenant Client Isolation Firewall", status: "Encrypted & Sandboxed per Tenant", ok: true },
        { check: "Zero Third-Party Vendor Exposure", status: "100% Whitelabeled to Axios & Local Umbrella", ok: true },
        { check: "PDF & PSD Layer Manifest Compiler", status: "Pre-press Validated", ok: true }
      ]
    }
  ]
};

/* ==========================================================================
   STANDARD ISSUE PAGE GENERATOR & ISSUE NUMBER INITIALIZER
   ========================================================================== */

function generateStandardIssuePages(p, targetPageCount = 16) {
  const count = targetPageCount || 16;
  const pages = [];

  // Page 1: Cover
  pages.push({
    pageNumber: 1,
    pageType: "cover",
    title: `Front Cover Proof // Issue #${p.issueNumber || 101}`,
    subtitle: p.personName,
    imageSlot: "cover-hero",
    imagePrompt: `Print master cover for ${p.publicationTitle}`,
    imageUrl: p.heroImage
  });

  // Page 2: Inside Front Cover Ad
  pages.push({
    pageNumber: 2,
    pageType: "ad-full",
    sponsorName: p.sponsor ? p.sponsor.name : "GUARANTEED RATE LUXURY LENDING",
    adHeadline: p.sponsor ? `${p.sponsor.tag}` : "Fast Closings. Jumbo Loan Specialists. Local Decisions.",
    adBody: p.sponsor ? `Official sponsor of Issue #${p.issueNumber || 101} of ${p.publicationTitle}. Contact direct: ${p.sponsor.phone}.` : "Trusted by San Diego's Top 500 Realtors for over 15 years.",
    adPhone: p.sponsor ? p.sponsor.phone : "858.755.9800",
    adWeb: p.sponsor ? p.sponsor.web : "Rate.com/SanDiegoLuxury",
    adBgColor: "#0B1B3D",
    imageSlot: "ad-hero",
    imageUrl: "assets/images/magazine/page02_ad_jumbo_lending_estate.jpg"
  });

  // Page 3: Publisher's Note & Masthead
  pages.push({
    pageNumber: 3,
    pageType: "publishers-note",
    title: `Publisher's Letter // Issue #${p.issueNumber || 101}`,
    publisherName: "Brad Weber",
    publisherTitle: `Publisher & Founder, ${p.publisherName || 'Local Umbrella Media'} // ${p.publicationTitle}`,
    imageSlot: "publisher-headshot",
    imageUrl: "assets/images/magazine/page03_publisher_brad_weber.jpg",
    letterBody: [
      `Welcome to Issue #${p.issueNumber || 101} of ${p.publicationTitle}! When we founded ${p.publisherName || 'Local Umbrella Media'}, our mission was to connect, elevate, and celebrate the local leaders and businesses driving our regional community forward.`,
      `This month, we are honored to feature ${p.personName} on our cover. Their story exemplifies authentic dedication, resilience, and community stewardship. I encourage every reader to study their leadership insights on Page 8.`,
      `A heartfelt thank you to our sponsors and Preferred Partners who make this publication possible. When you need trusted local services, look to our directory on Page 5.`
    ],
    mastheadStaff: [
      { role: "Editor-in-Chief", name: "Rachel Adams" },
      { role: "Lead Photojournalist", name: "Thom Vollenweider" },
      { role: "Art Director", name: "Marcus Rivera" },
      { role: "Director of Partner Relations", name: "David Vance" }
    ]
  });

  // Page 4: Table of Contents
  pages.push({
    pageNumber: 4,
    pageType: "toc",
    title: `Table of Contents // Issue #${p.issueNumber || 101}`,
    imageSlot: "toc-feature-thumb",
    imageUrl: "assets/images/magazine/page04_toc_architectural_staircase.jpg",
    tocItems: [
      { page: "03", title: "Publisher's Letter", desc: `Welcome to Issue #${p.issueNumber || 101} by Brad Weber.` },
      { page: "05", title: "Preferred Partners Directory", desc: "Vetted lenders, title companies, and local services." },
      { page: "06", title: "Rising Star Spotlight", desc: "Local entrepreneurs and community innovators." },
      { page: "08", title: `Cover Feature: ${p.personName}`, desc: p.subheadline || p.tagline || "The Power of Partnership & Vision." },
      { page: "12", title: "Partner Spotlight", desc: "In-depth look at our featured community partners." },
      { page: "14", title: "Community Event Gallery", desc: "Highlights, awards, and candid social coverage." }
    ]
  });

  // Page 5: Partners Directory
  pages.push({
    pageNumber: 5,
    pageType: "partners-directory",
    title: "Preferred Partners Directory",
    subtitle: `Vetted Industry Partners Serving ${p.publicationTitle} Readers`,
    imageSlot: "directory-banner",
    imageUrl: "assets/images/magazine/page05_directory_boardroom_header.jpg",
    categories: [
      {
        cat: "PREFERRED LENDING & WEALTH SERVICES",
        items: [
          { name: "Guaranteed Rate — Luxury Division", phone: "858.755.9800", web: "Rate.com/SD" },
          { name: "Home Reverse Mortgage Specialists", phone: "619.745.5677", web: "HomeReverse.com" }
        ]
      },
      {
        cat: "TITLE, ESCROW & LEGAL ADVISORY",
        items: [
          { name: "First American Title Coastal", phone: "619.555.0192", web: "FirstAmSD.com" },
          { name: "Nexiya Executive Search & Advisory", phone: "858.555.0177", web: "Nexiya.com" }
        ]
      },
      {
        cat: "COMMUNITY HEALTH & WELLNESS",
        items: [
          { name: "Palomar Health Medical Group", phone: "760.789.5400", web: "PalomarHealth.org" },
          { name: "Heart & Hooves Therapy Foundation", phone: "760.789.5400", web: "HeartAndHoovesTherapy.org" }
        ]
      }
    ]
  });

  // Page 6 & 7: Community Feature / Rising Star
  pages.push({
    pageNumber: 6,
    pageType: "rising-star-1",
    title: "Community Contributor Spotlight",
    kicker: "COMMUNITY SPOTLIGHT",
    subtitle: p.editorial ? p.editorial.headline.slice(0, 50) + "..." : "Local Trailblazers in Motion",
    imageSlot: "rising-star-portrait",
    imageUrl: "assets/images/magazine/page06_rising_star_alexa_portrait.jpg",
    body: p.editorial && p.editorial.smartBrevity ? p.editorial.smartBrevity.theBackstory : "Celebrating local innovators who are creating sustainable impact and elevating standards across Southern California."
  });

  pages.push({
    pageNumber: 7,
    pageType: "rising-star-2",
    title: "Tactical Leadership Blueprint",
    kicker: "ADVISORY PLAYBOOK",
    subtitle: "3 Rules for Long-Term Community Impact",
    imageSlot: "rising-star-action",
    imageUrl: "assets/images/magazine/page07_rising_star_patio_walkway.jpg",
    body: "1. Prioritize authentic human connection over quick transactions. 2. Support local civic and youth initiatives. 3. Consistently deliver transparent, high-integrity service."
  });

  // Page 8, 9, 10, 11: Cover Story Spreads
  pages.push({
    pageNumber: 8,
    pageType: "cover-story-1",
    title: `The Power of Partnership`,
    subtitle: `${p.personName} // ${p.tagline}`,
    imageSlot: "cover-story-hero",
    imageUrl: "assets/images/magazine/page08_cover_story_glass_pavilion.jpg"
  });

  pages.push({
    pageNumber: 9,
    pageType: "cover-story-2",
    title: `Elevating Regional Standards`,
    subtitle: p.editorial ? p.editorial.deck : "The Big Picture & Why It Matters",
    imageSlot: "cover-story-inset",
    imageUrl: "assets/images/magazine/page09_kitchen_calacatta_marble.jpg"
  });

  pages.push({
    pageNumber: 10,
    pageType: "cover-story-3",
    title: `Operational Framework & Regional Growth`,
    subtitle: "Measurable Impact & Regional Growth",
    imageSlot: "cover-story-team",
    imageUrl: "assets/images/magazine/page10_strategy_session_tablet.jpg"
  });

  pages.push({
    pageNumber: 11,
    pageType: "cover-story-4",
    title: `Leadership, Mentorship & Community`,
    subtitle: "Advisory Playbook & Office Details",
    imageSlot: "cover-story-mentorship",
    imageUrl: "assets/images/magazine/page11_mentorship_mastermind_brunch.jpg"
  });

  // Page 12: Partner Spotlight
  pages.push({
    pageNumber: 12,
    pageType: "partner-feature",
    title: "Partner Spotlight: First American Title",
    subtitle: "Securing High-Stakes Transactions with Modern Escrow Tech",
    imageSlot: "title-officer-portrait",
    imageUrl: "assets/images/magazine/page12_title_officer_portrait.jpg"
  });

  // Page 13: Local Staging Showcase
  pages.push({
    pageNumber: 13,
    pageType: "ad-half-half",
    title: "Community Preferred Partners Showcase",
    subtitle: "Pacific Staging & Architectural Media Group",
    imageSlot: "staging-photo-1",
    imageUrl: "assets/images/magazine/page13_staging_boucle_living_room.jpg"
  });

  // Page 14 & 15: Gala Gallery & Social Candids
  pages.push({
    pageNumber: 14,
    pageType: "event-gallery-1",
    title: "Community Gala & Philanthropy Reception",
    subtitle: "Honoring our 2026 Community Champion nominees.",
    imageSlot: "gala-photo-1",
    imageUrl: "assets/images/magazine/page14_gala_sunset_toast.jpg",
    secondaryImageUrl: "assets/images/magazine/page14_gala_awards_stage.jpg"
  });

  pages.push({
    pageNumber: 15,
    pageType: "event-gallery-2",
    title: "Gala Photo Gallery & Social Candids",
    subtitle: "Celebrating our regional partners and leaders.",
    imageSlot: "gala-photo-2",
    imageUrl: "assets/images/magazine/page15_gala_teams_candids.jpg",
    secondaryImageUrl: "assets/images/magazine/page15_gala_lenders_reception.jpg",
    tertiaryImageUrl: "assets/images/magazine/page15_gala_charity_auction.jpg",
    quaternaryImageUrl: "assets/images/magazine/page15_gala_vip_terrace.jpg"
  });

  // Page 16: Back Cover
  pages.push({
    pageNumber: 16,
    pageType: "back-cover",
    title: "Protecting San Diego's Finest Estates",
    subtitle: "The Trusted Name in Southern California Media",
    imageSlot: "back-cover-ad",
    imageUrl: "assets/images/magazine/page16_back_cover_skyline_bridge.jpg"
  });

  // Add extra pages if targetPageCount > 16
  for (let i = 17; i <= count; i++) {
    pages.push({
      pageNumber: i,
      pageType: "ad-full",
      sponsorName: p.sponsor ? p.sponsor.name : "LOCAL BUSINESS SPOTLIGHT",
      adHeadline: `Page ${i} // Community Feature & Advertisement`,
      adBody: `Premium full-page placement in Issue #${p.issueNumber || 101} of ${p.publicationTitle}.`,
      adPhone: p.sponsor ? p.sponsor.phone : "(619) 820-5400",
      adWeb: p.sponsor ? p.sponsor.web : "LocalUmbrella.com",
      imageUrl: "assets/images/magazine/page02_ad_jumbo_lending_estate.jpg"
    });
  }

  return pages;
}

// Automatically assign issue numbers and ensure complete 16-page structures
const ISSUE_NUM_MAP = {
  "real-producers-katie-courtney": 101,
  "marcus-vance": 102,
  "women-venture-summit": 103,
  "melissa-sargent-therapy": 104,
  "nadia-eghaneyan-nexiya": 105,
  "surinder-goode-military": 106,
  "inspired-kids-kaden": 107,
  "thom-vollenweider": 108,
  "dana-grizzel-nc": 109,
  "senior-floyd-armstrong": 110,
  "monica-nash-compass": 111
};

SAMPLE_PROFILES.forEach((p, idx) => {
  p.issueNumber = ISSUE_NUM_MAP[p.id] || (101 + idx);
  p.volumeNumber = Math.max(1, Math.floor((p.issueNumber - 100) / 3) + 1);
  p.issueCode = `VOL-0${p.volumeNumber}-ISS-${p.issueNumber}`;
  if (!p.fullMagazinePages || p.fullMagazinePages.length === 0) {
    p.fullMagazinePages = generateStandardIssuePages(p, 16);
  }
  p.pageCount = p.fullMagazinePages.length;
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SAMPLE_PROFILES, CONTINUAL_TASKS_DATA, generateStandardIssuePages };
}

