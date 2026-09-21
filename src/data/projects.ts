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
    slug: "graphcite-rag-system",
    title: "GraphCite —",
    titleAccent: "RAG System",
    role: "AI Researcher & Full Stack Developer",
    year: "2026",
    description:
      "Enterprise-grade Retrieval-Augmented Generation system with a Two-Stage Retrieval pipeline (vector search + cross-encoder re-ranking), conversation memory, and strict inline citations to reduce hallucinations.",
    longDescription: [
      "GraphCite is a RAG system built for academic and enterprise knowledge management. It synthesizes information across complex, multi-document sources and verifies every claim with an inline citation linked directly to the source text.",
      "The retrieval pipeline is two-stage: vector search first pulls the top 10 chunks from Qdrant, then a cross-encoder re-ranker (bge-reranker-base) narrows that down to the best 3 — cutting hallucinations before the LLM (Groq's gpt-oss-120b) ever sees the context. The system is explicitly instructed to answer 'I don't know' when the retrieved context doesn't support an answer.",
    ],
    tags: ["LlamaIndex", "Groq", "Qdrant", "FastAPI", "Next.js"],
    iconName: "Sparkles",
    color: "#f472b6",
    colorTo: "#c084fc",
    repoUrl: "https://github.com/syedasumayya/GraphCite-RAG-System",
    highlights: [
      "Two-stage retrieval: vector search + cross-encoder re-ranking",
      "Strict inline citations, linked to source text",
      "Conversation memory for natural follow-up queries",
    ],
  },
  {
    slug: "medipredict",
    title: "MediPredict —",
    titleAccent: "AI Symptom Checker",
    role: "AI/ML & Full Stack Developer",
    year: "2026",
    description:
      "Production-grade full-stack AI app that analyzes natural-language symptom descriptions, predicts likely conditions, and recommends a triage level — Self-Care, Consult a Doctor, or Emergency Room.",
    longDescription: [
      "MediPredict takes a patient's plain-language description of their symptoms and turns it into a structured triage recommendation — Self-Care, Consult Doctor, or Emergency Room — using sentence embeddings and a trained logistic regression classifier.",
      "The pipeline runs symptoms through a Sentence Transformer (all-MiniLM-L6-v2) to generate embeddings, classifies them, and returns a disease and urgency prediction through a FastAPI backend to a Next.js frontend. Fully Dockerized for reproducible deployment.",
    ],
    tags: ["Next.js", "FastAPI", "Sentence Transformers", "Scikit-Learn", "Docker"],
    iconName: "HeartPulse",
    color: "#34d399",
    colorTo: "#22d3ee",
    repoUrl: "https://github.com/syedasumayya/medipredict",
    highlights: [
      "NLP symptom understanding via sentence embeddings",
      "Automated disease + triage-level prediction",
      "Dockerized, full-stack, production-grade architecture",
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
  
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}