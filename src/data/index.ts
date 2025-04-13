type ProductInfo = {
    imageUrl: string;
    title: string;
    price: number;
    totalRating: number;
    slug: string;
    description: string;
    inStock: boolean;
    features: string[];
};

export const productinfo: ProductInfo[] = [
    {
        imageUrl: "/assets/product-images/image1.jpg",
        title: "BioAir Pro Air Pump",
        price: 12999,
        totalRating: 24,
        slug: "bioair-pro-air-pump",
        description:
            "High-performance air pump suitable for large-scale aquaculture and biofloc tanks.",
        inStock: true,
        features: [
            "High airflow output",
            "Energy efficient design",
            "Durable build with metal casing",
            "Ideal for 5000-10000 liter tanks",
        ],
    },
    {
        imageUrl: "/assets/product-images/image2.jpg",
        title: "HDPE Biofloc Tank (10000 Liters)",
        price: 34999,
        totalRating: 45,
        slug: "hdpe-biofloc-tank-10000-liters",
        description:
            "High-density polyethylene tank perfect for biofloc farming systems with UV protection.",
        inStock: true,
        features: [
            "Capacity: 10000 Liters",
            "UV Stabilized Material",
            "Leak-proof and corrosion-resistant",
            "Easy to assemble and disassemble",
        ],
    },
    {
        imageUrl: "/assets/product-images/image8.jpg",
        title: "Paddle Wheel Aerator 2HP",
        price: 18999,
        totalRating: 33,
        slug: "paddle-wheel-aerator-2hp",
        description:
            "Heavy-duty paddle wheel aerator to maintain dissolved oxygen levels in aquaculture ponds.",
        inStock: false,
        features: [
            "2 Horse Power motor",
            "Rust-resistant paddle arms",
            "Ideal for medium to large ponds",
            "Energy efficient",
        ],
    },
    {
        imageUrl: "/assets/product-images/image4.jpg",
        title: "Submersible Water Pump 1.5HP",
        price: 9999,
        totalRating: 18,
        slug: "submersible-water-pump-1-5hp",
        description:
            "Reliable submersible pump for efficient water circulation in tanks and ponds.",
        inStock: true,
        features: [
            "1.5HP powerful motor",
            "Silent operation",
            "Copper winding",
            "Comes with 10m cable",
        ],
    },
    {
        imageUrl: "/assets/product-images/image5.jpg",
        title: "High Pressure Air Diffuser Stone Set",
        price: 499,
        totalRating: 78,
        slug: "high-pressure-air-diffuser-stone-set",
        description:
            "Efficient diffuser stones for aerating water in fish tanks and biofloc systems.",
        inStock: true,
        features: [
            "Pack of 4 stones",
            "Produces micro bubbles",
            "Improves oxygen diffusion",
            "Durable ceramic material",
        ],
    },
    {
        imageUrl: "/assets/product-images/image6.jpg",
        title: "TDS EC Meter for Water Quality",
        price: 1199,
        totalRating: 92,
        slug: "tds-ec-meter-for-water-quality",
        description:
            "Digital TDS and EC meter for measuring water quality in aquaculture systems.",
        inStock: true,
        features: [
            "3-in-1: TDS, EC, Temperature",
            "Easy to use and calibrate",
            "Backlit LCD screen",
            "Battery operated",
        ],
    },
    {
        imageUrl: "/assets/product-images/image7.jpg",
        title: "Probiotic Bacteria Powder (1kg)",
        price: 899,
        totalRating: 55,
        slug: "probiotic-bacteria-powder-1kg",
        description:
            "Organic probiotic powder for improving water quality and fish health in biofloc tanks.",
        inStock: true,
        features: [
            "1kg sealed pack",
            "Enhances nitrogen cycle",
            "Safe for all fish species",
            "Improves digestion & immunity",
        ],
    },
    {
        imageUrl: "/assets/product-images/image3.jpg",
        title: "Biofloc pH Regulator (Liquid)",
        price: 699,
        totalRating: 40,
        slug: "biofloc-ph-regulator-liquid",
        description:
            "Liquid pH regulator designed for maintaining ideal pH levels in biofloc systems.",
        inStock: true,
        features: [
            "pH stabilizer (5.5 - 8.5)",
            "Easy to dose and mix",
            "Non-toxic formula",
            "Improves biofloc efficiency",
        ],
    },
    {
        imageUrl: "/assets/product-images/image9.jpg",
        title: "Feeding Tray for Fish Tanks (Pack of 3)",
        price: 999,
        totalRating: 22,
        slug: "feeding-tray-for-fish-tanks-pack-of-3",
        description:
            "Durable feeding trays that help monitor fish feeding behavior and reduce waste.",
        inStock: true,
        features: [
            "3 trays in a pack",
            "Easy to clean",
            "Reduces leftover feed",
            "Durable plastic material",
        ],
    },
];

type HeroInfo = {
    bg: string;
    title: string;
    description: string;
    btnText: string;
    cardBg: string;
};

export const HeroDatas: HeroInfo[] = [
    {
        bg: "/assets/images/hero_bg_one.jpeg",
        title: "আপনার স্বপ্নের বায়োফ্লক ব্যবসা শুরু হোক আমাদের বিশ্বস্ত সমাধানের সাথে!",
        description:
            "সেরা মানের পণ্য | আধুনিক প্রযুক্তি | সর্বোচ্চ লাভের নিশ্চয়তা",
        btnText: "শুরু করুন আজই",
        cardBg: "/assets/images/card_bg_one.jpeg",
    },
    {
        bg: "/assets/images/hero_bg_two.jpeg",
        title: "আমাদের সাথে আপনার বায়োফ্লক ব্যবসার উন্নতি নিশ্চিত করুন!",
        description: "বিশ্বস্ত সরবরাহকারী | উন্নত প্রযুক্তি | লাভজনক সমাধান",
        btnText: "এখনই শুরু করুন",
        cardBg: "/assets/images/card_bg_one.jpeg",
    },
    {
        bg: "/assets/images/hero_bg_three.jpeg",
        title: "বিশ্বস্ত এবং লাভজনক বায়োফ্লক সমাধান - আজই শুরু করুন!",
        description:
            "সেরা মানের পণ্য | আধুনিক প্রযুক্তি | সর্বোচ্চ লাভের নিশ্চয়তা",
        btnText: "শুরু করুন আজই",
        cardBg: "/assets/images/card_bg_one.jpeg",
    },
];
