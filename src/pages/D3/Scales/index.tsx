import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { gistemp } from "./gistemp";
import styles from './index.less';

const Scales: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        let tempaapl = gistemp.forEach((item: any) => item.Date = new Date(item.Date))

        // console.log('aapl->aapl', aapl);

        // let points = aapl.map(d => [d.Date, d.Close]);
        // console.log('points->points', points);

        // let temp = Plot.plot({ x: { domain: [0, 100] }, grid: true })
        // let temp = Plot.plot({ x: { domain: [100, 0] }, grid: true })
        // let temp = Plot.plot({ x: { domain: [100, 0], reverse: true }, grid: true })
        // let temp = Plot.plot({ x: { domain: [new Date("2022-01-01"), new Date("2023-01-01")] }, grid: true })
        // let temp = Plot.plot({ x: { type: "utc", domain: [1609459200000, 1640995200000] }, grid: true })
        // let temp = Plot.plot({ x: { type: "time", domain: [new Date(2021, 0, 1), new Date(2022, 0, 1)] }, grid: true })

        // let temp = Plot.plot({ x: { type: "log", domain: [1e0, 1e5] }, grid: true })
        // let temp = Plot.plot({ x: { type: "log", domain: [1e0, 1e5], tickFormat: "," }, grid: true })
        // let temp = Plot.plot({ x: { type: "log", domain: [1e0, 1e5], tickFormat: "~s" }, grid: true })
        // let temp = Plot.plot({ x: { type: "log", base: 2, domain: [1e0, 1e4], ticks: 20 }, grid: true })
        // let temp = Plot.plot({ x: { type: "symlog", domain: [-10, 10] }, grid: true })
        // let temp = Plot.plot({ x: { type: "sqrt", domain: [0, 100] }, grid: true })
        // let temp = Plot.plot({ x: { type: "pow", exponent: 1 / 3, domain: [0, 100] }, grid: true })
        // let temp = Plot.plot({ x: { type: "point", domain: [..."ABCDEFGHIJ"] }, grid: true })
        // let temp = Plot.plot({ x: { type: "band", domain: [..."ABCDEFGHIJ"] }, grid: true })
        // let temp = Plot.plot({
        //     color: {
        //         scheme: ["reds"],
        //     },
        //     marks: [
        //         Plot.cell([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { x: d => d, fill: d => d })
        //     ]
        // })

        // let temp = Plot.plot({
        //     color: {
        //         // type: "linear",
        //         // range: ["red", "orange"],
        //         // interpolate: "hcl"
        //         // interpolate: t => `hsl(${t * 360}, 100%,50%)`
        //         type: "diverging",
        //         pivot: 3
        //     },
        //     marks: [
        //         // Plot.cell([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { x: d => d, fill: d => d })
        //         Plot.cell([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], { x: d => d, fill: d => d })
        //     ]
        // })

        let temp = Plot.plot({
            grid: true,
            color: {
                type: "diverging",
                scheme: "BuRd"
            },
            marks: [
                Plot.ruleY([0]),
                Plot.dot(gistemp, { x: "Date", y: "Anomaly", stroke: "Anomaly" })
            ]
        })

        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Scales;
