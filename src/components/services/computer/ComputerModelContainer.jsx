import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import { ComputerModal } from "./ComputerModal"

const ComputerModelContainer =()=>{
    return (
        <Canvas>
            <Suspense fallback="loading ...">
                <Stage environment="night" intensity={0.5}>
                <ComputerModal/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate/>
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.6} makeDefault />
            </Suspense>
        </Canvas>
    )
}

export default ComputerModelContainer