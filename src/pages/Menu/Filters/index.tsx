import styles from "./Filters.module.scss";
import classNames from "classnames";

const filters = [
  {
    label: "Massas",
    id: 1,
  },
  {
    label: "Carnes",
    id: 2,
  },
  {
    label: "Combos",
    id: 3,
  },
  {
    label: "Veganos",
    id: 4,
  },
];

type IOpcao = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
  function selectFilter(option: IOpcao) {
    if (filter === option.id) {
      return setFilter(null);
    }
    return setFilter(option.id);
  }
  return (
    <div className={styles.filtros}>
      {filters.map((option) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
