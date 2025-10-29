import { Search } from 'lucide-react';
import { FilterState } from '../types/pricing';

interface SearchFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  totalServices: number;
  visibleServices: number;
}

export default function SearchFilter({ filters, onFilterChange, totalServices, visibleServices }: SearchFilterProps) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-lg p-4 md:p-6 mb-5 shadow-lg">
      <div className="text-center mb-4">
        <h3 className="text-lg md:text-xl font-bold text-orange-600">Search & Filter Services</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4">
        <div className="relative md:col-span-1">
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            placeholder="Search services, categories, or features..."
            className="w-full px-4 py-3 pr-10 border-2 border-[#002B5B] rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 transition-all"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#002B5B] w-5 h-5" />
        </div>

        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
          className="px-3 py-3 border-2 border-[#002B5B] rounded-lg text-sm md:text-base bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 transition-all"
        >
          <option value="">All Categories</option>
          <option value="FRONTEND">Frontend Development</option>
          <option value="FULL-STACK">Full-Stack Applications</option>
          <option value="E-COMMERCE">E-Commerce</option>
          <option value="EDUCATIONAL">Educational Platforms</option>
          <option value="PWA">Progressive Web Apps</option>
          <option value="CMS">CMS Solutions</option>
          <option value="ENTERPRISE">Enterprise Solutions</option>
          <option value="STUDENT">Student Projects</option>
          <option value="API">API Development</option>
          <option value="MAINTENANCE">Maintenance & Support</option>
          <option value="UI/UX">UI/UX Design</option>
          <option value="CONSULTING">Consulting & Training</option>
          <option value="ADDITIONAL">Additional Services</option>
        </select>

        <select
          value={filters.priceRange}
          onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
          className="px-3 py-3 border-2 border-[#002B5B] rounded-lg text-sm md:text-base bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 transition-all"
        >
          <option value="">All Prices</option>
          <option value="0-25000">Under ₹25,000</option>
          <option value="25000-50000">₹25,000 - ₹50,000</option>
          <option value="50000-100000">₹50,000 - ₹1,00,000</option>
          <option value="100000-999999">Above ₹1,00,000</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-around gap-2 md:gap-3">
        <div className="flex-1 min-w-[100px] bg-white p-3 rounded-lg text-center border-l-4 border-[#002B5B]">
          <div className="text-2xl md:text-3xl font-bold text-[#002B5B]">{totalServices}</div>
          <div className="text-xs text-gray-600 mt-1">Total Services</div>
        </div>
        <div className="flex-1 min-w-[100px] bg-white p-3 rounded-lg text-center border-l-4 border-[#002B5B]">
          <div className="text-2xl md:text-3xl font-bold text-[#002B5B]">{visibleServices}</div>
          <div className="text-xs text-gray-600 mt-1">Showing</div>
        </div>
        <div className="flex-1 min-w-[100px] bg-white p-3 rounded-lg text-center border-l-4 border-[#002B5B]">
          <div className="text-2xl md:text-3xl font-bold text-[#002B5B]">50%</div>
          <div className="text-xs text-gray-600 mt-1">Avg Profit Margin</div>
        </div>
      </div>
    </div>
  );
}
