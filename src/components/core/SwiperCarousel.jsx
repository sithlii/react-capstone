import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const SwiperCarousel = ({ slides, className = '' }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);
    const videoRefs = useRef([]);
 
    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
        
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach((slide, index) => {
            const overlay = slide.querySelector('.slide-overlay');
            if (overlay) {
                overlay.classList.remove('slide-up', 'slide-down');
                if (index === swiper.activeIndex) {
                    overlay.classList.add(
                        swiper.swipeDirection === 'next' ? 'slide-up' : 'slide-down'
                    );
                }
            }
        });
        
        const currentSlide = slides[swiper.activeIndex];
        if (currentSlide) {
            const video = currentSlide.querySelector('video');
            if (video) {
                video.currentTime = 0;
                video.play().catch(error => {
                    if (error.name !== 'AbortError') {
                        console.error('Error playing video:', error);
                    }
                });
            }
        }
    };

    useEffect(() => {
        const firstSlide = document.querySelector('.swiper-slide');
        if (firstSlide) {
            const video = firstSlide.querySelector('video');
            if (video) {
                video.play().catch(error => {
                    if (error.name !== 'AbortError') {
                        console.error('Error playing video:', error);
                    }
                });
            }
        }

        videoRefs.current = document.querySelectorAll('video');
        return () => {
            videoRefs.current.forEach(video => {
                if (video) {
                    video.pause();
                    video.removeAttribute('src');
                    video.load();
                }
            });
        };
    }, []);

    return (
        <div className={`swiper-carousel ${className}`}>
            <Swiper
                ref={swiperRef}
                direction="vertical"
                effect="creative"
                creativeEffect={{
                    prev: {
                        translate: [0, '-100%', 0],
                        opacity: 0,
                    },
                    next: {
                        translate: [0, '100%', 0],
                        opacity: 0,
                    },
                }}
                modules={[EffectFade, Autoplay, Pagination, Mousewheel]}
                pagination={{
                    clickable: true,
                }}
                mousewheel={{
                    enabled: true,
                    forceToAxis: true,
                    sensitivity: 1,
                }}
                speed={800}
                loop={true}
                className="swiper-container"
                onSlideChange={handleSlideChange}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        {slide.type === 'video' ? (
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="media-content"
                                onError={(e) => {
                                    if (e.target.error && e.target.error.name !== 'AbortError') {
                                        console.error('Video error:', e.target.error);
                                    }
                                }}
                            >
                                <source src={slide.src} type={slide.videoType || 'video/mp4'} />
                                Your browser does not support the video tag.
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