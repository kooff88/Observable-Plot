import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { athletes } from "./athletes";
import { seattle } from "./seattle";

import styles from './index.less';

const Legends: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        let tempaapl = athletes.forEach((item: any) => item.date_of_birth = new Date(item.date_of_birth))
        let tempaapl2 = seattle.forEach((item: any) => item.date = new Date(item.date))



        // let temp = Plot.plot({
        //     color: {
        //         legend: true
        //     },
        //     marks: [
        //         Plot.dot(athletes, { x: "weight", y: "height", stroke: "sex" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     grid: true,
        //     height: 320,
        //     color: {
        //         type: "ordinal",
        //         scheme: "category10",
        //         legend: true,
        //     },
        //     facet: {
        //         data: athletes,
        //         x: "sex"
        //     },
        //     marks: [
        //         Plot.frame(),
        //         Plot.dot(athletes, { x: "weight", y: "height", fill: "sport", r: 1.5 })
        //     ]
        // })

        // let temp = Plot.plot({
        //     grid: true,
        //     height: 320,
        //     x: {
        //         nice: true
        //     },
        //     color: {
        //         scheme: "warm",
        //         nice: true,
        //         legend: true
        //     },
        //     facet: {
        //         data: athletes,
        //         x: "sport",
        //         y: "sex"
        //     },
        //     marks: [
        //         Plot.frame(),
        //         Plot.dot(athletes, { x: "date_of_birth", y: "height", fill: "weight", r: 1.5 })
        //     ]
        // })

        // let temp = Plot.plot({
        //     color: {
        //         type: "ordinal",
        //         scheme: "category10",
        //         legend: "ramp"
        //     },
        //     marks: [
        //         Plot.dot(athletes, { x: "weight", y: "height", fill: "sport", stroke: "white" })
        //     ]
        // })


        // let temp = Plot.legend({
        //     color: {
        //         interpolate: (t) => wavelengthToColor(400 + t * 350),
        //         domain: [400, 750]
        //     },
        //     width: 350,
        //     ticks: 10,
        //     label: "Wavelegth(nm)"
        // })

        // let temp = Plot.legend({
        //     color: {
        //         domain: "ABCD"
        //     },
        //     legend: "swatches",
        //     className: "alphabet",
        //     swatchSize: 20,
        //     style: {
        //         fontFamily: "Comic Sans MS",
        //         fontSize: "20px"
        //     }
        // })

        // let temp = Plot.plot({
        //     height: 300,
        //     padding: 0,
        //     y: {
        //         tickFormat: Plot.formatMonth("en", "short")
        //     },
        //     color: {
        //         type: "diverging",
        //         pivot: d3.mean(seattle, d => d.temp_max),
        //         reverse: true,
        //         legend: true
        //     },
        //     marks: [
        //         Plot.cell(seattle, Plot.group({ fill: "max" }, {
        //             x: d => d.date.getUTCDate(),
        //             y: d => d.date.getUTCMonth(),
        //             fill: "temp_max",
        //             inset: 0.5
        //         }))
        //     ]
        // })

        // let temp = Plot.legend({ opacity: { domain: [0, 10] } })
        let temp = Plot.legend({ opacity: { type: "linear" }, color: "orange" })

        chartBox.appendChild(temp)
    }, [])

    const wavelengthToColor = (wl) => {
        let R, G, B, alpha;
        if (wl >= 380 && wl < 440) {
            R = (-1 * (wl - 440)) / (440 - 380);
            G = 0;
            B = 1;
        } else if (wl >= 440 && wl < 490) {
            R = 0;
            G = (wl - 440) / (490 - 440);
            B = 1;
        } else if (wl >= 490 && wl < 510) {
            R = 0;
            G = 1;
            B = (-1 * (wl - 510)) / (510 - 490);
        } else if (wl >= 510 && wl < 580) {
            R = (wl - 510) / (580 - 510);
            G = 1;
            B = 0;
        } else if (wl >= 580 && wl < 645) {
            R = 1;
            G = (-1 * (wl - 645)) / (645 - 580);
            B = 0.0;
        } else if (wl >= 645 && wl <= 780) {
            R = 1;
            G = 0;
            B = 0;
        } else {
            R = 0;
            G = 0;
            B = 0;
        }

        // intensity is lower at the edges of the visible spectrum.
        if (wl > 780 || wl < 380) {
            alpha = 0;
        } else if (wl > 700) {
            alpha = (780 - wl) / (780 - 700);
        } else if (wl < 420) {
            alpha = (wl - 380) / (420 - 380);
        } else {
            alpha = 1;
        }

        return `rgb(${R * alpha * 100}%,${G * alpha * 100}%,${B * alpha * 100}%)`;


    }


    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Legends;
