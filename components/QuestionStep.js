export default function QuestionStep({
  question,
  step,
  total,
  onOptionClick,
  theme = { text: "white", button: "#98de9d", buttonText: "black" },
}) {
  return (
    <div className="w-full max-w-xl text-center">
      <div className={`mb-4 text-lg text-[${theme.text}]`}>
        Question {step + 1} / {total}
      </div>

      <div className="bg-gray-800 p-6 rounded mb-4">
        <h2 className={`text-xl mb-6 text-[${theme.text}]`}>{question.question}</h2>
        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              className={`w-full bg-[${theme.button}] text-[${theme.buttonText}] py-3 rounded hover:opacity-90 transition`}
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
