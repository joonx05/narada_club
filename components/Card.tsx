import Image from "next/image";
import { Heart, Eye, Wallet, Flame } from "lucide-react";


const CryptoCard = ({
  title,
  likes,
  views,
  invested
}: {
  title: string,
  likes: number,
  views: number,
  invested: number
}) => {
  return (
    <div className="relative w-[44%] h-[600px] rounded-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/horse.png"
          alt="Crystalline horse"
          height={1000}
          width={1000}
          className="rounded-2xl h-full"
        />
      
      </div>
      
      {/* Content Overlay */}
      <div className="relative h-full  flex flex-col justify-between bg-gradient-to-b from-black/50 to-transparent rounded-2xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl pt-6 pl-6 font-bold text-white mb-4 -tracking-tighter">
            {title}
          </h1>
          
          {/* Stats Row */}
          <div className="flex gap-2 justify-start pl-6">
            <div className="flex items-center gap-2 bg-zinc-700 opacity-65 rounded-full px-3 py-1">
              <Heart size={16} className="text-white" />
              <span className="text-white text-md font-sans">{likes}</span>
            </div>
            
            <div className="flex items-center gap-2 bg-black/50 border border-zinc-700 rounded-full px-3 py-1">
              <Eye size={16} className="text-white" />
              <span className="text-white text-md font-sans">{views} people view</span>
            </div>
            
            <div className="flex items-center gap-2 bg-black/50 border border-zinc-700  rounded-full px-3 py-1">
              <Wallet size={16} className="text-white" />
              <span className="text-white text-md font-sans">{invested} Invested</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Progress Bar */}
          <button className="flex gap-2 ml-6 bg-[#FEFCD3] p-6 text-black font-medium px-3 py-2 rounded-md w-fit">
            <Flame size={24} /> Place a bit
          </button>

          {/* Place Bit Button */}
         

          <div className="w-full h-2 rounded-3xl">
            <div 
              className="h-full bg-[#FEFFC7] rounded-3xl" 
              style={{ width: '60%' }}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CryptoCard;
