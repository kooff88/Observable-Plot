import React, { useEffect } from "react";
import * as THREE  from "three";
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import  Stats from "stats.js";
import * as dat from 'dat.gui';
// import water from "./water.jpg";
import water from "./car2.jpg";
import styles from './index.less';

console.log('THREE->THREE',THREE);

const Water: React.FC = () => {

    useEffect(() => {
        initialOne();
    }, [])

    const initialOne = () => {

        let camera, controls, scene, renderer, stats;
        let mesh, gemometry, material, clock;
        
        const worldWidth = 128, worldDepth = 128;

        init();

        animate();

        function init() {
            camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
            
            camera.position.y = 200;

            clock = new THREE.Clock();

            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xaaccff );
            scene.fog = new THREE.FogExp2( 0xaaccff, 0.0007 );

            gemometry = new THREE.PlaneGeometry( 20000, 20000, worldWidth - 1, worldDepth - 1);
            gemometry.rotateX( - Math.PI / 2 );

            const position = gemometry.attributes.position;
            position.usage = THREE.DynamicDrawUsage;

            for (let i = 0; i < position.count; i ++){
                const y = 35 * Math.sin( i / 2 );
                position.setY( i, y );
            }

            const texture = new THREE.TextureLoader().load(water);
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( 5, 5 );

            material = new THREE.MeshBasicMaterial({ color: 0x0044ff, map: texture });

            mesh = new THREE.Mesh( gemometry, material );
            scene.add(mesh);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            
            let containerDom = document.getElementById("WebGL-output")
            
            containerDom.appendChild( renderer.domElement );

            controls = new FirstPersonControls( camera, renderer.domElement );

            controls.movementSpeed = 500;
            controls.lookSpeed = 0.1;

            stats = new Stats();
            containerDom.appendChild( stats.dom );

            window.addEventListener( 'resize', onWindowResize )

        }

        function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

            controls.handleResize();
        }

        function animate(){
            requestAnimationFrame( animate );

            render();
            stats.update();
        }
        
        function render (){
            const delta = clock.getDelta();
            const time = clock.getElapsedTime() * 10;

            const position = gemometry.attributes.position;

            for( let i =0; i < position.count;  i++ ){
                const y = 35 * Math.sin( i / 5 + (time + i) / 7 );
                position.setY( i, y );
            }

            console.log('position->position',position);

            position.needsUpdate = true;
            controls.update( delta );
            renderer.render( scene, camera );
            
        }

    }

    return (
        <div className={styles.container} id="WebGL-output">
           
        </div>
    );
};

export default Water;
