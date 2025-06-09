import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import { PersonalcomputerModal } from "./PersonalcomputerModal"

const PersonalComputerModalContainer =()=>{
    return (
        <Canvas>
    <Suspense fallback="loading ...">
        <Stage environment="city" intensity={0.5}>
            <PersonalcomputerModal rotation={[0, 2, 0]} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <PerspectiveCamera position={[-1, 0.5, 3]} zoom={0.60} makeDefault />
    </Suspense>
</Canvas>
    )
}

export default PersonalComputerModalContainer