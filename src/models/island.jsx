import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

import islandScene from '../assets/3d/island.glb';

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  // Helper to determine the current stage based on rotation
  const determineStage = (rotationY) => {
    const normalizedRotation = (rotationY % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    if (normalizedRotation < Math.PI / 2) return 1;
    if (normalizedRotation < Math.PI) return 2;
    if (normalizedRotation < (3 * Math.PI) / 2) return 3;
    return 4;
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsRotating(true);
    lastX.current = e.clientX;
  };

  const handlePointerUp = () => {
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    if (isRotating) {
      const delta = (e.clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.1; // Adjust sensitivity here
      lastX.current = e.clientX;
      rotationSpeed.current = delta * 0.1;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      rotationSpeed.current = 0.02; // Rotation speed for arrow keys
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      rotationSpeed.current = -0.02; // Rotation speed for arrow keys
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
      rotationSpeed.current = 0;
    }
  };

  useFrame(() => {
    if (rotationSpeed.current !== 0 || isRotating) {
      islandRef.current.rotation.y += rotationSpeed.current;
      const currentStage = determineStage(islandRef.current.rotation.y);
      setCurrentStage(currentStage); // Update stage based on rotation
    }

    // Apply damping when rotation is not active
    if (!isRotating && Math.abs(rotationSpeed.current) > 0.001) {
      rotationSpeed.current *= dampingFactor;
    }
  });

  useEffect(() => {
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isRotating]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
