import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Cormorant } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const cormorant = Cormorant({ subsets: ['latin'] });

const StorySection = () => {
  return (
    <div className="min-h-screen mt-16">
      {/* Navigation Tabs */}
      <div className={`border-t border-b border-[#dbd6cb]/40 ${inter.className}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex gap-8 text-[#dbd6cb]">
            <Link href="#story" className="relative">
              Story
            </Link>
            <Link href="#faq" className="relative">
              FAQ
              <span className="absolute -top-1 -right-3 text-xs">2</span>
            </Link>
            <Link href="#updates" className="relative">
              Updates
              <span className="absolute -top-1 -right-2.5 text-xs">3</span>
            </Link>
            <Link href="#comments" className="relative">
              Comments
              <span className="absolute -top-1 -right-4 text-xs">37</span>
            </Link>
          </div>
          <Button className="border border-[#dbd6cb] bg-transparent hover:bg-gray-800 text-white rounded-md px-4 py-2">
            Co-own this IP
          </Button>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2 text-sm">
            <div className={`space-y-4 ${inter.className}`}>
              <div className="text-[#656969]">STORY</div>
              <div className="border border-b border-[#dbd6cb] w-3/4"></div>
              <div className="text-[#099e67]">RISKS</div>
            </div>
          </div>

          <div className="col-span-7">
            <div className="space-y-6">
              <div className="border-t-2 border-dotted border-[#FEFFC7] pt-6">
                <h3 className={`text-3xl font-light text-[#FEFFC7] ${cormorant.className} mb-4`}>Heading 3</h3>
                <p className={`text-[#dbd6cb] leading-relaxed font-sans`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue congue nam augue feugiat
                  nisi laoreet nunc, sit pellentesque. Consequat augue nisl consectetur massa. Urna
                  elementum, enim, diam aliquet elementum, sit adipiscing. Ornare tempus urna pellentesque
                  nunc facilisis tristique amet feugiat neque. Orci sollicitudin massa consequat faucibus feugiat
                  egestas amet augue. Ac nec tortor, sapien ac amet. Ullamcorper ultricies vel tincidunt
                  tincidunt.
                </p>
                <div className="mt-6">
                  <img 
                    src="/image.jpeg" 
                    alt="Content image" 
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 pb-8 border-b border-[#dbd6cb]">
              <p className="text-[#dbd6cb] font-sans">
                Questions about this project? {' '}
                <Link href="#faq" className="text-gray-100 hover:underline">
                  Check out the FAQ
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-3 font-sans relative">
            <div className="border border-[#feffc7] p-6">
              <div className="w-12 h-12 bg-gray-200 rounded-lg absolute top-[-15px] left-1/2 transform -translate-x-1/2"></div>
              <div className="flex items-start space-x-4">
                <div className="flex-1 mt-4">
                  <h4 className="text-[#dbd6cb] font-medium">Company name</h4>
                  <div className="flex items-center text-sm text-gray-400 mt-1">
                    <span>First created</span>
                    <span className="mx-2">•</span>
                    <span>0 backed</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque commodo dictum enim sit augue 
                    placerenas nisi.
                  </p>
                  <button className="text-gray-300 text-sm mt-2 hover:text-white">
                    See more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;