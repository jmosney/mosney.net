import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '../../styles/Joby.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Joby Aviation :: Flight Analytics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
      </Head>
      <main className={`${inter.className} p-8 min-h-screen bg-darkgrey`}>
        <header className='grid grid-cols-2'>
          <div className='flex'>
            <Image className='mr-3' src="/logo.svg" alt="" width="63" height="38" />
            <h1 className='font-sans text-white text-2xl font-light'>Flight Analytics</h1>
          </div>
          <div className='flex flex-row-reverse items-center'>
            <p className='text-white ml-3'>Christine K.</p>
            <Image className='ml-5' src="/user.png" alt="" width="40" height="40" />
            <button>
              <Image className='ml-5' src="/icons/settings.svg" alt="Settings" width="30" height="30" />
            </button>
            <button>
              <Image className='ml-5' src="/icons/search.svg" alt="Search" width="30" height="30" />
            </button>
            <button>
              <Image className='' src="/icons/filter.svg" alt="Filter" width="30" height="30" />
            </button>
          </div>
        </header>
      </main>
    </>
  )
}
