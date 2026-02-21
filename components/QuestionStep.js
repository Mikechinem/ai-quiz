export default function QuestionStep({
  question,
  step,
  total,
  onOptionClick,
}) {
  return (
    <div className="w-full max-w-xl text-center">
      <div className="mb-4 text-sm text-gray-500 font-medium">
        Question {step + 1} / {total}
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-4">
        <h2 className="text-black text-xl font-extrabold mb-6">{question.question}</h2>
        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              className="w-full bg-[#eae9f7] border border-gray-200 text-black py-3 rounded-xl hover:bg-[#2814de] hover:text-white hover:border-[#2814de] transition-all duration-200 font-medium text-left px-4"
              onClick={() => onOptionClick(opt.value)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}