import React, { useEffect } from "react";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";


export default function Barchart() {
  useEffect(() => {
    let root = am5.Root.new("Linechart");

    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
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
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
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
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "category",
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
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "count",
        sequencedInterpolation: true,
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    // Set data
    let data = [
        {"name": "1.0", "x": ["2018-04-30", "2018-05-01", "2018-05-02", "2018-05-03", "2018-05-04", "2018-05-07", "2018-05-09", "2018-05-11", "2018-05-14", "2018-05-15", "2018-05-16", "2018-05-18", "2018-05-20"], "y": [432, 433, 434, 436, 436, 437, 437, 438, 438, 438, 438, 439, 440]}, {"name": "2.0", "x": ["2018-04-30", "2018-05-01", "2018-05-02", "2018-05-03", "2018-05-04", "2018-05-07", "2018-05-09", "2018-05-11", "2018-05-14", "2018-05-15", "2018-05-16", "2018-05-18", "2018-05-20"], "y": [149, 150, 150, 150, 150, 150, 151, 151, 152, 152, 152, 152, 152]}, {"name": "3.0", "x": ["2018-04-30", "2018-05-01", "2018-05-02", "2018-05-03", "2018-05-04", "2018-05-07", "2018-05-09", "2018-05-11", "2018-05-14", "2018-05-15", "2018-05-16", "2018-05-18", "2018-05-20"], "y": [292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292]}, {"name": "4.0", "x": ["2018-04-30", "2018-05-01", "2018-05-02", "2018-05-03", "2018-05-04", "2018-05-07", "2018-05-09", "2018-05-11", "2018-05-14", "2018-05-15", "2018-05-16", "2018-05-18", "2018-05-20"], "y": [959, 959, 960, 960, 960, 960, 960, 960, 960, 960, 960, 960, 960]}, {"name": "5.0", "x": ["2018-04-30", "2018-05-01", "2018-05-02", "2018-05-03", "2018-05-04", "2018-05-07", "2018-05-09", "2018-05-11", "2018-05-14", "2018-05-15", "2018-05-16", "2018-05-18", "2018-05-20"], "y": [4647, 4647, 4649, 4651, 4655, 4656, 4656, 4657, 4660, 4661, 4663, 4665, 4666]}
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => root.dispose()
  }, []);

  return <div id="Linechart" className="size-96">Ratings Counts</div>;
}

