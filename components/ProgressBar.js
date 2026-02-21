export default function ProgressBar({
  step,
  total,
}) {
  const progress = ((step + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl mt-6">
      <div className="text-sm mb-2 text-right font-medium text-gray-500">
        {step + 1} / {total}
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          style={{ width: `${progress}%` }}
          className="h-2 rounded-full bg-[#ef4444] transition-all duration-300"
        />
      </div>
    </div>
  );
}