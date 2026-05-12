

export const Store = () => {
  return (

    <div className="px-3.5 py-12">
      <div>
        <p className="font-light text-[10px]">Choose city: </p>
        <select name="city" id="city" className="font-medium text-lg border-none border-b">
          <option value="yerevan">Yerevan</option>
          <option value="moscow">Moscow</option>
          <option value="newyork">New York</option>
        </select>
      </div>
      <div className="pr-8">
        <div className="flex flex-col gap-6">
          <div className="bg-white w-full rounded-lg py-4 px-8 z-20 relative flex justify-between pr-16">
            <div className="flex gap-6">
              <div>
                {/* <Image width="" height="" src="/SurbayaStore.svg" alt="" className="w-[250px]"> */}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl">Starbucks Plaza Surabaya</h1>
                <div>
                  <p className="font-light text-xs">Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271</p>
                  <p className="font-light text-xs">Telepon : (031) 5316105 | Jam : 11.00 - 21.00 WIB</p>
                </div>
                <button className="bg-[#00643C] text-white rounded-lg px-8 py-2.5 w-fit font-light text-xs ">Find In Maps</button>
              </div>

            </div>
            <div>
              <div className=" flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  {/* <img src="/wifi.svg" alt=""> */}
                  <span className="uppercase font-bold text-xs text-[#00643C]">Free Wi-Fi</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* <img src="/cup.svg" alt=""> */}
                  <span className="uppercase font-bold text-xs text-[#00643C] ">Dine-in</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* <img src="/cycle.svg" alt=""> */}
                  <span className="uppercase font-bold text-xs text-[#00643C]">DELIVERY</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* <img src="/hand.svg" alt=""> */}
                  <span className="uppercase font-bold text-xs text-[#00643C] ">TAKEAWAY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full rounded-lg py-4 px-8 z-20 relative flex justify-between pr-16">
            <div className="flex gap-6">
              <div>
                {/* <img src="/Galaxy.svg" alt="" className="w-[250px]"> */}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl">Starbucks Galaxy Mall</h1>
                <div>
                  <p className="font-light text-xs">Dharmahusada Indah Timur No.35-37, Mulyorejo, Kec. Mulyorejo, Kota SBY, Jawa Timur 60114</p>
                  <p className="font-light text-xs">Telepon : (031) 5915044 | Jam : 09.00 - 21.00 WIB</p>
                </div>
                <button className="bg-[#00643C] text-white rounded-lg px-8 py-2.5 w-fit font-light text-xs ">Find In Maps</button>
              </div>
            </div>
            <div className="">
              <div className=" flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  {/* <img src="/wifi.svg" alt=""> */}
                  <span className="uppercase font-bold text-xs text-[#00643C]">Free Wi-Fi</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* <img src="/cup.svg" alt=""> */}
                  <span className="uppercase font-bold text-xs text-[#00643C] ">Dine-in</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* <img src="/cycle.svg" alt=""> */}
                  <span className="uppercase font-bold text-xs text-[#00643C]">DELIVERY</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* <img src="/hand.svg" alt=""> */}
                  <span className="uppercase font-bold text-xs text-[#00643C] ">TAKEAWAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
