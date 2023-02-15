import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GridLines from '../components/common/Gridlines'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Megahack 2023 - Sustainable Development Hackathon</title>
        <meta name="description" content="Join the motivated and driven community at MEGA where innovators and problem solvers come together to create solutions for the UN's 17 sustainability goals. Benefit from our knowledge network and connections with NGO's, entrepreneurs, and tech companies. Experience the impact of a truly MEGA hackathon with 200  attendees from 20  countries, funding and awards worth over 50k and opportunities for growth." />
        <meta name="keywords" content="community, motivated, driven, innovators, problem solvers, UN sustainability goals, knowledge network, connections, NGO's, entrepreneurs, tech companies, hackathon, mega, mega hackathon"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Megahack 2023" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/Favicons/icon-512x512.png" />
      </Head>
      <Component {...pageProps} />
      <GridLines />
    </>
  )
}
