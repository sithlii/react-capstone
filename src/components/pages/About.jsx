import SwiperCarousel from '../core/SwiperCarousel';

const aboutSlides = [
    {
        type: 'image',
        src: '../../assets/home/home1.jpg',
        alt: 'About us',
        overlay: <h1>Our Story</h1>
    },
    {
        type: 'image',
        src: '../../assets/home/home2.jpg',
        alt: 'About us',
        overlay: <h2>Our Mission</h2>
    }
];

export default function About() {
    return <SwiperCarousel slides={aboutSlides} />;
}