import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import CTASection from './CTASection'
import Footer from './Footer'

export default function LandingPage(){
  return(
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  )
}