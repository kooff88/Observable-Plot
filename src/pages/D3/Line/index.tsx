import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { aapl } from "./aapl.js";
import { tdf } from "./tdf.js";
import { driving } from "./driving.js";
import { bls } from "./bls.js";

import styles from './index.less';

const Line: React.FC = () => {


    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let tempaapl = aapl.forEach((item: any) => item.Date = new Date(item.Date))

        // console.log('aapl->aapl', aapl);

        // let points = aapl.map(d => [d.Date, d.Close]);
        // console.log('points->points', points);
        let blsAA = bls.forEach((item: any) => item.date = new Date(item.date))

        console.log('aapl->aapl', blsAA);

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.line(points)
        //     ]
        // })

        /**
         * x: axis:null - 隐藏x轴
         * d3.cumsum - 获取数组所有值累加和 , 参数为任何可迭代的对象
        */
        // let temp = Plot.plot({
        //     x: {
        //         axis: null
        //     },
        //     marks: [
        //         Plot.lineY(d3.cumsum({ length: 600 }, d3.randomNormal()))
        //     ]
        // })

        /**
         *  style 修改图表样式
         *  d3.shuffle, 是数组数据随机化
        */
        // let temp = Plot.plot({
        //     y: {
        //         grid: true,
        //     },
        //     marks: [
        //         Plot.line(d3.shuffle(aapl.slice(0, 100)), {
        //             x: "Date",
        //             y: "Close"
        //         })
        //     ],
        //     style: {
        //         width: '100%',
        //         height: 680,
        //         background: 'orange',
        //         padding: '20px 0'
        //     }

        // })


        /**
         * x,x轴描述， grid: 间隔辅助线
         * ruleY[0]: Y轴启使数据点
        */
        // let temp = Plot.plot({
        //     x: {
        //         label: "Distance from stage start (km) ->",
        //         grid: true
        //     },
        //     y: {
        //         label: "↑ Elevation (m)",
        //         grid: true
        //     },
        //     marks: [
        //         Plot.line(tdf, { x: "distance", y: "elevation" }),
        //         Plot.ruleY([0])
        //     ]
        // })

        /**
         * Plot.text: 图表上点描述
         * filter: 选择需要描述的数据，dy : Y 轴偏移量
        */

        // let temp = Plot.plot({
        //     inset: 10,
        //     grid: true,
        //     x: {
        //         label: "Miles driven (per person-year) →"
        //     },
        //     y: {
        //         label: "↑ Cost of gasoline ($ per gallon)"
        //     },
        //     marks: [
        //         Plot.line(driving, { x: "miles", y: "gas", curve: "catmull-rom", marker: "circle" }),
        //         Plot.text(driving, { filter: d => d.year % 5 === 0, x: "miles", y: "gas", text: d => `${d.year}`, dy: -12 })
        //     ]
        // })


        /**
         * 重复日期的数据，会多条绘制
        */
        let temp = Plot.plot({
            y: {
                grid: true,
                label: "↑ Unemployment (%)"
            },
            marks: [
                Plot.ruleY([0]),
                Plot.line(bls, { x: "date", y: "unemployment", z: "division" })
            ]
        })

        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Line;
