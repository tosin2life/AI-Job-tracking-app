export default function MatchScore({ score }) {
  const safeScore = Math.max(0, Math.min(100, score));

  let color = "bg-red-500";
  if (safeScore >= 80) color = "bg-green-500";
  else if (safeScore >= 50) color = "bg-yellow-500";

  return (
    <div className="w-full max-w-sm">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">Match Score</span>
        <span className="text-sm font-semibold text-gray-800">
          {safeScore}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`${color} h-full transition-all duration-500`}
          style={{ width: `${safeScore}%` }}
        ></div>
      </div>
    </div>
  );
}
