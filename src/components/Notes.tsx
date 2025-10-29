export default function Notes() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-3 border-orange-400 rounded-xl p-5 md:p-6 my-6 shadow-lg">
      <h3 className="text-lg md:text-xl font-bold text-orange-700 text-center mb-4 md:mb-5">
        Important Notes & Disclaimers
      </h3>
      <ol className="list-decimal pl-5 md:pl-8 space-y-2 text-xs md:text-sm text-amber-950 leading-relaxed">
        <li>
          <strong className="text-orange-700">Cost to Company (CTC):</strong> Includes developer salaries, tools, infrastructure, and operational overhead. Based on 50% profit margin model for most services, 40% for infrastructure services.
        </li>
        <li>
          <strong className="text-orange-700">Buffer Time:</strong> Additional safety margin added to base timeline to account for revisions, testing, and unforeseen delays.
        </li>
        <li>
          <strong className="text-orange-700">Timeline:</strong> Base timeline assumes standard scope. Complex requirements may extend timelines proportionally.
        </li>
        <li>
          <strong className="text-orange-700">Currency:</strong> Exchange rate ₹83 = $1 USD (subject to change). International clients invoiced in USD.
        </li>
        <li>
          <strong className="text-orange-700">Customization:</strong> All prices are indicative ranges. Final quotation provided after detailed requirement analysis.
        </li>
        <li>
          <strong className="text-orange-700">Warranty:</strong> 30-90 days post-launch warranty included for bug fixes (no new features).
        </li>
        <li>
          <strong className="text-orange-700">Client Responsibilities:</strong> Domain, hosting, SSL, third-party API costs borne by client unless bundled in package.
        </li>
        <li>
          <strong className="text-orange-700">Revisions:</strong> 2 rounds of revisions included in design phase. Additional revisions billed separately at hourly rates.
        </li>
        <li>
          <strong className="text-orange-700">Cancellation:</strong> No refunds after work commences. Payment for completed work due upon cancellation.
        </li>
        <li>
          <strong className="text-orange-700">Rush Projects:</strong> Urgent delivery (50% faster timeline) attracts 30% surcharge on base price.
        </li>
      </ol>
    </div>
  );
}
