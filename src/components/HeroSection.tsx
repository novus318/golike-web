import BlurIn from './ui/blur-in'
import Ripple from './ui/ripple'
import { RainbowButton } from './ui/rainbow-button'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeroSection = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef<any>(null) // Ref for the button

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      )

      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: 'power3.out' }
      )

      // Animation for the button
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.5, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, delay: 1, ease: 'power3.out' } // Final state
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
        <BlurIn
            word="Connect with like-minded in decentralized, secure environment."
            className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-8 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
          />
          <p
            ref={textRef}
            className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
          >
            Connect with people who share your intentions, values, and
            aspirations.
          </p>
          <RainbowButton
          className='dark:text-primary text-white'
            onClick={() => {
              window.location.href = '/connect'
            }}
          >
          Join now!
          </RainbowButton>
        </div>
      </div>
      <Ripple />
    </section>
  )
}

export default HeroSection