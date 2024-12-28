import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ComingSoonSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const description = descriptionRef.current
    const form = formRef.current

    gsap.fromTo(title, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(description,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(form,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden mt-10">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="text-center">
          <h2 ref={titleRef} className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Coming Soon...
          </h2>
          <p ref={descriptionRef} className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            We're working on groundbreaking features.
          </p>
    
        </div>
      </div>
    </section>
  )
}

export default ComingSoonSection

