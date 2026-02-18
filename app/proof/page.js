"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import AnimatedStats from "@/components/AnimatedStats";

export default function ProofPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-16">

      {/* Top Row - stacks on mobile, side by side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl items-center">

        {/* Left Column - Stats */}
        <AnimatedStats />

        {/* Right Column - Image Card */}
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-gray-700/40 group mx-auto max-w-sm md:max-w-full">

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#98de9d]/20 via-transparent to-[#98de9d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#98de9d]/60 to-transparent z-20" />

          <Image
            src="https://res.cloudinary.com/dojweqe65/image/upload/v1771309098/Noah_Tayo_ezqxp6.png"
            alt="AI Success"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
          />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900/70 to-transparent z-10 pointer-events-none" />

        </div>

      </div>

      {/* Bottom Button */}
      <button
        onClick={() => router.push("/quiz")}
        className="mt-12 bg-[#98de9d] text-black font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg w-full max-w-sm md:max-w-lg flex items-center justify-center gap-3 group"
      >
        <span>Continue to Quiz</span>
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </div>
  );
}