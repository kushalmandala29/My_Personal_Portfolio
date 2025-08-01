import {
    RiHome2Line,
    RiUser3Line,
    RiTableLine,
    RiMailSendLine
} from "react-icons/ri";

export const navData = [
    { id: "nav1", name: "Home", path: "/about#home", icon: <RiHome2Line className="xl:w-5 w-5" key="home" /> },
    { id: "nav2", name: "about me", path: "/about#about", icon: <RiUser3Line className="xl:w-5 w-5" key="user" /> },
    { id: "nav3", name: "Projects", path: "/about#projects", icon: <RiTableLine className="xl:w-5 w-5" key="table" /> },
    {
        id: "nav4",
        name: "Contact Me",
        path: "/about#contact",
        icon: <RiMailSendLine className="xl:w-5 w-5" key="RiMailSendLine" />,
    },
];
