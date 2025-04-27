'use client'

import { useId, useState, useEffect } from 'react'
import clsx from 'clsx'

import { AppDemo } from '@/components/AppDemo'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

function NebulaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[60rem] h-[60rem] bg-purple-700 rounded-full mix-blend-screen filter blur-[10rem] opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[50rem] h-[50rem] bg-blue-700 rounded-full mix-blend-screen filter blur-[10rem] opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-[40rem] h-[40rem] bg-cyan-500 rounded-full mix-blend-screen filter blur-[8rem] opacity-30"></div>
        <div className="absolute bottom-1/2 left-1/3 w-[45rem] h-[45rem] bg-fuchsia-700 rounded-full mix-blend-screen filter blur-[9rem] opacity-25"></div>
      </div>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(white, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    </div>
  )
}

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full animate-spin-slow">
        <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#4B5563" strokeOpacity="0.7" />
        <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke={`url(#${id}-gradient-1)`} strokeLinecap="round" />
        <defs>
          <linearGradient id={`${id}-gradient-1`} x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const SERVICES = [
  { label: 'Doctors & Clinics — booking/checking appointments', emoji: '🩺' },
  { label: 'Restaurants — reservations or ordering pickup', emoji: '🍽️' },
  { label: 'Haircuts & Salons — haircuts, nails, grooming', emoji: '💇‍♂️' },
  { label: 'Pharmacies — prescription refills/questions', emoji: '💊' },
  { label: 'Home Services — plumbers, electricians, cleaners', emoji: '🧹' },
  { label: 'Car Services — mechanics, oil changes, car washes', emoji: '🚗' },
]

export function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist')
      }

      setSubmitStatus('success')
      setEmail('')
    } catch (error: any) {
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative overflow-hidden py-20 sm:py-32 min-h-screen flex flex-col items-center bg-black">
      <NebulaBackground />
      <Container className="relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
              Your Personal Assistant That Actually <span className="text-cyan-400">Does</span> Things
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Tellora doesn&apos;t just understand you — it takes action. While other assistants stop at answers, Tellora makes calls, books appointments, and handles real tasks for you.
            </p>
            <div className="mt-10">
              <div className="max-w-sm">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="sm:w-64">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-gray-700 bg-gray-900/80 shadow-sm text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 px-4 py-2 sm:text-sm"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="flex-none py-2 px-4 rounded-md sm:text-sm bg-cyan-600 hover:bg-cyan-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join waitlist'}
                  </Button>
                </form>
                {submitStatus === 'success' && (
                  <p className="mt-3 text-sm text-green-400">
                    Thanks for joining our waitlist!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-3 text-sm text-red-400">
                    {errorMessage}
                  </p>
                )}
                {submitStatus === 'idle' && (
                  <p className="mt-3 text-sm text-gray-400">Be one of the first to experience true AI assistance.</p>
                )}
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3" />
            <div className="relative -mx-4 px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32 [mask-image:linear-gradient(to_bottom,white_75%,transparent_100%)]">
              <PhoneFrame className="mx-auto max-w-[366px] relative z-10" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center relative z-10">
          <div className="w-full max-w-2xl">
            <h3 className="text-base font-semibold text-white mb-4 text-center">
              What should Tellora support next? Upvote your most-wanted service:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <ServiceVote key={service.label} label={service.label} emoji={service.emoji} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ServiceVote({ label, emoji }: { label: string; emoji: string }) {
  const [votes, setVotes] = useState(0)
  const [upvoted, setUpvoted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const displayVotes = votes >= 1000 ? (votes / 1000).toFixed(1) + 'k' : votes

  // Fetch initial vote count
  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await fetch('/api/votes')
        if (response.ok) {
          const data = await response.json()
          const serviceVote = data.find((vote: any) => vote.service === label)
          if (serviceVote) {
            setVotes(serviceVote.votes)
          }
        }
      } catch (error) {
        console.error('Error fetching votes:', error)
      }
    }

    fetchVotes()
  }, [label])

  const handleClick = async () => {
    if (isLoading) return
    
    setIsLoading(true)
    try {
      const response = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: label })
      })

      if (response.ok) {
        const data = await response.json()
        setVotes(data.votes)
        setUpvoted(!upvoted)
      }
    } catch (error) {
      console.error('Error voting:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <li className="flex items-center justify-between border border-gray-700 bg-gray-900 rounded-md px-2 py-1 text-gray-100 text-sm">
      <span className="flex items-center">
        <span className="mr-2 text-lg">{emoji}</span>
        {label}
      </span>
      <button
        onClick={handleClick}
        type="button"
        className={clsx(
          'z-20 ml-2 flex items-center gap-1 px-1 py-0.5 rounded text-white text-xs font-semibold shadow-sm',
          upvoted ? 'bg-orange-500' : 'bg-cyan-700 hover:bg-cyan-600',
          isLoading && 'opacity-50 cursor-not-allowed'
        )}
        disabled={isLoading}
        aria-label={`Upvote ${label}`}
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        {displayVotes}
      </button>
    </li>
  )
}
