import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { aapl } from "./aapl.js";

import styles from './index.less';

const Line: React.FC = () => {


    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        let tempaapl = aapl.forEach((item: any) => item.Date = new Date(item.Date))

        console.log('aapl->aapl', aapl);

        let points = aapl.map(d => [d.Date, d.Close]);
        console.log('points->points', points);

        // let temp = Plot.plot({
        //     y: {
        //         grid: true
        //     },
        //     marks: [
        //         Plot.line(aapl, { x: "Date", y: "Close" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.line(points)
        //     ]
        // })

        let temp = Plot.plot({
            x: {
                axis: null
            },
            marks: [
                Plot.lineY(d3.cumsum({ length: 600 }, d3.randomNormal()))
            ]
        })

        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Line;
