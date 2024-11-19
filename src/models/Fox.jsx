import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import foxScene from "../assets/3d/fox.glb";

const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(foxScene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Stop all animations first
    Object.values(actions).forEach((action) => action.stop());
    
    // Start the current animation if it exists
    if (currentAnimation && actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    }

    return () => {
      if (currentAnimation && actions[currentAnimation]) {
        actions[currentAnimation].fadeOut(0.5);
      }
    };
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        {/* Add similar blocks for other objects */}
      </group>
    </group>
  );
};

export default Fox;
