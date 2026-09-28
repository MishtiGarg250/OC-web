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
        `group inline-flex items-center rounded-full bg-gradient-to-r from-[#9D767E] via-[#CF9690] to-[#E8C0BB] px-8 py-3 text-sm font-semibold text-[#1B1620] shadow-lg shadow-[#CF9690]/25 transition hover:brightness-105 active:scale-[0.98] ${className}`
      }
      {...props}
    >
      {showIcon && (
        <Download className="w-5 h-5 text-[#1B1620] transition-transform group-hover:translate-y-0.5" />
      )}
      Brochure
    </Button>
  );
}
