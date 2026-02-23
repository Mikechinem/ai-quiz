export default function LoadingScreen({ score }) {
  return (
    <div className="min-h-screen bg-[#eae9f7] flex flex-col justify-center items-center text-center px-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 max-w-md w-full">
        <p className="text-[#2814de] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Processing
        </p>
        <h2 className="text-black text-2xl font-extrabold mb-2">
          Calculating your AI Income Profile...
        </h2>
        <p className="text-[#2814de] text-lg font-bold mb-6">
          Your score: <span className="font-extrabold">{score} / 24</span>
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          <span className="w-4 h-4 rounded-full bg-[#ef4444] animate-bounce"></span>
          <span className="w-4 h-4 rounded-full bg-[#ef4444] animate-bounce animation-delay-200"></span>
          <span className="w-4 h-4 rounded-full bg-[#ef4444] animate-bounce animation-delay-400"></span>
        </div>
        <p className="text-gray-400 text-sm">
          Analyzing your answers to match you with the best AI side hustle path…
        </p>
      </div>
    </div>
  );
}