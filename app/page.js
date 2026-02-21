"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Rocket, ShieldCheck, Zap, ArrowRight, Play, Check } from 'lucide-react';

const pulseBlue = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(40, 20, 222, 0.25); }
  70% { box-shadow: 0 0 0 10px rgba(40, 20, 222, 0); }
  100% { box-shadow: 0 0 0 0 rgba(40, 20, 222, 0); }
`;

const ConversionButton = styled.button`
  background-color: #2814de;
  color: #ffffff;
  animation: ${pulseBlue} 2.5s infinite ease-out;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #1e0fb5;
    transform: translateY(-2px) scale(1.02);
  }
`;

const GlassCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  transition: all 0.4s ease;
  &:hover {
    border-color: rgba(40, 20, 222, 0.4);
    box-shadow: 0 8px 32px rgba(40, 20, 222, 0.08);
    transform: translateY(-5px);
  }
`;

export default function MasterclassPage() {
  return (
    <div className="min-h-screen bg-[#eae9f7] text-[#111111] selection:bg-[#2814de] selection:text-white">

      {/* Sticky Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-gray-200 bg-[#eae9f7]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter uppercase italic">
            Sync<span className="text-[#2814de] not-italic">Skills</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-[#2814de] transition">The Method</a>
            <a href="#" className="hover:text-[#2814de] transition">Results</a>
          </div>
          <ConversionButton className="px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest cursor-pointer">
            Access Masterclass
          </ConversionButton>
        </div>
      </nav>

      <main className="relative pt-32 md:pt-48 pb-20 overflow-hidden">

        {/* Soft background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2814de]/5 blur-[140px] rounded-full -z-10" />

        <div className="container mx-auto px-6 text-center">

          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-[#eae9f7]" />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-600 tracking-wide uppercase">
              Join 5.2k+ AI Strategists
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-black">
            SCALE WITH <br />
            <span className="text-[#2814de]">AI BIO-QUIZZES</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-12 leading-relaxed">
            Stop trading time for leads. Build a self-optimizing sales machine that identifies high-ticket buyers in seconds.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <ConversionButton className="w-full md:w-auto px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 cursor-pointer">
              START BUILDING <ArrowRight size={24} />
            </ConversionButton>

            <button className="flex items-center gap-3 text-gray-500 hover:text-[#2814de] transition-all font-bold cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#2814de]/60 transition-all bg-white shadow-sm">
                <Play size={18} fill="currentColor" />
              </div>
              SEE HOW IT WORKS
            </button>
          </div>

          {/* Value Prop Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 text-left">
            {features.map((f, i) => (
              <GlassCard key={i} className="p-10 rounded-[2.5rem]">
                <div className="text-[#2814de] mb-6">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-3">
                  {f.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Check size={14} className="text-[#2814de]" /> {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-20 border-t border-gray-200 text-center">
        <p className="text-gray-400 text-sm font-medium tracking-tighter">
          SYSTEM STATUS: <span className="text-[#2814de]">ALL NODES OPERATIONAL</span>
        </p>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "The Logic",
    desc: "Psychological framing that forces lead engagement.",
    icon: <Rocket size={32} />,
    points: ["High-intent filtering", "60% avg. opt-in rate", "Identity-based tagging"]
  },
  {
    title: "The Engine",
    desc: "Serverless AI integration that generates custom value.",
    icon: <Zap size={32} />,
    points: ["GPT-4o Integration", "Dynamic PDF Results", "Zero-latency response"]
  },
  {
    title: "The Close",
    desc: "Automated hand-off to your high-ticket booking flow.",
    icon: <ShieldCheck size={32} />,
    points: ["Calendly Auto-sync", "Lead Scoring v2", "SMS follow-up logic"]
  }
];