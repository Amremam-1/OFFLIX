import AviationHero from "./components/section/AviationHero"
import EntertainmentBanner from "./components/section/EntertainmentBanner"
import Footer from "./components/section/Footer"
import Hero from "./components/section/Hero"
import OfflineFeatures from "./components/section/OfflineFeatures"
import OfflineHero from "./components/section/OfflineHero"
import PassengerChallenges from "./components/section/PassengerChallenges"
import ProvidedServices from "./components/section/ProvidedServices"
import "./index.css"


const App = () => {
  return (
    <div>
      <Hero />
      <AviationHero />
      <OfflineFeatures />
      <OfflineHero />
      <PassengerChallenges />
      <EntertainmentBanner />
      <ProvidedServices />
      <Footer />
    </div>
  )
}

export default App
