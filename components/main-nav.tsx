'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LogOut,
  ClipboardList,
  Heart,
  ShoppingCart,
  Grid,
  Menu as MenuIcon,
} from 'lucide-react';

import profilePic from '../images/profile.png';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // close profile menu on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const routes = [
    {
      label: 'Main',
      items: [
        { href: '/', label: 'Home' },
        { href: '/courses', label: 'Courses' },
        { href: '/live-classes', label: 'Live Classes' },
        { href: '/recorded-classes', label: 'Recorded Classes' },
      ],
    },
    {
      label: 'Content',
      items: [
        { href: '/blog', label: 'Blog' },
        { href: '/discussion-forum', label: 'Discussion Forum' },
        { href: '/quiz-contest', label: 'Quiz Contest' },
      ],
    },
    {
      label: 'Coaching',
      items: [
        { href: '/become-coach', label: 'Become a Coach' },
        { href: '/coach-guidelines', label: 'Coach Guidelines' },
        { href: '/one-on-one', label: '1-on-1 Consulting' },
        { href: '/book-session', label: 'Book a Session' },
      ],
    },
    {
      label: 'Company',
      items: [
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
        { href: '/faq', label: 'FAQ' },
        { href: '/membership', label: 'Membership' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Promo Banner */}
      <div className="bg-[#2e2a72] text-white py-2 px-4 text-center">
        <span className="text-sm font-medium">
          TODAY&apos;S SPECIAL: 20% off every course! Today only.
        </span>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b flex items-center justify-between px-4 md:px-8 h-16">
        <div className="flex items-center gap-4 w-full">
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[280px]">
              <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="p-4 border-b">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2"
                  >
                    <span className="font-bold text-xl text-primary">Meta</span>
                    <span className="text-xl font-semibold">Match</span>
                  </Link>
                </div>

                {/* Nav Sections */}
                <div className="overflow-y-auto flex-1 p-4 space-y-6">
                  {routes.map((section) => (
                    <div key={section.label}>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        {section.label}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'block py-2 px-3 rounded-md text-sm',
                              pathname === item.href
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-foreground hover:bg-muted'
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t">
                  <ModeToggle className="mb-4" />
                  <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full mb-2">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                    <Button size="sm" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="hidden md:flex items-center text-xl font-bold">
            <span className="text-primary">Meta</span>
            <span>Match</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 ml-10">
            {routes.map((section) => (
              <div key={section.label} className="relative group">
                <span
                  className="text-sm font-medium text-muted-foreground group-hover:text-primary cursor-default"
                >
                  {section.label}
                </span>
                <div className="absolute left-0 top-full mt-2 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all z-50 min-w-[180px]">
                  <div className="p-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'block px-4 py-2 rounded-md text-sm whitespace-nowrap',
                          pathname === item.href
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'hover:bg-muted text-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Currency Selector */}
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="mr-1">USD</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          {/* Log in */}
          <Link href="/auth/login">
            <Button className="bg-[#2196f3] hover:bg-[#1976d2] text-white">
              Log in
            </Button>
          </Link>

          {/* Profile Avatar + Dropdown */}
          <div
            ref={profileRef}
            className="relative"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="w-8 h-8 rounded-full overflow-hidden hover:ring-2 ring-primary transition"
            >
              <img
                src={profilePic.src}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </button>

            {profileOpen && (
              <div
                className="
                  absolute right-0 mt-2 w-56
                  bg-white border border-gray-200 rounded-lg shadow-lg
                  transition
                  before:absolute before:-top-2 before:right-4
                  before:border-8 before:border-x-transparent
                  before:border-t-transparent before:border-b-white
                "
              >
                {/* Profile Header */}
                <div className="px-4 py-3 border-b flex items-center gap-3">
                  <img
                    src={profilePic.src}
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

                {/* Menu Links */}
                <nav className="py-2">
                  <MenuItem href="/dashboard" icon={<Grid className="w-5 h-5" />}>
                    Dashboard
                  </MenuItem>
                  <MenuItem href="/orders" icon={<ShoppingCart className="w-5 h-5" />}>
                    Order History
                  </MenuItem>
                  <MenuItem href="/e-course" icon={<ClipboardList className="w-5 h-5" />}>
                    Enrolled Courses
                  </MenuItem>
                  <MenuItem href="/wishlist" icon={<Heart className="w-5 h-5" />}>
                    Wishlist
                  </MenuItem>
                  <MenuItem href="/quizzes" icon={<ClipboardList className="w-5 h-5" />}>
                    My Quiz Attempts
                  </MenuItem>
                </nav>

                {/* Logout */}
                <div className="px-4 py-2 border-t" >
                  <button className="w-full flex items-center gap-2 text-sm text-red-600 hover:text-red-800">
                    <LogOut className="w-5 h-5"/>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: JSX.Element;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}
