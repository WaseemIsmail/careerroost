
function EmptyState({
  title = "No results found",
  message = "Try adjusting your search or filters.",
}) {
  return (
    <div className="w-full bg-white border rounded-2xl p-8 text-center shadow-sm">
      <div className="text-4xl mb-3">🔍</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{message}</p>
    </div>
  );
}

export default EmptyState;