const items = [
  // Smartphones
  {
    id: 1,
    category: "smartphones",
    name: "iPhone 16",
    brand: "Apple",
    img: "/images/iphone16.jpg",
    price: "$1,129",
    description:
      "Apple’s latest iPhone with an advanced A18 chip, enhanced camera system, and stunning OLED display.",
    tags: ["smartphone", "iOS", "OLED", "photography", "flagship"],
  },
  {
    id: 2,
    category: "smartphones",
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    img: "/images/s25.png",
    price: "$1,198",
    description:
      "A sleek Android flagship with a vibrant AMOLED display and pro-grade triple-lens camera.",
    tags: [
      "smartphone",
      "Android",
      "AMOLED",
      "photography",
      "fast-charging",
      "flagship",
    ],
  },
  {
    id: 3,
    category: "smartphones",
    name: "Google Pixel 8",
    brand: "Google",
    img: "/images/G9.png",
    price: "$1,099",
    description:
      "A pure Android experience powered by Google Tensor chip and industry-leading AI photography.",
    tags: ["smartphone", "Android", "AI-camera", "photography"],
  },
  {
    id: 4,
    category: "smartphones",
    name: "OnePlus 13",
    brand: "OnePlus",
    img: "/images/OP13.png",
    price: "$1,249",
    description:
      "Blazing-fast performance with Snapdragon 8 Gen chip and ultra-smooth 144Hz display.",
    tags: ["smartphone", "Android"],
  },

  // Laptops
  {
    id: 5,
    category: "laptops",
    name: "MacBook Pro M4",
    brand: "Apple",
    img: "/images/MPro.png",
    price: "$2,399",
    description:
      "A powerhouse laptop with Apple’s M4 chip, Liquid Retina XDR display, and all-day battery life.",
    tags: [
      "laptop",
      "macOS",
      "Liquid Retina",
      "XDR",
      "creative",
      "portable",
      "battery-life",
      "performance",
      "productivity",
    ],
  },
  {
    id: 6,
    category: "laptops",
    name: "Dell XPS 16",
    brand: "Dell",
    img: "/images/xps.avif",
    price: "$2,399",
    description:
      "Premium design meets performance in this 16-inch laptop with InfinityEdge 4K touch display.",
    tags: [
      "laptop",
      "Windows",
      "Dell",
      "4K",
      "touchscreen",
      "portable",
      "performance",
      "productivity",
    ],
  },
  {
    id: 7,
    category: "laptops",
    name: "HP Spectre x360",
    brand: "HP",
    img: "/images/hps.png",
    price: "$2,389",
    description:
      "A versatile 2-in-1 with sleek looks, OLED display, and long battery life for productivity on the go.",
    tags: [
      "laptop",
      "Windows",
      "OLED",
      "2-in-1",
      "touchscreen",
      "portable",
      "battery-life",
      "productivity",
    ],
  },
  {
    id: 8,
    category: "laptops",
    name: "Lenovo ThinkPad X1",
    brand: "Lenovo",
    img: "/images/lt.avif",
    price: "$3,059",
    description:
      "Business-class build with Intel vPro, Dolby Vision support, and unmatched typing comfort.",
    tags: [
      "laptop",
      "Windows",
      "Dolby-Vision",
      "business",
      "portable",
      "productivity",
    ],
  },

  // Desktops
  {
    id: 9,
    category: "desktops",
    name: "Dell Pro Max",
    brand: "Dell",
    img: "/images/DP.png",
    price: "$1,558",
    description:
      "All-around desktop for professionals with top-tier performance and expandability.",
    tags: ["desktop", "Windows", "performance", "upgradeable"],
  },
  {
    id: 10,
    category: "desktops",
    name: "Mac Pro",
    brand: "Apple",
    img: "/images/MP.png",
    price: "$8,999",
    description:
      "Apple’s most powerful workstation, built for creative and technical professionals.",
    tags: [
      "desktop",
      "macOS",
      "workstation",
      "creative",
      "performance",
      "productivity",
    ],
  },
  {
    id: 11,
    category: "desktops",
    name: "HP Omen",
    brand: "HP",
    img: "/images/HO.png",
    price: "$3,649",
    description:
      "Gaming beast with high-end graphics and cooling system in a bold chassis.",
    tags: ["desktop", "Windows", "gaming", "performance", "RGB"],
  },
  {
    id: 12,
    category: "desktops",
    name: "Lenovo Legion Tower",
    brand: "Lenovo",
    img: "/images/LL.png",
    price: "$2,399",
    description:
      "A sleek gaming rig with RGB lighting, overclock-ready CPU, and powerful GPU support.",
    tags: [
      "desktop",
      "Windows",
      "gaming",
      "performance",
      "RGB",
      "overclocking",
    ],
  },

  // Displays
  {
    id: 13,
    category: "displays",
    name: "Samsung OLED TV",
    brand: "Samsung",
    img: "/images/sam.png",
    price: "$2,999",
    description:
      "Mesmerizing visuals with OLED technology, 120Hz refresh rate, and Quantum HDR.",
    tags: ["display", "OLED", "120Hz", "HDR", "smart-TV", "home-theater"],
  },
  {
    id: 14,
    category: "displays",
    name: "LG UltraWide Monitor",
    brand: "LG",
    img: "/images/ul.png",
    price: "$1,999",
    description:
      "UltraWide screen real estate perfect for multitasking and immersive content creation.",
    tags: [
      "display",
      "UltraWide",
      "monitor",
      "multitasking",
      "content-creation",
    ],
  },
  {
    id: 15,
    category: "displays",
    name: "Pro Display XDR",
    brand: "Apple",
    img: "/images/dis.png",
    price: "$6,299",
    description:
      "Apple’s top-tier monitor with 6K resolution and extreme dynamic range for pros.",
    tags: [
      "display",
      "6K",
      "XDR",
      "Liquid Retina",
      "creative",
      "monitor",
      "productivity",
      "color-accurate",
    ],
  },
  {
    id: 16,
    category: "displays",
    name: "Dell UltraSharp Monitor",
    brand: "Dell",
    img: "/images/ultra.png",
    price: "$2,749",
    description:
      "Color-accurate 4K monitor tailored for design, media, and productivity workflows.",
    tags: ["display", "4K", "monitor", "color-accurate", "productivity"],
  },
];

export default items;
