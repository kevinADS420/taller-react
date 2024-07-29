import React from "react";
import './Header.css'
import { Logo } from "../../Components/Logo/Logo";

 
export const Header = () => {
    return (
        <>
            <div className="ContainerOne">
                <div className="Logo">
                    <Logo></Logo>
                </div>
                <div className="Menu">
                    <ul className="menu">
                        <lo>Inicio</lo>
                        <lo>Nuestra Compañia</lo>
                        <lo>Nuevos Valores</lo>
                        <lo>Contáctanos</lo>
                    </ul>
                </div>
            </div>
        </>
    )
}