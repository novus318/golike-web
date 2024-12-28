import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealTextProps {
  text: string
  className?: string
}

export default function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    const letters = textRef.current.querySelectorAll('.letter')
    const dots = textRef.current.querySelectorAll('.dot')

    gsap.set(letters, { opacity: 0 })
    gsap.set(dots, { opacity: 1 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5,
      },
    })

    tl.to(letters, {
      opacity: 1,
      stagger: 0.05,
      ease: 'none',
    })

    tl.to(
      dots,
      {
        opacity: 0,
        stagger: 0.05,
        ease: 'none',
      },
      '<'
    )

    return () => {
      tl.kill()
    }
  }, [text])

  return (
    <div ref={containerRef} className={`min-h-[50vh] ${className}`}>
      <h1 ref={textRef} className="text-6xl font-bold tracking-tight">
        {text.split('').map((letter, index) => (
          <span key={index} className="letter inline-block">
            {letter}
          </span>
        ))}
        {text.split('').map((_, index) => (
          <span key={`dot-${index}`} className="dot inline-block" aria-hidden="true">
            .
          </span>
        ))}
      </h1>
    </div>
  )
}

