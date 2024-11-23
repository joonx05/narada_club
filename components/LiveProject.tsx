import Card from "./Card"
import { Inter } from "next/font/google"
import { Cormorant } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })
const cormorant = Cormorant({ subsets: ['latin'] })

function LiveProject() {
  return (
    <div className="mt-6 sm:mx-8">
      <div className="flex flex-row justify-between px-12 sm:mx-11 mb-10">
        <div className="flex gap-2 justify-center items-center mb-4 sm:mb-0">
          <div className="bg-[#d9d9d9] rounded-full w-4 h-4"></div>
          <span className={`text-[#dbd6cb] text-xl sm:text-2xl font-[700] leading-tight ${inter.className}`}>Live Projects</span>
        </div>
        <button className="text-[#dbd6cb] font-sans font-[300] border-[0.1rem] rounded-full p-[0.5rem] sm:p-3">View All</button>
      </div>
      <div className = {`flex flex-col gap-8 justify-center items-center mt-4 sm:flex-row sm:gap-4 ${cormorant.className}`}>
        <Card title="How I Met God & Got into Crypto" likes={100} views={1000} invested={10000}/>
        <Card title="How I Met God & Got into Crypto" likes={100} views={1000} invested={10000}/>
      </div>
    </div>
  )
}

export default LiveProject
