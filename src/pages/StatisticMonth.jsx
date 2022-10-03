import React, { useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getChartDataMonth } from "../redux/modules/statisticSlice";
ChartJS.register(...registerables);

const Statistic = () => {
  const dispatch = useDispatch();
  const date = "2022-10-03";

  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = ["1주", "2주", "3주", "4주", "5주"];

  const AC = statistic?.achievementRates?.map((item) => {
    return item.achievementRate;
  });
  const CO = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  useEffect(() => {
    dispatch(getChartDataMonth(date));
  }, [JSON.stringify(statistic)]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "data 1",
        data: AC,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "data 2",
        data: CO, // 차트의 data list
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar type="bar" data={data} />
      <Bar type="bar" data={data2} />
    </div>
  );
};

export default Statistic;