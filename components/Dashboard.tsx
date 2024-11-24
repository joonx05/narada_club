import React from 'react';
import { MoreVertical, ArrowUpRight } from 'lucide-react';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

const Dashboard = () => {
  const stats = {
    totalBalance: '$X',
    storiesBacked: 4,
    projectedEarnings: '$125'
  };

  const updates = [
    '$GIC is gearing up for Binance launch on...',
    '$ADHI hit $1B Market Cap ...',
    '$GLAM launched their merchandise',
    '$GIC Merchandise Sales hit $5M ...',
    '...',
    '...',
    '...'
  ];

  const projectUpdates = [
    {
      growth: '↑ X%',
      items: [
        { amount: '$100,000', label: 'Merchandise' },
        { amount: '$500,000', label: '2° Transaction' },
        { amount: '$250,000', label: '2° courses' }
      ]
    },
    {
      growth: '↑ X%',
      items: [
        { amount: '$100,000', label: 'Merchandise' },
        { amount: '$500,000', label: '2° Transaction' },
        { amount: '$250,000', label: '2° courses' }
      ]
    }
  ];

  return (
    <div className={`w-[75%] ml-4 p-6 flex items-center ${inter.className}`}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-4">
        {/* Welcome Card */}
        <div className="bg-[#347FEC] rounded-3xl p-6 flex flex-col justify-between">
          <h1 className="text-xl text-white font-medium mb-6 ">
            Welcome back, [User Name]! Ready <br /> to dive into your stories?
          </h1>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors ">
              Discover
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-zinc-900 transition-colors ">
              Create
            </button>
          </div>
        </div>

        {/* Quick Stats Card */}
        <div className="bg-zinc-900 rounded-3xl p-6 border border-[#dbd6cb]">
          <h2 className="text-xl text-yellow-100 mb-6 ">Quick Stats Overview</h2>
          <div className="space-y-2 h-[100px]">
            <div className="text-green-600 ">
              <span className="text-yellow-100">Total Balance : </span>
              {stats.totalBalance}
            </div>
            <div className="text-gray-400 ">
              <span className="text-yellow-100">Total Stories Backed: </span>
              {stats.storiesBacked} Stories Supported.
            </div>
            <div className="text-gray-400 ">
              <span className="text-yellow-100">Earnings: </span>
              Projected Earning 2025: {stats.projectedEarnings}
            </div>
          </div>
        </div>

        {/* Updates Card */}
        <div className="bg-zinc-900 rounded-3xl p-6 border border-[#dbd6cb] h-[550px]">
          <h2 className="text-xl text-yellow-100 mb-14  ">Key Updates from your stories</h2>
          <div className="space-y-6 ml-6">
            {updates.map((update, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#d9d9d9] rounded-lg"></div>
                <span className="text-white  text-sm">{update}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Updates Card */}
        <div className="bg-zinc-900 rounded-3xl p-6 border border-[#dbd6cb]">
  <h2 className="text-xl text-yellow-100 mb-6">Project-wise updates</h2>
  <div className="grid grid-cols-2 gap-4">
    {projectUpdates.map((project, index) => (
      <div
        key={index}
        className="bg-[#393939] rounded-2xl p-4 relative"
      >
        {/* Header */}
        <div className='bg-[#6f6f6f] rounded-lg'>
        <div className="flex justify-between items-start mb-4 h-[250px] p-2">
          <span className="text-white bg-black px-3 py-1 rounded-full text-xs flex gap-2 justify-center items-center">
          <div className="w-3 h-3 bg-[#565656]"></div>
            New Bid
          </span>
          <div className='bg-white rounded-full w-6 h-6 flex items-center justify-center'>
          <button className="rounded-full">
            <MoreVertical size={16} />
          </button>
          </div>
        </div>
        </div>

        {/* Growth Percentage */}
        <div className="absolute bottom-4 right-4 text-green-400 text-sm">
          {project.growth}
        </div>

        {/* Items List */}
        <div className="space-y-3">
          {project.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white text-sm">
              <ArrowUpRight size={14} />
              <span>{item.amount}</span>
              <span className="text-zinc-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;