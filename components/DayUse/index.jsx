import styles from './DayUse.module.scss';
import { Sprout, Clock, Tag, Check } from 'lucide-react';

function DayUse() {
  return (
    <div className={styles.dayuse} id="dayuse">
      <img className={styles.dayuse__image} src="/img11.jpg" />
      <div className={styles.dayuse__content}>
        <div className={styles.dayuse__header}>
          <h3 className={styles.dayuse__title}>
            <Sprout className={styles.dayuse__icon} /> Day Use no Espaço Lua
            Clara <Sprout className={styles.dayuse__icon} />
          </h3>
          <p className={styles.dayuse__text}>
            Venha aproveitar um dia de descanso e conexão com a natureza em
            nosso espaço! Ideal para relaxar, curtir a piscina e recarregar as
            energias.
          </p>
        </div>
        <img className={styles.dayuse__image_mobile} src="/img3.png" />
        <div className={styles.dayuse__infos}>
          <div className={styles.dayuse__info_item}>
            <h4 className={styles.dayuse__info_title}>
              <Clock className={styles.dayuse__info_icon} /> Horários
            </h4>
            <p className={styles.dayuse__info_text}>Sábado e domingo</p>
            <p className={styles.dayuse__info_text}>9h às 16h</p>
          </div>
          <div className={styles.dayuse__info_item}>
            <h4 className={styles.dayuse__info_title}>
              <Tag className={styles.dayuse__info_icon} /> Valor
            </h4>
            <p className={styles.dayuse__info_text}>R$ 69,00 por pessoa</p>
            <p className={styles.dayuse__info_text_small}>
              * Condições especiais para crianças até 10 anos
            </p>
          </div>
        </div>
        <div className={styles.dayuse__instructions}>
          <div
            className={`${styles.dayuse__instruction_item} ${styles.included}`}
          >
            <h4 className={styles.dayuse__instruction_title}>
              O que está incluso:
            </h4>
            <ul>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Piscina natural
                com cascata
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Jacuzzi integrada
                ao ambiente natural
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Área verde ampla
                para descanso
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Banheiros e
                duchas
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> 10 churrasqueiras
                (uso por ordem de chegada)
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Mesas e cadeiras
              </li>
            </ul>
          </div>
          <div
            className={`${styles.dayuse__instruction_item} ${styles.included}`}
          >
            <h4 className={styles.dayuse__instruction_title}>
              Regras do espaço:
            </h4>
            <ul>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Permitido levar
                cooler
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Pet permitido
                (não entra na piscina/Jacuzzi)
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Apenas som
                ambiente
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Crianças devem
                estar sempre acompanhadas
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Não há estrutura
                específica para crianças pequenas
              </li>
              <li className={styles.dayuse__instruction_text}>
                <Check className={styles.dayuse__list_icon} /> Sem bar ou
                restaurante
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.dayuse__contact}>
          <a
            href="https://wa.me/5531996295388?text=Olá, vim pelo site"
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
