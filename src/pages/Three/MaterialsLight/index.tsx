import React, { useEffect } from "react";
import * as THREE  from "three";
import styles from './index.less';

console.log('THREE->THREE',THREE);

const MaterialsLight: React.FC = () => {

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
        renderer.shadowMapEnabled = true;
     
        let planeGeometry = new THREE.PlaneGeometry( 60, 40 )
        let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
        let plane = new THREE.Mesh( planeGeometry,planeMaterial );
        plane.receiveShadow = true;
        
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);

        
        let cubeGeometry = new THREE.BoxGeometry(4,4,4);
        let cubeMaterial = new THREE.MeshLambertMaterial({ color: 'green' });
        let cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
        cube.castShadow = true;

        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;


        scene.add(cube);

        let sphereGeometry = new THREE.SphereGeometry( 4, 20, 20 );
        let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x77777ff });
        let sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

        sphere.position.x = 20;
        sphere.position.y = 4;
        sphere.position.z = 2;
        sphere.castShadow = true;
        scene.add(sphere);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight)
        

        document.getElementById("WebGL-output").appendChild( renderer.domElement );

        function animate() {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        }
        animate();
    }

    return (
        <div className={styles.container} id="WebGL-output">
        </div>
    );
};

export default MaterialsLight;
