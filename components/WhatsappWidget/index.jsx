import styles from './WhatsappWidget.module.scss';

function WhatsappWidget() {
  return (
    <div className={styles.whatsappWidget}>
      <a
        href="https://wa.me/5531984065434"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <img
          className={styles.whatsappWidget__icon}
          src="/icon_wpp.png"
          alt={'WhatsApp'}
        />
      </a>
    </div>
  );
}

export default WhatsappWidget;
