import { Link, usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/store', label: 'Our Stores' },
  { href: '/trending', label: 'Trending' },
];

export default function MainLayout({ title, children }: Props) {
  const { url } = usePage();

  return (
    <div className="min-h-screen bg-[#F4F0E8] font-sans" >
      {/* Navbar */}
      < nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#00643C]/10 px-10 h-16 flex items-center justify-between" >
        <Link href="/" className="flex items-center gap-2.5" >
          <div className="w-9 h-9 bg-[#00643C] rounded-full flex items-center justify-center text-white text-lg" >
            ☕
          </div>
          < span className="text-[#00643C] font-black text-xl tracking-tight" > Starbucks </span>
        </Link>

        <div className="flex items-center gap-8" >
          {
            navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors pb-0.5 ${url === link.href || (link.href !== '/' && url.startsWith(link.href))
                  ? 'text-[#00643C] border-b-2 border-[#00643C]'
                  : 'text-gray-500 hover:text-[#00643C] border-b-2 border-transparent'
                  }`}
              >
                {link.label}
              </Link>
            ))
          }
        </div>

        < button className="bg-[#00643C] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#004d2e] transition-colors" >
          Order Now
        </button>
      </nav>

      {/* Page title (for <head>) */}
      {title && <title>{title} — Starbucks </title>}

      {/* Content */}
      <main className="pt-16 min-h-screen" > {children} </main>

      {/* Footer */}
      <footer className="bg-[#1E3932] text-white/60 px-10 py-6 flex items-center justify-between text-xs" >
        <span>© 2024 Starbucks Corporation.All rights reserved.</span>
        < div className="flex gap-6" >
          <a href="#" className="hover:text-white transition-colors" > Privacy </a>
          < a href="#" className="hover:text-white transition-colors" > Terms </a>
          < a href="#" className="hover:text-white transition-colors" > Contact </a>
        </div>
      </footer>
    </div>
  );
}