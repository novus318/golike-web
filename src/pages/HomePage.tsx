import CardSection from "@/components/CardSection"
import FaqSection from "@/components/FaqSection"
import HeroSection from "@/components/HeroSection"
import Highlights from "@/components/Highlights"
import HowItWorksSection from "@/components/HowItWorksSection"
import JoinCommunity from "@/components/JoinCommunity"
import Navbar from "@/components/Navbar"
import TokenSection from "@/components/TokenSection"

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Highlights/>
    <HowItWorksSection/>
    <TokenSection/>
    <CardSection/>
    <FaqSection/>
    <JoinCommunity/>
    </>
  )
}

export default HomePage