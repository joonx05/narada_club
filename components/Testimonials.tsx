import React from 'react'
import Marquee from './animata/container/marquee'
import { Cormorant } from "next/font/google"
import { Inter } from "next/font/google"

const cormorant = Cormorant({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

const Content = () => {
  return (
    <>
      {[
        {
     
          content: "What's the stock price of Tesla?",
        },
        {
          content: "Play the next episode of The Office",
        },
        {
          content: "Show me the nearest coffee shop",
        },
        {
          content: "What's the weather like in Kathmandu?",
        },
        {
          content: "Remind me to call mom",
        },
      ].map((item) => (
        <div
          className="flex flex-1 flex-col justify-between rounded-md "
          key={`item-${item.content}`}
        >
            <img src="/logo.png" alt="Img" className='h-[30vh]'/>
        </div>
      ))}
    </>
  );
}; 

function Testimonials() {
  return (
    <div>
      <div className='flex flex-col gap-4 text-center justify-center items-center mt-20 -mb-32'>
        <div className='w-[40%] test-center '>
          <h1 className={`text-[#f8f3e9] text-6xl tracking-wide ${cormorant.className} font-[700]`}>Testimonials</h1>
          <h3 className={`text-[#dbd6cb] text-md mt-6 mb-16 ${inter.className}`}>Contrary to popular belief, Lorem Ipsum is not <br /> simply random text. It has roots in a piece of <br /> classical Latin literature from 45 BC, making it <br /> over 2000 years old..</h3>
        </div>
        </div>
        <Marquee>
          <Content/>
        </Marquee>
    </div>
  )
}

export default Testimonials
