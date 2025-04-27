import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { AppDemo } from '@/components/AppDemo'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

function NebulaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Nebula effect with multiple gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[60rem] h-[60rem] bg-purple-700 rounded-full mix-blend-screen filter blur-[10rem] opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[50rem] h-[50rem] bg-blue-700 rounded-full mix-blend-screen filter blur-[10rem] opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-[40rem] h-[40rem] bg-cyan-500 rounded-full mix-blend-screen filter blur-[8rem] opacity-30"></div>
        <div className="absolute bottom-1/2 left-1/3 w-[45rem] h-[45rem] bg-fuchsia-700 rounded-full mix-blend-screen filter blur-[9rem] opacity-25"></div>
      </div>
      
      {/* Stars effect */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(white, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    </div>
  )
}

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#4B5563"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#4B5563"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32 min-h-screen flex items-center bg-black">
      <NebulaBackground />
      <Container className="relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
              Your Personal Assistant That Actually <span className="text-cyan-400">Does</span> Things
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Tellora doesn't just understand you — it takes action. While other assistants stop at answers, 
              Tellora makes calls, books appointments, and handles real tasks for you. It's the difference between 
              having information and getting things done.
            </p>
            <div className="mt-10">
              <div className="max-w-sm">
                <form className="flex flex-col sm:flex-row gap-3">
                  <div className="sm:w-64">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      className="block w-full rounded-l-md border-gray-700 bg-gray-900/80 shadow-sm text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 px-4 py-2 sm:text-sm"
                    />
                  </div>
                  <Button type="submit" className="flex-none py-2 px-4 rounded-r-md sm:text-sm bg-cyan-600 hover:bg-cyan-500">
                    Join waitlist
                  </Button>
                </form>
                <p className="mt-3 text-sm text-gray-400">
                  Be one of the first to experience true AI assistance.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-600/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] [mask-image:linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute -inset-x-10 -inset-y-10 blur-2xl bg-cyan-500/10 rounded-full"></div>
                <PhoneFrame className="mx-auto max-w-[366px] relative z-10" priority>
                  <AppDemo />
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
