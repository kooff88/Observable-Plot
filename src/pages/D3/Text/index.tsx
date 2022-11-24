import React, { useEffect } from "react";
import moment from "moment";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { caltrain } from "./caltrain";
import { points } from "./points";

import styles from './index.less';

const Text: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        // let temp = Plot.plot({
        //     width: 240, 
        //     axis: null,
        //     y: {
        //         domain: d3.range( 4, 25).map( String)
        //     },
        //     color: {
        //         domain: "NLB",
        //         range: ["currentColor", "peru", "brown"],
        //         legend: true
        //     },
        //     marks: [
        //         Plot.text([[1,"4"]], {
        //             text: ["Northbound"],
        //             textAnchor: "start"
        //         }),
        //         Plot.text([[-1, "4"]], {
        //             text: ["Southbound"],
        //             textAnchor: "end"
        //         }),
        //         Plot.text( new Set( caltrain.map( d => d.hours)), {
        //             x: 0,
        //             y:d => d,
        //             text: d => `${ (d - 1) % 12 + 1} ${ (d % 24) >= 12 ? "p" : "a"}`
        //         }),
        //         Plot.text( caltrain, Plot.stackX2({
        //             filter: d => d.orientation === "N",
        //             x: 1,
        //             y: "hours",
        //             text: d => d.minutes.padStart(2, "0"),
        //             title: d => `${d.time} ${d.line}`,
        //             fill: "type",
        //             textAnchor: "start"
        //         })),
        //         Plot.text( caltrain, Plot.stackX2({
        //             filter: d => d.orientation === "S",
        //             x: -1, 
        //             y: "hours",
        //             text: d => d.minutes.padStart(2, "0"),
        //             title: d => `${ d.time} ${d.line}`,
        //             fill: "type",
        //             textAnchor: "end"
        //         })),
        //         Plot.ruleX([-0.5, 0.5])
        //     ]
        // })

        // let temp = Plot.plot({
        //     grid: true,
        //     x: {
        //         domain: [0,1],
        //     },
        //     y: {
        //         domain: [0,1],
        //     },
        //      marks: [
        //          Plot.line(points),
        //          Plot.dot( points, { fill: "white", r:6 }),
        //          Plot.text( points )
        //      ]
        // })

        // let temp = Plot.plot({
        //     height: 200,
        //     marks:[
        //         Plot.frame(),
        //         Plot.text([`大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b\n大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b大棚牛b`], { frameAnchor:"middle" })
        //     ]
        // })

        let temp = Plot.plot({
            height: 200,
            marginBottom: 12,
            marks: [
                Plot.text(
                    [
                        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.",

"There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.",

"Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?—Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep. But these are all landsmen; of week days pent up in lath and plaster—tied to counters, nailed to benches, clinched to desks. How then is this? Are the green fields gone? What do they here?" 
                    ],
                    {
                        frameAnchor: "top",
                        fontSize: 9,
                        x: ( d, i ) => 1 + i,
                        lineWidth: 20,
                        textAnchor: "start",
                        lineHeight: 1.3,
                        clip: true
                    }
                )
            ],
            x: { type:"point", align: 0, axis: "top", tickSize: 0 }
        })

        chartBox.appendChild(temp)
    }, [])



    return (
        <div className={styles.container} id="chart"  >
        </div>
    );
};

export default Text;
