import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  emoji: string;
  color: string;
  amenities: string[];
}

const storeData: Record<string, Store[]> = {
  yerevan: [
    {
      id: 1,
      name: 'Starbucks Northern Avenue',
      address: 'Northern Avenue 1, Yerevan, Armenia 0010',
      phone: '+374 10 123456',
      hours: '08:00 - 22:00',
      emoji: '🏙️',
      color: '#21956C',
      amenities: ['wifi', 'dine', 'takeaway'],
    },
    {
      id: 2,
      name: 'Starbucks Cascade Mall',
      address: 'Tamanyan St 1, Yerevan, Armenia 0009',
      phone: '+374 10 654321',
      hours: '09:00 - 21:00',
      emoji: '🛍️',
      color: '#B8860B',
      amenities: ['wifi', 'dine', 'delivery', 'takeaway'],
    },
  ],
  moscow: [
    {
      id: 3,
      name: 'Starbucks Arbat',
      address: 'Arbat St 25, Moscow, Russia 119002',
      phone: '+7 495 123 4567',
      hours: '07:00 - 23:00',
      emoji: '🏛️',
      color: '#C04060',
      amenities: ['wifi', 'dine', 'takeaway'],
    },
    {
      id: 4,
      name: 'Starbucks GUM',
      address: 'Red Square 3, Moscow, Russia 109012',
      phone: '+7 495 987 6543',
      hours: '09:00 - 21:00',
      emoji: '⭐',
      color: '#C05A35',
      amenities: ['wifi', 'dine', 'delivery', 'takeaway'],
    },
  ],
  newyork: [
    {
      id: 5,
      name: 'Starbucks Plaza Surabaya',
      address: 'Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271',
      phone: '(031) 5316105',
      hours: '11:00 - 21:00 WIB',
      emoji: '🏢',
      color: '#21956C',
      amenities: ['wifi', 'dine', 'delivery', 'takeaway'],
    },
    {
      id: 6,
      name: 'Starbucks Galaxy Mall',
      address: 'Dharmahusada Indah Timur No.35-37, Mulyorejo, Kota SBY, Jawa Timur 60114',
      phone: '(031) 5915044',
      hours: '09:00 - 21:00 WIB',
      emoji: '🌟',
      color: '#B8860B',
      amenities: ['wifi', 'dine', 'delivery', 'takeaway'],
    },
  ],
};

const amenityLabel: Record<string, { icon: string; label: string }> = {
  wifi: { icon: '📶', label: 'Free Wi-Fi' },
  dine: { icon: '🍽️', label: 'Dine-in' },
  delivery: { icon: '🚴', label: 'Delivery' },
  takeaway: { icon: '👜', label: 'Takeaway' },
};

const cities = [
  { value: 'newyork', label: 'New York / Surabaya' },
  { value: 'yerevan', label: 'Yerevan' },
  { value: 'moscow', label: 'Moscow' },
];

export default function Store() {
  const [city, setCity] = useState('newyork');
  const stores = storeData[city];

  return (
    <MainLayout title="Our Stores" >
      <Head title="Our Stores — Starbucks" />

      <div className="px-11 py-12" >
        {/* Header */}
        < div className="flex items-end justify-between mb-10" >
          <div>
            <p className="text-[11px] text-gray-400 font-light mb-1.5" > Choose city: </p>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)
              }
              className="text-xl font-bold text-gray-900 bg-transparent border-none border-b-2 border-[#00643C] pb-1 pr-6 cursor-pointer focus:outline-none"
            >
              {
                cities.map((c) => (
                  <option key={c.value} value={c.value} >
                    {c.label}
                  </option>
                ))
              }
            </select>
          </div>
          < span className="text-sm text-gray-400" > {stores.length} locations found </span>
        </div>

        {/* Store cards */}
        <div className="flex flex-col gap-6" >
          {
            stores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-2xl py-6 px-8 border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Left: image + info */}
                < div className="flex gap-6 items-center" >
                  <div
                    className="w-36 h-28 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: store.color + '18' }}
                  >
                    <span className="text-5xl" > {store.emoji} </span>
                  </div>

                  < div >
                    <h2 className="font-bold text-2xl text-gray-900 mb-2" > {store.name} </h2>
                    < p className="text-xs text-gray-400 font-light mb-0.5" >
                      📍 {store.address}
                    </p>
                    < p className="text-xs text-gray-400 font-light mb-3" >
                      📞 {store.phone}& nbsp;& nbsp;|& nbsp;& nbsp;🕐 {store.hours}
                    </p>
                    < button
                      className="text-white text-xs font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                      style={{ background: store.color }}
                    >
                      Find in Maps
                    </button>
                  </div>
                </div>

                {/* Right: amenities */}
                <div className="flex flex-col gap-3 ml-10" >
                  {
                    store.amenities.map((key) => (
                      <div key={key} className="flex items-center gap-3" >
                        <span className="text-base" > {amenityLabel[key].icon} </span>
                        < span className="text-xs font-bold text-[#00643C] uppercase tracking-wide" >
                          {amenityLabel[key].label}
                        </span>
                      </div>
                    ))
                  }
                </div>
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