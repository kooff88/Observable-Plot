import React, { useEffect } from "react";
import * as THREE  from "three";
import crate from "./crate.gif";
import car2 from "./car2.jpg";
import styles from './index.less';

console.log('THREE->THREE',THREE);

const WoodenBox: React.FC = () => {

    useEffect(() => {
        initialOne();
    }, [])

    const initialOne = () => {
        let camera, scene, renderer;
        let mesh;

        init();

        animate();

        function init(){
            camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
            camera.position.z = 400;

            scene = new THREE.Scene();

            // const texture = new THREE.TextureLoader().load(crate);
            const texture = new THREE.TextureLoader().load(car2);
            
            const geometry = new THREE.BoxGeometry( 200, 200, 200 );

            const material = new THREE.MeshBasicMaterial({ map: texture });

            mesh = new THREE.Mesh( geometry, material );
            scene.add(mesh);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            let output = document.getElementById("WebGL-output");
            output.appendChild( renderer.domElement );

            window.addEventListener('resize', onWindowResize);

        }

        function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        function animate(){
            requestAnimationFrame( animate );

            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.01;

            renderer.render( scene, camera );
        }

    }

    return (
        <div className={styles.container} id="WebGL-output">
        </div>
    );
};

export default WoodenBox;
