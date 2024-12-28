import { BsFacebook, BsInstagram, BsLinkedin, BsTelegram, BsTwitterX } from "react-icons/bs"

const JoinCommunity = () => {
  return (
    <div className="max-w-6xl bg-secondary-foreground rounded-2xl shadow p-8 space-y-6 mx-auto my-16 md:my-24">
        <h2 className="text-2xl font-sans text-primary-foreground dark:text-secondary"><span className="text-primary font-bold text-4xl">Join</span> Our Community</h2>
        <p className="text-secondary">
          Join our thriving global community of millions across 120+ countries. Connect with diverse professionals, share insights, and collaborate in multiple languages to expand your network and opportunities.
        </p>
    <hr className="border-t border-neutral-200" />
    <div>
      <h3 className="text-sm text-secondary mb-2 font-sans font-medium">Community</h3>
      <div className="flex items-center gap-4">
       <a href="#">
       <BsTelegram className="w-6 h-6 text-primary"/>
       </a>
        <a href="#">
        <BsFacebook className="w-6 h-6 text-primary"/>
        </a>
        <a href="#">
        <BsInstagram className="w-6 h-6 text-primary"/>
        </a>
        <a href="#">
        <BsLinkedin className="w-6 h-6 text-primary"/>
        </a>
        <a href="#">
        <BsTwitterX className="w-6 h-6 text-primary"/>
        </a>
      </div>
    </div>
  </div>
  )
}

export default JoinCommunity