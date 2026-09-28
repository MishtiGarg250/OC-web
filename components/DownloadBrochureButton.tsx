'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { ComponentProps } from 'react';

interface DownloadBrochureButtonProps
  extends ComponentProps<typeof Button> {
  showIcon?: boolean;
}

export default function DownloadBrochureButton({
  variant = "default",
  size = "lg",
  showIcon = true,
  className = "",
  ...props
}: DownloadBrochureButtonProps) {
  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={downloadBrochure}
      className={
        `group inline-flex items-center rounded-full border border-[#D6B56C]/45 bg-[#102535]/55 px-7 py-3 text-sm font-semibold text-[#F4F1E8] backdrop-blur-md shadow-lg transition hover:bg-[#102535]/80 hover:border-[#E5C982] active:scale-[0.98] ${className}`
      }
      {...props}
    >
      {showIcon && (
        <Download className="w-5 h-5 text-[#D6B56C] transition-transform group-hover:translate-y-0.5" />
      )}
      Brochure
    </Button>
  );
}
