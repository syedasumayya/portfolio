import {
  Rocket,
  Bot,
  Car,
  HeartPulse,
  GraduationCap,
  Globe,
  Siren,
  ScanFace,
  HandHeart,
  Cpu,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/data/projects";

export const projectIconMap: Record<Project["iconName"], LucideIcon> = {
  Rocket,
  Bot,
  Car,
  HeartPulse,
  GraduationCap,
  Globe,
  Siren,
  ScanFace,
  HandHeart,
  Cpu,
  Sparkles,
};