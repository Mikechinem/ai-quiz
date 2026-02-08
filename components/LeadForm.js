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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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

        <button
          type="submit"
          style={{ backgroundColor: theme.accent }}
          className="w-full text-black py-3 rounded hover:opacity-90 transition"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
