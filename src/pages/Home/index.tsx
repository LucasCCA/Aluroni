import menu from "data/menu.json";
import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import nossaCasa from "assets/nossa_casa.png";

export default function Home() {
  let RecommendedMeals = [...menu];
  RecommendedMeals = RecommendedMeals.sort(() => 0.5 - Math.random()).splice(0,3); 
  return (
    <section>
      <h3 className={stylesTheme.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {RecommendedMeals.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}