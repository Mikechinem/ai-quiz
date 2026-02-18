"use client";

import { trackEvent } from "@/lib/metaPixel";
import { useState } from "react";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import LeadForm from "@/components/LeadForm";
import LoadingScreen from "@/components/LoadingScreen";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOptionClick = (value) => {
    setScore(score + value);
    setStep(step + 1);
  };

  const handleSubmit = async (formData) => {
    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, score }),
      });

      const eventID = formData.email;
      trackEvent("Lead", { score }, eventID);


      // Wait 2 seconds before following the server redirect
      setTimeout(() => {
        if (res.redirected) {
          window.location.href = res.url; // server-side redirect URL
        } else {
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      }, 1000);

    } catch (err) {
      console.error(err);
      alert("Error submitting form");
      setLoading(false);
    }
  };

  if (loading) return <LoadingScreen score={score} />;

  if (step < questions.length)
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center p-4">
        <QuestionCard
          question={questions[step]}
          onAnswer={handleOptionClick}
        />
        <ProgressBar step={step} total={questions.length} />
      </div>
    );

  return <LeadForm onSubmit={handleSubmit} />;
}
