import { useState, useMemo } from 'react';
import Header from './components/Header';
import InfoBar from './components/InfoBar';
import SearchFilter from './components/SearchFilter';
import Legend from './components/Legend';
import PricingTable from './components/PricingTable';
import PaymentTerms from './components/PaymentTerms';
import Notes from './components/Notes';
import Footer from './components/Footer';
import DownloadButton from './components/DownloadButton';
import { pricingData } from './data/pricingData';
import { FilterState } from './types/pricing';
import { downloadAsWord } from './utils/downloadUtils';

function App() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    priceRange: ''
  });

  const filteredServices = useMemo(() => {
    return pricingData.filter(service => {
      if (service.isCategoryHeader) {
        return true;
      }

      if (service.isSubcategory) {
        if (!filters.category) return true;
        return service.category === filters.category;
      }

      const matchesSearch = !filters.search ||
        service.serviceCategory?.toLowerCase().includes(filters.search.toLowerCase()) ||
        service.projectType?.toLowerCase().includes(filters.search.toLowerCase()) ||
        service.category.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory = !filters.category || service.category === filters.category;

      let matchesPrice = true;
      if (filters.priceRange && service.price) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        matchesPrice = service.price >= min && service.price <= max;
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [filters]);

  const visibleCategories = useMemo(() => {
    const categories = new Set<string>();
    filteredServices.forEach(service => {
      if (!service.isCategoryHeader && service.category) {
        categories.add(service.category);
      }
    });
    return categories;
  }, [filteredServices]);

  const displayServices = useMemo(() => {
    return filteredServices.filter(service => {
      if (service.isCategoryHeader) {
        const categoryMatch = service.serviceCategory?.match(/^\d+\./);
        if (categoryMatch) {
          const categoryName = service.category;
          return visibleCategories.has(categoryName);
        }
        return true;
      }
      return true;
    });
  }, [filteredServices, visibleCategories]);

  const totalServices = pricingData.filter(s => !s.isCategoryHeader && !s.isSubcategory).length;
  const visibleServices = displayServices.filter(s => !s.isCategoryHeader && !s.isSubcategory).length;

  const handleDownload = () => {
    const contentElement = document.getElementById('download-content');
    if (contentElement) {
      downloadAsWord(contentElement.innerHTML);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-24">
      <div className="max-w-[1600px] mx-auto p-3 md:p-4 lg:p-6">
        <div id="download-content">
          <Header />
          <InfoBar />

          <div className="print:hidden">
            <SearchFilter
              filters={filters}
              onFilterChange={setFilters}
              totalServices={totalServices}
              visibleServices={visibleServices}
            />
          </div>

          <Legend />
          <PricingTable services={displayServices} />
          <PaymentTerms />
          <Notes />
          <Footer />
        </div>

        <DownloadButton onDownload={handleDownload} />
      </div>
    </div>
  );
}

export default App;
