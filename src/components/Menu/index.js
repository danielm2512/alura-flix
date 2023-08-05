import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg"
import "./Menu.css"
import Button from "../Button";

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFLix logo"></img>
            </Link>
            
            <Button className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;