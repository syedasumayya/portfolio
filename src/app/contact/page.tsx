import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Syeda Sumayya Zahid",
  description: "Get in touch with Syeda Sumayya Zahid for opportunities in AI engineering, robotics, and full-stack development.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}