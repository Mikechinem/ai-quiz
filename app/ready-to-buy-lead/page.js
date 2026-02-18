"use client";
import { useEffect } from "react";
import { trackEvent } from "../../lib/meta";

export default function ReadyToBuyPage() {
  const whatsappLink = "https://chat.whatsapp.com/EDuJoAlKEjtLFM008IN7cv";

  const closers = [
    {
      name: "Oluchi",
      role: "AI Income Strategist",
      link: "https://calendly.com/oluchi-syncskills/ai-mastery-clarity-call",
      initial: "O",
    },
    {
      name: "Ijeoma",
      role: "AI Career Coach",
      link: "https://calendly.com/ijeoma-syncskills/ai-mastery-clarity-call",
      initial: "I",
    },
    {
      name: "Michael",
      role: "AI Side Income Expert",
      link: "https://calendly.com/mikechinenwork/ai-mastery-clarity-call-with-michael",
      initial: "M",
    },
  ];

  const testimonials = [
    {
      image: "https://res.cloudinary.com/dojweqe65/image/upload/v1771339437/Jaabir_Jimoh_k33veh.png",
      quote: "I was skeptical at first — but the clarity call removed every doubt I had. I got on the call unsure, and got off it ready to invest in myself. Best 15 minutes I've ever spent.",
      name: "Jaabir J.",
      role: "SyncSkills Member",
      initial: "J",
    },
    {
      image: "https://res.cloudinary.com/dojweqe65/image/upload/v1771339427/Psalms_Adams_fnkntw.jpg",
      quote: "that confidence call i got from Tayo changed everything for me. I even had the luxury of job offers to reject a 240k no interview drill income after mastering what Tayo & Noah thought in the master class",
      name: "Psalm A.",
      role: "SyncSkills Member",
      initial: "P",
    },
    {
      image: "https://res.cloudinary.com/dojweqe65/image/upload/v1771339428/Precious_pvocgb.jpg",
      quote: "I almost didn't book the call. After it, I finally had a plan to replace my 9-5 income with AI — I now work 4 hours a day and spend the rest with loved ones. That call started it all.",
      name: "Precious.",
      role: "SyncSkills Member",
      initial: "P",
    },
  ];

  // Track scroll depth
  useEffect(() => {
    let tracked25 = false;
    let tracked50 = false;
    let tracked75 = false;
    let tracked100 = false;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 25 && !tracked25) {
        trackEvent("ScrollDepth", { depth: "25%" });
        tracked25 = true;
      }
      if (scrollPercentage >= 50 && !tracked50) {
        trackEvent("ScrollDepth", { depth: "50%" });
        tracked50 = true;
      }
      if (scrollPercentage >= 75 && !tracked75) {
        trackEvent("ScrollDepth", { depth: "75%" });
        tracked75 = true;
      }
      if (scrollPercentage >= 100 && !tracked100) {
        trackEvent("ScrollDepth", { depth: "100%" });
        tracked100 = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCalendlyClick = (closerName) => {
    trackEvent("ReadyToBuy_CalendlyClick", { closer: closerName });
  };

  const handleWhatsappClick = () => {
    trackEvent("ReadyToBuy_WhatsAppClick");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-6 py-16 text-center relative overflow-hidden">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#98de9d] opacity-[0.04] blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-[#98de9d] opacity-[0.03] blur-[100px] rounded-full" />

      {/* HERO SECTION */}
      <p className="text-[#98de9d] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 opacity-80">
        Free 15-Minute Clarity Session
      </p>

      <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl mb-4">
        You rock 🔥 <br /> 100 steps ahead of most people{" "}
        <span className="text-[#98de9d]">let's unlock your dream life</span>
      </h1>

      <p className="text-gray-400 text-sm md:text-lg max-w-2xl mb-6">
        Book a free 15-minute clarity call. No pitch. No pressure. Just honest answers to your questions about AI, which path fits your background, and whether this is the right move for you right now.
      </p>

      {/* CLOSERS SECTION */}
      <p className="text-[#98de9d] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 opacity-80">
        Pick your adviser
      </p>
      <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
        Choose who you'd like to speak with
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-6">
        {closers.map((closer, i) => (
          <a
            key={i}
            href={closer.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCalendlyClick(closer.name)}
            className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/60 hover:border-[#98de9d]/70 hover:shadow-[0_0_30px_rgba(152,222,157,0.12)] rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 active:scale-[0.98]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#98de9d]/40 to-transparent" />
            <div className="w-14 h-14 rounded-full bg-[#98de9d]/20 border border-[#98de9d]/40 flex items-center justify-center text-[#98de9d] text-xl font-bold mb-3 group-hover:bg-[#98de9d]/30 transition-colors duration-300">
              {closer.initial}
            </div>
            <p className="text-white font-bold text-sm mb-1">{closer.name}</p>
            <p className="text-gray-500 text-[10px] tracking-wide uppercase mb-4">{closer.role}</p>
            <div className="flex items-center gap-2 text-[#98de9d] text-xs font-semibold group-hover:gap-3 transition-all duration-300">
              <span>Book with {closer.name}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <p className="text-gray-600 text-xs mb-16 tracking-wide">
        15 minutes &nbsp;·&nbsp; Completely free &nbsp;·&nbsp; No obligation to buy
      </p>

      {/* TESTIMONIALS */}
      <div className="w-full max-w-5xl mb-6">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-10 leading-tight">
          Don't take our word for it.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="relative">
              <div className="absolute inset-0 rounded-2xl bg-[#98de9d]/5 blur-xl scale-105 pointer-events-none" />
              <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/60 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#98de9d]/60 to-transparent z-10" />
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-900">
                  <img src={t.image} alt={t.name} className="w-full h-full object-contain" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-800/90 to-transparent" />
                </div>
                <div className="px-5 py-5 flex flex-col flex-1">
                  <span className="text-[#98de9d] text-4xl font-serif leading-none">"</span>
                  <p className="text-white text-sm italic leading-relaxed -mt-2 mb-4 flex-1">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#98de9d]/20 border border-[#98de9d]/40 flex items-center justify-center text-[#98de9d] text-xs font-bold shrink-0">{t.initial}</div>
                    <div className="text-left">
                      <p className="text-white text-xs font-bold">{t.name}</p>
                      <p className="text-gray-500 text-[10px] tracking-wide uppercase">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECOND CTA (Calendly) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-6">
        {closers.map((closer, i) => (
          <a
            key={i}
            href={closer.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCalendlyClick(closer.name)}
            className="group inline-flex items-center justify-center gap-2 bg-[#98de9d] text-black font-extrabold text-sm px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(152,222,157,0.2)] hover:shadow-[0_0_40px_rgba(152,222,157,0.4)] hover:scale-105 transition-all duration-300"
          >
            Book with {closer.name}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>

      {/* WHATSAPP BUTTON */}
      <div className="relative w-full max-w-2xl">
        <div className="absolute inset-0 rounded-2xl bg-[#98de9d]/5 blur-xl scale-105 pointer-events-none" />
        <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-8 flex flex-col items-center">
          <p className="text-[#98de9d] text-xs font-semibold tracking-[0.2em] uppercase mb-3 opacity-80">
            Not ready to book yet?
          </p>
          <h3 className="text-white text-xl md:text-2xl font-extrabold mb-3 leading-tight">
            Join our free community first
          </h3>
          <p className="text-gray-400 text-sm max-w-md mb-6">
            500+ members getting daily AI tips, income ideas, and support — completely free. Start here and book when you're ready.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            className="group inline-flex items-center justify-center gap-3 border-2 border-[#98de9d]/60 text-[#98de9d] font-bold text-sm md:text-base px-8 py-3 rounded-xl hover:bg-[#98de9d]/10 hover:border-[#98de9d] transition-all duration-300 w-full max-w-xs"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join WhatsApp Community
          </a>
          <p className="text-gray-600 text-xs mt-4 tracking-wide">
            Free to join &nbsp;·&nbsp; No spam &nbsp;·&nbsp; Leave anytime
          </p>
        </div>
      </div>
    </div>
  );
}