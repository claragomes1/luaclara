import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__block}>
          <h3 className={styles.footer__heading}>Contato</h3>
          <a href="tel:+31984065434" className={styles.footer__link}>
            +55 (31) 98406-5434
          </a>
          <a
            href="mailto:espacoluaclara@gmail.com"
            className={styles.footer__link}
          >
            espacoluaclara@gmail.com
          </a>
        </div>

        <div className={styles.footer__block}>
          <h3 className={styles.footer__heading}>Endereço</h3>
          <address className={styles.footer__address}>
            Rua Flor do Serrado - Vale do Vento
            <br />
            São José da Serra, Jaboticatubas - MG
          </address>
        </div>

        <div className={styles.footer__block}>
          <h3 className={styles.footer__heading}>Horários</h3>
          <p className={styles.footer__text}>
            Sáb: 9h — 17h
            <br />
            Dom: 9h - 17h
          </p>
        </div>

        <div className={styles.footer__block}>
          <h3 className={styles.footer__heading}>
            Nos siga nas redes sociais:
          </h3>
          <a
            href="https://instagram.com/luaclara"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            @espacoluaclara
          </a>
        </div>
      </div>

      <div className={styles.footer__copy}>
        © {new Date().getFullYear()} Espaço Lua Clara — Todos os direitos
        reservados
      </div>
    </footer>
  );
}
