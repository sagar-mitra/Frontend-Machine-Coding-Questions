import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import { useMediaQuery } from "react-responsive";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  const navLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      src: "https://www.linkedin.com/in/sagar-mitra19/",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      src: "https://x.com/devwithsagar",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      src: "https://github.com/sagar-mitra",
    },
  ];

  return (
    <div className="navbar-container">
      <div className="nav-heading">devwithsagar</div>

      <div className="nav-links">
        {navLinks.map((nav, index) => {
          return (
            <Link className={`${isLargeScreen && "underline"} link`} to={nav.src} key={index}>
              {isLargeScreen ? nav.name : nav.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
