import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Globe from "./models/Globe";
import Bio from "./bio";
import Stars from "./stars";
import Sun from "./Sun";

export default function Earth() {
  return (
    <>
      {/* <OrbitControls /> */}
      <Globe />
      <Stars />
      <Sun />
      <CameraRig />
    </>
  );
}

// funciton for the camera to rotate around object
function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const phase = (state.clock.elapsedTime % 60) / 60;
    const phaseRadians = Math.PI * 2 * phase;

    const x = Math.sin(phaseRadians);
    const z = Math.cos(phaseRadians);
    state.camera.position.set(x, 0, z);
    state.camera.lookAt(0, 0, 0);
  });
}
