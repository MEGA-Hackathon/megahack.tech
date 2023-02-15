import Head from 'next/head'
import HomeMain from "../components/pages/HomeMain"
import Nav from "../components/common/Nav"

export default function Home() {
  return (
    <>
      <Nav />
      <HomeMain />
    </>
  )
}
