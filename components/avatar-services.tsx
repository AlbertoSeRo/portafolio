import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/manos.png" width="500" height="0" className="w-[350px] h-full " alt="Avatar" />
        </MotionTransition>
    );
}

export default AvatarServices;