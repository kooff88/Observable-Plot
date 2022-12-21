import React, { useEffect } from "react";
import * as THREE  from "three";
import styles from './index.less';

console.log('THREE->THREE',THREE);

const Water: React.FC = () => {

    useEffect(() => {
        initialOne();
    }, [])

    const initialOne = () => {
        let scene = new THREE.Scene();
        


        let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
        // scene.add( camera );

        let renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

      
      



        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        let ambientLight = new THREE.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        render()

        function render(){
            // stats.update();
            const MAX_POINTS = 500;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array( MAX_POINTS * 3 );
            
            geometry.setAttribute("position", new THREE.BufferAttribute( positions, 3 ));
            const drawCount = 2;
            geometry.setDrawRange( 0, drawCount );
            const material = new THREE.LineBasicMaterial({ color: 'blue' });
            const line = new THREE.Line( geometry, material );
            let x, y, z, index;
            x = y = z = index = 0;
    
            for ( let i = 0, l = MAX_POINTS; i < l; i ++ ) {
    
                positions[ index ++ ] = x;
                positions[ index ++ ] = y;
                positions[ index ++ ] = z;
    
                x += ( Math.random() - 0.5 ) * 30;
                y += ( Math.random() - 0.5 ) * 30;
                z += ( Math.random() - 0.5 ) * 30;
            }

            scene.traverse((e) => {
                if (e instanceof THREE.Mesh && e != plane) {
                    e.rotation.x += controls.rotationSpeed;
                    e.rotation.y += controls.rotationSpeed;
                    e.rotation.z += controls.rotationSpeed;
                }
            })
            // scene.add( line );

            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

    }

    return (
        <div className={styles.container} id="WebGL-output">
           22
        </div>
    );
};

export default Water;
