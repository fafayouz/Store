import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider/Slider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Slider/>
    </>
  )
}
