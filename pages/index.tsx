import Head from 'next/head'
import HomeMain from "../components/pages/HomeMain"
import Nav from "../components/common/Nav"
import Class from "../components/pages/Class"
import Footer from "../components/common/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <Class />
      {/* <HomeMain /> */}
      <Footer />
    </>
  )
}
