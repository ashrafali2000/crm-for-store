"use client";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(
  () => import("react-apexcharts").then((mod) => mod.default),
  { ssr: false }
);
type MyChartsProps = {
  chart: string | any;
};

const MyCharts: React.FC<MyChartsProps> = ({ chart }: any) => {
  const series = [
    // Data on the y-axis
    {
      name: "Temperature in Celsius",
      data: [17, 5, 6, 9, 7, 7, 8, 15, 35, 20, 36, 50, 29, 18],
    },
  ];

  const options: any = {
    chart: {
      width: 380,
      type: "pie",
    },
    xaxis: {
      categories: [],
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#4F46E5", // Your desired color
        shadeTo: "light",
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type={chart} />
    </div>
  );
};

export default MyCharts;
