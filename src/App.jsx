// Root application shell
import SiteHeader from './components/layout/SiteHeader'
import AudioPlayer from './components/layout/AudioPlayer'
import Hero from './components/invitation/Hero'
import CoupleReveal from './components/invitation/CoupleReveal'
import InvitationNote from './components/invitation/InvitationNote'
import Programme from './components/invitation/Programme'
import VenueCard from './components/invitation/VenueCard'
import FamilyRsvp from './components/invitation/FamilyRsvp'
import Closing from './components/invitation/Closing'
import { invitation } from './data/invitation'

export default function App() {
  return (
    <>
      <SiteHeader />
      <AudioPlayer />

      <main>
        <Hero         data={invitation} />
        <CoupleReveal data={invitation} />
        <InvitationNote data={invitation} />
        <Programme    data={invitation} />
        <VenueCard    data={invitation} />
        <FamilyRsvp   data={invitation} />
      </main>

      <Closing data={invitation} />
    </>
  )
}
