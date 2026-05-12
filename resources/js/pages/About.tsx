import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

const values = [
  { icon: '🌿', title: 'Ethical Sourcing', desc: 'We work with farmers to source the highest quality coffee responsibly.' },
  { icon: '♻️', title: 'Environmental Stewardship', desc: 'Committed to reducing our environmental footprint through sustainable practices.' },
  { icon: '🤝', title: 'Community', desc: 'Investing in the communities where we live, work and do business.' },
  { icon: '☕', title: 'Craft & Quality', desc: 'Every cup is crafted with care, using only the finest ingredients.' },
];

const milestones = [
  { year: '1971', title: 'Founded in Seattle', desc: 'First store opens at Pike Place Market, Seattle, Washington.' },
  { year: '1987', title: 'Howard Schultz Era', desc: 'Rebranded and launched the iconic coffeehouse concept.' },
  { year: '1992', title: 'Goes Public', desc: 'IPO with 165 stores across the United States.' },
  { year: '2003', title: 'Global Expansion', desc: '6,000+ stores across 30+ countries worldwide.' },
  { year: '2024', title: 'Today', desc: '36,000+ stores in 80+ countries, serving millions daily.' },
];

export default function About() {
  return (
    <MainLayout title="About Us">
      <Head title="About Us — Starbucks" />

      <div className="px-16 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 border-b-2 border-[#00643C] w-fit pb-3 mb-12">
          About Us
        </h1>

        {/* Hero */}
        <div className="flex gap-14 items-center mb-20">
          <div
            className="w-56 h-56 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-xl"
            style={{ background: '#21956C' }}
          >
            <span className="text-7xl">☕</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">More Than Just Coffee</h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Starbucks Corporation adalah sebuah perusahaan kopi dan jaringan kedai kopi global
              asal Amerika Serikat yang berkantor pusat di Seattle, Washington. Starbucks adalah
              perusahaan kedai kopi terbesar di dunia, dengan 20.336 kedai di 61 negara, termasuk
              13.123 di Amerika Serikat, 1.299 di Kanada, 977 di Jepang, 793 di Britania Raya,
              732 di Cina, 473 di Korea Selatan, 363 di Meksiko, 282 di Taiwan, 204 di Filipina,
              164 di Thailand dan 326 di Indonesia.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
        <div className="grid grid-cols-2 gap-4 mb-20">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00643C]/30 transition-colors"
            >
              <span className="text-3xl block mb-3">{v.icon}</span>
              <div className="font-bold text-gray-900 mb-2">{v.title}</div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h2>
        <div className="relative mb-16">
          {/* Vertical line */}
          <div className="absolute left-[6.5rem] top-2 bottom-2 w-0.5 bg-[#00643C]/15" />

          <div className="flex flex-col gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex items-start gap-8">
                <div className="w-24 text-right flex-shrink-0 pt-0.5">
                  <span className="font-bold text-[#00643C] text-base">{m.year}</span>
                </div>
                {/* Dot */}
                <div
                  className="w-3.5 h-3.5 rounded-full bg-[#00643C] flex-shrink-0 mt-1 relative z-10"
                  style={{ boxShadow: '0 0 0 4px #D1FAE5' }}
                />
                <div>
                  <div className="font-bold text-gray-900 mb-1">{m.title}</div>
                  <div className="text-xs text-gray-400 font-light">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-3">
          <Link
            href="/store"
            className="bg-[#00643C] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#004d2e] transition-colors"
          >
            Find a Store →
          </Link>
          <Link
            href="/"
            className="border-2 border-[#00643C] text-[#00643C] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#00643C] hover:text-white transition-all"
          >
            View Menu
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}