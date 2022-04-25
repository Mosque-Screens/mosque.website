import Head from 'next/head';
import { useRef } from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import ContentSection from '../components/ContentSection';
import HeroBanner from '../components/HeroBanner';
import MosqueBrandingCSS from '../components/MoqueBrandingCSS';
import PrayerTimes from '../components/PrayerTimes';
import Team from '../components/Team';
import GoTop from '../components/GoTop';
import mosques from '../data/mosques.yml';

function Home({ data }) {
	const refGoTop = useRef();

	return (
		<>
			<Head>
				<title>{data.name} - Mosque Website</title>
				<link rel='icon' href={data.branding.favicon_url} />
			</Head>
			<div ref={refGoTop}></div>
			<MosqueBrandingCSS data={data} />
			<HeroBanner data={data} />
			<PrayerTimes data={data} />
			<About data={data} />
			<ContentSection data={data} />
			<Team data={data} />
			<Contact data={data} />
			<GoTop topRef={refGoTop} data={data} />
		</>
	);
}

Home.getInitialProps = async ({ req }) => {
	const data = mosques[req.headers.host] ?? mosques['default'];
	return { data: data };
};

export default Home;
