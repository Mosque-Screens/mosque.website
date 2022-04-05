import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import HeroBanner from '../components/HeroBanner'
import MosqueBrandingCSS from '../components/MoqueBrandingCSS'
import PrayerTimes from '../components/PrayerTimes'
import Team from '../components/Team'
import mosques from '../data/mosques.yml'

const data = mosques["elm.mosque.website"]

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name} - Mosque Website</title>
      </Head>
      <MosqueBrandingCSS data={data} />
      <HeroBanner data={data} />
      {/* <PrayerTimes data={data} /> */}
      <About data={data} />
      <Team data={data} />
      <Contact data={data} />
    </>
  )
}
