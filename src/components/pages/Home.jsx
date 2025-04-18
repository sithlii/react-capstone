import SwiperCarousel from "../core/SwiperCarousel";
import home1 from '../../assets/home/home1.jpg';
import home2 from '../../assets/home/home2.jpg';
import home3 from '../../assets/home/home3.jpg';

const images = {
  home1,
  home2,
  home3
};

export default function Home() {

  const homeSlides = [
    {
        type: 'image',
        src: images.home1,
        alt: 'About us',
        // overlay: <h1>Our Story</h1>
    },
    {
        type: 'image',
        src: images.home2,
        alt: 'About us',
        // overlay: <h2>Our Mission</h2>
    },
    {
        type: 'image',
        src: images.home3,
        alt: 'About us',
        // overlay: <h2>Our Mission</h2>
    }
];
  return (
    <div className="page-container">
        <SwiperCarousel slides={homeSlides} />        
    </div>
  )
}