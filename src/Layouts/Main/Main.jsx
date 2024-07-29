import React from "react";
import './Main.css'
import Balon from '../../assets/Imagenes/Balon.png'
import Baloncesto from '../../assets/Imagenes/Baloncesto.png'
import Bate from '../../assets/Imagenes/Bate.png'
import Raquetas from '../../assets/Imagenes/Raquetas.png'
import Patines from '../../assets/Imagenes/Patines.png'
import Mancuernas from '../../assets/Imagenes/Mancuernas.png'
import Bolos from '../../assets/Imagenes/Bolos.png'
import Billar from '../../assets/Imagenes/Billar.png'


export const Main = () => {
    return (
        <>
            <div className="containerOne">
                <div className="LookFor">
                    <input className="bar" type="text" placeholder="Buscar tus productos en nuestras tiendas"/>
                </div>
                <div className="title">
                    <h1>Mis Archivos</h1>
                </div>
                <div className="ContainerTwo">
                    <div className="Card">
                        <a href=""><img className="Img" src={Balon} alt="" /></a>
                        <h3 className="Title">Balón de fútbol</h3>
                        <div className="Parrafo"> <p className="description">Balón oficial de tamaño estándar para jugar fútbol en cualquier superficie</p> </div>
                        <button className="Buton"> Comprar </button>
                    </div>
                    <div className="Card">
                    <a href=""><img className="Img1" src={Raquetas} alt="" /></a>
                        <h3 className="Title">Raquetas de tenis de mesa</h3>
                        <div className="Parrafo"> <p className="description">Raqueta profecional para jugar tenis de mesa, con mango ergonomico y gomas de alta adherencia. </p> </div>
                        <button className="Buton"> Comprar </button>
                    </div>
                    <div className="Card">
                    <a href=""><img className="Img" src={Baloncesto} alt="" /></a>
                        <h3 className="Title">Balón de baloncesto</h3>
                        <div className="Parrafo"> <p className="description">Balon ofiacial de baloncesto, tamaño y peso reglamentario para competencias y entretenimiento</p> </div>
                        <button className="Buton"> Comprar </button>
                    </div>
                    <div className="Card">
                    <a href=""><img className="Img" src={Patines} alt="" /></a>
                        <h3 className="Title">Patinesl</h3>
                        <div className="Parrafo"> <p className="description">Patines ajustables ideales para patinaje recreativo, con ruedas de halta resistencia y bota acolchada</p> </div>
                        <button className="Buton"> Comprar </button>
                    </div>
                    <div className="Card">
                    <a href=""><img className="Img" src={Mancuernas} alt="" /></a>
                        <h3 className="Title">Mancuernas de 5Kg</h3>
                        <div className="Parrafo"> <p className="description">Par de mancuernas de 5Kg cada una, recuviertas de vinilo para un agarre cómodo y seguro </p> </div>
                        <button className="Buton"> Comprar </button>
                    </div>
                    <div className="Card">
                    <a href=""><img className="Img" src={Bate} alt="" /></a>
                        <h3 className="Title">Bate de bpeisbol</h3>
                        <div className="Parrafo"> <p className="description">Bate de madera de alta calidad para practicas y juegos de béisbol, disponibles en diferentes longitudes </p> </div>
                        <button className="Buton"> Comprar </button>
                    </div>
                    <div className="Card">
                    <a href=""><img className="Img" src={Bolos} alt="" /></a>
                        <h3 className="Title">Bola de bolos</h3>
                        <div className="Parrafo"> <p className="description">Bola de bliches profeional, disponibles en varios pesos y diseños para adaptarse a diferentes estilos de juego </p> </div>
                        <button className="Buton"> Comprar </button>
                    </div>
                    <div className="Card">
                    <a href=""><img className="Img" src={Billar} alt="" /></a>
                        <h3 className="Title">Taco de billar </h3>
                        <div className="Parrafo"> <p className="description">Taco de bilar de halta calidad, fabricado en madera de arce con punta de cuero para una mayor precisión y control</p> </div>
                        <button className="Buton"> Comprar </button>
                    </div>
                </div>
            </div>
        </>
    )
}