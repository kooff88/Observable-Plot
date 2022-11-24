import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { wind } from "./wind";

import styles from './index.less';

const Vector: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        let temp = Plot.plot({
            inset: 10,
            width: 1152,
            height: 870,
            color: {
                scheme: "viridis",
                label: "Speed(m/s)",
                zero: true,
                legend: true
            },
            marks: [
                Plot.vector( wind, {
                    x: "longitude",
                    y: "latitude",
                    rotate: ({ u, v }) => Math.atan2(u, v) * 180 / Math.PI,
                    legend: ({ u, v }) => Math.hypot(u,v),
                    stroke:({ u, v }) => Math.hypot(u,v)
                } )
            ]
        })

      

        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Vector;
