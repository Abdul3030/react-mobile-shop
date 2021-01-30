import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation, Pagination} from 'swiper';
import './Header.scss';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Slide from './Slide/Slide';
import slide1 from '../../assets/image/slide1.jpg';
import slide2 from '../../assets/image/slide2.jpg';

SwiperCore.use([EffectFade, Navigation, Pagination]);


const Header = () => {

    
    return (
        <div className="header-container">
            <Swiper effect='fade' navigation pagination loop >
                <SwiperSlide >
                    <Slide imgSource={slide1} />
                </SwiperSlide>
                <SwiperSlide >
                    <Slide imgSource={slide2} />
                </SwiperSlide>
            </Swiper>
        </div>
        )
};

export default Header;