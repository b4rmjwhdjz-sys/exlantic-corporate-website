import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type State = 'idle' | 'pending' | 'success' | 'error'

const fieldClass =
  'h-12 rounded-none border-0 border-b border-input bg-transparent px-0 text-base shadow-none focus-visible:border-primary focus-visible:ring-0 dark:bg-transparent md:text-base'

export function ContactForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      const unprocessed = /\bdata-netlify\s*=/i.test(await response.text())
      if (unprocessed) throw new Error('Form handling is unavailable')
      form.reset()
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="flex min-h-[28rem] flex-col items-start justify-center gap-6">
        <span className="inline-flex size-14 items-center justify-center rounded-full border border-primary/60 bg-primary/10">
          <Check className="size-6 text-accent" />
        </span>
        <h3 className="font-display text-4xl text-metal">Thank you.</h3>
        <p className="max-w-md text-muted-foreground">
          Your message has been received. We appreciate you reaching out to Exlantic Growth
          Partners and will be in touch.
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="text-sm uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/contact-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
      className="flex flex-col"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Leave this field empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <fieldset disabled={state === 'pending'} className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <legend className="sr-only">Your details</legend>
        <Field id="fullName" label="Full Name">
          <Input id="fullName" name="fullName" autoComplete="name" required maxLength={120} className={fieldClass} />
        </Field>
        <Field id="email" label="Business Email">
          <Input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} />
        </Field>
        <Field id="company" label="Company Name">
          <Input id="company" name="company" autoComplete="organization" maxLength={160} className={fieldClass} />
        </Field>
        <Field id="subject" label="Subject">
          <Input id="subject" name="subject" required maxLength={160} className={fieldClass} />
        </Field>
        <Field id="message" label="Message" className="sm:col-span-2">
          <Textarea
            id="message"
            name="message"
            required
            maxLength={4000}
            rows={5}
            className={cn(fieldClass, 'h-auto min-h-32 resize-y py-3')}
          />
        </Field>

        <div className="flex flex-col-reverse items-start gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Fields marked <span className="text-accent">*</span> are required. Your details are
            used only to respond to your enquiry.
          </p>
          <button
            type="submit"
            className="group inline-flex h-13 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-deep to-primary px-8 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_-10px] shadow-primary/60 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-primary/80 disabled:opacity-60 motion-reduce:transition-none sm:w-auto"
          >
            {state === 'pending' ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Sending
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </>
            )}
          </button>
        </div>
      </fieldset>

      {state === 'error' && (
        <p role="alert" className="mt-6 border-l-2 border-destructive pl-4 text-sm text-foreground">
          Your message could not be confirmed as sent. Your details are still here — please try
          again in a moment.
        </p>
      )}
    </form>
  )
}

function Field({
  id,
  label,
  className,
  children,
}: {
  id: string
  label: string
  className?: string
  children: React.ReactNode
}) {
  const optional = id === 'company'
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <Label htmlFor={id} className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
        {optional ? (
          <span className="font-normal normal-case tracking-normal text-muted-foreground/70">(optional)</span>
        ) : (
          <span className="text-accent">*</span>
        )}
      </Label>
      {children}
    </div>
  )
}
