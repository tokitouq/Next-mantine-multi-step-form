import { MainContainer } from '@/components/MainContainer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Mantine Multi step form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
         <MainContainer />
      </main>
    </>
  )
}
