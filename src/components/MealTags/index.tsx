import classNames from "classnames";
import { Meal } from "types/Meals";
import styles from "./MealTags.module.scss";

export default function MealTags({
  category,
  size,
  serving,
  price
}: Meal) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames(
          styles.tags__tipo,
          styles[`tags__tipo__${category.label.toLowerCase()}`]
        )}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}