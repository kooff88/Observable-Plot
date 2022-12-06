import React, { useEffect } from "react";
import * as THREE  from "three";
import styles from './index.less';

console.log('THREE->THREE',THREE);

const FirstScene: React.FC = () => {

    useEffect(() => {
        init();
    }, [])

    const init = () => {
        let scene = new THREE.Scene();
        
        let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 100);

        let renderer = new THREE.WebGLRenderer();
        // renderer.setClearColorHex();
        renderer.setClearColor( new THREE.Color(0xEEEEEE));
        renderer.setSize(window.innerWidth, window.innerHeight);

        let axes = new THREE.AxesHelper(20);
        scene.add(axes);

        let planeGeometry =new THREE.PlaneGeometry(60, 20);
        let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
        let plane = new THREE.Mesh( planeGeometry,planeGeometry )

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);


        let cubeGeometry = new THREE.BoxGeometry(4,4,4);
        let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        let cube = new THREE.Mesh( cubeGeometry,cubeMaterial);

        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z =0;

        scene.add(cube);

        let sphereGeometry = new THREE.SphereGeometry(4,20,20);
        let sphereMeterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe:true });
        let sphere = new THREE.Mesh( sphereGeometry,sphereMeterial );
        
        sphere.position.x = 20;
        sphere.position.y = 4;
        sphere.position.z = 2;

        scene.add(sphere);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt( scene.position );

        document.getElementById("WebGL-output").appendChild( renderer.domElement );

        renderer.render(scene, camera);


    }

    return (
        <div className={styles.container} id="WebGL-output">
        </div>
    );
};

export default FirstScene;
