import React, { useEffect } from "react";
import * as THREE  from "three";
import styles from './index.less';

console.log('THREE->THREE',THREE);

const MaterialsLightAnimation: React.FC = () => {

    useEffect(() => {
        init();
    }, [])

    const init = () => {
      
        // let stats = initStats()

        let scene = new THREE.Scene();

        let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

        let renderer = new THREE.WebGLRenderer();

        renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.shadowMapEnabled = true;


        let planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
        let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;
        scene.add(plane);

        // 正方形
        let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
        let cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;
        // position the cube
        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;
        // add the cube to the scene
        scene.add(cube);
      
        // 圆形
        let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        let sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
        let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the sphere
        sphere.position.x = 20;
        sphere.position.y = 0;
        sphere.position.z = 2;
        sphere.castShadow = true;
        // add the sphere to the scene
        scene.add(sphere);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        let ambientLight = new THREE.AmbientLight(0x0c0c0c);
        scene.add( ambientLight);


        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);


        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        let step = 0;

        function renderScene() {
            // stats.update();

            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;
            cube.rotation.z += 0.02;

            step += 0.04;
            sphere.position.x = 20 + ( 10 * ( Math.cos(step)));

            sphere.position.y = 2 + ( 10 * Math.abs( Math.sin(step)));

            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
        }
        renderScene()
        // function initStats (){
        //     console.log('stats->sss',THREE.stats);

        //     let stats = new Stats();
    
        //     console.log('stats->sss',stats);
    
        //     stats.setMode(0);
    
        //     stats.domElement.style.position = 'absolute';
        //     stats.domElement.style.left = '0px';
        //     stats.domElement.style.top = '0px';
    
        //     document.getElementById("WebGL-output").appendChild( stats.domElement);
    
        //     return stats;
    
        // }

    }

  

    return (
        <div className={styles.container}>
            <div id="Stats-output"></div>
            <div id="WebGL-output"></div>
        </div>
    );
};

export default MaterialsLightAnimation;
