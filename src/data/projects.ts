export type IconName =
  | "Rocket"
  | "Bot"
  | "Car"
  | "HeartPulse"
  | "GraduationCap"
  | "Globe"
  | "Siren"
  | "ScanFace"
  | "HandHeart"
  | "Cpu"
  | "Sparkles";

export type Project = {
  slug: string;
  title: string;
  titleAccent: string;
  role: string;
  year: string;
  description: string;
  longDescription: string[];
  tags: string[];
  image?: string;
  iconName: IconName;
  color: string;
  colorTo: string;
  liveUrl?: string;
  repoUrl?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "gridcore360",
    title: "GridCore",
    titleAccent: "360",
    role: "Full Stack Developer — Founder Build",
    year: "2026",
    description:
      "Enterprise-grade AI & BPO agency platform — a cybernetic dark UI with glassmorphism, Framer Motion animation, and a fully operational Next.js + Firebase backend handling leads, appointments, and job applications.",
    longDescription: [
      "GridCore360 isn't a static marketing site — it's a live business engine. The frontend delivers a futuristic, high-conversion experience with a dark cybernetic theme and glassmorphism UI, while hidden Next.js API routes connect to Firebase to capture leads, book appointments, and process career applications with PDF resume uploads.",
      "Built on Next.js 16 (App Router + Turbopack) and Tailwind CSS v4, with Firebase Firestore and Cloud Storage on the backend, secured with production Firestore rules. Deployed live on Vercel with a custom domain.",
    ],
    tags: ["Next.js 16", "Firebase", "Tailwind v4", "Framer Motion", "TypeScript"],
    iconName: "Rocket",
    color: "#a78bfa",
    colorTo: "#67e8f9",
    liveUrl: "https://gridcore360.vercel.app",
    repoUrl: "https://github.com/syedasumayya/gridcore360",
    highlights: [
      "Live serverless backend: leads, appointments, career applications",
      "Firebase Firestore + Cloud Storage with production security rules",
      "Glassmorphism UI with Framer Motion throughout",
    ],
  },
  {
    slug: "dodo-bot-perception",
    title: "DoDo Bot —",
    titleAccent: "Perception",
    role: "AI & Robotics Engineer",
    year: "2026",
    description:
      "Perception stack for a restaurant service robot: YOLOv8 obstacle detection fine-tuned on COCO, and a MediaPipe + Random Forest gesture recognizer reaching 94% accuracy — both documented with full training reports.",
    longDescription: [
      "Built the perception layer for DoDo Bot, a restaurant service robot, covering two trained models. Obstacle detection uses YOLOv8-nano fine-tuned on a filtered, locally-built COCO subset (2,000 images, 79 classes), trained for 20 epochs on a T4 GPU, then validated against unseen restaurant footage — consistently flagging chairs, tables, and people across 183 frames.",
      "Gesture recognition extracts 21 3D hand landmarks per frame via MediaPipe and classifies them with a 200-tree Random Forest — a deliberately lightweight pipeline chosen to run in real time on the robot's onboard hardware without a GPU. Mapped 9 gestures to robot responses (e.g. open palm → halt, fist → emergency stop), reaching 94% overall accuracy after diagnosing and removing a gesture class that was visually confusable in landmark space.",
    ],
    tags: ["YOLOv8", "MediaPipe", "Python", "Computer Vision", "ROS 2 (next phase)"],
    iconName: "Bot",
    color: "#fb923c",
    colorTo: "#fbbf24",
    repoUrl: "https://github.com/syedasumayya/DodoBot-Perception",
    highlights: [
      "YOLOv8-nano obstacle detection, validated on real restaurant video",
      "MediaPipe + Random Forest gesture recognition — 94% accuracy",
      "9 gestures mapped to robot behaviours in real time",
    ],
  },
  {
    slug: "skin-cancer-detection",
    title: "Skin Cancer",
    titleAccent: "Detection AI",
    role: "AI/ML & Full Stack Developer",
    year: "2025",
    description:
      "Production-grade medical AI application classifying 7 skin lesion types from dermoscopic images — a ResNet50 model trained on HAM10000, served through a secure FastAPI backend with JWT auth.",
    longDescription: [
      "A full-stack AI-powered skin cancer detection system. A ResNet50 deep learning model was trained and optimized on the HAM10000 dataset to classify 7 distinct skin lesion types with high accuracy.",
      "The backend is built with FastAPI and secured with JWT authentication, using OpenCV for image preprocessing and validation, and SQLAlchemy/SQLite for user and scan history data. The Next.js frontend gives real-time image analysis, prediction confidence scores, scan history, and medical recommendations.",
    ],
    tags: ["ResNet50", "TensorFlow", "FastAPI", "OpenCV", "JWT Auth"],
    iconName: "HeartPulse",
    color: "#fb7185",
    colorTo: "#f43f5e",
    repoUrl: "https://github.com/syedasumayya/skin-cancer-detection",
    highlights: [
      "ResNet50 trained on HAM10000 — 7-class lesion classification",
      "Secure FastAPI REST backend with JWT authentication",
      "Real-time confidence scoring and scan history",
    ],
  },
  {
    slug: "autonomous-car",
    title: "Autonomous",
    titleAccent: "Car",
    role: "AI & Computer Vision Engineer",
    year: "2026",
    description:
      "Self-driving car project exploring the full perception pipeline — lane detection, object detection, and autonomous navigation — built with Python and OpenCV.",
    longDescription: [
      "An ongoing self-driving car project exploring core autonomous-vehicle perception: real-time lane detection, object detection, and navigation decision-making from camera input.",
      "Built with Python, OpenCV, and NumPy, the project applies classical computer vision techniques alongside trained detection models to interpret the road environment and inform driving decisions — a hands-on deep dive into the perception layer that underlies autonomous vehicles.",
    ],
    tags: ["Python", "OpenCV", "NumPy", "Lane Detection", "Object Detection"],
    iconName: "Car",
    color: "#60a5fa",
    colorTo: "#818cf8",
    highlights: [
      "Real-time lane detection from camera input",
      "Object detection for road-scene understanding",
      "Perception pipeline feeding navigation decisions",
    ],
  },
  {
    slug: "ai-learn-hub",
    title: "AI Learn",
    titleAccent: "Hub",
    role: "Full Stack Developer",
    year: "2025",
    description:
      "AI-powered adaptive learning platform delivering personalized education — AI-generated quizzes via the Claude API, progress tracking, and role-based access for students, instructors, and admins.",
    longDescription: [
      "A full-stack TypeScript e-learning platform (React + Node.js + Firebase) with AI woven directly into the learning loop — dynamic quiz generation from course content using the Claude API.",
      "Implemented Firebase Authentication with custom JWT tokens and role-based middleware (Student/Instructor/Admin), a REST API for course CRUD, enrollment, AI quiz generation and grading with weak-topic identification, plus adaptive, performance-based recommendations and progress analytics.",
    ],
    tags: ["React", "Node.js", "Firebase", "Claude API", "TypeScript"],
    iconName: "GraduationCap",
    color: "#22d3ee",
    colorTo: "#38bdf8",
    repoUrl: "https://github.com/syedasumayya/ai-learning-platform",
    highlights: [
      "Claude API-powered dynamic quiz generation",
      "Role-based auth: Student / Instructor / Admin",
      "Adaptive, performance-based learning recommendations",
    ],
  },
  {
    slug: "al-rehman-welfare",
    title: "Al Rehman",
    titleAccent: "Welfare",
    role: "Full Stack Developer",
    year: "2024",
    description:
      "A full-stack platform for a youth-led NGO supporting orphans, widows, and families in need — donation tracking, volunteer coordination, and event management with an admin dashboard.",
    longDescription: [
      "A full-stack platform built for Al Rehman Welfare, a youth-led NGO in Pakistan, to manage donations, volunteers, and events in one place — replacing manual, spreadsheet-based tracking.",
      "Built an admin dashboard giving staff visibility into activity across the platform and the ability to generate operational reports, alongside donor- and volunteer-facing interfaces.",
    ],
    tags: ["Next.js", "TypeScript", "Database Integration", "Admin Dashboard"],
    iconName: "HandHeart",
    color: "#34d399",
    colorTo: "#2dd4bf",
    repoUrl: "https://github.com/syedasumayya/alrehman-welfare",
    highlights: [
      "Donation tracking system",
      "Volunteer & event coordination",
      "Admin dashboard with reporting",
    ],
  },
  {
    slug: "arbotrix-website",
    title: "Arbotrix",
    titleAccent: "Website",
    role: "Full Stack Developer",
    year: "2026",
    description:
      "The official company website — server-side rendered with Next.js for speed and SEO, styled with Tailwind CSS, backed by Node.js API routes for dynamic content.",
    longDescription: [
      "The official Arbotrix company site, built for speed and SEO with server-side rendering in Next.js.",
      "Built the responsive UI component library from scratch and wired up backend API routes for dynamic content, optimised for performance and cross-device compatibility aligned with the company's technical branding.",
    ],
    tags: ["Next.js", "Node.js", "Tailwind CSS", "SSR"],
    iconName: "Globe",
    color: "#818cf8",
    colorTo: "#a78bfa",
    highlights: [
      "Server-side rendering for SEO & speed",
      "Responsive component library",
      "Backend API routes for dynamic content",
    ],
  },
  {
    slug: "tera-x",
    title: "Tera X —",
    titleAccent: "Robot Hardware",
    role: "Hardware Engineer",
    year: "2025",
    description:
      "Designed and assembled an autonomous robot hardware platform — wiring actuators, cameras, and proximity sensors, and interfacing them with ROS 2 for autonomous navigation.",
    longDescription: [
      "Tera X is a ground-up robotic hardware build. Designed the physical layout and wired actuators, cameras, and proximity sensors into a single coherent platform.",
      "Implemented the hardware-software interface layer using ROS 2, translating raw sensor signals into the topics and messages the navigation stack expects — enabling autonomous, obstacle-aware movement.",
    ],
    tags: ["ROS 2", "Hardware Design", "Embedded Systems"],
    iconName: "Cpu",
    color: "#fbbf24",
    colorTo: "#fb923c",
    highlights: [
      "Actuator, camera & proximity sensor wiring",
      "ROS 2 hardware-software interfacing",
      "Autonomous navigation support",
    ],
  },
  {
    slug: "emergency-response-system",
    title: "AI Emergency",
    titleAccent: "Response",
    role: "AI & System Development — Final Year Project",
    year: "2026",
    description:
      "An AI-powered application detecting threats through voice emotion recognition and movement analysis, with real-time emergency identification and alert generation.",
    longDescription: [
      "My final year project — a system that detects potential emergencies by combining voice emotion recognition with movement analysis, aiming to flag distress situations faster than manual monitoring.",
      "The system identifies emergency signals in real time and automatically generates alerts, with an emphasis on minimizing false positives while staying responsive.",
    ],
    tags: ["Voice Emotion AI", "Real-Time Detection", "Python"],
    iconName: "Siren",
    color: "#f472b6",
    colorTo: "#c084fc",
    highlights: [
      "Voice emotion recognition pipeline",
      "Movement-based threat analysis",
      "Real-time alert generation",
    ],
  },
  {
    slug: "emotion-detection",
    title: "Emotion Detection —",
    titleAccent: "EffectNet",
    role: "AI & Model Trainer",
    year: "2025",
    description:
      "Trained emotion recognition models on facial expression data using computer vision and augmentation techniques, evaluating and optimizing for accuracy.",
    longDescription: [
      "A computer vision project focused on classifying facial expressions into emotion categories using the EffectNet dataset.",
      "Applied data augmentation techniques to improve generalization, then iterated through evaluation cycles to optimize model accuracy across varied lighting and pose conditions.",
    ],
    tags: ["Computer Vision", "TensorFlow", "Model Training"],
    iconName: "ScanFace",
    color: "#c084fc",
    colorTo: "#f472b6",
    highlights: [
      "Facial expression classification",
      "Data augmentation for generalization",
      "Iterative accuracy optimization",
    ],
  },
  {
    slug: "rs-beauty-salon",
    title: "RS Beauty",
    titleAccent: "Salon",
    role: "Full Stack Developer",
    year: "2024",
    description:
      "A responsive beauty salon management website with service browsing, appointment booking, and an admin panel for managing services, inquiries, and business information.",
    longDescription: [
      "A responsive beauty salon management website built with Next.js, React, Tailwind CSS, and Node.js, giving customers an easy way to explore services and schedule appointments online.",
      "Includes an admin panel for managing salon services, customer inquiries, appointments, and business information, backed by secure APIs and persistent data storage.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    iconName: "Sparkles",
    color: "#fb923c",
    colorTo: "#f472b6",
    highlights: [
      "Service browsing & appointment booking",
      "Admin panel for salon operations",
      "Secure backend APIs & data persistence",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}