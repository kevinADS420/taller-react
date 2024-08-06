import React from "react";
import './Header.css'
import { Logo } from "../../Components/Logo/Logo";
import { Link } from 'react-router-dom'

 
export const Header = () => {
    return (
        <>
            <div className="ContainerOne">
                <div className="Logo">
                    <Logo></Logo>
                </div>
                <div className="Menu">
                    <ul className="menu">
                        <Link className="menu" to='/'>Inicio</Link>
                        <Link className="menu" to='/Ourcompany'>Nuestra compañia</Link>
                        <Link className="menu" to='/Ourvalues'>Nuestros valores </Link>
                        <Link className="menu" to='/NotFound'>Contáctanos</Link>
                        <Link className="menu" to='/Count'>Count</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

