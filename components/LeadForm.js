"use client";
import { useState } from "react";

export default function LeadForm({
  onSubmit,
  fields = [
    { name: "email", placeholder: "Email" },
    { name: "name", placeholder: "Full Name" },
    { name: "phone", placeholder: "Phone Number" },
  ],
  buttonText = "See My Result",
}) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {})
  );
  const [consent, setConsent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value || "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const safeFormData = fields.reduce(
      (acc, f) => ({ ...acc, [f.name]: formData[f.name] || "" }),
      {}
    );
    onSubmit(safeFormData);
  };

  return (
    <div className="min-h-screen bg-[#eae9f7] flex flex-col justify-center items-center text-center p-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 w-full max-w-xl">

        <p className="text-[#ef4444] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Almost there
        </p>
        <h2 className="text-black text-2xl font-extrabold mb-6">
          Where should we send your result?
        </h2>

        <form onSubmit={handleFormSubmit} className="w-full space-y-4">
          {fields.map((field, idx) => (
            <input
              key={idx}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required
              placeholder={field.placeholder}
              className="w-full p-3 rounded-xl border border-gray-200 bg-[#eae9f7] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2814de]/30 focus:border-[#2814de] transition"
            />
          ))}

          <div className="text-left text-sm text-gray-500">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-1 accent-[#2814de]"
              />
              <span>
                I agree to receive emails, training updates, and promotional messages from{" "}
                <strong className="text-black">SyncSkills</strong>. I understand I can unsubscribe at any time.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!consent}
            className="w-full bg-[#ef4444] text-white font-extrabold py-3 rounded-xl hover:bg-[#770e06] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}