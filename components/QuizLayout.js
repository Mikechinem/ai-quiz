export default function QuizLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#eae9f7] flex items-center justify-center px-4">
      <div className="max-w-xl w-full">{children}</div>
    </div>
  );
}