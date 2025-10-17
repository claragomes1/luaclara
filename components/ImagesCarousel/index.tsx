import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from './ImagesCarousel.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.png',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img11.jpg',
  '/img12.jpg',
  '/img13.jpg',
];

export default function ImagesCarousel() {
  return (
    <div className={styles.imagesCarousel__wrapper}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 10000 }}
        slidesPerView={1}
        spaceBetween={10}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className={styles.imagesCarousel__img}
              src={image}
              alt={`Foto ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
