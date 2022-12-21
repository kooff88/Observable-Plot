import React, { useEffect } from "react";
import * as THREE  from "three";
// import  Stats from "stats.js";
import  Stats from "../libs/stats.js";

import * as dat from 'dat.gui';
// import water from "./water.jpg";
import styles from './index.less';

console.log('THREE->THREE',THREE);

const Light: React.FC = () => {

    useEffect(() => {
        initialOne();
    }, [])

    const initialOne = () => {


        let status = initStats();

        renderScene()

        function renderScene() {
            stats.update();

        }


    }

    const initStats = () => {
        let stats = new Stats();

        stats.setMode(0);

        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        
        document.getElementById("Stats-output").appendChild(stats.domElement);

        return stats;
    }

    return (
        <div className={styles.container} id="WebGL-output">
           <div id="Stats-output">
            </div>
            <div id="WebGL-output">
            </div>
        </div>
    );
};

export default Light;
