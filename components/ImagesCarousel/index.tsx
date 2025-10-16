import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  '/img1.JPG',
  '/img2.jpg',
  '/img3.PNG',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img11.jpg',
  '/img12.jpg',
  '/img13.jpg',
];

export default function ImagesCarousel() {
  return (
    <div
      style={{
        maxWidth: '900px',
        maxHeight: '600px',
        margin: '0 auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
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
            <Image
              src={image}
              alt={`Foto ${index + 1}`}
              width={900}
              height={600}
              style={{
                width: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
