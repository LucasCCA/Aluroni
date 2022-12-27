import styles from "./Meal.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import menu from "data/menu.json";
import MealTags from "components/MealTags";

export default function Meal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const meal = menu.find(item => item.id === Number(id));

  if (!meal) {
    return "";
  }

  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {" < Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{meal.title}</h1>
        <div className={styles.imagem}>
          <img src={meal.photo} alt={meal.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{meal.description}</p>
          <MealTags {...meal} />
        </div>
      </section>
    </>
  );
}