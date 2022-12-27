import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const routes = [{
    label: "Home",
    to: "/"
  }, {
    label: "Menu",
    to: "/menu"
  }, {
    label: "Sobre",
    to: "/sobre"
  }];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}