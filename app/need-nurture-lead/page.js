"use client";
import { useEffect, useState } from "react";
import { trackEvent } from "../../lib/meta";

function buildCalendlyLink(baseLink, name, answers, score) {
  try {
    const url = new URL(baseLink);
    if (name) url.searchParams.set("name", name);
    if (score) url.searchParams.set("a1", `Quiz Score: ${score}`);
    if (answers && answers.length > 0) {
      answers.slice(0, 5).forEach((a, i) => {
        url.searchParams.set(`a${i + 2}`, `${a.question}: ${a.answer}`);
      });
    }
    return url.toString();
  } catch {
    return baseLink;
  }
}

export default function NeedNurtureLead() {
  const baseCalendarLink = "https://calendly.com/oluchi-syncskills/ai-mastery-clarity-call";
  const whatsappLink = "https://chat.whatsapp.com/EDuJoAlKEjtLFM008IN7cv";
  const [userData, setUserData] = useState({ email: "", phone: "", name: "", answers: [], score: "" });

  const testimonials = [
    {
      image: "https://www.syncskills.com.au/media/Chibuzor Kate-1.png",
      quote: "I had zero clarity on where to start with Anything Tech. After a session, I had a clear roadmap. Within few weeks I landed my first AI-powered role.",
      name: "Kate C.", role: "SyncSkills Member", initial: "K",
    },
    {
      image: "https://www.syncskills.com.au/media/Pius Azeta 1.png",
      quote: "I thought AI was too technical for me. The clarity session completely changed that. Now I have a job that helps me have time freedom.",
      name: "Pius Azeta.", role: "SyncSkills Member", initial: "P",
    },
    {
      image: "https://www.syncskills.com.au/media/Olabisi Akomolafe.jpg",
      quote: "I wasn't sure if SyncSkills was for me. One honest 15-minute call gave me all the answers. Best decision I made this year.",
      name: "Olabisi A.", role: "SyncSkills Member", initial: "O",
    },
  ];

  useEffect(() => {
    const email = sessionStorage.getItem("user_email") || "";
    const phone = sessionStorage.getItem("user_phone") || "";
    const name = sessionStorage.getItem("user_name") || "";
    const score = sessionStorage.getItem("quiz_score") || "";
    const raw = sessionStorage.getItem("quiz_answers");
    const answers = raw ? JSON.parse(raw) : [];
    setUserData({ email, phone, name, answers, score });
  }, []);

  const handleCalendarClick = () => {
    trackEvent("Schedule", { email: userData.email, phone: userData.phone }, null, { content_name: "NeedNurture_CalendarClick" });
  };

  const handleWhatsappClick = () => {
    trackEvent("Contact", { email: userData.email, phone: userData.phone }, null, { content_name: "NeedNurture_WhatsAppClick" });
  };

  const calendarLink = buildCalendlyLink(baseCalendarLink, userData.name, userData.answers, userData.score);

  return (
    <div className="min-h-screen bg-[#eae9f7] flex flex-col items-center px-6 py-16 text-center">

      <p className="text-[#ef4444] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
        Free 15-Minute Clarity Session
      </p>

      <h1 className="text-black text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl mb-4">
        🤔 Oops! Looks like you're not looking to get started{" "}
        <span className="text-[#2814de]">right now...</span>
      </h1>

      <p className="text-gray-500 text-sm md:text-lg max-w-2xl mb-6">
        Book a free 15-minute clarity call. No pitch. No pressure. Just honest answers to your questions about AI, which path fits your background, and whether this is the right move for you right now.
      </p>

      {/* What we'll cover */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl mb-12">
        {[
          { icon: "🤖", label: "What AI actually is & isn't" },
          { icon: "💸", label: "How to start earning with AI" },
          { icon: "🧭", label: "Which path fits your background" },
          { icon: "✅", label: "Whether this is right for you" },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl px-3 py-4 flex flex-col items-center gap-2 shadow-sm">
            <span className="text-2xl">{item.icon}</span>
            <p className="text-gray-700 text-xs md:text-sm font-medium leading-snug">{item.label}</p>
          </div>
        ))}
      </div>

      <a
        href={calendarLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCalendarClick}
        className="group inline-flex items-center justify-center gap-3 bg-[#ef4444] text-white font-extrabold text-base md:text-lg px-10 py-4 rounded-xl hover:bg-[#c93333] hover:scale-105 transition-all duration-300 w-full max-w-sm md:max-w-md mb-4 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        Book My Free Clarity Call
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      <p className="text-gray-400 text-xs mb-16 tracking-wide">
        15 minutes &nbsp;·&nbsp; Completely free &nbsp;·&nbsp; No obligation to buy
      </p>

      {/* TESTIMONIALS */}
      <div className="w-full max-w-5xl mb-6">
        <p className="text-[#2814de] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          What others said after their call
        </p>
        <h2 className="text-black text-2xl md:text-3xl font-extrabold mb-10 leading-tight">
          Don't take our word for it.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="h-1 w-full bg-[#2814de]" />
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-50">
                <img src={t.image} alt={t.name} className="w-full h-full object-contain" />
              </div>
              <div className="px-5 py-5 flex flex-col flex-1">
                <span className="text-[#2814de] text-4xl font-serif leading-none">"</span>
                <p className="text-gray-700 text-sm italic leading-relaxed -mt-2 mb-4 flex-1">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#eae9f7] border border-[#2814de]/30 flex items-center justify-center text-[#2814de] text-xs font-bold shrink-0">{t.initial}</div>
                  <div className="text-left">
                    <p className="text-black text-xs font-bold">{t.name}</p>
                    <p className="text-gray-400 text-[10px] tracking-wide uppercase">{t.role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-[#2814de] text-[10px] font-semibold tracking-wide shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L5 9L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href={calendarLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCalendarClick}
        className="group inline-flex items-center justify-center gap-3 bg-[#ef4444] text-white font-extrabold text-base md:text-lg px-10 py-4 rounded-xl hover:bg-[#c93333] hover:scale-105 transition-all duration-300 w-full max-w-sm md:max-w-md mt-10 mb-4 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        I'm Ready — Book My Call
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      <p className="text-gray-400 text-xs mb-20 tracking-wide">
        Spots are limited &nbsp;·&nbsp; Book before they fill up
      </p>

      {/* WHATSAPP SECTION */}
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl px-6 py-8 flex flex-col items-center shadow-sm">
        <p className="text-[#2814de] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Not ready to book yet?
        </p>
        <h3 className="text-black text-xl md:text-2xl font-extrabold mb-3 leading-tight">
          Join our free community first
        </h3>
        <p className="text-gray-500 text-sm max-w-md mb-6">
          500+ members getting daily AI tips, income ideas, and support — completely free. Start here and book when you're ready.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsappClick}
          className="group inline-flex items-center justify-center gap-3 border-2 border-[#2814de] text-[#2814de] font-bold text-sm md:text-base px-8 py-3 rounded-xl hover:bg-[#2814de] hover:text-white transition-all duration-300 w-full max-w-xs"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Join WhatsApp Community
        </a>
        <p className="text-gray-400 text-xs mt-4 tracking-wide">
          Free to join &nbsp;·&nbsp; No spam &nbsp;·&nbsp; Leave anytime
        </p>
      </div>

    </div>
  );
}