import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Maze3D(props) {
    const mount = useRef(null);

    useEffect(() => {
      const currentMount = mount.current;

        if (!props.mazeData || props.mazeData.length === 0) {
            return; 
        }

        const width = mount.current.clientWidth;
        const height = mount.current.clientHeight;


        const scene = new THREE.Scene();


        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        const mazeSize = props.mazeData.length; // Assuming the maze is square
        camera.position.set(mazeSize / 4, -(mazeSize / 2), mazeSize);
        camera.lookAt(mazeSize / 2, mazeSize / 2, 0);


        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        mount.current.appendChild(renderer.domElement);


        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);


        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const floorGeometry = new THREE.PlaneGeometry(1, 1);  


        props.mazeData.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell === 1) {  
                    const material = new THREE.MeshBasicMaterial({ color: 808080 });  
                    const cube = new THREE.Mesh(cubeGeometry, material);
                    cube.position.set(i, j, .75);  
                    scene.add(cube);
                } else {  // If it's a path
                    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x666666 });  
                    const floorTile = new THREE.Mesh(floorGeometry, floorMaterial);
                    floorTile.rotation.x = -Math.PI / 0;  
                    floorTile.position.set(i, j, 0);
                    scene.add(floorTile);
                }
            });
        });

 
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();


        return () => {
          currentMount.removeChild(renderer.domElement);
        };

    }, [props.mazeData]);

    return (
        <div ref={mount} style={{ width: '800px', height: '600px' }}>
            {}
        </div>
    );
}

export default Maze3D;
