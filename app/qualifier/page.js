"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function QualifierPage() {
  const router = useRouter();

  const goToProof = () => {
    router.push("/proof");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#eae9f7] px-4 py-10">

      {/* Eyebrow label */}
      <p className="text-[#ef4444] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
        Your AI Income Path
      </p>

      {/* Question */}
      <h1 className="text-black text-3xl md:text-5xl font-extrabold text-center mb-3 max-w-3xl leading-tight tracking-tight">
        How do you want AI to impact your{" "}
        <span className="text-[#2814de]">income</span> this year?
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-sm md:text-base text-center max-w-xl mb-10 md:mb-12 px-2">
        Choose the path that feels most like your next step. We'll guide you from there.
      </p>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 md:gap-6 w-full max-w-4xl">

        {/* Left Option */}
        <button
          className="
            relative bg-white border border-gray-200
            hover:border-[#2814de]/60 hover:shadow-lg
            p-3 md:p-5 rounded-2xl
            transition-all duration-300 ease-out
            flex flex-col items-center text-center group
            active:scale-[0.98] shadow-sm
          "
          onClick={goToProof}
        >
          {/* Top accent line on hover */}
          <div className="absolute inset-x-0 top-0 h-1 bg-[#2814de] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Image frame */}
          <div className="w-full aspect-[4/3] relative mb-3 md:mb-5 overflow-hidden rounded-xl bg-gray-50">
            <Image
              src="https://www.syncskills.com.au/media/noah-img-ai.png"
              alt="Career growth AI"
              fill
              className="object-contain object-center scale-[1.08] group-hover:scale-[1.14] transition-transform duration-500 ease-out"
              priority
              sizes="(max-width: 768px) 45vw, 38vw"
            />
          </div>

          {/* Label pill */}
          <span className="inline-block text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#2814de] mb-1.5 md:mb-2">
            Career Growth
          </span>

          <p className="text-sm md:text-lg font-bold leading-snug text-black">
            Improve my performance &{" "}
            <span className="text-[#2814de]">earning power at work</span>
          </p>

          {/* Arrow indicator */}
          <div className="mt-3 md:mt-4 flex items-center gap-1 text-[#ef4444] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 text-xs font-semibold tracking-wide">
            <span>Choose this path</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>

        {/* Right Option */}
        <button
          className="
            relative bg-white border border-gray-200
            hover:border-[#2814de]/60 hover:shadow-lg
            p-3 md:p-5 rounded-2xl
            transition-all duration-300 ease-out
            flex flex-col items-center text-center group
            active:scale-[0.98] shadow-sm
          "
          onClick={goToProof}
        >
          {/* Top accent line on hover */}
          <div className="absolute inset-x-0 top-0 h-1 bg-[#2814de] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Image frame */}
          <div className="w-full aspect-[4/3] relative mb-3 md:mb-5 overflow-hidden rounded-xl bg-gray-50">
            <Image
              src="https://www.syncskills.com.au/media/tayo-ai-nbg.png"
              alt="AI side income"
              fill
              className="object-cover scale-[1.0] group-hover:scale-[1.06] transition-transform duration-500 ease-out"
              priority
              sizes="(max-width: 768px) 45vw, 38vw"
            />
          </div>

          {/* Label pill */}
          <span className="inline-block text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#2814de] mb-1.5 md:mb-2">
            Side Income
          </span>

          <p className="text-sm md:text-lg font-bold leading-snug text-black">
            Build a profitable{" "}
            <span className="text-[#2814de]">side income</span>
          </p>

          {/* Arrow indicator */}
          <div className="mt-3 md:mt-4 flex items-center gap-1 text-[#ef4444] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 text-xs font-semibold tracking-wide">
            <span>Choose this path</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Bottom trust note */}
      <p className="text-gray-400 text-xs text-center mt-8 tracking-wide">
        Takes 2 minutes &nbsp;·&nbsp; Easy walk-through.
      </p>

    </div>
  );
}