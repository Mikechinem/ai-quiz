"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function QualifierPage() {
  const router = useRouter();
  
  const goToProof = () => {
    router.push("/proof");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-4 py-10 relative overflow-hidden">

     {/* Subtle background glow accents */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#98de9d] opacity-[0.04] blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-[#98de9d] opacity-[0.03] blur-[100px] rounded-full" />

      {/* Eyebrow label */}
      <p className="text-[#98de9d] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 opacity-80">
        Your AI Income Path
      </p>

      {/* Question */}
      <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center mb-3 max-w-3xl leading-tight tracking-tight">
        How do you want AI to impact your{" "}
        <span className="text-[#98de9d]">income</span> this year?
      </h1>

      {/* Subtext closer to heading */}
      <p className="text-gray-400 text-sm md:text-base text-center max-w-xl mb-10 md:mb-12 px-2">
        Choose the path that feels most like your next step. We'll guide you from there.
      </p>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 md:gap-6 w-full max-w-4xl">

        {/* Left Option */}
        <button
          className="
            relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/80
            hover:border-[#98de9d]/70 hover:bg-gray-800/80
            hover:shadow-[0_0_40px_rgba(152,222,157,0.12)]
            text-white p-3 md:p-5 rounded-2xl
            transition-all duration-300 ease-out
            flex flex-col items-center text-center group
            active:scale-[0.98]
          "
         onClick={goToProof}
        >
          {/* Image frame */}
          <div className="w-full aspect-[4/3] relative mb-3 md:mb-5 overflow-hidden rounded-xl bg-gray-900/50">
            <Image
              src="https://res.cloudinary.com/dojweqe65/image/upload/e_background_removal/v1771299260/2_ukvk02.png"
              alt="Career growth AI"
              fill
              className="object-contain object-center scale-[1.08] group-hover:scale-[1.14] transition-transform duration-500 ease-out"
              priority
              sizes="(max-width: 768px) 45vw, 38vw"
            />
          </div>

          {/* Label pill */}
          <span className="inline-block text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#98de9d]/70 mb-1.5 md:mb-2">
            Career Growth
          </span>

          <p className="text-sm md:text-lg font-bold leading-snug">
            Improve my performance &{" "}
            <span className="text-[#cfe4d1]">earning power at work</span>
          </p>

          {/* Arrow indicator */}
          <div className="mt-3 md:mt-4 flex items-center gap-1 text-[#98de9d]/0 group-hover:text-[#98de9d]/80 transition-all duration-300 translate-y-1 group-hover:translate-y-0 text-xs font-semibold tracking-wide">
            <span>Choose this path</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>

        {/* Right Option */}
        <button
          className="
            relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/80
            hover:border-[#98de9d]/70 hover:bg-gray-800/80
            hover:shadow-[0_0_40px_rgba(152,222,157,0.12)]
            text-white p-3 md:p-5 rounded-2xl
            transition-all duration-300 ease-out
            flex flex-col items-center text-center group
            active:scale-[0.98]
          "
          onClick={goToProof}
        >
          {/* Image frame */}
          <div className="w-full aspect-[4/3] relative mb-3 md:mb-5 overflow-hidden rounded-xl bg-gray-900/50">
            <Image
              src="https://res.cloudinary.com/dojweqe65/image/upload/v1771299222/Untitled_design_yjtoft.png"
              alt="AI side income"
              fill
              className="object-cover scale-[1.0] group-hover:scale-[1.06] transition-transform duration-500 ease-out"
              priority
              sizes="(max-width: 768px) 45vw, 38vw"
            />
          </div>

          {/* Label pill */}
          <span className="inline-block text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#98de9d]/70 mb-1.5 md:mb-2">
            Side Income
          </span>

          <p className="text-sm md:text-lg font-bold leading-snug">
            Build a profitable{" "}
            <span className="text-[#cfe4d1]">side income</span>
          </p>

          {/* Arrow indicator */}
          <div className="mt-3 md:mt-4 flex items-center gap-1 text-[#98de9d]/0 group-hover:text-[#98de9d]/80 transition-all duration-300 translate-y-1 group-hover:translate-y-0 text-xs font-semibold tracking-wide">
            <span>Choose this path</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Bottom trust note */}
      <p className="text-gray-600 text-xs text-center mt-8 tracking-wide">
        Takes 2 minutes &nbsp;·&nbsp; Easy walk-through.
      </p>

    </div>
  );
}