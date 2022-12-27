import styles from "./Menu.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import Searcher from "./Searcher";
import { useState } from "react";
import Filters from "./Filters";
import Order from "./Order";
import Items from "./Items";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState("");

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTheme.titulo}>Cardápio</h3>
      <Searcher search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filters filter={filter} setFilter={setFilter} />
        <Order order={order} setOrder={setOrder} />
      </div>
      <Items search={search} filter={filter} order={order} />
    </section>
  );
}
