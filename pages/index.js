import Head from 'next/head'
import Header from '@components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Desire | koncert 7.08</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Header title="DIZAJER" />
        <Image className='image' src='/logo-synth.png' width={300} height={400} />
        <p className='pt-4'>
          gra koncert
        </p>
        <p>na placu wolności</p>
        <time dateTime='2022-07-22'>7 sierpnia 2022</time>
      </main>
    </div>
  )
}
