"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05070d] text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#05070d_40%,#0a0f25_100%)]" />

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 relative z-20">
        <div className="flex items-center gap-2">
          <Image src="/assets/plura-logo.svg" alt="Plura" width={28} height={28} />
          <span className="font-bold text-lg tracking-tight">Plura.</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Documentation</a>
          <a href="#">Features</a>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
          Get Started
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center pt-20 pb-28 px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs mb-4 z-10 bg-white/5 backdrop-blur-sm">
          Plura Connect 2023 <span className="text-blue-400">›</span>
        </div>

        {/* Tagline */}
        <h2 className="text-lg text-gray-300 relative z-10">
          Build your website in one{" "}
          <span className="text-blue-400 font-medium">place</span>.
        </h2>

        {/* Huge Background Title */}
        <h1 className="absolute top-6 md:top-0 left-1/2 -translate-x-1/2 text-[140px] md:text-[220px] font-extrabold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent opacity-10 pointer-events-none select-none">
          Plura
        </h1>

        {/* Product Mockup */}
        <div className="mt-16 relative z-10 max-w-6xl w-full px-4">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
            <Image
              src="/assets/preview.png"
              alt="Plura Website Builder Preview"
              width={1200}
              height={650}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
