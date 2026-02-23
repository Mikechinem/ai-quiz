"use client";

import { trackEvent } from "@/lib/meta";
import { useState } from "react";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import LeadForm from "@/components/LeadForm";
import LoadingScreen from "@/components/LoadingScreen";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOptionClick = (value, label) => {
    setScore(score + value);
    setAnswers(prev => [...prev, { question: questions[step].text, answer: label }]);
    setStep(step + 1);
  };

  const handleSubmit = async (formData) => {
    setLoading(true);

    // Save everything to sessionStorage so other pages can use it
    sessionStorage.setItem("user_email", formData.email || "");
    sessionStorage.setItem("user_phone", formData.phone || "");
    sessionStorage.setItem("user_name", formData.name || "");
    sessionStorage.setItem("quiz_answers", JSON.stringify(answers));
    sessionStorage.setItem("quiz_score", String(score));

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, score, answers }),
      });

      const data = await res.json();

      if (data.success) {
        trackEvent("Lead", { email: formData.email, phone: formData.phone }, formData.email);
        setTimeout(() => {
          window.location.href = data.redirectPath;
        }, 1000);
      } else {
        alert(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
      setLoading(false);
    }
  };

  if (loading) return <LoadingScreen score={score} />;

  if (step < questions.length)
    return (
      <div className="min-h-screen bg-[#eae9f7] flex flex-col justify-center items-center p-4">
        <QuestionCard
          question={questions[step]}
          onAnswer={handleOptionClick}
        />
        <ProgressBar step={step} total={questions.length} />
      </div>
    );

  return <LeadForm onSubmit={handleSubmit} />;
}