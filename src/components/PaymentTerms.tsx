import { CheckCircle2 } from 'lucide-react';

export default function PaymentTerms() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-3 border-[#002B5B] rounded-xl p-5 md:p-8 my-6 shadow-lg">
      <h3 className="text-xl md:text-2xl font-bold text-[#002B5B] text-center mb-5 md:mb-6">
        Payment Terms & Conditions
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#002B5B] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h4 className="font-bold text-[#002B5B] mb-3 text-sm md:text-base">
            Projects Above ₹25,000
          </h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>40% Advance (Contract signing)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>30% Mid-project (Design approval)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>20% Pre-launch (After UAT)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>10% Final (Upon deployment)</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#002B5B] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h4 className="font-bold text-[#002B5B] mb-3 text-sm md:text-base">
            Projects Below ₹25,000
          </h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>50% Advance payment</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>50% Upon completion</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#002B5B] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h4 className="font-bold text-[#002B5B] mb-3 text-sm md:text-base">
            Student Projects
          </h4>
          <ul className="space-y-2 text-xs md:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>40% Advance payment</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>30% Mid-project milestone</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>30% Upon completion</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
