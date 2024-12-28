import { CoinsIcon, HeartIcon, PhoneIcon, UserCheckIcon } from "lucide-react";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Sign Up and Verify",
    description:
      "Register on the platform and complete AI-based gender verification to ensure a safe and trusted environment.",
    icon: UserCheckIcon,
  },
  {
    id: 2,
    title: "Buy Tokens",
    description:
      "Purchase tokens to unlock features and connect with others based on your chosen intentions.",
    icon: CoinsIcon,
  },
  {
    id: 3,
    title: "Set Your Intentions",
    description:
      "Choose whether you're looking for emotional support, relaxation, or a physical connection, and let the system do the rest.",
    icon: HeartIcon,
  },
  {
    id: 4,
    title: "Get Matched",
    description:
      "Our smart system schedules up to five calls a day with people who match your intentions. Pick up and start your journey!",
    icon: PhoneIcon,
  },
];

const HowItWorksSection = () => {
  return (
    <div className="relative py-24 sm:py-32 ">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
        How It <span className="text-primary font-bold text-6xl">Works</span> 
      </h2>
      <p className="mt-4 text-lg text-secondary-foreground/80">
        Connecting with the right person has never been easier. Follow these steps to get started.
      </p>
    </div>
    <div className="mt-16 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 z-20">
      {steps.map((step) => (
        <div
          key={step.id}
          className="group relative overflow-hidden rounded-3xl dark:bg-secondary-foreground/20 shadow-sm border transition-transform hover:scale-105"
        >
          <div className="absolute inset-0 z-0 transition-opacity  group-hover:opacity-90"></div>
          <div className="relative z-10 p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full dark:bg-secondary-foreground/40  shadow-md">
              <step.icon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-lg font-semibold ">
              {step.title}
            </h3>
            <p className="mt-4 text-sm text-secondary-foreground/60">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

export default HowItWorksSection;
