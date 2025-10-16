import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__title}>
        Conheça esse paraíso - Espaço Lua Clara
      </h1>
      <h3 className={styles.hero__subtitle}>
        Aconchego, conforto, boas energias e alto astral
      </h3>
      <a className={styles.hero__btn} href="#dayuse">
        Saiba mais
      </a>
    </div>
  );
}

export default Hero;
