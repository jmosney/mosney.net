import Head from 'next/head';
import Select from '../../components/joby/select';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../../styles/Joby.module.scss';
import mapImage from '../../public/map.jpg';
import HeadingChart from '../../components/joby/heading-chart';
import NoiseChart from '../../components/joby/noise-chart';
import BatteryChart from '../../components/joby/battery-chart';
import { FormEvent, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [chartSlots, setChartSlots] = useState([
    'Heading/Altitude',
    'Flight Path',
    'Rotor Speed',
    'Noise Profile',
  ]);

  const nameToComponentMap = {
    'Heading/Altitude': HeadingChart,
    'Noise Profile': NoiseChart,
  };

  const getChartForSlot = (slot: number) => {
    const chartName = chartSlots[slot];
    // @ts-ignore
    const Component = nameToComponentMap[chartName];
    return <Component></Component>;
  };

  const handleOnChange = (e: any, chartSlot: number) => {
    const changeTo = e.target.value;
    if (!Object.keys(nameToComponentMap).includes(changeTo)) {
      e.preventDefault();
      return;
    };
    const newChartSlots = [...chartSlots];
    newChartSlots[chartSlot] = changeTo;
    setChartSlots(newChartSlots);
  };

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
            <Image className='mr-3' src="/logo.svg" alt="" width="64" height="39" />
            <h1 className='font-sans text-white text-3xl'>Flight Analytics</h1>
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
              <Image src="/icons/filter.svg" alt="Filter" width="30" height="30" />
            </button>
          </div>
        </header>

        <div className='bg-mediumgrey p-3 rounded mt-5'>
          <p className='text-white'>
            <span className='font-medium mr-2'>Flight No.</span>
            <select className='mr-6 bg-transparent'>
              <option value="54321">54321</option>
              <option value="54321">54320</option>
              <option value="54321">54319</option>
              <option value="54321">54318</option>
              <option value="54321">54317</option>
              <option value="54321">54316</option>
              <option value="54321">54315</option>
              <option value="54321">54314</option>
            </select>
            <span className='mr-6'>
              <Image className='inline mr-2' src="/icons/plane-up.svg" alt="Takeoff" width="22" height="22" />
              2023-04-14 03:47
            </span>
            <span className='mr-6'>
              <Image className={'inline mr-2 ' + styles.jbyPlaneDown} src="/icons/plane-up.svg" alt="Landing" width="22" height="22" />
              2023-04-14 04:23
            </span>
            <span className=''>
              <Image className='inline mr-2' src="/icons/time.svg" alt="Duration" width="22" height="22" />
              00:36
            </span>
          </p>
        </div>

        <div className='grid grid-cols-3 gap-6 mt-8'>
          <div className="col-span-2">
            <Select onChange={(e: FormEvent) => handleOnChange(e, 0)} value={chartSlots[0]}></Select>
            <div className='h-80 bg-mediumgrey rounded'>
              {getChartForSlot(0)}
            </div>
          </div>
          <div className="">
            <Select onChange={(e: FormEvent) => handleOnChange(e, 1)}  value='Flight Path'></Select>
            <div className='h-80 bg-mediumgrey rounded'
                style={{
                  backgroundImage: `url(${mapImage.src})`,
                  backgroundPositionX: '100%',
                  backgroundSize: 'cover',
                }}>
            </div>
          </div>
          <div className="">
            <Select onChange={(e: FormEvent) => handleOnChange(e, 2)}  value='Rotor Speed'></Select>
            <div className='h-80 bg-mediumgrey rounded flex items-center justify-center'>
              <Image className='inline mr-2' src="/rotor-speed-diagram.png" alt="Rotor Speeds" width="800" height="406" />
            </div>
          </div>
          <div className="col-span-2">
            <Select onChange={(e: FormEvent) => handleOnChange(e, 3)} value={chartSlots[3]}></Select>
            <div className='h-80 bg-mediumgrey rounded'>
              {getChartForSlot(3)}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
