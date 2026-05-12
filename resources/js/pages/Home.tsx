import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';

const products = [
  {
    id: 1,
    name: 'Green Tea Frappuccino',
    price: 59000,
    rating: 4.8,
    color: '#21956C',
    accent: '#D4F5E9',
    tag: 'Best Seller',
    emoji: '🍵',
    description:
      'This blend of sweetened premium matcha green tea, milk and ice— topped off with sweetened whipped cream—inspires a delicious boost and good green vibes.',
  },
  {
    id: 2,
    name: 'Caramel Macchiato',
    price: 55000,
    rating: 4.6,
    color: '#B8860B',
    accent: '#FFF8E1',
    tag: 'Fan Favorite',
    emoji: '☕',
    description:
      'Freshly steamed milk with vanilla-flavored syrup, marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.',
  },
  {
    id: 3,
    name: 'Strawberry Acai',
    price: 57000,
    rating: 4.7,
    color: '#C0435A',
    accent: '#FDEAED',
    tag: 'New',
    emoji: '🍓',
    description:
      'Sweet strawberry flavors, passion fruit and açaí notes shaken together with real strawberry pieces. A delicious way to revitalize.',
  },
  {
    id: 4,
    name: 'Pumpkin Spice Latte',
    price: 61000,
    rating: 4.5,
    color: '#C05A35',
    accent: '#FDF0EB',
    tag: 'Seasonal',
    emoji: '🎃',
    description:
      'Our signature espresso and steamed milk with pumpkin, cinnamon, nutmeg and clove. Topped with whipped cream.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className="text-sm"
          style={{ color: s <= Math.round(rating) ? '#F59E0B' : '#D1D5DB' }}
        >
          ★
        </span>
      ))}
      <span className="text-xs text-gray-400 ml-1">{rating}</span>
    </div>
  );
}

export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const p = products[activeIdx];

  const select = (i: number) => {
    if (i === activeIdx) {
      return;
    }

    setFading(true);
    setTimeout(() => {
      setActiveIdx(i);
      setFading(false);
    }, 180);
  };

  return (
    <MainLayout title="Welcome">
      <Head title="Welcome to Starbucks" />

      <div
        className="flex items-center min-h-[calc(100vh-64px)] overflow-hidden relative transition-colors duration-700"
        style={{ background: p.accent + '80' }}
      >
        {/* Left: Product info */}
        <div
          className="flex-1 pl-16 pr-8 transition-all duration-200"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(10px)' : 'translateY(0)',
          }}
        >
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: p.color + '20', color: p.color }}
          >
            {p.tag}
          </span>

          <h1 className="text-5xl font-black text-gray-900 leading-tight mb-4 max-w-sm">
            {p.name}
          </h1>

          <div className="flex items-center gap-4 mb-5">
            <StarRating rating={p.rating} />
            <span className="font-bold text-[#00643C] text-xl">
              MNT {p.price.toLocaleString()}
            </span>
          </div>

          <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs mb-10">
            {p.description}
          </p>

          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-xl border-2 border-[#00643C] bg-white text-[#00643C] text-sm font-semibold hover:bg-[#00643C] hover:text-white transition-all">
              View Ingredients
            </button>
            <Link
              href={`/product/${p.id}`}
              className="px-6 py-3 rounded-xl text-white text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: p.color }}
            >
              Order Now →
            </Link>
          </div>

          {/* Carousel dots */}
          <div className="flex gap-2 mt-12">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                className="h-2.5 rounded-full border-none transition-all duration-300"
                style={{
                  width: i === activeIdx ? 28 : 10,
                  background: i === activeIdx ? p.color : p.color + '40',
                }}
              />
            ))}
          </div>
        </div>

        {/* Center: Main circle */}
        <div className="w-80 flex items-center justify-center flex-shrink-0">
          <div
            className="w-72 h-72 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-500"
            style={{ background: p.color, boxShadow: `0 30px 80px ${p.color}50` }}
          >
            <span
              className="text-8xl transition-all duration-200"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? 'scale(0.8)' : 'scale(1)',
              }}
            >
              {p.emoji}
            </span>
          </div>
        </div>

        {/* Right: Thumbnail sidebar */}
        <div className="flex flex-col gap-5 pr-16 pl-4">
          {products.map((prod, i) => (
            <button
              key={prod.id}
              onClick={() => select(i)}
              className="w-28 h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300"
              style={{
                background: prod.color,
                opacity: i === activeIdx ? 1 : 0.6,
                transform: i === activeIdx ? 'scale(1.1)' : 'scale(1)',
                boxShadow:
                  i === activeIdx
                    ? `0 0 0 4px white, 0 0 0 6px ${prod.color}`
                    : 'none',
              }}
            >
              <span className="text-3xl">{prod.emoji}</span>
              <span className="text-white text-[9px] font-bold mt-1 px-2 text-center leading-tight">
                {prod.name.split(' ').slice(0, 2).join(' ')}
              </span>
            </button>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}