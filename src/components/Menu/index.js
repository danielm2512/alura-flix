import React from "react";
import Logo from "../../assets/img/Logo.svg"
import "./Menu.css"
import ButtonLink from "./components/ButtonLink";
import Button from "../Button";

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFLix logo"></img>
            </a>
            
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;