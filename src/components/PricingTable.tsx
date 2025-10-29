import { PricingService } from '../types/pricing';

interface PricingTableProps {
  services: PricingService[];
}

export default function PricingTable({ services }: PricingTableProps) {
  return (
    <div className="overflow-x-auto mb-3 rounded-lg shadow-sm">
      <table className="w-full border-collapse text-xs md:text-sm">
        <thead>
          <tr className="bg-[#002B5B] text-white">
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[5%] min-w-[40px]">#</th>
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[18%] min-w-[120px]">Service Category</th>
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[20%] min-w-[150px]">Project Type / Scope</th>
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[13%] min-w-[100px]">
              Client Rate<br className="hidden md:block" /><span className="md:hidden"> </span>(INR)
            </th>
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[11%] min-w-[90px]">
              Client Rate<br className="hidden md:block" /><span className="md:hidden"> </span>(USD)
            </th>
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[11%] min-w-[100px]">
              Cost to Company<br className="hidden md:block" /><span className="md:hidden"> </span>(INR)
            </th>
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[9%] min-w-[70px]">
              Profit<br className="hidden md:block" /><span className="md:hidden"> </span>Margin
            </th>
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[8%] min-w-[70px]">Timeline</th>
            <th className="p-2 md:p-3 text-left border border-[#001d3d] font-semibold w-[5%] min-w-[60px]">Buffer</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => {
            if (service.isCategoryHeader) {
              return (
                <tr key={service.id} className="bg-gradient-to-br from-[#1e5a8e] to-[#002B5B] text-white">
                  <td colSpan={9} className="p-2 md:p-3 font-bold text-center text-sm md:text-base">
                    {service.serviceCategory}
                  </td>
                </tr>
              );
            }

            if (service.isSubcategory) {
              return (
                <tr key={service.id} className="bg-blue-50">
                  <td className="p-2 md:p-3 border border-gray-300 font-semibold text-[#002B5B]">{service.id}</td>
                  <td colSpan={8} className="p-2 md:p-3 border border-gray-300 font-semibold text-[#002B5B]">
                    {service.serviceCategory}
                  </td>
                </tr>
              );
            }

            return (
              <tr
                key={service.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-50 hover:scale-[1.01] transition-all duration-200`}
              >
                <td className="p-2 md:p-3 border border-gray-300">{service.id}</td>
                <td className="p-2 md:p-3 border border-gray-300">{service.serviceCategory}</td>
                <td className="p-2 md:p-3 border border-gray-300">{service.projectType}</td>
                <td className="p-2 md:p-3 border border-gray-300 font-semibold text-blue-600">
                  {service.clientRateINR}
                </td>
                <td className="p-2 md:p-3 border border-gray-300 font-semibold text-blue-600">
                  {service.clientRateUSD}
                </td>
                <td className="p-2 md:p-3 border border-gray-300 font-medium text-red-600 text-xs md:text-sm">
                  {service.costToCompany}
                </td>
                <td className="p-2 md:p-3 border border-gray-300">{service.profitMargin}</td>
                <td className="p-2 md:p-3 border border-gray-300 font-medium text-green-600">
                  {service.timeline}
                </td>
                <td className="p-2 md:p-3 border border-gray-300 text-orange-500 italic text-xs md:text-sm">
                  {service.buffer}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
