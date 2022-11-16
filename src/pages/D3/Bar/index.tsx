import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { alphabet } from "./alphabet";
import { civilizations } from "./civilizations";
import { popchange } from "./popchange";
import { hadcrut } from "./hadcrut";
import { stateage } from "./stateage";

import styles from './index.less';

const Bar: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        let tempaapl = hadcrut.forEach((item: any) => item.year = new Date(item.year))

        let frequencies = alphabet.map(d => d.frequency);

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.barY(alphabet, { x: "letter", y: "frequency" })
        //     ]
        // })
        // let temp = Plot.plot({
        //     marks: [
        //         Plot.barX(alphabet, { x: "frequency", y: "letter" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.barY(alphabet, { x: "letter", y: "frequency", fill: "#bab0ab" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         label: "Frequency (%)",
        //         grid: true,
        //         transform: d => d * 100
        //     },
        //     marks: [
        //         // Plot.barY(alphabet, { x: "letter", y: d => d.frequency * 100 }),
        //         Plot.barY(alphabet, { x: "letter", y: "frequency" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         padding: 0
        //     },
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.barY(alphabet, { x: "letter", y: "frequency", insetLeft: 2.5, insetRight: 2.5 }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         domain: d3.sort(alphabet, d => -d.frequency).map(d => d.letter)
        //     },
        //     y: {
        //         grid: true
        //     },
        //     marks: [
        //         Plot.barY(alphabet, { x: "letter", y: "frequency" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     height: civilizations.length * 16,
        //     marginLeft: 120,
        //     x: {
        //         axis: "top",
        //         grid: true,
        //         tickFormat: year => year < 0 ? `${-year} BC` : `${year} AD`
        //     },
        //     y: {
        //         axis: null,
        //         domain: d3.sort(civilizations, d => d.start).map(d => d.civilization)
        //     },
        //     marks: [
        //         Plot.barX(civilizations, {
        //             x1: "start",
        //             x2: "end",
        //             y: "civilization"
        //         }),
        //         Plot.text(civilizations, {
        //             x: "start",
        //             y: "civilization",
        //             text: "civilization",
        //             textAnchor: "end",
        //             dx: -6
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     height: 780,
        //     marginLeft: 100,
        //     grid: true,
        //     x: {
        //         axis: "top",
        //         round: true,
        //         label: "← decrease · Change in population, 2010–2019 (%) · increase →",
        //         labelAnchor: "center",
        //         tickFormat: "+",
        //         transform: d => d * 100
        //     },
        //     y: {
        //         label: null,
        //         domain: d3.sort(popchange, d => (d[2010] - d[2019]) / d[2010]).map(d => d.State)
        //     },
        //     color: {
        //         range: ["#e15759", "#4e79a7"]
        //     },
        //     marks: [
        //         Plot.barX(popchange, {
        //             y: "State",
        //             x: d => (d[2019] - d[2010]) / d[2010],
        //             fill: d => Math.sign(d[2019] - d[2010])
        //         }),
        //         Plot.ruleX([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.barY(frequencies, { x: (d, i) => i }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         round: true
        //     },
        //     color: {
        //         //  type: "diverging",
        //         scheme: "BuRd"
        //     },
        //     marks: [
        //         Plot.barX(hadcrut, {
        //             x: "year",
        //             interval: d3.utcYear, // yearly data
        //             inset: 0, // no gaps
        //             fill: "anomaly"
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         label: "Frequency (%)",
        //         transform: d => d * 100
        //     },
        //     marks: [
        //         Plot.ruleX([0, 1]),
        //         Plot.barX(alphabet, Plot.stackX({ order: "letter", x: "frequency", fill: "#ccc", insetLeft: 1 })),
        //         Plot.textX(alphabet, Plot.stackX({ order: "letter", x: "frequency", text: "letter", insetLeft: 1 }))
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         domain: d3.sort(alphabet, d => -d.frequency).map(d => d.letter)
        //     },
        //     y: {
        //         grid: true
        //     },
        //     marks: [
        //         Plot.barY([2 / 26], { fill: "orange", fillOpacity: 0.4 }),
        //         Plot.barY(alphabet, { x: "letter", y: "frequency" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        let temp = Plot.plot({
            x: {
                axis: null,
                domain: stateage.ages
            },
            y: {
                grid: true,
                tickFormat: "s"
            },
            color: {
                domain: stateage.ages,
                scheme: "spectral"
            },
            fx: {
                domain: d3.groupSort(stateage, v => d3.sum(v, d => -d.population), d => d.state).slice(0, 6),
                label: null,
                tickSize: 6
            },
            facet: {
                data: stateage,
                x: "state"
            },
            marks: [
                Plot.barY(stateage, { x: "age", y: "population", fill: "age", title: "age" }),
                Plot.ruleY([0])
            ]
        })

        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Bar;
