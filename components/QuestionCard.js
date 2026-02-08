export default function QuestionCard({ question, onAnswer }) {
  return (
    <div className="text-center text-white">
      <h2 className="text-2xl mb-8">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt.score)}
            className="w-full border border-white py-3 rounded-lg hover:bg-[#98de9d] hover:text-black transition"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
