import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { morley } from "./morley";

import styles from './index.less';

const Box: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //         inset: 6
        //     },
        //     marks: [
        //         Plot.boxY(morley, { x: "Expt", y: "Speed" })
        //     ]
        // })

        // let temp = Plot.plot({
        //     x: {
        //         grid: true,
        //         inset: 6
        //     },
        //     marks: [
        //         Plot.boxX(morley, { x: "Speed", y: "Expt" })
        //     ]
        // })


        let temp = Plot.boxX([0, 3, 4.4, 4.5, 4.6, 5, 7]).plot()


        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Box;
