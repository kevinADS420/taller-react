import React from "react";
import './Ourcompany.css'
import  Banners  from '../../assets/Imagenes/Banners.jpg'

export const Ourcompany = () => {
    return (
        <>
            <section className="container">
                <div className="card">
                    <div className="text">
                        <h1>Acerca de nosotros</h1>
                        <p>SportZone promueve el amor y respeto por el cuerpo en todas las formas y tamaños, busca liderar el desarrollo de una comunidad que practica la actividad física orientada a cuidar la salud y mantener un buen estado físico. Ofreciendo productos tangibles para que se genere un contexto de colaboración, creación y soporte para la actividad y el bienestar. </p>
                        <p>Creamos una comunidad alrededor del training, la salud y el body positive donde prime el equilibrio entre cuidarse y aceptar el cuerpo tal cual como es. </p>
                        <p>Somos líderes en la venta de accesorios y prendas deportivas, garantizando nuestra seriedad, responsabilidad y experiencia como una gran institución. </p>
                        <p>BIENESTAR, PASIÓN, PERFORMANCE, CONFORT Y FUNCIONALIDAD son las palabras que nos definen.</p>
                    </div>
                    <div>
                        <a href=""><img className="Banners" src={Banners} alt="" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}