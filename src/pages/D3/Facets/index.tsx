import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { anscombe } from "./anscombe";
import { barley } from "./barley";
import { penguins } from "./penguins";

import styles from './index.less';

const Facets: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let temp = Plot.plot({
        //     grid: true,
        //     inset: 10,
        //     width: 928,
        //     height: 240,
        //     facet: {
        //         data: anscombe,
        //         x: "series"
        //     },
        //     marks: [
        //         Plot.frame(),
        //         Plot.dot(anscombe, { x: "x", y: "y" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     marginLeft: 110,
        //     height: 800,
        //     grid: true,
        //     x: {
        //         nice: true,
        //     },
        //     y: {
        //         domain: d3.groupSort(barley, g => -d3.median(g, d => d.yield), d => d.variety),
        //         inset: 5
        //     },
        //     fy: {
        //         domain: d3.groupSort(barley, g => -d3.median(g, d => d.yield), d => d.site)
        //     },
        //     color: {
        //         type: "categorical"
        //     },
        //     facet: {
        //         data: barley,
        //         y: "site",
        //         marginRight: 90
        //     },
        //     marks: [
        //         Plot.frame(),
        //         Plot.dot(barley, { x: "yield", y: "variety", stroke: "year" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     height: 600,
        //     grid: true,
        //     facet: {
        //         data: penguins,
        //         x: "sex",
        //         y: "species",
        //         marginRight: 80,
        //     },
        //     marks: [
        //         Plot.frame(),
        //         Plot.dot(penguins.slice(), {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm",
        //             r: 2,
        //             fill: "#ddd"
        //         }),
        //         Plot.dot(penguins, {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm"
        //         })
        //     ]
        // })

        let temp = Plot.plot({
            height: 300,
            grid: true,
            facet: {
                data: penguins.filter(d => d.species === "Chinstrap"),
                x: "sex",
                y: "species",
                marginRight: 80
            },
            marks: [
                Plot.frame(),
                Plot.dot(penguins.filter(d => d.species === "Chinstrap"), {
                    x: "culmen_depth_mm",
                    y: "culmen_length_mm",
                    r: 8,
                    facet: "exclude",
                    fill: "orange"
                }),
                Plot.dot(penguins.filter(d => d.species === "Chinstrap"), {
                    x: "culmen_depth_mm",
                    y: "culmen_length_mm",
                    facet: "include"
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

export default Facets;
