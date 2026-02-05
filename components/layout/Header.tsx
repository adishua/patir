'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'איך זה עובד', to: 'how-it-works' },
  { name: 'למה פתיר', to: 'why-us' },
  { name: 'שירותים', to: 'services' },
  { name: 'אודות', to: 'about' },
]

function NavLink({
  to,
  children,
  className,
  onClick,
  ariaLabel,
}: {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      const element = document.getElementById(to)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    onClick?.()
  }

  return (
    <a href={`/#${to}`} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </a>
  )
}

export function Header({ onContactClick }: { onContactClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const hasDarkBackground = isHome && !scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
            <img src="/logo_optimized.webp" alt="פתיר" className="h-12 w-auto" width="48" height="48" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={cn(
                  'text-base font-medium transition-colors cursor-pointer',
                  hasDarkBackground ? 'text-white hover:text-white/80' : 'text-gray-600 hover:text-primary'
                )}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <NavLink to="contact" onClick={onContactClick} ariaLabel="צור קשר">
              <Button className="hidden md:flex bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 rounded-full px-6">
                צור קשר
              </Button>
            </NavLink>

            <button
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
              className={cn(
                'md:hidden p-2 transition-colors',
                hasDarkBackground ? 'text-white hover:text-white/80' : 'text-gray-600 hover:text-primary'
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className="text-lg font-medium text-gray-700 p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="contact"
              onClick={() => {
                setIsOpen(false)
                onContactClick?.()
              }}
              ariaLabel="צור קשר"
            >
              <Button className="w-full bg-primary text-white mt-2">צור קשר</Button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  )
}
