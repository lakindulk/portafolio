/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei'

export function MobileModal(props) {
  const { nodes, materials } = useGLTF('/MobileModal.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.386, 0.022, 0.628]} scale={[0.607, 0.843, 0.041]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.BASE} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.FRONT} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.SIDE} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.BACK} />
      </group>
    </group>
  )
}

useGLTF.preload('/MobileModal.glb')
