import { FaInstagram, FaWhatsapp,FaTelegramPlane   } from "react-icons/fa";
import { BookText, CodeSquare, HomeIcon, UserRound,Mail, LinkedinIcon, Rss, Twitch,Facebook,MailSearch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <FaWhatsapp size={30} strokeWidth={1} />,
        src: "https://wa.me/qr/4XAKD5MGHM5UK1",
    },
    {
        id: 2,
        logo: <FaTelegramPlane  size={30} strokeWidth={1} />,
        src: "https://web.telegram.org/a/",
    },
    {
        id: 3,
        logo: <FaInstagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/qr/",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/TobeSR.99?mibextid=ZbWKwL",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "Creador de dahsboards",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de la empresa o clientes que se le de el servico.",
        date: "Actualidad ",
    },
    {
        id: 2,
        title: "Freelancer",
        subtitle: "Creador de paginas Web",
        description: "Crear paginas web adaptadas al gusto del clente cumpliendo con los gustos deceados por el mismo.",
        date: "Actualidad ",
    },
    {
        id: 3,
        title: "Creador de Experiencias Digitales",
        subtitle: "UAEM cu.Texcoco",
        description: "Trabajar en varios equipos que me implicaban una demanda, en el desarrollo Front-Ent, asi como la colavoracion continua con mi equipo de trabajo.",
        date: "May 2022",
    },
    {
        id: 4,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "Primeros proyectos",
        description: "Como desarrollador de frames, los cuales se le vendieron a una empresa de verdura, la cual tenia la necesidad de actualizar su sistema. Trabaje como desarrollador Fron-End.",
        date: "Ago 2020",
    },
    {
        id: 5,
        title: "Soporte y Mantenimiento ",
        subtitle: "Servicio particular.",
        description: "Mantenimiento prevnetevivo y correctivo, a personas particulares con equipos computacionales",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 8,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 12,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Documentación",
        description: "Dar seguimiento a cada uno de los pasos dados en la documentacion de inventariado a nivel tecnico.",
    },
    {
        icon: <Rocket />,
        title: "Sopoprte",
        description: "Atender servicios de soporte tecnico a N1 Y N2 computacional. ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Tienda Web",
        image: "/t7.png",
        urlGithub: "https://github.com/AlbertoSeRo/",
        urlDemo: "https://gleaming-semolina-c38841.netlify.app/?classId=a00cb0a4-8ac7-4f6b-9ab8-575e2f283be5&assignmentId=964830b2-2a74-446c-bdc0-eb9a317643eb&submissionId=65ea29eb-3fd5-8673-7264-1ce63fe13bf3",
    },
    {
        id: 2,
        title: "Etiquetas",
        image: "/t2.png",
        urlGithub: "https://github.com/AlbertoSeRo/",
        urlDemo: "https://fantastic-alpaca-8b4b82.netlify.app/",
    },
    {
        id: 3,
        title: "Punto de venta",
        image: "/t4.jpeg",
        urlGithub: "https://github.com/AlbertoSeRo/",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/t1.png",
        urlGithub: "https://github.com/AlbertoSeRo/",
        urlDemo: "https://magical-cuchufli-b5cfba.netlify.app/",
    },
    {
        id: 5,
        title: "Login´s",
        image: "/t3.jpeg",
        urlGithub: "https://github.com/AlbertoSeRo/",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Dark web",
        image: "/t5.png",
        urlGithub: "https://github.com/AlbertoSeRo/",
        urlDemo: "https://magical-cuchufli-b5cfba.netlify.app/",
    },
    {
        id: 7,
        title: "Portafolio",
        image: "/t6.png",
        urlGithub: "https://github.com/AlbertoSeRo/",
        urlDemo: "#!",
    },
   
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Soporte tecnico",
        description:
            "Conocimientos en Soporte tecnoco computacional, nuvel 1 y nuvel 2, teniendo conocimientos en matenimiento prevntivo y correctivo.",
        imageUrl: "/otro-1.png",
    },
    {
        id: 2,
        name: "Cableado estructurado",
        description:
            "Conocimientos principales de cableado estrcturado, ya que favorece un mejor orden en las instalaciones de una red computacional asi como a la planeciacion de proyectos.",
        imageUrl: "/otro-2.png",
    },
    {
        id: 3,
        name: "Redes computacionales",
        description:
            "Conocimientos en redes computacionales, routeo en diferentes protocolos como lo son : OSPF, RIP, FRAME RELAY,etc. Conocimientos en conexciones, de difetentes dispositivos de red.",
        imageUrl: "/otro-5.png",
    },
    {
        id: 4,
        name: "Documentacion de proyectos",
        description:
            "Documentacion de proyectos y planeacion de los mismos con todos los segumientos correspondientes a nivel tecnico y presupuesto.",
        imageUrl: "/otro-3.png",
    },
    {
        id: 5,
        name: "Back-End",
        description:
            "Conocimientos medios en programacion orientada a objetos, asi como bases de datos, creacion de tablas, fuciones, etc.",
        imageUrl: "/otro-4.png",
    },
    
];