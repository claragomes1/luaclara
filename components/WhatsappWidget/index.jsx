import Image from 'next/image';
import styles from './WhatsappWidget.module.scss';

function WhatsappWidget() {
  return (
    <div className={styles.whatsappWidget}>
      <a
        href="https://wa.me/5531996053920"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <Image
          src="/icon_wpp.png"
          height={50}
          width={50}
          alt={'WhatsApp'}
        ></Image>
      </a>
    </div>
  );
}

export default WhatsappWidget;
