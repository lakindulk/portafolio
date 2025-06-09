import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import { MobileModal } from "./MobileModal"

const PhoneModalContainer =()=>{
    return (
        <Canvas>
            <Suspense fallback="loading ...">
                <Stage environment="city" intensity={0.5}>
                <MobileModal  rotation={[0, 0, 0]}/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.60} makeDefault />
            </Suspense>
        </Canvas>
    )
}

export default PhoneModalContainer