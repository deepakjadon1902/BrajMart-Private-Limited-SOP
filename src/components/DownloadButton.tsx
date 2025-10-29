import { Download } from 'lucide-react';
import { useState } from 'react';

interface DownloadButtonProps {
  onDownload: () => void;
}

export default function DownloadButton({ onDownload }: DownloadButtonProps) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleClick = () => {
    onDownload();
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-lg font-semibold text-white text-sm md:text-base shadow-lg transition-all duration-300 ${
          isDownloaded
            ? 'bg-gradient-to-br from-green-500 to-green-600 hover:shadow-green-500/50'
            : 'bg-gradient-to-br from-blue-600 to-cyan-500 hover:shadow-blue-500/50'
        } hover:-translate-y-1 hover:shadow-xl`}
      >
        <Download className="w-4 h-4 md:w-5 md:h-5" />
        <span className="hidden sm:inline">
          {isDownloaded ? 'Downloaded Successfully!' : 'Download Document'}
        </span>
        <span className="sm:hidden">
          {isDownloaded ? 'Done!' : 'Download'}
        </span>
      </button>
    </div>
  );
}
