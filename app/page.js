// app/page.js

import AIPowerSection from './components/AICapsLanding/AIPowerSection'
import TechnologySection from './components/landing/TechnologySection'
import OurScience from './components/OurScience'
import PressReleases from './components/PressReleases'
import SearchComponent from './components/search/SearchComponent'
import StatsSection from './components/StatsSection'
import VideoHero from './components/VideoHero'

export default function Home() {
  return (
    <main>
      <SearchComponent />
      <AIPowerSection />
      <TechnologySection />
      <VideoHero />
      {/* <ExploreSection /> */}
      <OurScience />
      <StatsSection />
      <PressReleases />
    </main>
  )
}

export const metadata = {
  title: 'Medvient',
  description: 'Medvient',
}