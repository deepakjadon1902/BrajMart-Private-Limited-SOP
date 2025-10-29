export default function InfoBar() {
  return (
    <div className="flex flex-wrap justify-between gap-3 md:gap-4 bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-4 rounded-lg mb-5 text-xs md:text-sm shadow-sm">
      <div className="flex items-center gap-1.5">
        <strong className="text-[#002B5B]">Document ID:</strong> BMPL/PRICE-WD-001
      </div>
      <div className="flex items-center gap-1.5">
        <strong className="text-[#002B5B]">Version:</strong> 1.0
      </div>
      <div className="flex items-center gap-1.5">
        <strong className="text-[#002B5B]">Date:</strong> October 29, 2025
      </div>
      <div className="flex items-center gap-1.5">
        <strong className="text-[#002B5B]">Currency:</strong> INR (₹) & USD ($)
      </div>
      <div className="flex items-center gap-1.5">
        <strong className="text-[#002B5B]">Exchange Rate:</strong> $1 = ₹83
      </div>
    </div>
  );
}
