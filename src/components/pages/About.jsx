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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat quo, tenetur maiores recusandae itaque impedit fuga vitae laborum iure dolores libero nisi amet hic beatae officiis commodi, possimus necessitatibus.
                    Eveniet, labore quos deleniti deserunt alias impedit doloremque autem corrupti sequi, a repellat facere molestias neque, sunt iste maiores nostrum ullam beatae! Beatae in mollitia voluptas eius itaque quae explicabo.
                    Ea natus totam enim omnis quae libero numquam explicabo commodi pariatur dolor. Dolorum officia, vero maxime sit exercitationem esse soluta atque officiis quas dicta nemo aliquam velit temporibus quisquam earum.
                    Aspernatur eius consequuntur cupiditate alias. Nemo, provident. Culpa quidem eligendi neque sunt eum, error voluptatibus quae corporis, praesentium perspiciatis deserunt laboriosam? Expedita modi iure reiciendis itaque natus explicabo quasi corporis.</p>
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, impedit fugit voluptatem molestias saepe repudiandae laboriosam eligendi fuga incidunt nesciunt eius consectetur labore reiciendis voluptate veritatis minima! Enim, omnis corrupti?
                    Eius quod a ratione enim nihil impedit totam, similique pariatur tempora! Excepturi sequi quam mollitia officia enim porro quas ab ex corporis. Repellendus repudiandae accusantium, veniam sint sapiente quos quam.
                    Ipsum consequatur enim eaque, vitae ab alias. Quas voluptatem autem quasi voluptatibus excepturi, saepe dolor necessitatibus quis nulla placeat, perspiciatis vero amet, nostrum veniam sapiente corporis eum deleniti aut enim.</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat quo, tenetur maiores recusandae itaque impedit fuga vitae laborum iure dolores libero nisi amet hic beatae officiis commodi, possimus necessitatibus.
                    Eveniet, labore quos deleniti deserunt alias impedit doloremque autem corrupti sequi, a repellat facere molestias neque, sunt iste maiores nostrum ullam beatae! Beatae in mollitia voluptas eius itaque quae explicabo.
                    Ea natus totam enim omnis quae libero numquam explicabo commodi pariatur dolor. Dolorum officia, vero maxime sit exercitationem esse soluta atque officiis quas dicta nemo aliquam velit temporibus quisquam earum.
                    Aspernatur eius consequuntur cupiditate alias. Nemo, provident. Culpa quidem eligendi neque sunt eum, error voluptatibus quae corporis, praesentium perspiciatis deserunt laboriosam? Expedita modi iure reiciendis itaque natus explicabo quasi corporis.</p>
                </div>
            </div>
        )
    }
];

export default function About() {
    return <SwiperCarousel slides={aboutSlides} />;
}