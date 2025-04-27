import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="join-waitlist"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Don't Miss Your Chance
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Spots on our waitlist are limited. Sign up now to be among the first to experience 
            a personal assistant that actually listens — and acts.
          </p>
          <form className="mt-8 sm:mx-auto sm:flex sm:max-w-md">
            <div className="flex-auto">
              <label htmlFor="email-cta" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email-cta"
                placeholder="Enter your email"
                className="block w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm"
              />
            </div>
            <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <Button type="submit" className="w-full text-sm">
                Join the waitlist
              </Button>
            </div>
          </form>
          <p className="mt-4 text-sm text-gray-300">
            We respect your privacy. Your email will only be used for Siri++ updates.
          </p>
        </div>
      </Container>
    </section>
  )
}
