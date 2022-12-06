import React, { useEffect } from "react";
import * as THREE  from "three";
import  Stats from "stats.js";
import * as dat from 'dat.gui';
import styles from './index.less';

console.log('THREE->THREE',THREE);

const BasicScene: React.FC = () => {

    useEffect(() => {
        init();
    }, [])

    const init = () => {
      
        let stats = initStats()

        let scene = new THREE.Scene();

        let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
        scene.add( camera );

        let renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        let planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
        let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;
        scene.add(plane);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        let ambientLight = new THREE.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        // add spotlight for the shadows
        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);

        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        let step = 0;

        var controls = new function () {
            this.rotationSpeed = 0.02;
            this.numberOfObjects = scene.children.length;

            this.removeCube = function () {
                var allChildren = scene.children;
                var lastObject = allChildren[allChildren.length - 1];
                if (lastObject instanceof THREE.Mesh) {
                    scene.remove(lastObject);
                    this.numberOfObjects = scene.children.length;
                }
            };

            this.addCube = function () {

                var cubeSize = Math.ceil((Math.random() * 3));
                var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                var cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
                var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                cube.castShadow = true;
                cube.name = "cube-" + scene.children.length;


                // position the cube randomly in the scene

                cube.position.x = -30 + Math.round((Math.random() * planeGeometry.parameters.width));
                cube.position.y = Math.round((Math.random() * 5));
                cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height));

                // add the cube to the scene
                scene.add(cube);
                this.numberOfObjects = scene.children.length;
            };

            this.outputObjects = function () {
                console.log(scene.children);
            }
        };


        let gui = new dat.GUI();
        gui.add(controls, 'rotationSpeed', 0, 0.5);
        gui.add(controls, 'addCube');
        gui.add(controls, 'removeCube');
        gui.add(controls, 'outputObjects');
        gui.add(controls, 'numberOfObjects').listen();

        render()

        function render(){
            stats.update();

            scene.traverse((e) => {
                if (e instanceof THREE.Mesh && e != plane) {
                    e.rotation.x += controls.rotationSpeed;
                    e.rotation.y += controls.rotationSpeed;
                    e.rotation.z += controls.rotationSpeed;
                }
            })

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

export default BasicScene;
