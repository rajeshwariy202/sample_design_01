'use client'; // if you're in app/ directory

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Bell,
  LogOut,
  ClipboardList,
  Heart,
  ShoppingCart,
  Grid,
} from 'lucide-react';

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-transparent hover:ring-primary transition"
      >
        <img
          src="/images/profile.png"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className={`
            absolute right-0 mt-2 w-56
            bg-white border border-gray-200 rounded-lg shadow-lg
            transition duration-200
            before:absolute before:-top-2 before:right-4
            before:border-8 before:border-x-transparent
            before:border-t-transparent before:border-b-white
          `}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b flex items-center gap-3">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">Jonathon Smith</p>
              <p className="text-xs text-gray-500">
                jonathonsmith@gmail.com
              </p>
            </div>
          </div>

          {/* Menu items */}
          <nav className="py-2">
            <MenuItem href="/dashboard" icon={<Grid className="w-5 h-5" />}>
              Dashboard
            </MenuItem>
            <MenuItem href="/orders" icon={<ShoppingCart className="w-5 h-5" />}>
              Order History
            </MenuItem>
            <MenuItem
              href="/courses"
              icon={<ClipboardList className="w-5 h-5" />}
            >
              Enrolled Courses
            </MenuItem>
            <MenuItem href="/wishlist" icon={<Heart className="w-5 h-5" />}>
              Wishlist
            </MenuItem>
            <MenuItem
              href="/quizzes"
              icon={<ClipboardList className="w-5 h-5" />}
            >
              My Quiz Attempts
            </MenuItem>
          </nav>

          {/* Logout */}
          <div className="px-4 py-2 border-t">
            <button className="w-full flex items-center gap-2 text-sm text-red-600 hover:text-red-800">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MenuItem({ href, icon, children }) {
  return (
    <Link href={href}>
      <a className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        {icon}
        <span>{children}</span>
      </a>
    </Link>
  );
}
