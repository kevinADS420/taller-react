import React from "react";
import './Ourvalues.css'
import nike from '../../assets/Imagenes/Nike.jpg'
import limite from '../../assets/Imagenes/limite.jpg'


export const Ourvalues = () => {
    return (
        <>
            <section className="section">
                <div className="card-section">
                    <div className="card-container">
                        <div className="card-text"> 
                            <h2>Misión</h2>
                            <p>Promover el amor y respeto por el cuerpo en todas sus formas y tamaños, liderando el desarrollo de una comunidad que practica la actividad física orientada al cuidado de la salud y al mantenimiento de un buen estado físico. Ofrecemos productos de alta calidad que fomentan la colaboración, la creación y el soporte para la actividad y el bienestar, creando una comunidad comprometida con el training, la salud y el body positive, donde prime el equilibrio entre cuidarse y aceptar el cuerpo tal cual es.</p>
                        </div>
                        <div>
                            <a href=""><img className="img-nike" src={nike} alt="" /></a>
                        </div>
                    </div>

                    <div className="card-container">
                        <div>
                            <a href=""><img className="img-limite" src={limite} alt="" /></a>
                        </div>
                        <div className="card-text">
                            <h2>Visión</h2>
                            <p>Ser reconocidos como la empresa líder en la venta de accesorios y prendas deportivas, destacándonos por nuestra seriedad, responsabilidad y experiencia como una gran institución. Aspiramos a consolidar una comunidad global dedicada al bienestar, la pasión, la performance, el confort y la funcionalidad, inspirando a las personas a vivir activamente y a valorar su cuerpo en todas sus formas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};