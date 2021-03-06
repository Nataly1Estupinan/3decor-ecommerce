import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <>
      <h1 className={styles.Title}>CATEGORIAS</h1>
      <div className={styles.Container}>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Categories;
