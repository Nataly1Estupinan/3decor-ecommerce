import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  WhatsApp,
} from "@material-ui/icons";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    
    <container className={styles.Container}>
      <div className={styles.Left}>
        <Link to="/inicio" style={{ textDecoration: "none", color: "black" }}>
          <h1 className={styles.Logo}>3DECOR.</h1>
        </Link>
        <p className={styles.Desc}>
          Somos una empresa Colombiana que se dedica a hacer realidad la
          decoración que siempre soñaste. Fabricamos paredes de yeso en 3D para
          interiores y exteriores en diferentes tipos de pinturas y acabados.
        </p>

        <div className={styles.SocialContainer}>
          <a href="https://www.facebook.com/3Decor-463139897370368/" >
          {/* className={styles.SocialIcon} color="3B5999"  */}
              <Facebook className={styles.SocialIcon} color="3B5999"/>
            
          </a>

          <a href="https://instagram.com/3decorcucuta?utm_medium=copy_link">
          {/* className={styles.SocialIcon} color="E4405F"  */}
              <Instagram className={styles.SocialIcon} color="E4405F"/>
            
          </a>
          <a href="https://wa.me/57318 8915780?text=Hola, estoy interesado en comprar: ">
            {/* <image className={styles.SocialIcon} color="25d366"> */}
              <WhatsApp className={styles.SocialIcon} color="25d366"/>
            {/* </image> */}
          </a>
        </div>
      </div>
      <div className={styles.Center}>
        <h1 className={styles.Title}>Enlaces de interés</h1>
        <ul className={styles.List}>
          <Link
            to="/inicio"
            style={{
              textDecoration: "none",
              color: "black",
              width: "50%",
              marginBottom: "10px",
            }}
          >
            < li className={styles.ListItem}>Inicio</li>
          </Link>
          <Link
            to="/carrito"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className={styles.ListItem}>Carrito</li>
          </Link>
        </ul>
       
      </div>
     
      <div className={styles.Right}>
        <h1 className={styles.Title}>Contacto</h1>
        <div className={styles.ContactItem}>
          <Room style={{ marginRight: "10px" }}/>Colombia 
        </div>
        <div className={styles.ContactItem}>
          <Phone style={{ marginRight: "10px" }} /> 318 591 5780
        </div>
        <div className={styles.ContactItem}>
          <MailOutline style={{ marginRight: "10px" }} /> contacto@3decor.com
        </div>
        <div classNAme={styles.Payment} src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
      
    </container>
    
    
  );
};

export default Footer;
