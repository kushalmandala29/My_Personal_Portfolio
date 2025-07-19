import {
    RiHome2Line,
    RiUser3Line,
    RiCodeLine,
    RiMedalLine,
    RiTableLine,
    RiMailSendLine
} from "react-icons/ri";

export const navData = [
    { id: "nav1", name: "Home", path: "/", icon: <RiHome2Line className="xl:w-5 w-5" key="home" /> },
    { id: "nav2", name: "about me", path: "/about", icon: <RiUser3Line className="xl:w-5 w-5" key="user" /> },
    { id: "nav3", name: "Skills", path: "/skills", icon: <RiCodeLine className="xl:w-5 w-5" key="skills" /> },
    { id: "nav4", name: "Certifications", path: "/certifications", icon: <RiMedalLine className="xl:w-5 w-5" key="certifications" /> },
    { id: "nav5", name: "Projects", path: "/projects", icon: <RiTableLine className="xl:w-5 w-5" key="table" /> },
    {
        id: "nav6",
        name: "Contact Me",
        path: "/contact",
        icon: <RiMailSendLine className="xl:w-5 w-5" key="RiMailSendLine" />,
    },
];
