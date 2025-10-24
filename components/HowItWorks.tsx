"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const howItWorksContent = [
    {
      title: 'Event Registration',
      description:
        'Companies and developers register for OpenCode events through our streamlined platform. Choose from hackathons, workshops, conferences, and coding challenges that align with your interests and goals.',
    },
    {
      title: 'Project Selection',
      description:
        'Browse through curated open-source projects from our partner organizations. Select projects that match your team\'s skills and interests, or propose your own innovative ideas to the community.',
    },
    {
      title: 'Collaborative Development',
      description:
        'Work alongside developers from around the world in a collaborative environment. Our platform facilitates team formation, project management, and real-time communication to ensure productive development sessions.',
    },
    {
      title: 'Mentorship & Support',
      description:
        'Access guidance from industry experts, maintainers, and experienced developers. Our mentorship program connects participants with professionals who provide technical guidance and career advice throughout the event.',
    },
    {
      title: 'Code Review & Integration',
      description:
        'Submit your contributions for review by project maintainers and community experts. High-quality contributions are merged into the main projects, making a lasting impact on the open-source ecosystem.',
    },
    {
      title: 'Recognition & Networking',
      description:
        'Celebrate achievements with the community and build lasting professional relationships. Top contributors receive recognition, and all participants gain access to our global network of developers and companies.',
    },
  ];

function HowItWorks() {
  return (
    <div className="py-20 bg-[#0a0a0a] border-t border-gray-800/50">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-4">
                How OpenCode Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our open-source events and contribute to meaningful projects while building your skills and network
            </p>
        </div>
        
        <div className="relative px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
            <div className="lg:col-span-1">
              <StickyScroll content={howItWorksContent} />
            </div>
            
  
            <div className="lg:col-span-1 hidden lg:block">
              <div className="relative h-[600px] flex items-center justify-center">
        
                <div className="absolute top-8 right-16 w-64 h-40 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30 p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-blue-400 text-2xl mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Register</h3>
                  <p className="text-gray-400 text-sm">Join events and projects</p>
                </div>
                
                <div className="absolute top-32 left-12 w-56 h-36 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-lg border border-cyan-500/30 p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="text-cyan-400 text-2xl mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,14C20.4,14 24,15.8 24,18V20H8V18C8,15.8 11.6,14 16,14M8,4C10.2,4 12,5.8 12,8C12,10.2 10.2,12 8,12C5.8,12 4,10.2 4,8C4,5.8 5.8,4 8,4M8,14C12.4,14 16,15.8 16,18V20H0V18C0,15.8 3.6,14 8,14Z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Collaborate</h3>
                  <p className="text-gray-400 text-sm">Work with global developers</p>
                </div>
                
                <div className="absolute top-56 right-8 w-60 h-44 bg-gradient-to-br from-blue-700/20 to-cyan-700/20 rounded-lg border border-blue-400/30 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="text-blue-300 text-2xl mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.81,14.126L5.64,17.04C6.05,17.45 6.05,18.11 5.64,18.52C5.23,18.93 4.57,18.93 4.16,18.52L1.33,15.61C0.92,15.2 0.92,14.54 1.33,14.13C1.74,13.72 2.4,13.72 2.81,14.126ZM7.5,8.5C8.33,8.5 9,9.17 9,10C9,10.83 8.33,11.5 7.5,11.5C6.67,11.5 6,10.83 6,10C6,9.17 6.67,8.5 7.5,8.5ZM12.5,8.5C13.33,8.5 14,9.17 14,10C14,10.83 13.33,11.5 12.5,11.5C11.67,11.5 11,10.83 11,10C11,9.17 11.67,8.5 12.5,8.5ZM17.5,8.5C18.33,8.5 19,9.17 19,10C19,10.83 18.33,11.5 17.5,11.5C16.67,11.5 16,10.83 16,10C16,9.17 16.67,8.5 17.5,8.5ZM22.19,14.126L19.36,17.04C18.95,17.45 18.95,18.11 19.36,18.52C19.77,18.93 20.43,18.93 20.84,18.52L23.67,15.61C24.08,15.2 24.08,14.54 23.67,14.13C23.26,13.72 22.6,13.72 22.19,14.126Z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Contribute</h3>
                  <p className="text-gray-400 text-sm">Make meaningful impact</p>
                </div>
                
                <div className="absolute bottom-16 left-8 w-52 h-38 bg-gradient-to-br from-cyan-700/20 to-blue-700/20 rounded-lg border border-cyan-400/30 p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
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
    </div>
  )
}

export default HowItWorks
