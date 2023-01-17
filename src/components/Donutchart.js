import React from 'react'
import DonutChart from "react-donut-chart";

const reactDonutChartdata = [
    {
      label: "Male",
      value: 40,
      color: "#00E396"
    },
    {
      label: "Female",
      value: 35,
      color: "#FEB019"
    },
    {
      label: "Unknown",
      value: 25,
      color: "#FF4560"
    },
    
  ];

  const reactDonutChartBackgroundColor = [
    "#00E396",
    "#FEB019",
    "#FF4560"
  ];

  const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};

let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export function Donutchart() {
  return (
    <div>
       <DonutChart
        width={500}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </div>
  )
}
