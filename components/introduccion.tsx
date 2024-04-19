"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const Introduccion = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/yo.png" priority width="700" height="700" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">La creatividad siempre, <br />
                        <TypeAnimation
                            sequence={[
                                'Se programa.',
                                1000,
                                'Se optimiza.',
                                1000,
                                'Se disfruta.',
                                1000,
                                'Se diseña.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secundary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como desarrollador frontend y en continuo desarrollo profecional, para 
                        hacer experiencias mas innovadoras y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="https://github.com/AlbertoSeRo/" 
                        className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>
                        <Link href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secundary border-secundary rounded-xl hover:shadow-xl hover:shadow-secundary" >
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduccion;