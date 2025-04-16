import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../../styles/components/swiper-carousel.scss';

const SwiperCarousel = ({ slides, className = '' }) => {
    return (
        <div className={`swiper-carousel ${className}`}>
            <Swiper
                direction="vertical"
                effect="fade"
                modules={[EffectFade, Autoplay, Pagination, Mousewheel]}
                pagination={{
                    clickable: true,
                }}
                mousewheel={{
                    enabled: true,
                    forceToAxis: true,
                    sensitivity: 1,
                }}
                loop={true}
                className="swiper-container"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        {slide.type === 'video' ? (
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="media-content"
                            >
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img
                                src={slide.src}
                                alt={slide.alt || `Slide ${index + 1}`}
                                className="media-content"
                            />
                        )}
                        {slide.overlay && (
                            <div className="slide-overlay">
                                {slide.overlay}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperCarousel; 