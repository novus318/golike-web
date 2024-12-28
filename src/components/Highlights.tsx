import { ClockIcon, CoinsIcon, HeartIcon, UserCheckIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "./ui/bento-grid"


const features = [
  {
    Icon: UserCheckIcon,
    name: "AI-Driven Gender Verification",
    description: "Our smart AI ensures profiles are genuine by verifying user gender during sign-up, creating a safe and trusted environment.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0">
      <img
        src="/assets/h1.svg"
        alt="wallet"
        className="absolute inset-0 h-full/50 object-cover z-[-1] ms-auto opacity-60"
      />
    </div>
    ),
  },
  {
    Icon: HeartIcon,
    name: "Personalized Matchmaking",
    description: "Find connections that align with your intentions, whether it’s for emotional support, relaxation, or physical relationships.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: CoinsIcon,
    name: "Token-Based Ecosystem",
    description: "Use our tokens to connect with others and unlock unique experiences in a fair and transparent way.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0">
      <img
        src="/assets/h4.svg"
        alt="wallet"
        className="absolute inset-0 h-full object-cover z-[-1] ms-auto opacity-50"
      />
    </div>
    ),
  },
  {
    Icon: ClockIcon,
    name: "Smart Scheduling System",
    description: "Our system sets up five daily calls based on your preferences, ensuring seamless and meaningful connections.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
];


const Highlights = () => {
  return (
    <section className="my-10">
    <div className="[--color:var(--color-one)] pointer-events-none relative -z-[2] mx-auto h-[20rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_70%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[70%] after:border-t after:border-[hsl(var(--border))] after:bg-background"/>
   <div className="px-5 max-w-7xl mx-auto mt-56">
   <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
   </div>
  </section>
  )
}

export default Highlights