import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { alphabet } from "./alphabet";
import { metros } from "./metros";

import styles from './index.less';

const Transforms: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");


        // console.log('aapl->aapl', aapl);

        // let points = aapl.map(d => [d.Date, d.Close]);
        // console.log('points->points', points);

        // let temp = Plot.barX(alphabet, { filter: d => /[aeiour]/i.test(d.letter), y: "letter", x: "frequency" }).plot()

        // let temp = Plot.barY(alphabet.filter(d => /[aeiou]/i.test(d.letter)), { x: "letter", y: "frequency" }).plot();

        let temp = Plot.plot({
            grid: true,
            inset: 10,
            x: {
                type: "log",
                label: "Population",
                tickFormat: "~s"
            },
            y: {
                label: "Inequality"
            },
            marks: [
                Plot.dot(metros, {
                    x: "POP_2015",
                    y: "R90_10_2015",
                    r: 2.5
                }),
                Plot.text(metros, {
                    x: "POP_2015",
                    y: "R90_10_2015",
                    filter: "highlight",
                    text: "nyt_display",
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

export default Transforms;
