import {useMemo} from 'react';

import dynamic from 'next/dynamic';
import type { Chart as ChartType } from 'react-charts';
import { AxisOptions } from "react-charts";
const Chart = dynamic(() => import('react-charts').then((mod) => mod.Chart), {
  ssr: false,
}) as typeof ChartType;
import useDemoConfig from "../useDemoConfig";


export default function BatteryChart() {
  // const data = [
  //   {
  //     label: 'Battery capacity',
  //     primary: Date.now(),
  //     secondary: 100,
  //   },
  // ];

  const { data, randomizeData } = useDemoConfig({
    series: 1,
    dataType: 'linear',
  });

  console.log(data);


  function generateRandomNumber(min: number, max: number) {
    const difference = max - min;
    const baseRand = Math.random() * difference;
    return min + baseRand;
  }

  // data.forEach((dataSet, index) => {
  //   dataSet.label = 'Flight ' + (index === 0 ? 'A' : 'B');
  //   dataSet.data.forEach((datum) => {
  //     datum.secondary = generateRandomNumber(0, 340);
  //   })
  //   dataSet.data.sort((a, b) => {
  //     // @ts-ignore
  //     return a.primary - b.primary;
  //   });
  //   dataSet.data[0].primary = 0;
  //   dataSet.data[dataSet.data.length - 1].primary = 100;
  // });

  const primaryAxis = useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          dark: true,
          defaultColors: ['#006AC6']
        }}
      />
  )
}