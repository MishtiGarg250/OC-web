
function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            OpenCode Events
          </h2>
          <p className="mb-4 text-gray-300">
            Empowering the open-source community through innovative events, 
            hackathons, and collaborative projects. Join thousands of developers 
            worldwide in building the future of technology.
          </p>
          <div className="flex space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Details
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-white">Arpit Anand</p>
                <a href="tel:+918604379134" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +91 8604379134
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-white">Naitik Jain</p>
                <a href="tel:+917248119726" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +91 7248119726
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-white">Vansh Dhawan</p>
                <a href="tel:+918837844288" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +91 8837844288
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Connect With Us
          </h2>
          <div className="space-y-3">
            <a
              href="https://discord.gg/SxBATvUPnC"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-blue-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            >
              Discord Community
            </a>
            <a
              href="https://github.com/opencode"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-blue-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/geekhaven_iiita/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-blue-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/geekhaven-iiita"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-blue-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Global Community
            </p>
            <p className="flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse delay-100"></span>
              Email: geekhaven@iiita.ac.in

            </p>
            <p className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse delay-200"></span>
              Discord: OpenCode Community
            </p>
            <p className="flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse delay-300"></span>
              Events: 24/7 Support
            </p>
          </div>
        </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          
            <p className="text-center text-sm text-gray-400">
              © 2025 OpenCode Event. All rights reserved.
            </p>
            
  
        </div>
    </footer>
  )
}

export default Footer