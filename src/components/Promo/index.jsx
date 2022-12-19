import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import './promo.scss';

function Promo({ ads, styles }) {
    const swiperWrapper = useRef();
    const swiperSlide = useRef([]);
    const [pos, setPos] = useState(0);

    const handlePrevSlide = () => {
        // console.log(swiperSlide.current[1]);
        // swiperWrapper.current.style.transform = `translateX(${widthSlide})`;
    };

    const handleNextSlide = () => {
        // console.log(swiperWrapper.current.dataset.pos++);
        setPos((next) => {
            if (next === ads.length - 1) {
                const rec = swiperSlide.current[pos].getBoundingClientRect();
                swiperWrapper.current.style.transform = `translateX(-${rec.left}px)`;
                return 0;
            }
            const rec = swiperSlide.current[pos].getBoundingClientRect();
            swiperWrapper.current.style.transform = `translateX(-${rec.left}px)`;
            return next + 1;
        });
    };

    useEffect(() => {
        swiperWrapper.current.style.width = `calc(100% * ${ads.length})`;
    }, []);

    return (
        <>
            <div className="promo-swiper">
                <div
                    className="swiper-button-prev button swiper-button-disabled"
                    role="button"
                    aria-label="Previous Slide"
                    aria-disabled="true"
                    onClick={handlePrevSlide}>
                    <IoIosArrowBack />
                </div>
                <div
                    className="swiper-button-next button"
                    role="button"
                    aria-label="Next Slide"
                    aria-disabled="false"
                    onClick={handleNextSlide}>
                    <IoIosArrowForward />
                </div>
                <div className="swiper-container">
                    <div
                        className="swiper-wrapper"
                        ref={swiperWrapper}
                        data-pos={pos}>
                        {ads.map((ad, index) => {
                            const {
                                banner,
                                events,
                                title,
                                subtitle,
                                cta,
                                link,
                                pos,
                            } = ad;
                            const {
                                color,
                                backgroundColor,
                                colorEvent,
                                backgroundEvent,
                                colorTitle,
                                colorSubtitle,
                                colorButton,
                                backgroundButton,
                            } = styles[index];

                            return (
                                <div
                                    key={index}
                                    className="swiper-slide"
                                    ref={(el) =>
                                        (swiperSlide.current[index] = el)
                                    }>
                                    <div className="promo-container">
                                        <div
                                            className="promo-background"
                                            style={{
                                                background: backgroundColor,
                                            }}>
                                            <img
                                                src={banner}
                                                alt={title}
                                            />
                                        </div>
                                        <div
                                            className="promo-info"
                                            data-pos={pos}>
                                            {events && (
                                                <p
                                                    className="info-events"
                                                    style={{
                                                        color: colorEvent,
                                                        background:
                                                            backgroundEvent,
                                                    }}>
                                                    {events}
                                                </p>
                                            )}
                                            <div className="info-title">
                                                <h1
                                                    style={{
                                                        color: colorTitle,
                                                    }}>
                                                    {title}
                                                </h1>
                                            </div>
                                            <div className="info-subtitle">
                                                <h3
                                                    style={{
                                                        color: colorSubtitle,
                                                    }}>
                                                    {subtitle}
                                                </h3>
                                            </div>
                                            <div className="info-cta">
                                                <a
                                                    className="cta-button"
                                                    href={link}
                                                    style={{
                                                        color: color,
                                                        border: `2px solid ${color}`,
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.color =
                                                            colorButton;
                                                        e.target.style.background =
                                                            backgroundButton;
                                                        e.target.style.borderColor =
                                                            'transparent';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.color =
                                                            color;
                                                        e.target.style.borderColor =
                                                            color;
                                                        e.target.style.background =
                                                            'transparent';
                                                    }}>
                                                    {cta}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Promo;
