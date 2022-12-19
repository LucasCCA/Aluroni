import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Searcher from "./Searcher";
import { useState } from "react";

export default function Menu() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Searcher search={search} setSearch={setSearch} />
      </section>
    </main>
  );
}
