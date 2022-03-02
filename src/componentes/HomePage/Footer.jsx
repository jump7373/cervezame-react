import React from "react";
import { Link } from "react-router-dom";
import "../Components.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="condicionesDeCompra">
        <div>
          <div className="condicionesDeCompraItem">
            <h5>CONDICIONES DE PAGO</h5>
            <p>
              Efectivo hasta 15% de descuento a contra entrega del pedido.
              Online a través de Mercado Pago con tarjetas de débito/crédito,
              depósito o transferencia bancaria.
            </p>
          </div>
          <div className="condicionesDeCompraItem">
            <h5>MÍNIMO DE COMPRA</h5>
            <p>
              Para que no te quedes manija establecimos un mínimo de 12 Latas de
              la mejor birra. Pueden ser variadas de todos los estilos o todas
              iguales. ¿Preguntas Frecuentes?
            </p>
          </div>
          <div className="condicionesDeCompraItem">
            <h5>ENVÍOS</h5>
            <p>
              Envíos en CABA y GBA, en días a coordinar juntos. Planeá tu
              entrega en el checkout, coordinando con el vendedor. Si tu
              domicilio no aplica comunicate a nuestro Whatsapp.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
      <Link to="/">
              <img
                src="https://raw.githubusercontent.com/jump7373/proyecto-final-mirabile/master/img/logo-cervezame.png"
                className="brandFooter"
                alt=""
              />
            </Link>
        <ul className="socialNetworks">
          <a href="https://www.facebook.com" target={"_blank"}>
            <AiFillFacebook className="facebook" />
          </a>
          <a href="https://www.twitter.com">
            <AiFillTwitterSquare className="twitter" />
          </a>
          <a href="https://www.instagram.com">
            <AiFillInstagram className="instagram" />
          </a>
          <a href="mailto: jpmirabile@gmail.com">
            <AiFillMail className="mail" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+541140993739&text=%C2%A1Hola%20quiero%20Cerveza!">
            <AiOutlineWhatsApp className="whatsapp" />
          </a>
        </ul>
        
      </div>
    </>
  );
}
