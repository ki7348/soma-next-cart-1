import { useQuery } from "react-query";
import { fetchCharts } from "../../apis";
import { IHistorical } from "../../types/Coin";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type CoinChartPropsType = {
  coinId: string;
};

function Chart({ coinId }: CoinChartPropsType) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCharts(coinId),
    { refetchInterval: 10000 }
  );

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => {
                return {
                  x: new Date(price.time_close),
                  y: [price.open, price.low, price.high, price.close],
                };
              }),
            },
          ]}
          options={{
            chart: {
              toolbar: {
                show: false,
              },

              background: "transparent",
            },

            grid: {
              show: false,
            },

            stroke: {
              curve: "smooth",
              width: 1,
            },

            yaxis: {
              show: false,
            },

            xaxis: {
              axisBorder: {
                show: true,
              },

              axisTicks: {
                show: true,
              },

              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
