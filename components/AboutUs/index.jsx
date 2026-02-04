import Image from 'next/image';
import style from './AboutUs.module.scss';
import ImagesCarousel from '../ImagesCarousel';
import { Sprout } from 'lucide-react';

function AboutUs() {
  return (
    <div className={style.about} id="about">
      <h3 className={style.about__title}>
        <Sprout className={style.about__icon} /> Conheça o Espaço Lua Clara{' '}
        <Sprout className={style.about__icon} />
      </h3>
      <p className={style.about__text}>
        Feche os olhos e imagine o paraíso. Com vista privilegiada da Serra do
        Espinhaço e cercado por belas cachoeiras, onde o tempo desacelera e a
        natureza abraça.
      </p>
      <div className={style.about__images}>
        <ImagesCarousel />
      </div>
    </div>
  );
}

export default AboutUs;
