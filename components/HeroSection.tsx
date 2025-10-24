import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { WavyBackground } from "./ui/wavy-background";

function HeroSection() {
  return (
    <div
    className="relative h-[40rem] overflow-hidden flex items-center justify-center border-b border-gray-800/50"
    >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
        size={400}
      />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >Fuel Open Source Innovation</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
            >Join the movement that's shaping the future of technology. Sponsor our open-source events and connect with the brightest developers, contribute to meaningful projects, and build lasting partnerships in the tech community.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/sponsor-registration"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-300 shadow-lg hover:shadow-xl font-medium px-8 py-3"
                    >
                    Become a Sponsor
                    </Button>
                </Link>
                <Link href={"/events"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-transparent text-white border-2 border-gray-600 hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 font-medium px-8 py-3"
                    >
                    View Events
                    </Button>
                </Link>
            </div>
        </div>
        </div>
  )
}

export default HeroSection