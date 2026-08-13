export type StudentWorkItem = {
  id: number;
  title: string;
  student: string;
  image: string;
  images?: string[];
  featured: boolean;
};

const imageModules = import.meta.glob('/src/assets/student_work/**/*', { eager: true, as: 'url' });

const getImageUrl = (filename: string) => {
  const normalized = filename.replace(/^[\/]+/, "");
  const candidates = [
    normalized,
    `${normalized}.webp`,
    `${normalized}.jpg`,
    `${normalized}.jpeg`,
  ];

  for (const candidate of candidates) {
    const exactPath = `/src/assets/student_work/${candidate}`;
    if (exactPath in imageModules) {
      return imageModules[exactPath] as string;
    }
  }

  const fallback = Object.entries(imageModules).find(([path]) =>
    candidates.some((candidate) => path.endsWith(`/${candidate}`))
  );

  return fallback ? (fallback[1] as string) : "";
};

const assetUrl = (filename: string) => getImageUrl(filename);

// Manual product names for student work cards.
// Edit the values below to change the title shown on all 9 cards.
export const studentWorkCardTitles: string[] = [
  "3D Gaming Prop (Blender)",
  "Low Poly Game Asset (Maya)",
  "ZBrush Character Sculpting",
  "Unreal Engine Environment",
  "3D Concept Character Model",
  "Hard Surface Vehicle Design",
  "Next-Gen Weapon Prop",
  "Stylized Low Poly Diorama",
  "Mobile Game Environment",
];

export const studentNames = [
  "Satyam Gupta",
  "Satyam Gupta",
  "Sneha Patel",
  "Rahul Kumar",
  "Satyam Gupta",
  "Ananya Gupta",
  "Satyam Gupta",
  "Kavya Rao",
  "Aditya Verma",
];

export const allStudentWork: StudentWorkItem[] = [
  {
    id: 1,
    title: studentWorkCardTitles[0] ?? "Mobile App UI Refresh",
    student: "Satyam gupta",
    image: assetUrl("main-card1"),
    images: [
      assetUrl("main-card1-slider-1"),
      assetUrl("main-card1-slider2"),
      assetUrl("main-card1-slider-3"),
    ],
    featured: true,
  },
  {
    id: 2,
    title: studentWorkCardTitles[1] ?? "Brand Identity System",
    student: "Satyam Gupta",
    image: assetUrl("main-card2"),
    images: [
      assetUrl("main-card2-slider-1"),
      assetUrl("main-card2-slider-2"),
      assetUrl("main-card2-slider-3"),
    ],
    featured: true,
  },
  {
    id: 3,
    title: studentWorkCardTitles[2] ?? "Social Media Campaign",
    student: "Sneha Patel",
    image: assetUrl("main-card3"),
    images: [
      assetUrl("main-card3-slider-1"),
      assetUrl("main-card3-slider-2"),
      assetUrl("main-card3-slider-3"),
    ],
    featured: true,
  },
  {
    id: 4,
    title: studentWorkCardTitles[3] ?? "3D Product Concept",
    student: "Rahul Kumar",
    image: assetUrl("main-card4"),
    images: [
      assetUrl("main-card4-slider-1"),
      assetUrl("main-card4-slider-2"),
      assetUrl("main-card4-slider-3"),
    ],
    featured: true,
  },
  {
    id: 5,
    title: studentWorkCardTitles[4] ?? "2D Illustration Series",
    student: "Satyam Gupta",
    image: assetUrl("main-card5"),
    images: [
      assetUrl("main-card5-slider-1"),
      assetUrl("main-card5-slider-2"),
      assetUrl("main-card5-slider-3"),
    ],
    featured: true,
  },
  {
    id: 6,
    title: studentWorkCardTitles[5] ?? "Dashboard Interaction",
    student: "Ananya Gupta",
    image: assetUrl("main-card6"),
    images: [
      assetUrl("main-card6-slider-1"),
      assetUrl("main-card6-slider-2"),
      assetUrl("main-card6-slider-3"),
    ],
    featured: true,
  },
  {
    id: 7,
    title: studentWorkCardTitles[6] ?? "Brand Collateral Kit",
    student: "Satyam Gupta",
    image: assetUrl("main-card7"),
    images: [
      assetUrl("main-card7-slider-1"),
      assetUrl("main-card7-slider-2"),
      assetUrl("main-card7-slider-3"),
    ],
    featured: true,
  },
  {
    id: 8,
    title: studentWorkCardTitles[7] ?? "Social Content Set",
    student: "Kavya Rao",
    image: assetUrl("main-card8"),
    images: [
      assetUrl("main-card8-slider-1"),
      assetUrl("main-card8-slider-2"),
      assetUrl("main-card8-slider-3"),
    ],
    featured: true,
  },
  {
    id: 9,
    title: studentWorkCardTitles[8] ?? "Web App Landing Page",
    student: "Aditya Verma",
    image: assetUrl("main-card9"),
    images: [
      assetUrl("main-card9-slider-1"),
      assetUrl("main-card9-slider-2"),
      assetUrl("main-card9-slider-3"),
    ],
    featured: true,
  },
];