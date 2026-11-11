import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Wordmark } from './Logo'

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#vision', label: 'Vision' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#founder', label: 'Founder' },
  { href: '#why', label: 'Why Exlantic' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 motion-reduce:transition-none',
        scrolled
          ? 'border-b border-border bg-background/75 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-18 max-w-content items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Exlantic Growth Partners — back to top">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-primary/50 px-5 py-2 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:bg-primary/15"
          >
            Contact
          </a>
        </nav>

        <Sheet>
          <SheetTrigger
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full border-border bg-background/95 backdrop-blur-xl sm:max-w-sm">
            <SheetHeader className="px-6 pt-6">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Jump to a section of the Exlantic website
              </SheetDescription>
              <Wordmark />
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col px-6 pt-8">
              {[...navItems, { href: '#contact', label: 'Contact' }].map((item, i) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-baseline gap-4 border-b border-border py-5 font-display text-3xl text-foreground transition-colors hover:text-accent"
                  >
                    <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <p className="mt-auto px-6 pb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Think Beyond. Build Forward.
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
