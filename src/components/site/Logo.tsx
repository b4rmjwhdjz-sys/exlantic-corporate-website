import { cn } from '@/lib/utils'

/** Geometric "X" monogram — two offset chevrons forming a forward motion. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn('size-9', className)}
      fill="none"
    >
      <defs>
        <linearGradient id="lm-silver" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#9b9ba8" />
          <stop offset="1" stopColor="#e4e4ec" />
        </linearGradient>
        <linearGradient id="lm-violet" x1="0" y1="40" x2="40" y2="0">
          <stop offset="0" stopColor="#5b21b6" />
          <stop offset="1" stopColor="#c4a1ff" />
        </linearGradient>
      </defs>
      <path d="M20 1.5 38.5 20 20 38.5 1.5 20Z" stroke="url(#lm-silver)" strokeWidth="1.2" />
      <path d="M12 11l9 9-9 9" stroke="url(#lm-silver)" strokeWidth="2.4" strokeLinecap="square" />
      <path d="M28 11l-9 9 9 9" stroke="url(#lm-violet)" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-brand text-[0.95rem] tracking-[0.32em] text-metal">
          EXLANTIC
        </span>
        <span className="mt-1.5 text-[0.58rem] font-medium uppercase tracking-[0.42em] text-muted-foreground">
          Growth Partners
        </span>
      </span>
    </span>
  )
}
