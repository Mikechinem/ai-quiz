"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import AnimatedStats from "@/components/AnimatedStats";

export default function ProofPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#eae9f7] flex flex-col items-center justify-center px-4 py-16">

      {/* Page Headline */}
      <div className="text-center mb-10 max-w-2xl">
        <p className="text-[#ef4444] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Your Instructors
        </p>
        <h1 className="text-black text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
          Meet Noah & Tayo — the minds behind your AI income breakthrough
        </h1>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl items-center">

        {/* Left Column - Stats */}
        <AnimatedStats />

        {/* Right Column - Image Card + Caption */}
        <div className="flex flex-col mx-auto max-w-sm md:max-w-full w-full">

          {/* Image Card */}
          <div className="relative w-full aspect-[3/4] rounded-t-2xl overflow-hidden shadow-lg border border-gray-200 border-b-0 group bg-white">

            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-[#ef4444] z-20" />

            <Image
              src="https://www.syncskills.com.au/media/Noah&Tayo.PNG"
              alt="Noah and Tayo"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
            />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent z-10 pointer-events-none" />

          </div>

          {/* Caption strip attached below image */}
          <div className="bg-white border border-gray-200 border-t-0 rounded-b-2xl px-5 py-4 shadow-lg">
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Together, Noah & Tayo have helped 230+ people land AI-powered income streams from scratch.{" "}
              <span className="text-black font-semibold">Take the quiz to find your exact path.</span>
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Button */}
      <button
        onClick={() => router.push("/quiz")}
        className="mt-12 bg-[#ef4444] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#c93333] hover:scale-105 transition-all duration-300 shadow-md w-full max-w-sm md:max-w-lg flex items-center justify-center gap-3 group"
      >
        <span>Continue to Quiz</span>
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </div>
  );
}