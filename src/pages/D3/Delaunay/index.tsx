import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { penguins } from "./penguins";

import styles from './index.less';

const Delaunay: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.voronoi(penguins, {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm",
        //             fill: "species",
        //             title: "species",
        //             fillOpacity: 0.2,
        //             stroke: "white",
        //         }),
        //         Plot.dot(penguins, {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm",
        //             fill: "species",
        //             pointerEvents: "none"
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.voronoiMesh(penguins, { x: "culmen_depth_mm", y: "culmen_length_mm" }),
        //         Plot.dot(penguins, { x: "culmen_depth_mm", y: "culmen_length_mm", fill: "species" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.delaunayMesh(penguins, {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm",
        //             z: "species",
        //             stroke: "species"
        //         }),
        //         Plot.dot(penguins, {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm",
        //             fill: "species"
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.hull(penguins, {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm",
        //             fill: "species",
        //             fillOpacity: 0.2
        //         }),
        //         Plot.dot(penguins, {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm",
        //             stroke: "species"
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     color: {
        //         length: true
        //     },
        //     marks: [
        //         Plot.delaunayLink(penguins, {
        //             x: "culmen_depth_mm",
        //             y: "culmen_length_mm",
        //             stroke: "body_mass_g",
        //             strokeWidth: 1.5
        //         })
        //     ]
        // })

        let temp = Plot.plot({
            marks: [
                Plot.voronoi(penguins, {
                    x: "body_mass_g",
                    fill: "species"
                }),
                Plot.voronoiMesh(penguins, {
                    x: "body_mass_g",
                    stroke: "white",
                    strokeOpacity: 1
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

export default Delaunay;
