import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { penguins } from "./penguins";
import styles from './index.less';

const Group: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.barY( penguins, Plot.groupX({ y:"count" }, {x: "species" })),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.barY(penguins, Plot.groupX({ y: "count" }, { x: "species", sort: { x: "y", reverse: true }})),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //       grid: true,
        //       percent: true
        //     },
        //     marks: [
        //       Plot.barY(penguins, Plot.groupX({y: "proportion"}, {x: "species"})),
        //       Plot.ruleY([0])
        //     ]
        //   })

        // let temp = Plot.plot({
        //     y: {
        //         label: "↑ Total mass (kg)",
        //         grid: true,
        //         transform: d => d / 1000
        //     },
        //     marks: [
        //         Plot.barY( penguins, Plot.groupX({ y: "sum" }, { x: "species", y: "body_mass_g" }  ) )
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         tickFormat: d => d === null ? 'N/A' :d
        //     },
        //     y: {
        //         grid: true
        //     },
        //     facet: {
        //         data: penguins,
        //         x: "species"
        //     },
        //     marks: [
        //         Plot.barY( penguins, Plot.groupX({ y: "count" }, { x: "sex" })),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //       tickFormat: d => d === null ? "N/A" : d
        //     },
        //     y: {
        //       grid: true,
        //       percent: true
        //     },
        //     facet: {
        //       data: penguins,
        //       x: "species"
        //     },
        //     marks: [
        //       Plot.barY(penguins, Plot.groupX({y: "proportion-facet"}, {x: "sex"})),
        //       Plot.ruleY([0])
        //     ]
        //   })

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.barY( penguins, Plot.groupX({ y: "count" }, { x: "island", fill: "sex" })),
        //         Plot.ruleY([0])
        //     ]
        // })

        let temp = Plot.plot({
            x: {
                percent: true,
            },
            marks: [
                Plot.barX( penguins, Plot.stackX( Plot.groupZ({ x: "proportion" }, { fill: "sex" }))),
                Plot.text( penguins, Plot.stackX( Plot.groupZ({ x: "proportion", text:"first" }, { z: "sex", text: "sex" }))),
                Plot.ruleX([0,1])
            ]
        })


        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Group;
