import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Bookmark, Facebook, Twitter, Mail, Code, AlertTriangle } from 'lucide-react';
import { Cormorant } from "next/font/google"
import { Inter } from "next/font/google"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const cormorant = Cormorant({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

const CryptoCampaign = () => {
  const campaignData = {
    title: "How I Met God & Got Into Crypto",
    subtitle: "A Graphic Novel based on a shockingly true story, a young millennial in his quest to transform the global education system, encounters a series of strange men and women only to accidentally discover the crazy chaotic world of crypto",
    pledged: 1000000,
    goal: 10000,
    holders: 1000,
    daysLeft: 24
  };

  return (
    <div className="max-w-6xl mx-auto space-y-4 mt-16">
      <div className="space-y-2">
        <h1 className={`text-3xl text-[#dbd6cb] font-[240] text-center ${cormorant.className}`}>{campaignData.title}</h1>
        <p className={`text-gray-400 ml-28 text-sm font-[400] w-3/4 text-center ${inter.className}`}>{campaignData.subtitle}</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Image */}
        <div className="col-span-8">
        <img
          src="/horse.png"
          alt="Crystalline horse"
          className="rounded-2xl h-[470px] w-[750px] object-cover"
        />
      
        </div>

        {/* Right Column - Campaign Info */}
        <div className="col-span-4 space-y-6">
            <div className="w-full h-2 rounded-3xl bg-[#545454]">
            <div 
              className="h-full bg-[#FEFFC7] rounded-3xl" 
              style={{ width: '20%' }}
            />
          </div>

          <div className="space-y-4 font-sans text-[#FEFFC7]">
            <div>
              <div className="text-2xl">US ${(campaignData.pledged).toLocaleString()}</div>
              <div className="text-sm opacity-80">pledged of US ${(campaignData.goal).toLocaleString()} goal</div>
            </div>
            <div>
              <div className="text-2xl">{campaignData.holders.toLocaleString()}</div>
              <div className="text-sm opacity-80">Holders</div>
            </div>
            <div>
              <div className="text-2xl">{campaignData.daysLeft}</div>
              <div className="text-sm opacity-80">days to go</div>
            </div>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button className={`w-full bg-[#FFFBD6] hover:bg-[#FFFbd6] text-black font-semibold py-6 ${inter.className}`}>
                Co-own this IP now
            </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#1c1c1c] border-0 max-w-md">
              <AlertDialogHeader className="space-y-3">
                <AlertDialogCancel className="absolute right-4 top-4 p-0 border-none bg-transparent text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </AlertDialogCancel>
                <div className="flex justify-center mb-2">
                  <AlertTriangle className="h-12 w-12 text-[#FEFFC7]" />
                </div>
                <AlertDialogTitle className={`text-2xl font-normal text-[#FEFFC7] opacity-80 text-center ${inter.className}`}>
                  Disclaimer
                </AlertDialogTitle>
                <AlertDialogDescription className={`text-center text-[#FEFFC7] opacity-80 leading-relaxed ${inter.className}`}>
                  The projected ROI and potential returns are subject to market conditions and are not guaranteed. Investments in tokenized intellectual property and blockchain-based assets involve risk, including the potential loss of principal. Please review the whitepaper and its terms and do your own research before investing.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="sm:justify-center">
                <AlertDialogAction className="w-full bg-[#FEFFC7] hover:bg-[#FEFFC7] text-black font-sans">
                  Accept
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <div className="flex items-center justify-between pt-2 bg-transparent">
            <Button 
              variant="outline" 
              className={`flex items-center gap-2 bg-transparent border-[#fffbd6] text-[#fffbd6] ${inter.className} opacity-80`}
            >
              <Bookmark size={16} className="text-[#fffbd6]" />
              <span className="text-sm">Remind me</span>
            </Button>
            
            <div className="flex gap-4">
              <Facebook size={24} fill="#FFFBD6" />
              <Twitter size={24} fill="#FFFBD6" />
              <Mail size={24} fill="#FFFBD6" />
              <Code size={24} fill="#FFFBD6" />
            </div>
          </div>

          <p className={`text-xs text-[#dbd6cb] ${inter.className}`}>
            Own a piece of this story and its future success.<br />
            Below - All or nothing. This project will only be funded if it reaches its goal by Wed, January 1 2025 11:24 PM UTC +05:24. You will receive your investment back in the event this project doesn't meet its funding goal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCampaign;