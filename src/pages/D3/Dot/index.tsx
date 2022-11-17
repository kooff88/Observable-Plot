import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { cars } from "./cars";
import { alphabet } from "./alphabet";
import { stateage } from "./stateage";

import styles from './index.less';

const Dot: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let temp = Plot.plot({
        //     grid: true,
        //     marks: [
        //         Plot.dot(cars, { x: "economy (mpg)", y: "power (hp)" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     grid: true,
        //     inset: 10,
        //     x: {
        //         label: "Fuel consumption (gallons per 100 miles) →"
        //     },
        //     y: {
        //         label: "↑ Horsepower"
        //     },
        //     marks: [
        //         Plot.dot(cars, {
        //             x: d => 100 / (d["economy (mpg)"] ?? NaN),
        //             y: "power (hp)"
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         label: null,
        //         tickSize: 0,
        //     },
        //     y: {
        //         label: "↑ Frequency (%)",
        //         transform: d => d * 100
        //     },
        //     marks: [
        //         Plot.ruleY([0]),
        //         Plot.ruleX(alphabet, { x: "letter", y: "frequency", fill: "black", }),
        //         Plot.dot(alphabet, { x: "letter", y: "frequency", fill: "black", r: 4 })
        //     ]
        // })

        // let temp = Plot.plot({
        //     height: 660,
        //     grid: true,
        //     x: {
        //         axis: "top",
        //         label: "Percent (%) →",
        //         transform: d => d * 100
        //     },
        //     y: {
        //         axis: null
        //     },
        //     color: {
        //         scheme: "spectral",
        //         domain: stateage.ages,
        //         legend: true
        //     },
        //     marks: [
        //         Plot.ruleX([0]),
        //         // Plot.ruleY(stateage, Plot.groupY({ x1: "min", x2: "max" }, xy)),
        //         Plot.dot(stateage, { ...xy, fill: "age", title: "age" }),
        //         Plot.text(stateage, Plot.selectMinX({ ...xy, textAnchor: "end", dx: -6, text: "state" }))
        //     ]
        // })

        let temp = Plot.plot({
            grid: true,
            x: {
                domain: stateage.ages, // in order
                label: "Age range (years) →",
                labelAnchor: "right"
            },
            y: {
                label: "↑ Percent of population (%)",
                transform: d => d * 100
            },
            marks: [
                Plot.ruleY([0]),
                Plot.line(stateage, { ...xy2, strokeWidth: 1, stroke: "#ccc" }),
                Plot.dot(stateage, xy2)
            ]
        });


        chartBox.appendChild(temp)
    }, [])

    const xy = Plot.normalizeX({ basis: "sum", z: "state", x: "population", y: "state" });

    const xy2 = Plot.normalizeY({ basis: "sum", z: "state", x: "age", y: "population" });


    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Dot;
