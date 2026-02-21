export default function QuestionCard({ question, onAnswer }) {
  return (
    <div className="text-center w-full max-w-xl">
      <h2 className="text-black text-2xl font-extrabold mb-8 leading-snug">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt.score, opt.label)}
            className="w-full bg-white border border-gray-200 text-black py-3 px-5 rounded-xl hover:bg-[#2814de] hover:text-white hover:border-[#2814de] transition-all duration-200 font-medium shadow-sm text-left"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}