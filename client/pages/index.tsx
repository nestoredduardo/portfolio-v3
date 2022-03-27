import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="cursor-pointer text-4xl  font-semibold hover:bg-gradient-to-br hover:from-[#2600FF] hover:to-[#00E1C9] hover:bg-clip-text hover:text-transparent">
        Aquí crearé la V3 de mi portfolio 🦄
      </h1>
    </div>
  )
}

export default Home
