import React from 'react'

export const Hero = () => {
  return (
    <div className="h-full flex justify-between items-center">
      <div className="flex gap-20">
        <div className="ml-5">
          <h1 className="font-bold text-5xl w-fit">Green tea Frappucino</h1>
          <div className="w-sm pl-4">
            <div className="flex gap-5 mt-7">
              <div>
                stars
              </div>
              <span className="font-bold text-[#00643C] text-lg">MNT 59,000</span>
            </div>
            <p className="font-light text-xs mt-5">
              This blend of sweetened premium matcha green tea, milk and ice— topped off with sweetened whipped cream—inspires a delicious boost and good green vibes.
            </p>
          </div>
          <div className="flex gap-3 mt-24 pl-4">
            <button className="rounded-xl bg-white text-[#00643C] shadow-xl/30 p-3.5">INGREDIENTS </button>
            <button className="rounded-xl bg-[#00643C] text-white shadow-xl/30 p-3.5">ORDER NOW </button>
          </div>
        </div>
        <div className="w-80 h-80 rounded-full bg-[#21956C] relative z-20">
          {/* <img src="/bgCoffee.svg" alt="" className="rotate-12 object-cover h-[45rem] absolute -top-3/5 left-3"> */}
          <div className="relative">
            {/* <img src="/green-removebg-preview.svg" alt="" className="absolute left-1/4 "> */}
          </div>
          <div className="flex gap-3.5 items-center absolute bottom-7 left-1/3">
            <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
            <div className="w-3 h-3 rounded-full border-2 border-white"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mr-20">
        <div className="w-36 h-36 bg-[#FFC555] relative z-20 rounded-full">
          {/* <img src="/bgCoffee.svg" alt="" className="rotate-10 object-cover h-[20rem] absolute -top-3/5 left-1"> */}
          <div className="relative">
            {/* <img src="/yellowCoffe.svg" alt="" className="absolute left-1/5 top-2.5"> */}
            <div className="bg-white rounded-lg w-fit p-2 shadow-lg/20 absolute -bottom-36 left-3/5 transform -translate-x-1/2">
              <p className="text-[8px]">4.6</p>
            </div>
          </div>
        </div>
        <div className="w-36 h-36 bg-[#D46374] relative z-20 rounded-full">
          {/* <img src="/bgCoffee.svg" alt="" className="rotate-10 object-cover h-[20rem] absolute -top-3/5 left-1"> */}
          <div className="relative">
            {/* <img src="/redCoffee.svg" alt="" className="absolute left-1/5 top-2.5"> */}
            <div className="bg-white rounded-lg w-fit p-2 shadow-lg/20 absolute -bottom-36 left-3/5 transform -translate-x-1/2">
              <p className="text-[8px]">4.6</p>
            </div>
          </div>
        </div>
        <div className="w-36 h-36 bg-[#EA8261] relative z-20 rounded-full">
          {/* <img src="/bgCoffee.svg" alt="" className="rotate-10 object-cover h-[20rem] absolute -top-3/5 left-1"> */}
          <div className="relative">
            {/* <img src="/orangeCoffee.svg" alt="" className="absolute left-1/5 top-2.5"> */}
            <div className="bg-white rounded-lg w-fit p-2 shadow-lg/20 absolute -bottom-36 left-3/5 transform -translate-x-1/2">
              <p className="text-[8px]">4.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
