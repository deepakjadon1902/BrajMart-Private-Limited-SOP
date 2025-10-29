export default function Legend() {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-4 text-xs">
      <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-full shadow-sm">
        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
        <span className="hidden sm:inline">Client Rate (Selling Price)</span>
        <span className="sm:hidden">Client Rate</span>
      </div>
      <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-full shadow-sm">
        <div className="w-4 h-4 rounded-full bg-red-600"></div>
        <span className="hidden sm:inline">Cost to Company (Internal Cost)</span>
        <span className="sm:hidden">CTC</span>
      </div>
      <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-full shadow-sm">
        <div className="w-4 h-4 rounded-full bg-green-600"></div>
        <span>Base Timeline</span>
      </div>
      <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-full shadow-sm">
        <div className="w-4 h-4 rounded-full bg-orange-500"></div>
        <span className="hidden sm:inline">Buffer Time (Safety Margin)</span>
        <span className="sm:hidden">Buffer</span>
      </div>
    </div>
  );
}
