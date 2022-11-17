import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { simpsons } from "./simpsons";
import { alphabet } from "./alphabet";
import { hadcrut } from "./hadcrut";

import styles from './index.less';

const Cell: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let temp = Plot.plot({
        //     height: 640,
        //     padding: 0.05,
        //     grid: true,
        //     x: {
        //         axis: "top",
        //         label: "Season"
        //     },
        //     y: {
        //         label: "Episode"
        //     },
        //     color: {
        //         scheme: "PiYG"
        //     },
        //     marks: [
        //         Plot.cell(simpsons, {
        //             x: "season",
        //             y: "number_in_season",
        //             fill: "imdb_rating"
        //         }),
        //         Plot.text(simpsons, {
        //             x: "season",
        //             y: "number_in_season",
        //             text: d => d.imdb_rating?.toFixed(1),
        //             title: "title"
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         label: null
        //     },
        //     color: {
        //         scheme: "YlGnBu"
        //     },
        //     marks: [
        //         Plot.cell(alphabet, { x: "letter", fill: "frequency" }),
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         round: false,
        //         ticks: d3.ticks(...d3.extent(hadcrut, d => d.year), 10),
        //         domain: d3.range(d3.min(hadcrut, d => d.year), d3.max(hadcrut, d => d.year) + 1),
        //         label: null
        //     },
        //     color: {
        //         type: "diverging",
        //         scheme: "BuRd"
        //     },
        //     marks: [
        //         Plot.cell(hadcrut, { x: "year", fill: "anomaly" })
        //     ]
        // })

        let temp = Plot.plot({
            marks: [
                Plot.dot(alphabet, { x: "letter", r: "frequency", fill: "currentColor" })
            ]
        })


        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Cell;
