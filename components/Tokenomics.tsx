import React, { useState } from 'react';

const TokenomicsForm = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState('');

  const durations = [
    { value: 6, label: '6 months' },
    { value: 12, label: '12 months' },
    { value: 16, label: '16 months' },
  ];

  return (
    <div className="w-full max-w-5xl mt-16 mb-5 p-8 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl backdrop-blur-sm mx-auto">
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-800/5 to-zinc-900/10" />
      
      <div className="relative flex flex-row gap-16">
        {/* Left Section - Form */}
        <div className="w-2/3 font-sans flex flex-col justify-center items-center space-y-8">
          {/* Investment Input */}
          <div className="space-y-3 flwx justify-start">
            <label className="-ml-[1rem] text-zinc-100 text-2xl font-medium">
              How much do you wanna invest?
            </label>
            <div className="relative">
              <input
                type="text"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                className="-ml-[1rem] w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-3 text-zinc-100 
                          focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/50
                          transition-all duration-200 shadow-sm shadow-zinc-900
                          placeholder:text-zinc-500"
                placeholder="Enter amount..."
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zinc-500/5 to-zinc-600/5 -z-10" />
            </div>
          </div>

          {/* Duration Selection */}
          <div className="space-y-3">
            <label className="block text-zinc-100 text-2xl font-medium">
              Duration
            </label>
            <div className="flex gap-4">
              {durations.map((duration) => (
                <button
                  key={duration.value}
                  //@ts-ignore
                  onClick={() => setSelectedDuration(duration.value)}
                  className={`px-4 py-2 rounded-xl border ${
                    selectedDuration === duration.value
                      ? 'border-zinc-400 text-zinc-200 bg-zinc-700'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:bg-zinc-800'
                  } transition-all duration-200 shadow-sm shadow-zinc-900`}
                >
                  {duration.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-2/3 border-l border-zinc-800 pl-16">
          <div className="relative">
            <h2 className="text-zinc-100 text-5xl font-serif mb-8 tracking-wide">
              Tokenomics
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500/20 to-zinc-600/20 blur-xl opacity-50 -z-10" />
            </h2>
            <div className="space-y-6 font-sans">
              <p className="text-zinc-300 leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                a piece of classical Latin literature from 45 BC, making it over 2000 years old..
              </p>
              <p className="text-zinc-300 leading-relaxed">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
                for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                Malorum" by Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                a piece of classical Latin literature from 45 BC, making it over 2000 years old..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsForm;