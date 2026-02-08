export default function LoadingScreen({ score }) {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl mb-4 text-white">
        Calculating your AI Income Profile...
      </h2>
      <p className="text-[#98de9d] text-xl">
        Your current score: <span className="font-bold">{score} / 24</span>
      </p>
      <div className="flex justify-center space-x-2 mt-4">
        <span className="dot bg-[#98de9d] w-4 h-4 rounded-full animate-bounce"></span>
        <span className="dot bg-[#98de9d] w-4 h-4 rounded-full animate-bounce animation-delay-200"></span>
        <span className="dot bg-[#98de9d] w-4 h-4 rounded-full animate-bounce animation-delay-400"></span>
      </div>
      <p className="text-gray-400 mt-4">
        Analyzing your answers to match you with the best AI side hustle path…
      </p>
    </div>
  );
}
