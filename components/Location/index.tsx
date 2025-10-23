import styles from './Location.module.scss';
import { MapPin, AlertTriangle, Navigation, Sprout } from 'lucide-react';

export default function Location() {
  return (
    <div id="location" className={styles.location}>
      <h2 className={styles.location__title}>
        <Sprout className={styles.location__title_icon} /> Como chegar{' '}
        <Sprout className={styles.location__title_icon} />
      </h2>
      <h1 className={styles.location__subtitle}>
        Vale do Vento - Espaço Lua Clara
      </h1>
      <div className={styles.location__container}>
        <div className={styles.location__map}>
          <iframe
            className={styles.mapIframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6100.943605194693!2d-43.62882903190814!3d-19.432448368976733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5e90048ed1aeb%3A0xb6eae8bbcfe9a830!2sLUA%20CLARA!5e0!3m2!1spt-BR!2sbr!4v1750525450274!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.location__instructions}>
          <div className={styles.location__instructions_item}>
            <h4 className={styles.location__instructions_item_title}>
              <MapPin className={styles.location__step_icon} /> Por
              Jaboticatubas
            </h4>
            <p className={styles.location__instructions_item_text}>
              Segue o GPS, observe apenas quando mandar virar a direita pra Casa
              de Telha, não vire, segue reto sentido Capão Grosso.
            </p>
          </div>
          <div className={styles.location__instructions_item}>
            <h4 className={styles.location__instructions_item_title}>
              <MapPin className={styles.location__step_icon} /> Por Lagoa Santa
            </h4>
            <p className={styles.location__instructions_item_text}>
              Segue por Lagoa Santa na MG10 sentido Serra do Cipó, passa São
              José de Almeida, continua na MG10, assim que passar no Condomínio
              Estancia do Cipó, segue mais 01km e vire a direita, próximo ao km
              86, na estrada de terra a direita tem uma placa São José da Serra,
              segue 11km reto, assim que chegar no Vilarejo vc vai ver um muro
              de eucalipto, tem uma Arara grande na chegada, vire a esquerda em
              frente, segue reto, atravessa a ponte e vai até ver a placa rua
              sem saída, vire à esquerda e segue os postes de eucalipto até
              acabar. Depois siga mais 100 metros e chegou.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
