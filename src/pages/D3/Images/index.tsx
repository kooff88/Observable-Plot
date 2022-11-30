import React, { useEffect, useMemo } from "react";
import moment from "moment";
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { apod } from "./apod";
import { datas } from "./datas";

import styles from './index.less';

const Images: React.FC = () => {

    // console.log('alphabetalphabet', alphabet);
    const { effectiveConnectionType } = useNetworkStatus();

    useEffect(() => {
        let chartBox = document.getElementById("chart");

        let tempaapl = apod.forEach((item: any) => item.date = new Date(item.date))


        // let temp = Plot.plot({
        //     height: 500,
        //     marginLeft: 20,
        //     x: { inset: 8 },
        //     y: { type: "point", grid: true, tickFormat: Plot.formatWeekday("en", "narrow") },
        //     marks: [
        //         Plot.image(apod.slice(0, 40), { x: "date", y: d => d.date.getUTCDay(), src: "url", title: "title", width: 60 })
        //     ]
        // })

        // let temp = Plot.plot({
        //     grid: true,
        //     x: { inset: 18, axis: null },
        //     y: { domain: [0, 1] },
        //     marks: [
        //         Plot.ruleY([0, 1]),
        //         Plot.image(datas, {
        //             x: (d, i) => i,
        //             y: ([value]) => value,
        //             width: 30,
        //             src: ([, type]) => icons[type]
        //         })
        //     ]
        // })

        // let temp = Plot.plot({
        //     inset: 8,
        //     grid: true,
        //     x: { axis: null },
        //     height: 280,
        //     marks: [
        //         Plot.ruleY([0, 1]),
        //         Plot.text(datas, {
        //             x: (d, i) => i,
        //             y: ([y]) => y,
        //             text: ([, type]) => type === "x" ? "❎" : "💎",
        //             fontSize: 17
        //         })
        //     ]
        // })

        // let temp = Plot.image(apod.slice(0, 10), { x: "index", src: "url", height: 120 }).plot({ height: 160 })

        // let temp = Plot.plot({
        //     marginLeft: 0,
        //     marginRight: 0,
        //     x: { type: "point" },
        //     height: 160,
        //     marks: [
        //         Plot.image(apod.slice(0, 10), {
        //             x: "index",
        //             src: "url",
        //             width: 64,
        //             height: 100,
        //             preserveAspectRatio: "xMidYMax meet"
        //         })
        //     ]
        // })

        // let temp = Plot.image([{ url: "https://apod.nasa.gov/apod/image/2105/GegenscheinBolide_Casado_2500.jpg" }], { x: 0, src: "url", width: 300 }).plot({
        //     width: 300,
        //     x: { axis: null },
        //     height: 250
        // })

        let url1 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`

        // let url2 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`

        // let temp = Plot.plot({
        //     marks: [
        //         Plot.frame(),
        //         Plot.image(datas, {
        //             src: d => d[1] === "o" ? url1 : url2,
        //             x: (d, i) => i,
        //             y: null
        //         })
        //     ],
        //     x: { type: "point" }
        // })

        // let eclipseBlob = "blob:https://observablehq.static.observableusercontent.com/546bec57-a2a0-4ea2-9c39-070da611bb30"

        let temp = Plot.image([url1], { x: 0, src: (d) => d, width: 300 }).plot({
            width: 300,
            x: { axis: null },
            height: 250
        })


        // chartBox.appendChild(temp)
    }, [])

    const icons = {
        o: "https://static.observableusercontent.com/files/3917899b7468c526a5bfe18f94d3cf1cfedf7a7c808976870a866d71d4a322af778ffb34fd3c06783be80ff60b10be3279d5dbc82f07a7201f4978130bc8edd6",
        x: "https://static.observableusercontent.com/files/94c968a3f33eac63c63b87b2f0f6cd97e2db624c65646d6839a5eb4d9c1b5543e922befd040cc5d55deaaa1c7e57c0075a186aa25874490616f2652d11f08592"
    }

    const netWorkMemo = useMemo(()=>{

        
        // let url1 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`
        // let url2 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`

    },[])

    // let url2 = "https://static.observableusercontent.com/files/94c968a3f33eac63c63b87b2f0f6cd97e2db624c65646d6839a5eb4d9c1b5543e922befd040cc5d55deaaa1c7e57c0075a186aa25874490616f2652d11f08592"


    let url1 = "https://static.observableusercontent.com/files/3917899b7468c526a5bfe18f94d3cf1cfedf7a7c808976870a866d71d4a322af778ffb34fd3c06783be80ff60b10be3279d5dbc82f07a7201f4978130bc8edd6";
    let url2 = "https://static.observableusercontent.com/files/94c968a3f33eac63c63b87b2f0f6cd97e2db624c65646d6839a5eb4d9c1b5543e922befd040cc5d55deaaa1c7e57c0075a186aa25874490616f2652d11f08592"
  
    let media;
    switch(effectiveConnectionType) {
        case 'slow-2g':
        media = <img src={url2} alt='low resolution' />;
        break;
        case '2g':
        media =  <img src={url2} alt='low resolution' />;
        break;
        case '3g':
        media =  <img src={url2} alt='low resolution' />;
        break;
        case '4g':
        media =  <img src={url1} alt='low resolution' />;
        break;
        default:
        media = <img src={url2} alt='low resolution' />;
        break;

    }
    return (
        // <div className={styles.container} id="chart"  >
        <div className={styles.container}>
            {media}
            {/* <img src={url2} alt='low resolution' /> */}
        </div>
    );
};

export default Images;
