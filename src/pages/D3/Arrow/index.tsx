import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { metros } from "./metros";

import styles from './index.less';

const Arrow: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");



        let temp = Plot.plot({
            width: 1000,
            height: Math.min(600, 1000),
            grid: true,
            inset: 10,
            x: {
                type: "log",
                label: "Population"
            },
            y: {
                label: "Inequality",
                ticks: 4
            },
            color: {
                type: "diverging",
                scheme: "burd",
                label: "Change in inequality from 1980 to 2015",
                legend: true,
                ticks: 9,
                tickFormat: "+f"
            },
            marks: [
                Plot.arrow(metros, {
                    x1: "POP_1980",
                    y1: "R90_10_1980",
                    x2: "POP_2015",
                    y2: "R90_10_2015",
                    bend: true,
                    stroke: d => d.R90_10_2015 - d.R90_10_1980
                }),
                Plot.text(metros, {
                    x: "POP_2015",
                    y: "R90_10_2015",
                    filter: "highlight",
                    text: "nyt_display",
                    fill: "currentColor",
                    stroke: "white",
                    dy: -6
                })
            ]

        })


        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Arrow;
