export default function Header() {
  return (
    <div className="text-center bg-gradient-to-br from-[#002B5B] to-[#1e5a8e] text-white p-6 md:p-8 rounded-lg mb-5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-50 animate-pulse">
        <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] rounded-full bg-gradient-radial from-white/10 to-transparent"></div>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 relative z-10">
        BrajMart Private Limited
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl mb-2 relative z-10 font-normal">
        Digital & Web Solutions Division
      </h2>
      <p className="text-sm md:text-base opacity-90 relative z-10">
        Complete Pricing Sheet - All Services | FY 2025-26
      </p>
    </div>
  );
}
