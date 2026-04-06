<x-layout>
  <x-slot:title>
    Welcome to Starbucks
  </x-slot:title>

  <div class="h-full flex justify-between items-center">
    <div class="flex gap-20">
      <div class="ml-5">
        <h1 class="font-bold text-5xl w-fit">Green tea Frappucino</h1>
        <div class="w-sm pl-4">
          <div class="flex gap-5 mt-7">
            <div>
              stars
            </div>
            <span class="font-bold text-[#00643C] text-lg">MNT 59,000</span>
          </div>
          <p class="font-light text-xs mt-5">
            This blend of sweetened premium matcha green tea, milk and ice— topped off with sweetened whipped cream—inspires a delicious boost and good green vibes.
          </p>
        </div>
        <div class="flex gap-3 mt-24 pl-4">
          <button class="rounded-xl bg-white text-[#00643C] shadow-xl/30 p-3.5">INGREDIENTS </button>
          <button class="rounded-xl bg-[#00643C] text-white shadow-xl/30 p-3.5">ORDER NOW </button>
        </div>
      </div>
      <div class="w-80 h-80 rounded-full bg-[#21956C] relative z-20">
        <img src="/bgCoffee.svg" alt="" class="rotate-12 object-cover h-[45rem] absolute -top-3/5 left-3">
        <div class="relative">
          <img src="/green-removebg-preview.svg" alt="" class="absolute left-1/4 ">
        </div>
        <div class="flex gap-3.5 items-center absolute bottom-7 left-1/3">
          <div class="w-2 h-2 rounded-full bg-white opacity-60"></div>
          <div class="w-2 h-2 rounded-full bg-white opacity-60"></div>
          <div class="w-3 h-3 rounded-full border-2 border-white"></div>
          <div class="w-2 h-2 rounded-full bg-white opacity-60"></div>
          <div class="w-2 h-2 rounded-full bg-white opacity-60"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-10 mr-20">
      <div class="w-36 h-36 bg-[#FFC555] relative z-20 rounded-full">
        <img src="/bgCoffee.svg" alt="" class="rotate-10 object-cover h-[20rem] absolute -top-3/5 left-1">
        <div class="relative">
          <img src="/yellowCoffe.svg" alt="" class="absolute left-1/5 top-2.5">
          <div class="bg-white rounded-lg w-fit p-2 shadow-lg/20 absolute -bottom-36 left-3/5 transform -translate-x-1/2">
            <p class="text-[8px]">4.6</p>
          </div>
        </div>
      </div>
      <div class="w-36 h-36 bg-[#D46374] relative z-20 rounded-full">
        <img src="/bgCoffee.svg" alt="" class="rotate-10 object-cover h-[20rem] absolute -top-3/5 left-1">
        <div class="relative">
          <img src="/redCoffee.svg" alt="" class="absolute left-1/5 top-2.5">
          <div class="bg-white rounded-lg w-fit p-2 shadow-lg/20 absolute -bottom-36 left-3/5 transform -translate-x-1/2">
            <p class="text-[8px]">4.6</p>
          </div>
        </div>
      </div>
      <div class="w-36 h-36 bg-[#EA8261] relative z-20 rounded-full">
        <img src="/bgCoffee.svg" alt="" class="rotate-10 object-cover h-[20rem] absolute -top-3/5 left-1">
        <div class="relative">
          <img src="/orangeCoffee.svg" alt="" class="absolute left-1/5 top-2.5">
          <div class="bg-white rounded-lg w-fit p-2 shadow-lg/20 absolute -bottom-36 left-3/5 transform -translate-x-1/2">
            <p class="text-[8px]">4.6</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</x-layout>