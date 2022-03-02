import React from "react";
import { Link } from "react-router-dom";
import './Components.css'


export default function Footer(){

    return(
        <>
        <div className="footer">
            
            <ul className="socialNetworks">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Mail</li>
                <li>Twitter</li>
                
            </ul>
            <div className="footerLinks">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/">Cervezas</Link></li>
                {/* <li><Link to="/contacto">Contacto</Link></li> */}
            </ul>

            <ul>
                <li>Cervezas Nacionales</li>
                <li>Cervezas Internacionales</li>
                <li>Cerveza Ortuzar</li>
                <li>Cerveza Baba</li>
            </ul>

        </div>
    </div>
        </>
    )
}