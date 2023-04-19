import {useMemo} from 'react';

import dynamic from 'next/dynamic';
import type { Chart as ChartType } from 'react-charts';
import { AxisOptions } from "react-charts";
const Chart = dynamic(() => import('react-charts').then((mod) => mod.Chart), {
  ssr: false,
}) as typeof ChartType;
import useDemoConfig from "../useDemoConfig";


export default function NoiseChart() {
  const { data, interactionMode, randomizeData } = useDemoConfig({
    series: 3,
    interactionMode: "primary",
    dataType: "ordinal",
    show: ["elementType", "interactionMode"],
  });

  data.forEach((dataSet, index) => {
    const labels = ['A', 'B', 'C'];
    dataSet.label = 'Flight ' + labels[index];
    dataSet.data.forEach((datum) => {
      datum.primary = (datum.primary as string)?.replace('Ordinal Group', 'Sample');
    })
  });

  const primaryAxis = useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        elementType: 'area',
      },
    ],
    ['area']
  );

  const activeSeriesIndex = -1;
  const activeDatumIndex = -1;

  return (
    <Chart
    options={{
      data,
      interactionMode,
      primaryAxis,
      secondaryAxes,
      getDatumStyle: (datum, status) =>
        (activeDatumIndex === datum.index &&
        activeSeriesIndex === datum.seriesIndex
          ? {
              opacity: 1,
              circle: {
                r: 5,
              },
              rectangle: {
                stroke: "black",
                strokeWidth: 3,
              },
            }
          : activeDatumIndex === datum.index
          ? {
              opacity: 1,
              circle: {
                r: 3,
              },
              rectangle: {
                stroke: "black",
                strokeWidth: 1,
              },
            }
          : datum.seriesIndex === activeSeriesIndex
          ? {
              circle: {
                r: 3,
              },
              rectangle: {
                stroke: "black",
                strokeWidth: 1,
              },
            }
          : status === "groupFocused"
          ? {
              circle: {
                r: 2,
              },
              rectangle: {
                stroke: "black",
                strokeWidth: 0,
              },
            }
          : {
              circle: {
                r: 2,
              },
              rectangle: {
                stroke: "black",
                strokeWidth: 0,
              },
            }) as any,
      getSeriesStyle: (series) => {
        return {
          color: `url(#${series.index % 4})`,
          opacity:
            activeSeriesIndex > -1
              ? series.index === activeSeriesIndex
                ? 1
                : 0.3
              : 1,
        };
      },
      renderSVG: () => (
        <defs>
          <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#17EAD9" />
            <stop offset="100%" stopColor="#6078EA" />
          </linearGradient>
          <linearGradient id="1" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#ff8f10" />
            <stop offset="100%" stopColor="#ff3434" />
          </linearGradient>
          <linearGradient id="2" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#42E695" />
            <stop offset="100%" stopColor="#3BB2B8" />
          </linearGradient>
          <linearGradient id="3" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#ffb302" />
            <stop offset="100%" stopColor="#ead700" />
          </linearGradient>
        </defs>
      ),
      dark: true,
    }}
  />)

{/* <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          dark: true,
          defaultColors: ['#ffffff', '#006AC6']
        }}
      /> */}
}