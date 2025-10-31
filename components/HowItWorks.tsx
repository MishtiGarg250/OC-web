"use client";
import React, { useState, useEffect } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const howItWorksContent = [
  {
    title: 'Event Registration',
    description: 'Companies and developers register for OpenCode events through our streamlined platform. Choose from hackathons, workshops, conferences, and coding challenges that align with your interests and goals.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      </svg>
    )
  },
  {
    title: 'Project Selection',
    description: 'Browse through curated open-source projects from our partner organizations. Select projects that match your team\'s skills and interests, or propose your own innovative ideas to the community.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,14C20.4,14 24,15.8 24,18V20H8V18C8,15.8 11.6,14 16,14M8,4C10.2,4 12,5.8 12,8C12,10.2 10.2,12 8,12C5.8,12 4,10.2 4,8C4,5.8 5.8,4 8,4M8,14C12.4,14 16,15.8 16,18V20H0V18C0,15.8 3.6,14 8,14Z" />
      </svg>
    )
  },
  {
    title: 'Collaborative Development',
    description: 'Work alongside developers from around the world in a collaborative environment. Our platform facilitates team formation, project management, and real-time communication to ensure productive development sessions.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,5C8.14,5 5,8.14 5,12C5,15.86 8.14,19 12,19C15.86,19 19,15.86 19,12C19,8.14 15.86,5 12,5M12,7.75C13.24,7.75 14.25,8.76 14.25,10C14.25,11.24 13.24,12.25 12,12.25C10.76,12.25 9.75,11.24 9.75,10C9.75,8.76 10.76,7.75 12,7.75M12,15C13.93,15 15.5,15.57 16.6,16.3C16.24,16.76 15.8,17.15 15.3,17.5C14.5,16.5 13.33,16 12,16C10.67,16 9.5,16.5 8.7,17.5C8.2,17.15 7.76,16.76 7.4,16.3C8.5,15.57 10.07,15 12,15Z" />
      </svg>
    )
  },
  {
    title: 'Mentorship & Support',
    description: 'Access guidance from industry experts, maintainers, and experienced developers. Our mentorship program connects participants with professionals who provide technical guidance and career advice throughout the event.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
      </svg>
    )
  },
  {
    title: 'Code Review & Integration',
    description: 'Submit your contributions for review by project maintainers and community experts. High-quality contributions are merged into the main projects, making a lasting impact on the open-source ecosystem.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2.81,14.126L5.64,17.04C6.05,17.45 6.05,18.11 5.64,18.52C5.23,18.93 4.57,18.93 4.16,18.52L1.33,15.61C0.92,15.2 0.92,14.54 1.33,14.13C1.74,13.72 2.4,13.72 2.81,14.126ZM7.5,8.5C8.33,8.5 9,9.17 9,10C9,10.83 8.33,11.5 7.5,11.5C6.67,11.5 6,10.83 6,10C6,9.17 6.67,8.5 7.5,8.5ZM12.5,8.5C13.33,8.5 14,9.17 14,10C14,10.83 13.33,11.5 12.5,11.5C11.67,11.5 11,10.83 11,10C11,9.17 11.67,8.5 12.5,8.5ZM17.5,8.5C18.33,8.5 19,9.17 19,10C19,10.83 18.33,11.5 17.5,11.5C16.67,11.5 16,10.83 16,10C16,9.17 16.67,8.5 17.5,8.5ZM22.19,14.126L19.36,17.04C18.95,17.45 18.95,18.11 19.36,18.52C19.77,18.93 20.43,18.93 20.84,18.52L23.67,15.61C24.08,15.2 24.08,14.54 23.67,14.13C23.26,13.72 22.6,13.72 22.19,14.126Z" />
      </svg>
    )
  },
  {
    title: 'Recognition & Networking',
    description: 'Celebrate achievements with the community and build lasting professional relationships. Top contributors receive recognition, and all participants gain access to our global network of developers and companies.',
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5,16L3,5L8.5,10L12,4L15.5,10L21,5L19,16H5M12,18A2,2 0 0,1 14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20A2,2 0 0,1 12,18Z" />
      </svg>
    )
  },
];

interface ProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ProcessCard = ({ title, description, icon, className = '' }: ProcessCardProps) => (
  <div className={`bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl border border-blue-500/20 p-5 sm:p-6 transform transition-all duration-300 hover:scale-[1.02] ${className}`}>
    <div className="text-blue-400 mb-3">
      {icon}
    </div>
    <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-300 text-sm sm:text-base">{description}</p>
  </div>
);

