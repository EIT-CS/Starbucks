import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

const trending = [
  {
    id: 1,
    rank: 1,
    name: 'Green Tea Frappuccino',
    price: 59000,
    rating: 4.8,
    orders: '12.4k',
    emoji: '🍵',
    color: '#21956C',
    badge: '🔥 Hot',
    description: 'Sweetened matcha green tea blended with milk and ice, topped with whipped cream.',
  },
  {
    id: 2,
    rank: 2,
    name: 'Caramel Macchiato',
    price: 55000,
    rating: 4.6,
    orders: '9.8k',
    emoji: '☕',
    color: '#B8860B',
    badge: '⭐ Classic',
    description: 'Vanilla syrup, steamed milk, espresso, and a golden caramel drizzle.',
  },
  {
    id: 3,
    rank: 3,
    name: 'Strawberry Acai',
    price: 57000,
    rating: 4.7,
    orders: '8.2k',
    emoji: '🍓',
    color: '#C04060',
    badge: '✨ New',
    description: 'Strawberry, passion fruit, and açaí shaken with real strawberry pieces.',
  },
  {
    id: 4,
    rank: 4,
    name: 'Pumpkin Spice Latte',
    price: 61000,
    rating: 4.5,
    orders: '7.1k',
    emoji: '🎃',
    color: '#C05A35',
    badge: '🍂 Seasonal',
    description: 'Espresso, steamed milk, pumpkin spice sauce, and whipped cream.',
  },
  {
    id: 5,
    rank: 5,
    name: 'Vanilla Sweet Cream Cold Brew',
    price: 63000,
    rating: 4.9,
    orders: '6.5k',
    emoji: '🥛',
    color: '#5A4A8A',
    badge: '💜 Premium',
    description: 'Slow-steeped cold brew topped with vanilla sweet cream that cascades through.',
  },
  {
    id: 6,
    rank: 6,
    name: 'Iced Brown Sugar Oat Milk Shaken Espresso',
    price: 65000,
    rating: 4.7,
    orders: '5.9k',
    emoji: '🌾',
    color: '#7A5C3A',
    badge: '🌱 Dairy-Free',
    description: 'Espresso shaken with brown sugar and cinnamon over ice, topped with oat milk.',
  },
];

export default function Trending() {
  return (
    <MainLayout title="Trending" >
      <Head title="Trending — Starbucks" />

      <div className="px-12 py-12" >
        {/* Header */}
        <div className="flex items-end justify-between mb-10" >
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2" >
              This Week
            </p>
            <h1 className="text-4xl font-black text-gray-900 border-b-2 border-[#00643C] pb-2 w-fit" >
              Trending Now
            </h1>
          </div>
          <p className="text-sm text-gray-400" > Updated daily · {trending.length} items </p>
        </div>

        {/* Top 3 hero cards */}
        <div className="grid grid-cols-3 gap-6 mb-8" >
          {
            trending.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                {/* Color block */}
                < div
                  className="h-36 flex items-center justify-center relative"
                  style={{ background: item.color + '18' }}
                >
                  <span className="text-6xl" > {item.emoji} </span>
                  {/* Rank badge */}
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-black"
                    style={{ background: item.color }
                    }
                  >
                    #{item.rank}
                  </div>
                  {/* Trend badge */}
                  <span className="absolute top-3 right-3 text-xs font-semibold bg-white px-2 py-1 rounded-full shadow-sm" >
                    {item.badge}
                  </span>
                </div>

                < div className="p-5" >
                  <h3 className="font-bold text-gray-900 text-base leading-tight mb-1" >
                    {item.name}
                  </h3>
                  < p className="text-xs text-gray-400 font-light leading-relaxed mb-4 line-clamp-2" >
                    {item.description}
                  </p>

                  < div className="flex items-center justify-between" >
                    <div>
                      <div className="text-[#00643C] font-bold text-base" >
                        MNT {item.price.toLocaleString()}
                      </div>
                      < div className="text-xs text-gray-400" > {item.orders} orders </div>
                    </div>
                    < div className="flex items-center gap-1" >
                      <span className="text-yellow-400 text-sm" >★</span>
                      < span className="text-sm font-bold text-gray-700" > {item.rating} </span>
                    </div>
                  </div>

                  < button
                    className="w-full mt-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ background: item.color }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Remaining items as list */}
        <div className="flex flex-col gap-3" >
          {
            trending.slice(3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl px-6 py-4 border border-gray-100 flex items-center gap-5 hover:shadow-sm transition-shadow"
              >
                {/* Rank */}
                < div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0"
                  style={{ background: item.color }}
                >
                  #{item.rank}
                </div>

                {/* Emoji */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: item.color + '15' }}
                >
                  <span className="text-3xl" > {item.emoji} </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0" >
                  <div className="flex items-center gap-2 mb-0.5" >
                    <h3 className="font-bold text-gray-900 text-sm truncate" > {item.name} </h3>
                    < span className="text-xs text-gray-400 flex-shrink-0" > {item.badge} </span>
                  </div>
                  < p className="text-xs text-gray-400 font-light truncate" > {item.description} </p>
                </div>

                {/* Stats */}
                <div className="text-right flex-shrink-0" >
                  <div className="font-bold text-[#00643C] text-sm" >
                    MNT {item.price.toLocaleString()}
                  </div>
                  < div className="flex items-center gap-1 justify-end" >
                    <span className="text-yellow-400 text-xs" >★</span>
                    < span className="text-xs text-gray-500" > {item.rating} </span>
                    < span className="text-xs text-gray-300 mx-1" >·</span>
                    < span className="text-xs text-gray-400" > {item.orders} orders </span>
                  </div>
                </div>

                < button
                  className="px-5 py-2 rounded-lg text-white text-xs font-semibold flex-shrink-0 hover:opacity-90 transition-opacity"
                  style={{ background: item.color }}
                >
                  Order
                </button>
              </div>
            ))}
        </div>

        < Link
          href="/"
          className="inline-block mt-10 text-sm text-[#00643C] font-semibold hover:underline"
        >
          ← Back to Menu
        </Link>
      </div>
    </MainLayout>
  );
}