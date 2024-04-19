import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-40 md:tm-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secundary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea, asi mismi tambien ofresco conocimientos en redes computacionales y equipos computacionales 
                    .</p>
                    <button className="px-4 py-2 rounded-lg bg-secundary hover:bg-secundary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices/>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;