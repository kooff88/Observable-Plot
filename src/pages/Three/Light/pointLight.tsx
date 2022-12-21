import React, { useEffect } from "react";
import * as THREE  from "three";
import  Stats from "stats.js";
import * as dat from 'dat.gui';
// import water from "./water.jpg";
import styles from './index.less';

console.log('THREE->THREE',THREE);

const Light: React.FC = () => {

    useEffect(() => {
        initialOne();
    }, [])

    const initialOne = () => {
        let stats = initStats();
        
        let scene = new THREE.Scene();

        let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

        // 标记一， 使用
        let renderer = new THREE.WebGLRenderer();
        
        renderer.setClearColor( new THREE.Color( 0xEEEEEE, 1.0 ));
        renderer.setSize( window.innerWidth, window.innerHeight );

        renderer.alpha = true;
        renderer.antialias = true;
        
        
        let planeGeometry = new THREE.PlaneGeometry( 60, 20, 20, 20 );
        let planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        
        let plane = new THREE.Mesh( planeGeometry, planeMaterial );
        plane.receiveShadow = true;

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);

        let cubeGeometry = new THREE.BoxGeometry(4,4,4);
        let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff7777 });
        let cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
        cube.castShadow = true;

        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;

        scene.add(cube);

        let sphereGeometry = new THREE.SphereGeometry( 4, 20, 20 );
        let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
        let sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

        sphere.position.x = 20;
        sphere.position.y = 0;
        sphere.position.z = 2;
        sphere.castShadow = true;

        scene.add(sphere);

        camera.position.x = -25; 
        camera.position.y = 30; 
        camera.position.z = 25; 
        camera.lookAt( new THREE.Vector3(10, 0, 0));

        var ambiColor = "#c97171";
        var ambientLight = new THREE.AmbientLight(ambiColor);
        scene.add(ambientLight);

        let spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( -40, 60, -10 );
        spotLight.castShadow = true;

        let pointColor = "#ccffcc";
        let pointLight = new THREE.PointLight(pointColor);
        pointLight.distance = 100;
        scene.add(pointLight);
        
        let sphereLight = new THREE.SphereGeometry(0.2);
        let sphereLightMaterial = new THREE.MeshBasicMaterial({ color: 0xac6c25 });
        let sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial);
        sphereLightMesh.castShadow = true;

        sphereLight.position = new THREE.Vector3(3,0,3);
        scene.add( sphereLightMesh );

        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        let step = 0;
        
        let invert = 1;
        let phase = 0;

        let controls = new function () {
            this.rotationSpeed = 0.03;
            this.bouncingSpeed = 0.03;
            this.ambientColor = ambiColor;
            this.pointColor = pointColor;
            this.intensity = 1; 
            this.distance = 100;
        }
        
        let gui = new dat.GUI();
        gui.addColor(controls, 'ambientColor').onChange(function (e) {
            ambientLight.color = new THREE.Color(e);
        });

        gui.addColor(controls, 'pointColor').onChange(function (e) {
            pointLight.color = new THREE.Color(e);
        });

        gui.add(controls, 'intensity', 0, 30).onChange(function (e) {
            pointLight.intensity = e;
        });

        gui.add(controls, 'distance', 0, 1000).onChange(function (e) {
            pointLight.distance = e;
        });

        render();

        function render(){
            stats.update();

            cube.rotation.x += controls.rotationSpeed;
            cube.rotation.y += controls.rotationSpeed;
            cube.rotation.z += controls.rotationSpeed;

            step += controls.bouncingSpeed;
            sphere.position.x = 20 + ( 10 * ( Math.cos(step)));
            sphere.position.y = 2 + ( 10 * Math.abs( Math.sin( step)));

            if( phase > 2 * Math.PI ) {
                invert = invert * -1;
                phase -= 2 * Math.PI;
            }else {
                phase += controls.rotationSpeed;
            }

            sphereLightMesh.position.z = +(7 * ( Math.sin( phase )));
            sphereLightMesh.position.x = +(14 * ( Math.cos( phase )));
            sphereLightMesh.position.y = 5;

            if (invert < 0) {
                let pivot = 14;
                sphereLightMesh.position.x = ( invert * ( sphereLightMesh.position.x - pivot )) + pivot;
            }

            pointLight.position.copy( sphereLightMesh.position );
            
            requestAnimationFrame( render );
            renderer.render( scene, camera );

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
