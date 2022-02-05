import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  GitHub,
  Room,
  
  Contacts,
  WhatsApp,
} from "@material-ui/icons";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className={styles.Container}>
      <div className={styles.Left}>
        <h1 className={styles.Logo}>3DECOR.</h1>
        <p className={styles.Desc}>
          Somos una empresa Colombiana que se dedica a hacer realidad la
          decoración que siempre soñaste. Fabricamos paredes de yeso en 3D para
          interiores y exteriores en diferentes tipos de pinturas y acabados.
        </p>
        <div className={styles.SocialContainer}>
          <a
            href="https://www.facebook.com/3Decor-463139897370368/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.SocialIcon} color="3B5999">
              <Facebook />
            </div>
          </a>
          <a
            href="https://instagram.com/3decorcucuta?utm_medium=copy_link"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
          <div className={styles.SocialIcon} color="E4405F">
            <Instagram />
          </div></a>
          <a href="https://wa.me/573188915780?text=Hola, estoy interesado en comprar: "
            
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
          <div className={styles.SocialIcon} color="55ACEE">
            <WhatsApp />
          </div></a>
         
          
        </div>
      </div>
      <div className={styles.Center}>
        <h3 className={styles.Title}>Links de ayuda</h3>
        <ul className={styles.List}>
          <li className={styles.ListItem}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                width: "50%",
                marginBottom: "10px",
              }}
            >
              Inicio
            </Link>
          </li>
          <li className={styles.ListItem}>
            <Link
              to="/carrito"
              style={{
                textDecoration: "none",
                color: "black",
                width: "50%",
                marginBottom: "10px",
              }}
            >
              Carrito
            </Link>
          </li>
          <li className={styles.ListItem}>
            <Link
              to="/productos"
              style={{
                textDecoration: "none",
                color: "black",
                width: "50%",
                marginBottom: "10px",
              }}
            >
              Tienda
            </Link>
          </li>
          <li className={styles.ListItem}>
            <Link
              to="/productos2"
              style={{
                textDecoration: "none",
                color: "black",
                width: "50%",
                marginBottom: "10px",
              }}
            >
              Moldes
            </Link>
          </li>
          <li className={styles.ListItem}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                width: "50%",
                marginBottom: "10px",
              }}
            >
              Cursos
            </Link>
          </li>
          <li className={styles.ListItem}>
            <Link
              to="/formulario"
              style={{
                textDecoration: "none",
                color: "black",
                width: "50%",
                marginBottom: "10px",
              }}
            >
              Formulario inscripción
            </Link>
          </li>
          <li className={styles.ListItem}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                width: "50%",
                marginBottom: "10px",
              }}
            >
              Nosotros
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.Right}>
        <h3 className={styles.Title}>Contacto</h3>
        <div className={styles.ContactItem}>
          <Room style={{ marginRight: "10px" }} /> Colombia
        </div>
        <div className={styles.ContactItem}>
          <Phone style={{ marginRight: "10px" }} /> +057 318 891 5780
        </div>
        <div className={styles.ContactItem}>
          <MailOutline style={{ marginRight: "10px" }} />3decor.cucuta@gmail.com
          
          
        </div>
      </div>
    </div>

    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
      <div className="col-md-4 d-flex align-items-center">
       
        <a href="https://github.com/Nataly1Estupinan"><span className="text-muted">&copy; Desarrollado por Nataly Estupiñan.</span></a>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="https://github.com/Nataly1Estupinan">< GitHub/></a></li>
        
        <li className="ms-3"><a className="text-muted" href="https://nataly1estupinan.github.io/Portafolio/#">< Contacts/></a></li>
      </ul>
    </footer>
  </div>
  </>


  );
};

export default Footer;
