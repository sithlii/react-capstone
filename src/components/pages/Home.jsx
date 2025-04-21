import SwiperCarousel from "../core/SwiperCarousel";
import home1 from '../../assets/home/home1.jpg';
import home2 from '../../assets/home/home2.jpg';
import home3 from '../../assets/home/home3.jpg';
import home4 from '../../assets/home/home4.jpg';
import home5 from '../../assets/home/home5.jpg';
import homeVideo from '../../assets/home/og-opener.mp4';

const images = {
  home1,
  home2,
  home3,
  home4,
  home5
};

const video = {
  homeVideo
};

export default function Home() {

  const homeSlides = [
    {
        type: 'video',
        src: video.homeVideo,
        videoType: 'video/mp4',
    },
    {
        type: 'image',
        src: images.home3,
        alt: 'Generic 3',
    },
    {
        type: 'image',
        src: images.home2,
        alt: 'Generic 2',
    },
    {
        type: 'image',
        src: images.home5,
        alt: 'Generic 5',
    },
    {
        type: 'image',
        src: images.home4,
        alt: 'Generic 4',
    }
];
  return (
    <div className="page-container">
        <SwiperCarousel slides={homeSlides} />
        <div className="page-title">
          <h1>普通</h1>
          <h1>商品</h1>
        </div>
    </div>
  )
}