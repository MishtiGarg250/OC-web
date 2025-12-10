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
        `group inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110 ${className}`
      }
      {...props}
    >
      {showIcon && (
        <Download className="w-5 h-5 text-white transition-transform group-hover:translate-y-0.5" />
      )}
      Brochure
    </Button>
  );
}
