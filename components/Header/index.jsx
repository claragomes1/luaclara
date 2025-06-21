import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/logo_luaclara.png" height={150} width={150}></Image>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <Link className={styles.header__link} href="#">
              Home
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link className={styles.header__link} href="#galery">
              Fotos
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link className={styles.header__link} href="#day-use">
              Ingressos
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link className={styles.header__link} href="#location">
              Como Chegar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
