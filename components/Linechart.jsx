import React, { useEffect } from "react";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export default function Linechart() {
  useEffect(() => {
    let root = am5.Root.new("chartdiv2");

    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1,
      })
    );

    // Add cursor
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      fill: am5.color("#ffffff"), // Change label text color to white
    });

    xRenderer.grid.template.setAll({
      location: 1,
      stroke: am5.color("#ffffff"), // Change grid stroke color to white
    });

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.3,
        dateField: "x", // Use dateField instead of categoryField
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    });

    yRenderer.labels.template.setAll({
      fill: am5.color("#ffffff"), // Change label text color to white
    });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    );

    // Create series
    let seriesData = [
      { x: "2018-04-30", y: 432 },
      { x: "2018-05-01", y: 433 },
      { x: "2018-05-02", y: 434 },
      { x: "2018-05-03", y: 436 },
      { x: "2018-05-04", y: 436 },
      { x: "2018-05-07", y: 437 },
      { x: "2018-05-09", y: 437 },
      { x: "2018-05-11", y: 438 },
      { x: "2018-05-14", y: 438 },
      { x: "2018-05-15", y: 438 },
      { x: "2018-05-16", y: 438 },
      { x: "2018-05-18", y: 439 },
      { x: "2018-05-20", y: 440 }
    ];

    // Parse dates
    seriesData.forEach((item) => {
      item.x = new Date(item.x);
    });

    // Sort data by x values in ascending order
    seriesData.sort((a, b) => a.x - b.x);

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "name",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "y",
        sequencedInterpolation: true,
        categoryXField: "x",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    // Set data
    xAxis.data.setAll(seriesData);
    series.data.setAll(seriesData);

    // Make stuff animate on load
    series.appear(1000);
    chart.appear(1000, 100);

    return () => root.dispose();
  }, []);

  return <div id="chartdiv2" className="size-96">Cumulative Reviews per Rating</div>;
}
