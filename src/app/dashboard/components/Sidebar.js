'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
          <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48a16,16,0,0,1,21.53,0l80,75.48A16,16,0,0,1,224,115.55Z" />
        </svg>
      ),
    },
    {
      label: 'Colleges',
      href: '/dashboard/colleges',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
          <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48Z" />
        </svg>
      ),
    },
    {
      label: 'Users',
      href: '/dashboard/users',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
          <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Z" />
        </svg>
      ),
    },
    {
      label: 'Reviews',
      href: '/dashboard/reviews',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
          <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white shadow-sm md:w-64 w-full h-screen z-30 border-r">
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b">
        <h1 className="text-gray-800 font-semibold">Admin Panel</h1>
        <button onClick={() => setOpen(!open)} className="text-gray-600 text-xl">
          ☰
        </button>
      </div>

      {/* Sidebar Content */}
      <div className={`${open ? 'block' : 'hidden'} md:block p-4`}>
        <h2 className="text-gray-900 text-base font-medium mb-6 hidden md:block">
          Admin Panel
        </h2>

        <div className="flex flex-col gap-2">
          {links.map(({ label, href, icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-full ${isActive
                    ? 'bg-gray-100 text-blue-600 font-medium'
                    : 'text-gray-900 hover:bg-gray-100'
                  }`}
              >
                <span className="text-gray-700">{icon}</span>
                <p className="text-sm">{label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
