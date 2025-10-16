import Image from 'next/image';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Image src="/logo_luaclara_nova.png" height={110} width={110}></Image>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#dayuse">
              Day Use
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#about">
              Sobre nós
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#location">
              Como Chegar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
