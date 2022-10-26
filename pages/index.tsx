import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Video from '../components/video'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>DEMO 0.0.1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          DEMO1
        </h1>

        <Video src="/VIDEO/1.mp4" type="video/mp4" />
      </main>

    </div>
  )
}

export default Home
