import styles from './DayUse.module.scss';

function DayUse() {
  return (
    <div className={styles.dayuse} id="dayuse">
      <img className={styles.dayuse__image} src="/img11.jpg" />
      <div className={styles.dayuse__content}>
        <div className={styles.dayuse__header}>
          <h3 className={styles.dayuse__title}>
            🌿 Day Use no Espaço Lua Clara 🌿
          </h3>
          <p className={styles.dayuse__text}>
            Venha aproveitar um dia de descanso e conexão com a natureza em
            nosso espaço! Ideal para relaxar, curtir a piscina e recarregar as
            energias.
          </p>
        </div>
        <div className={styles.dayuse__infos}>
          <div className={styles.dayuse__info_item}>
            <h4 className={styles.dayuse__info_title}>🕘 Horário</h4>
            <p className={styles.dayuse__info_text}>Das 9h às 17h</p>
          </div>
          <div className={styles.dayuse__info_item}>
            <h4 className={styles.dayuse__info_title}>💰 Valor</h4>
            <p className={styles.dayuse__info_text}>R$ 50 por pessoa</p>
          </div>
        </div>
        <div className={styles.dayuse__instructions}>
          <div
            className={`${styles.dayuse__instruction_item} ${styles.included}`}
          >
            <h4 className={styles.dayuse__instruction_title}>
              🟩 O que está incluso:
            </h4>
            <ul>
              <li className={styles.dayuse__instruction_text}>
                ✔️ Acesso à piscina e área externa
              </li>
              <li className={styles.dayuse__instruction_text}>
                ✔️ Banheiros e duchas
              </li>
              <li className={styles.dayuse__instruction_text}>
                ✔️ Mesas, cadeiras e churrasqueira
              </li>
            </ul>
          </div>
          <div
            className={`${styles.dayuse__instruction_item} ${styles.not_included}`}
          >
            <h4 className={styles.dayuse__instruction_title}>
              🟥 O que não está incluso:
            </h4>
            <ul>
              <li className={styles.dayuse__instruction_text}>
                ❌ Alimentação{' '}
              </li>
              <li className={styles.dayuse__instruction_text}>
                ❌ Acesso aos chalés
              </li>
              <li className={styles.dayuse__instruction_text}>
                ❌ Bebidas (traga seu cooler)
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dayuse__contact}>
          <a
            href="https://wa.me/5531984065434"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dayuse__contact_button}
          >
            Entre em contato e garanta seu Day Use
          </a>
        </div>
      </div>
    </div>
  );
}

export default DayUse;
