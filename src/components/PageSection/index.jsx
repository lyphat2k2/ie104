import React, { useState, useEffect, useRef } from 'react';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

import './pagesection.scss';

class PageSection {
    ChristmasBox = ({ cards }) => {
        const swiperContainer = useRef();
        const swiperWrapper = useRef();
        const swiperSlide = useRef([]);
        const [pos, setPos] = useState(0);

        const handlePrevSlide = () => {
            setPos((prev) => {
                if (prev <= 0) {
                    return 0;
                }
                return prev - 1;
            });
        };

        const handleNextSlide = () => {
            setPos((next) => {
                const numCards = cards.length - 3;
                if (next === numCards) {
                    return next;
                }
                return next + 1;
            });
        };

        useEffect(() => {
            const cardWidth =
                swiperSlide.current[0].getBoundingClientRect().width + 16;
            swiperWrapper.current.style.transform = `translateX(-${
                cardWidth * pos
            }px)`;
        }, [pos]);

        useEffect(() => {
            const cardWidth =
                swiperSlide.current[0].getBoundingClientRect().width;
            swiperWrapper.current.style.width = `${
                cardWidth * cards.length + 16 * (cards.length - 1)
            }px`;
        }, []);

        return (
            <div className="page-section christmas-box">
                <div class="christmas-gradient"></div>
                <div className="christmas-bg">
                    <div className="christmas-bg-content">
                        <div className="title-block">
                            <h1>
                                Last Month <strong>on WaltGear</strong>
                            </h1>
                            <p>Check out all deals to find the perfect gift</p>
                        </div>
                        <div className="btn-block">
                            <a
                                className="button"
                                href="localhost">
                                See All Deals
                            </a>
                        </div>
                    </div>
                </div>
                <div className="page-content-inner">
                    <div className="flex col-w-528px">
                        <div className="grid-col">
                            <div className="christmas-banner">
                                <img
                                    src="/assets/images/utils/title.png"
                                    alt="deal-cember"
                                />
                                <a
                                    href="localhost"
                                    title="See All Deals"
                                    className="button bg-orange">
                                    See All Deals
                                </a>
                            </div>
                        </div>
                        <div className="grid-col col-wide">
                            <div className="christmas-swiper">
                                <div
                                    className="swiper-button-prev button"
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
                                <div
                                    className="swiper-container"
                                    ref={swiperContainer}>
                                    <div
                                        className="swiper-wrapper"
                                        ref={swiperWrapper}>
                                        {cards.map((card, index) => {
                                            const {
                                                link,
                                                percent,
                                                title,
                                                img,
                                                background,
                                            } = card;
                                            return (
                                                <a
                                                    key={index}
                                                    href={link}
                                                    className="swiper-slide"
                                                    ref={(el) =>
                                                        (swiperSlide.current[
                                                            index
                                                        ] = el)
                                                    }>
                                                    <div
                                                        className="christmas-container-bg"
                                                        style={{
                                                            background: `url(/assets/images/utils/${background}) no-repeat`,
                                                            backgroundSize:
                                                                '100% 100%',
                                                        }}>
                                                        <div className="christmas-container">
                                                            <div className="goods-percent-wrap">
                                                                <div className="tag">
                                                                    <span className="tag-text">
                                                                        Up to
                                                                    </span>
                                                                </div>
                                                                <div className="goods-percent-current">
                                                                    <span className="goods-percent-value">
                                                                        {
                                                                            percent
                                                                        }
                                                                    </span>
                                                                    <span className="goods-percent-symbol">
                                                                        %{' '}
                                                                        <i className="goods-percent-msg">
                                                                            Off
                                                                        </i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="goods-title">
                                                                {title}
                                                            </div>
                                                            <div className="goods-img">
                                                                <img
                                                                    src={`/assets/images/node/${img}`}
                                                                    alt={title}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    Promotions = () => {
        return (
            <div className="page-section">
                <div className="page-content-inner">
                    <div className="flex gap-20px col-w-2">
                        <div className="grid-col">
                            <a
                                className="banner-flexible radius-m"
                                href="//www.newegg.com/Cell-Phone-Accessories/EventSaleStore/ID-10502?cm_sp=Homepage-Above_The_Fold-_-rosewill%2f22-0188-_-%2f%2fpromotions.newegg.com%2frosewill%2f22-0188%2f800x120.jpg&icid=736197">
                                <img
                                    src="/assets/images/promos/rosewill.jpg"
                                    alt="rosewill"
                                    className="banner-flexible-img"
                                />
                            </a>
                        </div>
                        <div className="grid-col">
                            <a
                                className="banner-flexible radius-m"
                                href="//www.newegg.com/Cell-Phone-Accessories/EventSaleStore/ID-10502?cm_sp=Homepage-Above_The_Fold-_-rosewill%2f22-0188-_-%2f%2fpromotions.newegg.com%2frosewill%2f22-0188%2f800x120.jpg&icid=736197">
                                <img
                                    src="/assets/images/promos/nepro.jpg"
                                    alt="nepro"
                                    className="banner-flexible-img"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    HomepageCategories = ({ cates }) => {
        return (
            <div className="page-section bg-lightgray">
                <div className="page-content-inner">
                    <div className="section-title">
                        <h2 className="section-title-text text-brandblue">
                            Categories
                        </h2>
                    </div>
                    <div className="categories-nav-swiper">
                        {/* <div
                            className="swiper-button-prev button bg-white"
                            role="button"
                            aria-label="Previous Slide"
                            aria-disabled="true">
                            <IoIosArrowBack />
                        </div>
                        <div
                            className="swiper-button-next button bg-white"
                            role="button"
                            aria-label="Next Slide"
                            aria-disabled="false">
                            <IoIosArrowForward />
                        </div> */}
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {cates.map((cate, index) => {
                                    const { link, img, name } = cate;
                                    return (
                                        <div className="swiper-slide">
                                            <a
                                                className="categories-nav-cell bg-transparent-gray"
                                                href={link}>
                                                <div className="categories-nav-cell-img">
                                                    <img
                                                        src={`/assets/images/promos/${img}`}
                                                        alt={name}
                                                    />
                                                </div>
                                                <div className="categories-nav-cell-title font-s">
                                                    {name}
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    HomepageAd = ({ products }) => {
        const swiperContainer = useRef();
        const swiperWrapper = useRef();
        const swiperSlide = useRef([]);
        const [pos, setPos] = useState(0);

        const handlePrevSlide = () => {
            setPos((prev) => {
                if (prev <= 0) {
                    return 0;
                }
                return prev - 1;
            });
        };

        const handleNextSlide = () => {
            setPos((next) => {
                const numProducts = products.length - 3;
                if (next >= numProducts) {
                    return next;
                }
                return next + 1;
            });
        };

        useEffect(() => {
            const cardWidth =
                swiperSlide.current.getBoundingClientRect().width + 16;
            swiperWrapper.current.style.transform = `translateX(-${
                cardWidth * pos
            }px)`;
        }, [pos]);

        useEffect(() => {
            const cardWidth = swiperSlide.current.getBoundingClientRect().width;
            swiperWrapper.current.style.width = `${
                cardWidth * products.length + 16 * (products.length - 1)
            }px`;
        }, []);

        return (
            <div className="page-section homepage-ad">
                <div className="page-content-inner">
                    <div className="section-title">
                        <h2 class="section-title-text font-xxxl text-brandblue">
                            Last Minute Tech Deals of 2022
                        </h2>
                    </div>
                    <div className="ad-with-items bg-lightgray">
                        <div className="ad">
                            <img
                                src="/assets/images/utils/Limited_Entrance_red.png"
                                alt=""
                            />
                        </div>
                        <div className="swiper-section">
                            <div
                                className="swiper-button-prev button bg-white"
                                role="button"
                                aria-label="Previous Slide"
                                aria-disabled="true"
                                onClick={handlePrevSlide}>
                                <IoIosArrowBack />
                            </div>
                            <div
                                className="swiper-button-next button bg-white"
                                role="button"
                                aria-label="Next Slide"
                                aria-disabled="false"
                                onClick={handleNextSlide}>
                                <IoIosArrowForward />
                            </div>
                            <div
                                className="swiper-container"
                                ref={swiperContainer}>
                                <div
                                    className="swiper-wrapper"
                                    ref={swiperWrapper}>
                                    {products.map((product, index) => {
                                        const {
                                            id,
                                            uri,
                                            name,
                                            image,
                                            origprice,
                                            price,
                                        } = product;
                                        return (
                                            <div
                                                key={id}
                                                className="swiper-slide"
                                                ref={(el) =>
                                                    (swiperSlide.current = el)
                                                }>
                                                <div className="goods-container is-vertical">
                                                    <div
                                                        href="localhost"
                                                        className="goods-img">
                                                        <img
                                                            src={`/assets/images/products/${image}`}
                                                            alt="gskill-trident-z5-rgb"
                                                        />
                                                    </div>
                                                    <div className="goods-info">
                                                        <h2 className="goods-title">
                                                            <a href="localhost">
                                                                {name}
                                                            </a>
                                                        </h2>
                                                        <div class="goods-price">
                                                            <div class="goods-price-current">
                                                                <span class="goods-price-symbol">
                                                                    $
                                                                </span>
                                                                <span class="goods-price-value">
                                                                    <strong>
                                                                        {price.toFixed(
                                                                            2
                                                                        )}
                                                                    </strong>
                                                                    <sup>
                                                                        .00
                                                                    </sup>
                                                                </span>
                                                            </div>
                                                            <div class="goods-price-was">
                                                                {`$${origprice.toFixed(
                                                                    2
                                                                )}`}
                                                            </div>
                                                            <div class="goods-price-ship">
                                                                <span class="goods-price-ship-eligible text-blue">
                                                                    Free
                                                                    Shipping
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default new PageSection();
