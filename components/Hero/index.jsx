import styles from "./hero.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__title}>
        Conheça esse paraiso - Espaço Lua Clara
      </h1>
      <h3 className={styles.hero__subtitle}>
        Aconchego, conforto, simpatia e alto astral
      </h3>
      <a className={styles.hero__btn} class="btn" href="">
        Saiba mais
      </a>
    </div>
  );
}

export default Hero;
