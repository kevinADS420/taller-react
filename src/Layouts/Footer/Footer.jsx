import React from "react";
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";


export const Footer = () => {
    return(
        <>
            <div className="Footer">
            <FaFacebook></FaFacebook>
            <IoLogoWhatsapp></IoLogoWhatsapp>
            <FaSquareInstagram></FaSquareInstagram>
            </div>
        </>
    )
} 