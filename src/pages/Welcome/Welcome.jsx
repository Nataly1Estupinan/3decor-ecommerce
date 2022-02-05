import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";



const Welcome = () => {
  return (
    <div className={styles.Container}>
      {/* <Wrapper> */}
        <h1 className={styles.Title}>BIENVENIDO A 3DECOR</h1>
        <Link to="/home">
        <button className={styles.Button}>ENTRAR</button>
        </Link>
        {/* <Form> 
           <Input placeholder="ususario" />
          <Input placeholder="contraseña" /> 
          <Button>ENTRAR</Button>
           <Link>NO RECUERDAS LA CONTRASEÑA?</Link>
          <Link>CREA UNA NUEVA CUENTA</Link>
        </Form>  */}
      {/* </Wrapper> */}
    </div>
  );
};

export default Welcome;