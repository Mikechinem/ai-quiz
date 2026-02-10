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
  theme = { bg: "black", text: "white", accent: "#98de9d" },
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
    <div
      style={{ backgroundColor: theme.bg }}
      className="min-h-screen flex flex-col justify-center items-center text-center p-4"
    >
      <form onSubmit={handleFormSubmit} className="w-full max-w-xl space-y-4">
        <h2 style={{ color: theme.text }} className="text-2xl mb-4">
          Almost done. Where should we send your result?
        </h2>

        {fields.map((field, idx) => (
          <input
            key={idx}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required
            placeholder={field.placeholder}
            style={{
              color: theme.text,
              backgroundColor: theme.bg,
              borderColor: theme.text,
            }}
            className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:ring-2"
          />
        ))}

         <div className="text-left text-sm mt-2" style={{ color: theme.text }}>
    <label className="flex items-start gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={consent}
      onChange={(e) => setConsent(e.target.checked)}
      required
      className="mt-1"
    />
    <span>
      I agree to receive emails, training updates, and promotional messages from
      <strong> SyncSkills</strong>. I understand I can unsubscribe at any time.
    </span>
  </label>
</div>


       <button
  type="submit"
  disabled={!consent}
  style={{ backgroundColor: theme.accent, opacity: consent ? 1 : 0.6 }}
  className="w-full text-black py-3 rounded hover:opacity-90 transition"
>
  {buttonText}
</button>

      </form>
    </div>
  );
}
