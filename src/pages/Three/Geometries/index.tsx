import React, { useEffect } from "react";
import * as THREE  from "three";
import  Stats from "stats.js";
import * as dat from 'dat.gui';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
import { ParametricGeometries } from 'three/examples/jsm/geometries/ParametricGeometries.js';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { createMultiMaterialObject } from 'three/examples/jsm/utils/SceneUtils.js';

import styles from './index.less';
console.log('THREE->THREE',THREE);

const Geometries: React.FC = () => {

    useEffect(() => {
        init();
    }, [])

    const init = () => {
      
        let stats = initStats()

        let scene = new THREE.Scene();

        let camera =  new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        let renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        // create the ground plane
        let planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
        let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        // rotate and position the plane
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;

        // add the plane to the scene
        scene.add(plane);

        // position and point the camera to the center of the scene
        camera.position.x = -50;
        camera.position.y = 30;
        camera.position.z = 20;
        camera.lookAt(new THREE.Vector3(-10, 0, 0));

        // add subtle ambient lighting
        let ambientLight = new THREE.AmbientLight(0x090909);
        scene.add(ambientLight);

        // add spotlight for the shadows
        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 40, 50);
        spotLight.castShadow = true;
        scene.add(spotLight);

        addGeometries(scene);

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        // call the render function
        let step = 0;

        render();
      
      
        function addGeometries(scene){
            let geoms = [];

            geoms.push( new THREE.CylinderGeometry(1,4,4));

            geoms.push( new THREE.BoxGeometry(2,2,2));

            geoms.push( new THREE.SphereGeometry(2));

            geoms.push( new THREE.IcosahedronGeometry(4));

            let points = [
                new THREE.Vector3(2,2,2),
                new THREE.Vector3(2,2,-2),
                new THREE.Vector3(-2, 2, -2),
                new THREE.Vector3(-2, 2, 2),
                new THREE.Vector3(2, -2, 2),
                new THREE.Vector3(2, -2, -2),
                new THREE.Vector3(-2, -2, -2),
                new THREE.Vector3(-2, -2, 2)
            ];


            geoms.push(new ConvexGeometry(points));
            


            let pts =[];
            let detail = .1;
            let radius = 3;
            for ( let angle = 0.0; angle < Math.PI; angle += detail ) {
                pts.push( new THREE.Vector3( Math.cos( angle )  * radius, 0, Math.sin( angle ) * radius));
            }

            geoms.push( new THREE.LatheGeometry( pts, 12 ));

            geoms.push(new THREE.OctahedronGeometry(3));


            geoms.push(new ParametricGeometry(ParametricGeometries.mobius3d, 20, 10));

            geoms.push(new THREE.TetrahedronGeometry(3));

            geoms.push(new THREE.TorusGeometry(3, 1, 10, 10));

            geoms.push(new THREE.TorusKnotGeometry(3, 0.5, 50, 20));

            let j = 0;

            for( let i = 0; i < geoms.length; i++ ) {
                let cubeMaterial = new THREE.MeshLambertMaterial({wireframe: true, color: Math.random() * 0xffffff});

                var materials = [

                    new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff, shading: THREE.FlatShading}),
                    new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true})

                ];
                console.log('ParametricGeometries.new THREE.ParametricGeometry',THREE.SceneUtils);

                let mesh = createMultiMaterialObject(geoms[i], materials);
                mesh.traverse((e) => {
                    e.castShadow = true;
                });

                mesh.position.x = -24 + ((i % 4) * 12);
                mesh.position.y = 4;
                mesh.position.z = -8 + (j * 12);

                if ((i + 1) % 4 == 0) j++;
                scene.add(mesh);

            }

        }
        function render() {
            stats.update();

            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

        function initStats() {

            let stats = new Stats();

            stats.setMode(0); // 0: fps, 1: ms

            // Align top-left
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';

            document.getElementById("Stats-output").appendChild(stats.domElement);

            return stats;
        }
    }

 

    return (
        <div className={styles.container}>
            <div id="Stats-output"></div>
            <div id="WebGL-output"></div>
        </div>
    );
};

export default Geometries;
