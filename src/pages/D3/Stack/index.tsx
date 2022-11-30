import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { crimea } from "./crimea";
import { riaa } from "./riaa";
import { congress } from "./congress";
import { iowa } from "./iowa";

import styles from './index.less';

const Stack: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");


        // let temp =  Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     color: {
        //         legend: true
        //     },
        //     marks: [
        //         Plot.lineY( crimea, { x: "date", y: "deaths", stroke: "cause", marker: "circle" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.areaY( crimea, { x: "date", y2: "deaths", fill: "cause", mixBlendMode:"multiply" }),
        //         Plot.ruleY([0])
        //     ]
        // })
        
        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.areaY( crimea, { x: "date", y: "deaths", fill: "cause" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         type: "band",
        //         tickFormat: d => d.toLocaleString("en", { month: "narrow" }),
        //         label: null
        //     },
        //     marks: [
        //         Plot.barY( crimea, { x: "date", y:"deaths", fill: "cause" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        // const xy = { x: "year", y: "revenue", z:"format", order: "appearance", reverse:"true" };
        
        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //         label:"↑ Annual revenue (billions, adj.)",
        //         transform: d => d / 1000
        //     },
        //     marks: [
        //         Plot.areaY(riaa, Plot.stackY({...xy, fill: "group", title: d => `${d.format}\n${d.group}`})),
        //         Plot.lineY(riaa, Plot.stackY1({ ...xy, stroke: "white", strokeWidth: 1 })),
        //         Plot.ruleY([0]),
        //     ],
        //     color: {
        //         legend: true
        //     }
        // })

        // const xy = { x: "year", y: "revenue", z: "format", order: "appearance", offset: "expand", reverse: true };

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //         label: "↑ Revenue (%)",
        //         percent: true
        //     },
        //     marks: [
        //         Plot.areaY(riaa, Plot.stackY({...xy, fill: "group", title: d => `${d.format}\n${d.group}`})),
        //         Plot.lineY(riaa, Plot.stackY2({...xy, stroke: "white", strokeWidth: 1})),
        //         Plot.ruleY([0, 1])
        //       ]
        // })

        // let temp = Plot.plot({
        //     height: 300,
        //     x: {
        //         label: "Age ->",
        //         nice: true
        //     },
        //     y: {
        //         grid: true,
        //         label: "← Women · Men →",
        //         labelAnchor: "center",
        //         tickFormat: Math.abs
        //     },
        //     marks: [
        //         Plot.dot( congress, Plot.stackY2({
        //             x: d => 2021 - d.birth,
        //             y: d => d.gender === "M" ? 1 : d.gender === "F" ? -1 :0,
        //             fill: "gender"
        //         })),
        //         Plot.ruleY([0])
        //     ]
        // })

        // let temp = Plot.plot({
        //     height: 280,
        //     x: {
        //         percent: true
        //     },
        //     facet: {
        //         data: congress,
        //         y: d => Math.floor((2021 - d.birth) / 10) * 10
        //     },
        //     marks: [
        //         Plot.barX( congress, Plot.stackX( Plot.groupZ({ x: "proportion-facet" }, { fill: "gender" }))),
        //         Plot.text(congress, Plot.stackX(Plot.groupZ({x: "proportion-facet", text: "first"}, {z: "gender", text: d => d.gender === "F" ? "Women" : d.gender === "M" ? "Men" : null}))),
        //         Plot.ruleX([0,1])
        //     ]
        // })
        
        let temp  = Plot.plot({
            y: {
                grid: true,
                label: "↑ Net generation (million MWh)",
                transform: d => d / 1000
            },
            marks: [
                Plot.areaY( iowa, Plot.stackY({ x: "year", y: "net_generation", fill: "source", title: "source" })),
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

export default Stack;
