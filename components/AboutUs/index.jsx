import Image from "next/image";
import style from "./AboutUs.module.scss";

function AboutUs() {
  return (
    <div className={style.about}>
      <h3 className={style.about__title}>Conheça o Espaço Lua Clara</h3>
      <p className={style.about__text}>
        Feche os olhos e imagine o paraíso. Um lugar no meio do mato e cercado
        por belas cachoeiras, onde você encontra paz, tranquilidade, conforto e
        comodidade.
      </p>
      <hr />
      <div className={style.about__images}>
        <Image
          className="img-1"
          src="/IMG_9912.jpg"
          width={500}
          height={500}
        ></Image>
        <Image
          className="img-2"
          src="/IMG_9912.jpg"
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  );
}

export default AboutUs;
