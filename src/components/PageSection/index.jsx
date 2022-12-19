import React, { useState, useEffect, useRef } from 'react';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

import './pagesection.scss';

class PageSection {
    ChristmasBox = ({ banners }) => {
        const swiperWrapper = useRef();
        const swiperSlide = useRef([]);
        // const [pos, setPos] = useState(0);

        // const handlePrevSlide = () => {
        //     setPos((prev) => {
        //         if (prev <= 0) {
        //             return banners.length - 1;
        //         }
        //         return prev - 1;
        //     });
        // };

        // const handleNextSlide = () => {
        //     setPos((next) => {
        //         if (next >= banners.length - 1) {
        //             return 0;
        //         }
        //         return next + 1;
        //     });
        // };

        // useEffect(() => {
        //     swiperWrapper.current.style.transform = `translateX(-${
        //         (100 / banners.length) * pos
        //     }%)`;
        // }, [pos]);

        // useEffect(() => {
        //     swiperWrapper.current.style.width = `calc(100% * ${banners.length})`;
        // }, []);

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
                                    className="swiper-button-prev button swiper-button-disabled"
                                    role="button"
                                    aria-label="Previous Slide"
                                    aria-disabled="true">
                                    <IoIosArrowBack />
                                </div>
                                <div
                                    className="swiper-button-next button"
                                    role="button"
                                    aria-label="Next Slide"
                                    aria-disabled="false">
                                    <IoIosArrowForward />
                                </div>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper" ref={swiperWrapper}>
                                        
                                        <a
                                            href="https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true"
                                            className="swiper-slide" ref={swiperSlide}>
                                            <div className="christmas-container-bg">
                                                <div className="christmas-container">
                                                    <div className="goods-percent-wrap">
                                                        <div className="tag">
                                                            <span className="tag-text">
                                                                Up to
                                                            </span>
                                                        </div>
                                                        <div className="goods-percent-current">
                                                            <span className="goods-percent-value">
                                                                58
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
                                                        PCs & Laptops
                                                    </div>
                                                    <div className="goods-img">
                                                        <img
                                                            src="/assets/images/1_1117.png"
                                                            alt="PCs & Laptops"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true"
                                            className="swiper-slide">
                                            <div className="christmas-container-bg">
                                                <div className="christmas-container">
                                                    <div className="goods-percent-wrap">
                                                        <div className="tag">
                                                            <span className="tag-text">
                                                                Up to
                                                            </span>
                                                        </div>
                                                        <div className="goods-percent-current">
                                                            <span className="goods-percent-value">
                                                                70
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
                                                        Components
                                                    </div>
                                                    <div className="goods-img">
                                                        <img
                                                            src="/assets/images/1_1117.png"
                                                            alt="PCs & Laptops"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true"
                                            className="swiper-slide">
                                            <div className="christmas-container-bg">
                                                <div className="christmas-container">
                                                    <div className="goods-percent-wrap">
                                                        <div className="tag">
                                                            <span className="tag-text">
                                                                Up to
                                                            </span>
                                                        </div>
                                                        <div className="goods-percent-current">
                                                            <span className="goods-percent-value">
                                                                60
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
                                                        PCs & Laptops
                                                    </div>
                                                    <div className="goods-img">
                                                        <img
                                                            src="/assets/images/1_1117.png"
                                                            alt="PCs & Laptops"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true"
                                            className="swiper-slide">
                                            <div className="christmas-container-bg">
                                                <div className="christmas-container">
                                                    <div className="goods-percent-wrap">
                                                        <div className="tag">
                                                            <span className="tag-text">
                                                                Up to
                                                            </span>
                                                        </div>
                                                        <div className="goods-percent-current">
                                                            <span className="goods-percent-value">
                                                                58
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
                                                        PCs & Laptops
                                                    </div>
                                                    <div className="goods-img">
                                                        <img
                                                            src="/assets/images/1_1117.png"
                                                            alt="PCs & Laptops"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true"
                                            className="swiper-slide">
                                            <div className="christmas-container-bg">
                                                <div className="christmas-container">
                                                    <div className="goods-percent-wrap">
                                                        <div className="tag">
                                                            <span className="tag-text">
                                                                Up to
                                                            </span>
                                                        </div>
                                                        <div className="goods-percent-current">
                                                            <span className="goods-percent-value">
                                                                58
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
                                                        PCs & Laptops
                                                    </div>
                                                    <div className="goods-img">
                                                        <img
                                                            src="/assets/images/1_1117.png"
                                                            alt="PCs & Laptops"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true"
                                            className="swiper-slide">
                                            <div className="christmas-container-bg">
                                                <div className="christmas-container">
                                                    <div className="goods-percent-wrap">
                                                        <div className="tag">
                                                            <span className="tag-text">
                                                                Up to
                                                            </span>
                                                        </div>
                                                        <div className="goods-percent-current">
                                                            <span className="goods-percent-value">
                                                                58
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
                                                        PCs & Laptops
                                                    </div>
                                                    <div className="goods-img">
                                                        <img
                                                            src="/assets/images/1_1117.png"
                                                            alt="PCs & Laptops"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
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

    HomepageCategories = () => {
        return (
            <div className="page-section bg-lightgray">
                <div className="page-content-inner">
                    <div className="section-title">
                        <h2 className="section-title-text text-brandblue">
                            Categories
                        </h2>
                    </div>
                    <div className="categories-nav-swiper">
                        <div
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
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a
                                        className="categories-nav-cell bg-transparent-gray"
                                        href="//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132">
                                        <div className="categories-nav-cell-img">
                                            <img
                                                src="/assets/images/promos/Homepage_CategoryCircle_Software.png"
                                                alt="Software"
                                            />
                                        </div>
                                        <div className="categories-nav-cell-title font-s">
                                            Software
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    HomepageAd = () => {
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
                                aria-disabled="true">
                                <IoIosArrowBack />
                            </div>
                            <div
                                className="swiper-button-next button bg-white"
                                role="button"
                                aria-label="Next Slide"
                                aria-disabled="false">
                                <IoIosArrowForward />
                            </div>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="goods-container is-vertical">
                                            <div
                                                href="localhost"
                                                className="goods-img">
                                                <img
                                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                                    alt="gskill-trident-z5-rgb"
                                                />
                                            </div>
                                            <div className="goods-info">
                                                <h2 className="goods-title">
                                                    <a href="localhost">
                                                        Yeyian Gaming Desktop
                                                        Katana X10 Intel Core i5
                                                        11th Gen 11400F
                                                        (2.60GHz) 16GB DDR4 500
                                                        GB NVMe SSD NVIDIA
                                                        GeForce RTX 3060 Ti
                                                        Windows 11 Home 64-bit
                                                    </a>
                                                </h2>
                                                <div class="goods-price">
                                                    <div class="goods-price-current">
                                                        <span class="goods-price-symbol">
                                                            $
                                                        </span>
                                                        <span class="goods-price-value">
                                                            <strong>949</strong>
                                                            <sup>.00</sup>
                                                        </span>
                                                    </div>
                                                    <div class="goods-price-was">
                                                        $1,399.00
                                                    </div>
                                                    <div class="goods-price-ship">
                                                        <span class="goods-price-ship-eligible text-blue">
                                                            Free Shipping
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="goods-container is-vertical">
                                            <div
                                                href="localhost"
                                                className="goods-img">
                                                <img
                                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                                    alt="gskill-trident-z5-rgb"
                                                />
                                            </div>
                                            <div className="goods-info">
                                                <h2 className="goods-title">
                                                    <a href="localhost">
                                                        Yeyian Gaming Desktop
                                                        Katana X10 Intel Core i5
                                                        11th Gen 11400F
                                                        (2.60GHz) 16GB DDR4 500
                                                        GB NVMe SSD NVIDIA
                                                        GeForce RTX 3060 Ti
                                                        Windows 11 Home 64-bit
                                                    </a>
                                                </h2>
                                                <div class="goods-price">
                                                    <div class="goods-price-current">
                                                        <span class="goods-price-symbol">
                                                            $
                                                        </span>
                                                        <span class="goods-price-value">
                                                            <strong>949</strong>
                                                            <sup>.00</sup>
                                                        </span>
                                                    </div>
                                                    <div class="goods-price-was">
                                                        $1,399.00
                                                    </div>
                                                    <div class="goods-price-ship">
                                                        <span class="goods-price-ship-eligible text-blue">
                                                            Free Shipping
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="goods-container is-vertical">
                                            <div
                                                href="localhost"
                                                className="goods-img">
                                                <img
                                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                                    alt="gskill-trident-z5-rgb"
                                                />
                                            </div>
                                            <div className="goods-info">
                                                <h2 className="goods-title">
                                                    <a href="localhost">
                                                        Yeyian Gaming Desktop
                                                        Katana X10 Intel Core i5
                                                        11th Gen 11400F
                                                        (2.60GHz) 16GB DDR4 500
                                                        GB NVMe SSD NVIDIA
                                                        GeForce RTX 3060 Ti
                                                        Windows 11 Home 64-bit
                                                    </a>
                                                </h2>
                                                <div class="goods-price">
                                                    <div class="goods-price-current">
                                                        <span class="goods-price-symbol">
                                                            $
                                                        </span>
                                                        <span class="goods-price-value">
                                                            <strong>949</strong>
                                                            <sup>.00</sup>
                                                        </span>
                                                    </div>
                                                    <div class="goods-price-was">
                                                        $1,399.00
                                                    </div>
                                                    <div class="goods-price-ship">
                                                        <span class="goods-price-ship-eligible text-blue">
                                                            Free Shipping
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="goods-container is-vertical">
                                            <div
                                                href="localhost"
                                                className="goods-img">
                                                <img
                                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                                    alt="gskill-trident-z5-rgb"
                                                />
                                            </div>
                                            <div className="goods-info">
                                                <h2 className="goods-title">
                                                    <a href="localhost">
                                                        Yeyian Gaming Desktop
                                                        Katana X10 Intel Core i5
                                                        11th Gen 11400F
                                                        (2.60GHz) 16GB DDR4 500
                                                        GB NVMe SSD NVIDIA
                                                        GeForce RTX 3060 Ti
                                                        Windows 11 Home 64-bit
                                                    </a>
                                                </h2>
                                                <div class="goods-price">
                                                    <div class="goods-price-current">
                                                        <span class="goods-price-symbol">
                                                            $
                                                        </span>
                                                        <span class="goods-price-value">
                                                            <strong>949</strong>
                                                            <sup>.00</sup>
                                                        </span>
                                                    </div>
                                                    <div class="goods-price-was">
                                                        $1,399.00
                                                    </div>
                                                    <div class="goods-price-ship">
                                                        <span class="goods-price-ship-eligible text-blue">
                                                            Free Shipping
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="goods-container is-vertical">
                                            <div
                                                href="localhost"
                                                className="goods-img">
                                                <img
                                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                                    alt="gskill-trident-z5-rgb"
                                                />
                                            </div>
                                            <div className="goods-info">
                                                <h2 className="goods-title">
                                                    <a href="localhost">
                                                        Yeyian Gaming Desktop
                                                        Katana X10 Intel Core i5
                                                        11th Gen 11400F
                                                        (2.60GHz) 16GB DDR4 500
                                                        GB NVMe SSD NVIDIA
                                                        GeForce RTX 3060 Ti
                                                        Windows 11 Home 64-bit
                                                    </a>
                                                </h2>
                                                <div class="goods-price">
                                                    <div class="goods-price-current">
                                                        <span class="goods-price-symbol">
                                                            $
                                                        </span>
                                                        <span class="goods-price-value">
                                                            <strong>949</strong>
                                                            <sup>.00</sup>
                                                        </span>
                                                    </div>
                                                    <div class="goods-price-was">
                                                        $1,399.00
                                                    </div>
                                                    <div class="goods-price-ship">
                                                        <span class="goods-price-ship-eligible text-blue">
                                                            Free Shipping
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
