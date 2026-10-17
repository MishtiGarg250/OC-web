'use client';

import { Download } from 'lucide-react';
import SpecularButton from './SpecularButton';

interface DownloadBrochureButtonProps {
  showIcon?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  [key: string]: any;
}

export default function DownloadBrochureButton({
  size = "md",
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
    <SpecularButton
      size={size}
      radius={24}
      tint="#ffffff"
      tintOpacity={0.06}
      textColor="#F4F1E8"
      lineColor="#58B99A"
      baseColor="#102535"
      intensity={1}
      idleIntensity={0.35}
      shineSize={10}
      shineFade={34}
      thickness={1.2}
      glow={1}
      followMouse
      proximity={250}
      onClick={downloadBrochure}
      className={`border border-[#58B99A]/50 !bg-[#102535]/80 hover:!bg-[#102535] !text-[#F4F1E8] font-semibold text-sm backdrop-blur-md shadow-lg ${className}`}
      {...props}
    >
      {showIcon && (
        <Download className="w-4 h-4 text-[#58B99A] transition-transform group-hover:translate-y-0.5" />
      )}
      <span>Brochure</span>
    </SpecularButton>
  );
}
