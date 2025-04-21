import SwiperCarousel from '../core/SwiperCarousel';
import home1 from '../../assets/home/home1.jpg';
import home2 from '../../assets/home/home2.jpg';


const images = {home1, home2};


const aboutSlides = [
    {
        type: 'image',
        src: images.home1,
        alt: 'About us',
        overlay: (
            <div className="slide-content">
                <h1>The 普通商品 Story</h1>
                <div className="content-section">
                    <p>This capstone was a bit of a doozy. I was still learning React, and still in the process of wrapping my head around the way React really works by the time we started. As such, initial progress was fairly slow. After doing some research and looking at some other established brands, I decided to keep the design as simple and minimalistic as possible.</p>
                    <p>I built out a basic framework for the site, and then built out what I thought the hardest parts were - starting with the core components and then moving out from there to the pages. The 'swiper carousel' ended up being the most complex component, as it's a library I've never worked with before, but it was fun to learn about and tinker with. Overall, I think the site is fairly intuitive, so I'm happy with how it turned out.</p>
                    <p>Here's a link to the FakeStore API: <a href="https://fakestoreapi.com/">https://fakestoreapi.com/</a></p>
                </div>
            </div>
        )
    },
    {
        type: 'image',
        src: images.home2,
        alt: 'About us',
        overlay: (
            <div className="slide-content">
                <h2>Struggles</h2>
                <div className="content-section">
                    <p>I don't think it's much of a surprise that I found the React chapter of the Frontend Development Course the most challenging. I grasped HTML and CSS easily enough, but for whatever reason, I hit a bit of a slog when we reached React. Getting used to the way useEffect, useState, and the other hooks work was a bit of a challenge, but after working in the Dev Shop and looking into other use cases, I think I've got a better grasp on it now.</p>
                    <p>Apart from React, there were also quite a few times where I was unsure how to build out certain elements of various assignments. I remember quite a few in the initial CSS assignments, where I was quite determined to figure out how to style elements a certain way (complicated hover effects, etc.) and it really required a lot of research and trial and error. In the end though, I feel like it was a valuable lesson as I know now that I can figure just about anything out if I really put my mind to it.</p>
                </div>
            </div>
        )
    },
    {
        type: 'video',
        src: 'https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/intro/en/intro.mp4',
        videoType: 'video/mp4',
        overlay: (
            <div className="slide-content">
                <h2>Favorite Languages</h2>
                <div className="content-section">
                    <p>I think my favorite language that we covered in the Frontend Development Course was definitely CSS and SCSS. I never really had much prior experience with the language(s), but I was surprised at how much genuine fun I had styling out different assignments. I do remember having a few gripes with not really being able to do anything complex and fancy without getting into JavaScript during that part of the course, but as evidenced with certain parts of this capstone, I think all the research and practice was well worth it.</p>
                </div>
            </div>
        )
    }
];

export default function About() {
    return <SwiperCarousel slides={aboutSlides} />;
}