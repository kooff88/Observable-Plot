import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { faithful } from "./faithful";
import { penguins } from "./penguins";

import styles from './index.less';

const Density: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let temp = Plot.plot({
        //     inset: 20,
        //     marks: [
        //         Plot.density(faithful, { x: "waiting", y: "eruptions", stroke: "steelblue", strokeWidth: 0.25 }),
        //         Plot.density(faithful, { x: "waiting", y: "eruptions", stroke: "steelblue", thresholds: 4 }),
        //         Plot.dot(faithful, { x: "waiting", y: "eruptions", fill: "currentColor", r: 1.5 })
        //     ]
        // })

        // let temp = Plot.plot({
        //     inset: 20,
        //     marks: [
        //         Plot.density(faithful, { x: "waiting", y: "eruptions", bandwidth: 20 }),
        //         Plot.dot(faithful, { x: "waiting", y: "eruptions" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     height: 100,
        //     inset: 20,
        //     marks: [
        //         Plot.density(faithful, { x: "waiting", stroke: "steelblue", strokeWidth: 0.25, bandwidth: 10 }),
        //         Plot.density(faithful, { x: "waiting", stroke: "steelblue", thresholds: 4, bandwidth: 10 }),
        //         Plot.dot(faithful, { x: "waiting", fill: "currentColor", r: 1.5 })
        //     ]
        // })

        // let temp = Plot.plot({
        //     width: 928,
        //     height: 360,
        //     color: {
        //         scheme: "ylgnbu",
        //         label: "Density",
        //     },
        //     facet: {
        //         data: penguins,
        //         x: "island"
        //     },
        //     marks: [
        //         Plot.density(penguins, { x: "flipper_length_mm", y: "culmen_length_mm", fill: "density", clip: true }),
        //         Plot.frame()
        //     ]
        // })

        let temp = Plot.plot({
            width: 360,
            height: 360,
            inset: 20,
            color: {
                legend: true,
            },
            marks: [
                Plot.density(penguins, {
                    x: "flipper_length_mm",
                    y: "culmen_length_mm",
                    stroke: "species",
                    fill: "species",
                    title: "species",
                    fillOpacity: 0.1,
                    thresholds: 15,
                    mixBlendMode: "multiply",
                    clip: true
                }),
                Plot.frame()
            ]
        })


        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Density;
