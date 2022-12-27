import menu from "data/menu.json";
import Item from "./Item";
import styles from "./Items.module.scss";
import { useEffect, useState } from "react";
import { Menu } from "types/Meals";

interface Props {
  search: string;
  filter: number | null;
  order: string;
}

export default function Items(props: Props) {
  const [list, setList] = useState(menu);
  const { search, filter, order } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  const orderCrescent = (
    list: Menu,
    property: "size" | "serving" | "price"
  ) => {
    return list.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  };

  function handleOrder(newList: Menu) {
    switch (order) {
    case "porcao":
      return orderCrescent(newList, "size");
    case "qtd_pessoas":
      return orderCrescent(newList, "serving");
    case "preco":
      return orderCrescent(newList, "price");
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(handleOrder(newList));
  }, [search, filter, order]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
