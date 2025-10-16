import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.block}>
          <h3>Contato</h3>
          <a href="tel:+31984065434" className={styles.link}>
            +55 (31) 98406-5434
          </a>
          <a href="mailto:contato@luaclara.com" className={styles.link}>
            contato@luaclara.com
          </a>
        </div>

        <div className={styles.block}>
          <h3>Endereço</h3>
          <address className={styles.address}>
            Rua Flor do Serrado - Vale do Vento
            <br />
            São José da Serra, Jaboticatubas - MG
          </address>
        </div>

        <div className={styles.block}>
          <h3>Horários</h3>
          <p className={styles.text}>
            Sáb: 9h — 17h
            <br />
            Dom: 9h - 17h
          </p>
        </div>

        <div className={styles.block}>
          <h3>Nos siga nas redes sociais:</h3>
          <a
            href="https://instagram.com/luaclara"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            @espacoluaclara
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Espaço Lua Clara — Todos os direitos
        reservados
      </div>
    </footer>
  );
}
