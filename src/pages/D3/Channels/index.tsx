import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { sales } from "./sales";
import { xyData } from "./xy";

import styles from './index.less';

const Channels: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let tempaapl = aapl.forEach((item: any) => item.Date = new Date(item.Date))

        // console.log('aapl->aapl', aapl);

        // let points = aapl.map(d => [d.Date, d.Close]);
        // console.log('points->points', points);


        // let temp = Plot.dot(sales, { x: "units", y: "fruit" }).plot()

        // let temp = Plot.dot(sales, { x: d => d.units * 1000, y: d => d.fruit }).plot({ x: { label: "units ->" } })

        // let temp = Plot.dot(xyData).plot()

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.dot([[10, "fig"]]),
        //         Plot.dot([[20, "date"]]),
        //         Plot.dot([[40, "plum"]]),
        //         Plot.dot([[30, "plum"]]),
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.dot(sales, { x: "units", y: "fruit" }),
        //         Plot.ruleX([0])
        //     ]
        // })

        // let temp = Plot.barX(sales, { x: "units", y: "fruit" }).plot();

        // let temp = Plot.barX(sales, { x1: 0, x2: "units", y: "fruit" }).plot();

        // let temp = Plot.barX(sales, { x1: 0, x2: "units", y: "fruit", fillOpacity: 0.5 }).plot();

        // let temp = Plot.barX(sales, Plot.groupY({ x: "sum" }, { x: "units", y: "fruit" })).plot();

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.barX(sales, { x: "units", y: "fruit", fill: "steelblue" }),
        //         // Plot.ruleX([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.barX(sales, { x: "units", y: "fruit", fill: "fruit" }),
        //         Plot.ruleX([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.barX(sales, { x: "units", y: "fruit", fill: d => d.fruit }),
        //         Plot.ruleX([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.barX(sales, { x: "units", y: "fruit", fill: d => d.units > 30 ? "black" : "red" }),
        //         Plot.ruleX([0])
        //     ]
        // })

        let temp = Plot.plot({
            color: {
                domain: ["small", "big"],
                // range: ["red", "black"],
                legend: true
            },
            marks: [
                Plot.barX(sales, { x: "units", y: "fruit", fill: d => d.units > 20 ? "big" : "small" }),
                Plot.ruleX([0])
            ]
        })

        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Channels;
