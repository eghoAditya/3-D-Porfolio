import React, { useEffect, useRef } from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Updating the Y position to simulate the flight moving in a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 -4; // Set to start at y = 1

    // Checking if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 5) {
      // Changing direction to backward and rotate the bird 180 degrees on the Y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 5) {
      // Changing direction to backward and rotate the bird 180 degrees on the Y-axis
      birdRef.current.rotation.y = 0;
    }

    // Updating the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 1, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
