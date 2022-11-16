import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { aapl } from "./aapl";
import { sftemp } from "./sftemp";
import { bls } from "./bls";

import styles from './index.less';

const Area: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);



    useEffect(() => {
        let chartBox = document.getElementById("chart");


        let tempaapl = aapl.forEach((item: any) => item.Date = new Date(item.Date))

        // let someCloses = aapl.map(d => d.Date.getUTCMonth() < 3 ? NaN : d.Close)
        // let someAapl = aapl.filter(d => d.Date.getUTCMonth() >= 3)

        let construction = bls.filter(d => d.industry === "Construction");

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.areaY(aapl, { x: "Date", y: "Close" })
        //     ]
        // })
        // let numbers = d3.cumsum({ length: 600 }, d3.randomNormal())

        // console.log('numbers->numbers', numbers);

        // let temp = Plot.plot({
        //     y: {
        //         grid: true
        //     },
        //     marks: [
        //         Plot.areaY(aapl, { x: "Date", y: "Close", fill: "#ccc" }),
        //         Plot.lineY(aapl, { x: "Date", y: "Close" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.areaY(numbers, {})
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.areaY(d3.shuffle(aapl.slice(0, 100)), {
        //             x: "Date",
        //             y: "Close"
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         label: "Temperature(F)",
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.areaY(sftemp, { x: 'date', y1: "low", y2: "high" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         label: "↑ Temperature (°F)",
        //         grid: true
        //     },
        //     marks: [
        //         Plot.ruleY([32]),
        //         Plot.areaY(sftemp, Plot.windowY({
        //             x: "date",
        //             y1: "low",
        //             y2: "high",
        //             fill: "#ccc",
        //             k: 14
        //         })),
        //         Plot.line(sftemp, Plot.windowY({
        //             x: "date",
        //             y: d => (d.low + d.high) / 2,
        //             k: 14
        //         }))
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         label: null
        //     },
        //     y: {
        //         grid: true,
        //         reverse: true
        //     },
        //     marks: [
        //         Plot.areaY(aapl, { x: "Date", y: "Close", fill: "#ccc" }),
        //         Plot.lineY(aapl, { x: "Date", y: "Close" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         grid: true
        //     },
        //     marks: [
        //         Plot.areaX(aapl, { y: "Date", x: "Close", fill: "#ccc" }),
        //         Plot.lineX(aapl, { y: "Date", x: "Close" }),
        //         Plot.ruleX([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         grid: true
        //     },
        //     marks: [
        //         Plot.areaY(aapl, { x: "Date", y: someCloses, fill: "#ccc" }),
        //         Plot.lineY(aapl, { x: "Date", y: someCloses }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp =Plot.plot({
        //     y: {
        //         grid: true
        //     },
        //     marks: [
        //         Plot.areaY(some)
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         grid: true
        //     },
        //     marks: [
        //         Plot.areaY(someAapl, { x: "Date", y: "Close", fill: "#ccc" }),
        //         Plot.lineY(someAapl, { x: "Date", y: "Close" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.areaY(construction, { x: "date", y: "unemployed", curve: "basis", fillOpacity: 0.1 }),
        //         Plot.lineY(construction, { x: "date", y: "unemployed", curve: "basis", strokeWidth: 1 }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.areaY(bls, { x: "date", y2: "unemployed", z: "industry", fillOpacity: 0.1 }),
        //         Plot.lineY(bls, { x: "date", y: "unemployed", z: "industry", strokeWidth: 1 })
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         transform: d => d / 1000,
        //         label: "Unemployed (thousands)"
        //     },
        //     marks: [
        //         Plot.areaY(bls, { x: "date", y: "unemployed", fill: "industry" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        let temp = Plot.plot({
            height: 600,
            y: {
                axis: null
            },
            fy: {
                axis: "right",
                label: null
            },
            facet: {
                data: bls,
                y: "industry",
                marginRight: 140
            },
            // marks: [
            //     Plot.areaY(bls, { x: "date", y: "unemployed", fillOpacity: 0.2 }),
            //     Plot.lineY(bls, { x: "date", y: "unemployed", strokeWidth: 1 })
            // ]

            marks: [
                Plot.areaY(bls, Plot.normalizeY({ basis: "median", x: "date", y: "unemployed", fillOpacity: 0.2 })),
                Plot.lineY(bls, Plot.normalizeY({ basis: "median", x: "date", y: "unemployed", strokeWidth: 1 }))
            ]
        })

        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Area;