function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-[#0a0a0a] border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 mb-3 sm:mb-4">
            How OpenCode Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join our open-source events and contribute to meaningful projects while building your skills and network
          </p>
        </div>
        
        {/* Mobile/Tablet View - Simplified Cards */}
        {isMobile && (
          <div className="lg:hidden space-y-6">
            {howItWorksContent.map((item, index) => (
              <ProcessCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                className={index % 2 === 0 ? 'ml-0 mr-0 sm:ml-4' : 'mr-0 ml-0 sm:mr-4'}
              />
            ))}
          </div>
        )}

        {/* Desktop View - Sticky Scroll */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="sticky top-24">
            <StickyScroll content={howItWorksContent} />
          </div>
          
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Process Steps with Icons */}
            <div className="absolute top-8 right-16 w-64 h-40 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/30 p-6 transform rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="text-blue-400 text-2xl mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Register</h3>
              <p className="text-gray-400 text-sm">Join events and projects</p>
            </div>
            
            <div className="absolute top-32 left-12 w-56 h-36 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl border border-cyan-500/30 p-6 transform -rotate-2 hover:rotate-0 transition-all duration-300">
              <div className="text-cyan-400 text-2xl mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,14C20.4,14 24,15.8 24,18V20H8V18C8,15.8 11.6,14 16,14M8,4C10.2,4 12,5.8 12,8C12,10.2 10.2,12 8,12C5.8,12 4,10.2 4,8C4,5.8 5.8,4 8,4M8,14C12.4,14 16,15.8 16,18V20H0V18C0,15.8 3.6,14 8,14Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Collaborate</h3>
              <p className="text-gray-400 text-sm">Work with global developers</p>
            </div>
            
            <div className="absolute top-56 right-8 w-60 h-44 bg-gradient-to-br from-blue-700/20 to-cyan-700/20 rounded-xl border border-blue-400/30 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="text-blue-300 text-2xl mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.81,14.126L5.64,17.04C6.05,17.45 6.05,18.11 5.64,18.52C5.23,18.93 4.57,18.93 4.16,18.52L1.33,15.61C0.92,15.2 0.92,14.54 1.33,14.13C1.74,13.72 2.4,13.72 2.81,14.126ZM7.5,8.5C8.33,8.5 9,9.17 9,10C9,10.83 8.33,11.5 7.5,11.5C6.67,11.5 6,10.83 6,10C6,9.17 6.67,8.5 7.5,8.5ZM12.5,8.5C13.33,8.5 14,9.17 14,10C14,10.83 13.33,11.5 12.5,11.5C11.67,11.5 11,10.83 11,10C11,9.17 11.67,8.5 12.5,8.5ZM17.5,8.5C18.33,8.5 19,9.17 19,10C19,10.83 18.33,11.5 17.5,11.5C16.67,11.5 16,10.83 16,10C16,9.17 16.67,8.5 17.5,8.5ZM22.19,14.126L19.36,17.04C18.95,17.45 18.95,18.11 19.36,18.52C19.77,18.93 20.43,18.93 20.84,18.52L23.67,15.61C24.08,15.2 24.08,14.54 23.67,14.13C23.26,13.72 22.6,13.72 22.19,14.126Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Contribute</h3>
              <p className="text-gray-400 text-sm">Make meaningful impact</p>
            </div>
            
            <div className="absolute bottom-16 left-8 w-52 h-38 bg-gradient-to-br from-cyan-700/20 to-blue-700/20 rounded-xl border border-cyan-400/30 p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="text-cyan-300 text-2xl mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5,16L3,5L8.5,10L12,4L15.5,10L21,5L19,16H5M12,18A2,2 0 0,1 14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20A2,2 0 0,1 12,18Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Achieve</h3>
              <p className="text-gray-400 text-sm">Get recognition & network</p>
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 600">
              <path d="M320 40 Q280 100 200 120" stroke="url(#neonGradient1)" strokeWidth="3" fill="none" strokeDasharray="8,4" filter="drop-shadow(0 0 4px rgba(59,130,246,0.6))">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M200 120 Q120 140 80 200" stroke="url(#neonGradient2)" strokeWidth="3" fill="none" strokeDasharray="8,4" filter="drop-shadow(0 0 4px rgba(34,211,238,0.6))">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" begin="0.5s"/>
              </path>
              <path d="M80 200 Q160 220 240 280" stroke="url(#neonGradient1)" strokeWidth="3" fill="none" strokeDasharray="8,4" filter="drop-shadow(0 0 4px rgba(59,130,246,0.6))">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" begin="1s"/>
              </path>
              <path d="M240 280 Q200 320 120 380" stroke="url(#neonGradient2)" strokeWidth="3" fill="none" strokeDasharray="8,4" filter="drop-shadow(0 0 4px rgba(34,211,238,0.6))">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" begin="1.5s"/>
              </path>
              
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:0.8}} />
                  <stop offset="50%" style={{stopColor:"#22D3EE", stopOpacity:0.9}} />
                  <stop offset="100%" style={{stopColor:"#3B82F6", stopOpacity:0.8}} />
                </linearGradient>
                <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:"#22D3EE", stopOpacity:0.8}} />
                  <stop offset="50%" style={{stopColor:"#3B82F6", stopOpacity:0.9}} />
                  <stop offset="100%" style={{stopColor:"#22D3EE", stopOpacity:0.8}} />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks
