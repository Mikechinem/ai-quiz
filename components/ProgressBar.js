export default function ProgressBar({ step, total, theme = { bar: "#98de9d", bg: "gray-700" } }) {
  return (
    <div className={`h-2 w-full max-w-xl bg-[${theme.bg}] rounded-full mt-4`}>
      <div
        className={`h-2 bg-[${theme.bar}] rounded-full`}
        style={{ width: `${((step + 1) / total) * 100}%` }}
      ></div>
    </div>
  );
}
