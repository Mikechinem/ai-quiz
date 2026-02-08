"use client";

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

  // Called when user selects an answer
  const handleAnswer = (value) => {
    setScore(score + value);
    setStep(step + 1);
  };

  // Called when form is submitted
  const handleSubmit = async (formData) => {
    setLoading(true);
    const { name, email, phone } = formData;

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, score }),
      });

      const data = await res.json();

      if (data.redirect) {
        // Small delay to show "calculating" animation
        setTimeout(() => {
          window.location.href = data.redirect;
        }, 2000);
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
      setLoading(false);
    }
  };

  // Show loading screen while submitting
  if (loading) return <LoadingScreen score={score} />;

  // Show question card if there are still steps left
  if (step < questions.length) {
    const currentQuestion = questions[step];
    if (!currentQuestion) return null; // Safety check

    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center p-4">
        <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
        <ProgressBar step={step + 1} total={questions.length} />
      </div>
    );
  }

  // Show lead form when all questions are answered
  return <LeadForm onSubmit={handleSubmit} />;
}
