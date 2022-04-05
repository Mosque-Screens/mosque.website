import Head from 'next/head'
import Contact from '../components/Contact'
import HeroBanner from '../components/HeroBanner'
import MosqueBrandingCSS from '../components/MoqueBrandingCSS'
import PrayerTimes from '../components/PrayerTimes'
import Team from '../components/Team'

const data = {
  name: "East London Mosque",
  description: "The East London Mosque, which incorporates the London Muslim Centre and the Maryam Centre, has a rich history, with roots in the London Mosque Fund established in 1910. It has gone on to become one of the most active Islamic institutions in Britain.",
  branding: {
    logo_url: "https://www.eastlondonmosque.org.uk/clients/eastlondonmosque/assets/logo@2x.png",
    banner_image_url: "https://images.unsplash.com/photo-1551041777-ed277b8dd348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    primary_color: "#95112d",
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name} | Mosque Website</title>
      </Head>
      <MosqueBrandingCSS data={data} />
      <HeroBanner data={data} />
      <PrayerTimes data={data} />
      <Team data={data} />
      <Contact data={data} />
    </>
  )
}
