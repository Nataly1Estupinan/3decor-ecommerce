/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";


const CategoryItem = ({item}) => {
    
    return (
        <div className={styles.Container}>
            <img className={styles.Image} src={item.img}/>
            <div className={styles.Info}>
                <h1 className={styles.Title}>{item.title}</h1>
                <Link className={styles.Link} to={item.link}>
                <button className={styles.Button}>COMPRAR AHORA</button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryItem
