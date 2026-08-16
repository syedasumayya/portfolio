"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { projectIconMap } from "./projectIcons";

const LANDMARK_SETS: Record<string, { nodes: [number, number][]; edges: [number, number][] }> = {
  hand: {
    nodes: [
      [50, 78], [44, 62], [40, 46], [37, 34], [35, 25],
      [54, 58], [55, 38], [56, 24], [57, 14],
      [50, 55], [50, 33], [50, 18], [50, 8],
      [46, 57], [45, 36], [45, 21], [44, 11],
      [40, 61], [37, 47], [35, 37], [33, 29],
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4],
      [0, 5], [5, 6], [6, 7], [7, 8],
      [0, 9], [9, 10], [10, 11], [11, 12],
      [0, 13], [13, 14], [14, 15], [15, 16],
      [0, 17], [17, 18], [18, 19], [19, 20],
      [5, 9], [9, 13], [13, 17],
    ],
  },
  face: {
    nodes: [
      [50, 20], [38, 28], [62, 28], [50, 35], [42, 45],
      [58, 45], [50, 50], [35, 55], [65, 55], [50, 65],
      [42, 75], [58, 75], [50, 82],
    ],
    edges: [
      [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5],
      [4, 6], [5, 6], [6, 9], [7, 9], [8, 9], [9, 10],
      [9, 11], [10, 12], [11, 12],
    ],
  },
};

function LandmarkOverlay({ color, kind }: { color: string; kind: "hand" | "face" }) {
  const set = LANDMARK_SETS[kind];
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute w-[70%] h-[70%] opacity-70"
      style={{ top: "12%", left: kind === "hand" ? "8%" : "auto", right: kind === "face" ? "8%" : "auto" }}
    >
      {set.edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={set.nodes[a][0]}
          y1={set.nodes[a][1]}
          x2={set.nodes[b][0]}
          y2={set.nodes[b][1]}
          stroke={color}
          strokeWidth="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
        />
      ))}
      {set.nodes.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="1"
          fill={color}
          animate={{ opacity: [0.5, 1, 0.5], r: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

const LANDMARK_BY_SLUG: Record<string, "hand" | "face"> = {
  "dodo-bot-perception": "hand",
  "skin-cancer-detection": "face",
  "autonomous-car": "face",
  "emotion-detection": "face",
};

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="absolute inset-0">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-base" />
      </div>
    );
  }

  const Icon = projectIconMap[project.iconName];
  const landmarkKind = LANDMARK_BY_SLUG[project.slug];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 30% 25%, ${project.color}28 0%, transparent 55%), radial-gradient(circle at 75% 80%, ${project.colorTo}1c 0%, transparent 50%), linear-gradient(160deg, #14161f 0%, #0a0c12 100%)`,
      }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
        <defs>
          <pattern id={`grid-${project.slug}`} width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke={project.color} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.slug})`} />
      </svg>

      <motion.div
        className="absolute w-80 h-80 rounded-full blur-[100px]"
        style={{ background: project.color, opacity: 0.28, top: "5%", left: "10%" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-[90px]"
        style={{ background: project.colorTo, opacity: 0.22, bottom: "5%", right: "10%" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {landmarkKind && <LandmarkOverlay color={project.color} kind={landmarkKind} />}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-[2rem] flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${project.color}18, ${project.colorTo}0c)`,
            border: `1px solid ${project.color}38`,
            boxShadow: `0 0 100px 14px ${project.color}22`,
          }}
        >
          <Icon size={72} style={{ color: project.color }} strokeWidth={1.3} />
        </motion.div>
      </div>

      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: i % 2 === 0 ? project.color : project.colorTo,
            top: `${20 + i * 18}%`,
            left: `${15 + ((i * 23) % 70)}%`,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-base" />
    </div>
  );
}