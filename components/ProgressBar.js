export default function ProgressBar({
  step,
  total,
  theme = { bar: "#98de9d", bg: "#2d2d2d", text: "#ffffff" },
}) {
  const progress = ((step + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl mt-4">
      {/* Step counter */}
      <div
        style={{ color: theme.text }}
        className="text-sm mb-2 text-right font-medium"
      >
        {step + 1} / {total}
      </div>

      {/* Background bar */}
      <div
        style={{ backgroundColor: theme.bg }}
        className="h-2 w-full rounded-full"
      >
        {/* Progress */}
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: theme.bar,
          }}
          className="h-2 rounded-full transition-all duration-300"
        />
      </div>
    </div>
  );
}
