import React, { useState, useEffect, useRef } from 'react';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import { useParams } from 'react-router-dom';

import products from '../../data/products.js';
import './product.scss';

class Product {
    Overview = () => {
        const { idproduct} = useParams();
        const product = products.find((product) => idproduct === product.idproduct)
        
        return <div className="product-overview">

        </div>;
    };
    
    Specs = () => {
        const { idproduct} = useParams();
        const product = products.find((product) => idproduct === product.idproduct)

        return (
            <div className="product-specs">
                <div
                    role="rowgroup"
                    className="techspecs">
                    <div className="techspecs-row finish-gallery">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Finish
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__gallery with-image-3">
                                <div className="gallery-wrap">
                                    <img
                                        src="/assets/images/products/workstation-precision-15-5570/workstation-precision-15-5570-img-1.png"
                                        alt=" "
                                        className="techspecs-rowbody__image"
                                    />
                                    <label className="techspecs-rowbody__title">
                                        Platinum Silver
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Operating System
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                Windows 11 Home, English
                            </div>
                            <div className="techspecs-rowbody__value">
                                Windows 11 Pro, English
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Display
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                15.6" FHD+ 1920 x 1200, 60Hz, 500 nits, 2.3
                                Megapixels, 100% sRGB, Anti-glare, Non-Touch
                            </div>
                            <div className="techspecs-rowbody__value">
                                15.6'' WLED UHD+ Touch 3840 x 2400, 60Hz, 500
                                nits, 9.2 Megapixels, 100% AdobeRGB,
                                Anti-reflective, Touch support, with 10 touch
                                points
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Processor
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                12th Gen Intel® Core™ i7-12700H, vPro®
                                Essentials (24MB, 14 core 20 thread,
                                2.30-4.70GHz Turbo, 45W)
                            </div>
                            <div className="techspecs-rowbody__value">
                                12th Gen Intel® Core i9-12900HK, vPro®
                                Essentials (24MB, 14 core 20 thread,
                                2.30-4.70GHz Turbo, 45W)
                            </div>
                            <div className="techspecs-rowbody__value">
                                12th Gen Intel® Core i9-12900H, vPro® Essentials
                                (24MB, 14 core 20 thread, 2.30-4.70GHz Turbo,
                                45W)
                            </div>
                            <div className="techspecs-rowbody__value">
                                12th Gen Intel® Core i7-12800H, vPro® Essentials
                                (24MB, 14 core 20 thread, 2.30-4.70GHz Turbo,
                                45W)
                            </div>
                            <div className="techspecs-rowbody__value">
                                12th Gen Intel® Core i5-12600H, vPro® Essentials
                                (24MB, 14 core 20 thread, 2.30-4.70GHz Turbo,
                                45W)
                            </div>
                            <div className="techspecs-rowbody__value">
                                12th Gen Intel® Core i5-12500H, vPro® Essentials
                                (24MB, 14 core 20 thread, 2.30-4.70GHz Turbo,
                                45W)
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Graphic Cards
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                NVIDIA® RTX™ A1000 Laptop, 4GB, GDDR6
                            </div>
                            <div className="techspecs-rowbody__value">
                                NVIDIA® RTX™ A2000 Laptop, 8GB, GDDR6
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Memory
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                8GB, 1 x 8GB, DDR5, 4800MHz, single-channel
                            </div>
                            <div className="techspecs-rowbody__value">
                                16GB, 2 x 8GB, DDR5, 4800MHz, dual-channel
                            </div>
                            <div className="techspecs-rowbody__value">
                                32GB, 2 x 16GB, DDR5, 4800MHz, dual-channel
                            </div>
                            <div className="techspecs-rowbody__value">
                                64GB, 2 x 32GB, DDR5, 4800MHz, dual-channel
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Storage
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                256 GB, M.2 2230, PCIe NVMe Gen4 x4, SSD
                            </div>
                            <div className="techspecs-rowbody__value">
                                512 GB, M.2 2280, PCIe NVMe Gen4 x4, SSD
                            </div>
                            <div className="techspecs-rowbody__value">
                                1 TB, M.2 2280, PCIe NVMe Gen4 x4, SSD
                            </div>
                            <div className="techspecs-rowbody__value">
                                2 TB, M.2 2280, PCIe NVMe Gen4 x4, SSD
                            </div>
                            <div className="techspecs-rowbody__value">
                                4 TB, M.2 2280, PCIe NVMe Gen4 x4, SSD
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            I/O Ports
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                ThunderBolt™ 4 ports with PowerDelivery
                            </div>
                            <div className="techspecs-rowbody__value">
                                USB Type-C™/ Display port alt
                            </div>
                            <div className="techspecs-rowbody__value">
                                Universal audio jack
                            </div>
                            <div className="techspecs-rowbody__value">
                                MicroSD-card slot
                            </div>
                            <div className="techspecs-rowbody__value">
                                Wedge-shaped lock slot
                            </div>
                            <span className="techspecs-rowbody__text">
                                *Also ships with USB 3.2 Type-A and HDMI dongle
                            </span>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Keyboard
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                Standard Backlit keyboard
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Camera
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                HD RGB Camera, front location, CMOS-sensor
                                technology, Standard Backlit keyboard
                            </div>
                            <div className="techspecs-rowbody__value">
                                Resolution (RGB): 0.92 megapixel, 1280 x 720
                                (HD) at 30 fps
                            </div>
                            <div className="techspecs-rowbody__value">
                                Resolution (Infrared): 0.20 megapixel, 576 x 360
                                at 15 fps
                            </div>
                            <div className="techspecs-rowbody__value">
                                Diagonal Viewing angle (RGB): 78.50 degrees
                            </div>
                            <div className="techspecs-rowbody__value">
                                Diagonal Viewing angle (Infrared ): 78.50
                                degrees
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Audio
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                4 Channel High Definition Audio
                            </div>
                            <div className="techspecs-rowbody__value">
                                Realtek ALC3281
                            </div>
                            <div className="techspecs-rowbody__value">
                                Supported stero conversion
                            </div>
                            <div className="techspecs-rowbody__value">
                                High definition audio interface
                            </div>
                            <div className="techspecs-rowbody__value">
                                Universal Audio Jack
                            </div>
                            <div className="techspecs-rowbody__value">
                                2 Speakers
                            </div>
                            <div className="techspecs-rowbody__value">
                                Supported internal speaker amplifier
                            </div>
                            <div className="techspecs-rowbody__value">
                                Keyboard shortcut controls
                            </div>
                            <div className="techspecs-rowbody__value">
                                Tweeters (2 x 2W); Woofers (2 x 2W)
                            </div>
                            <div className="techspecs-rowbody__value">
                                2.5W x 4 = 10W
                            </div>
                            <div className="techspecs-rowbody__value">
                                Supported subwoofer output
                            </div>
                            <div className="techspecs-rowbody__value">
                                Digital-array microphones
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Wireless
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__label">
                                Wi-Fi
                            </div>
                            <div className="techspecs-rowbody__value">
                                Intel® AX211, 2x2 MIMO, 2400 Mbps, 2.40GHz/5GHz
                            </div>
                            <div className="techspecs-rowbody__value">
                                Wi-Fi 802.11a/b/g
                            </div>
                            <div className="techspecs-rowbody__value">
                                Wi-Fi 4 (WiFi 802.11n)
                            </div>
                            <div className="techspecs-rowbody__value">
                                Wi-Fi 5 (WiFi 802.11ac)
                            </div>
                            <div className="techspecs-rowbody__value">
                                Wi-Fi 6 (802.11ax)
                            </div>
                            <div className="techspecs-rowbody__value">
                                Wi-Fi 6E (802.11ax)
                            </div>
                            <div className="techspecs-rowbody__value">
                                64-bit/128-bit WEP
                            </div>
                            <div className="techspecs-rowbody__value">
                                AES-CCMP
                            </div>
                            <div className="techspecs-rowbody__value">TKIP</div>
                            <div className="techspecs-rowbody__label">
                                Bluetooth
                            </div>
                            <div className="techspecs-rowbody__value">
                                Bluetooth® 5.2
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Battery
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                6 Cell, 86 Wh, Lithium Ion, ExpressCharge™
                                Capable
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Power Supply
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                90W UMA, Output: 20V DC, Input: 100 ~ 240V AC
                            </div>
                            <div className="techspecs-rowbody__value">
                                130W Discrete & UMA, Output: 20V DC, Input: 100
                                ~ 240V AC
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Weight
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                1.88kg - 2.1kg ( 4.1 - 4.6lbs)
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Dimensions
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                34.44 x 23.03 x 1.93 ~ 1.93 cm (13.6" x 9" x
                                0.76" ~ 0.76")
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Built-in Apps
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                Media Suite Essentials
                            </div>
                            <div className="techspecs-rowbody__value">
                                Dell Power Manager
                            </div>
                            <div className="techspecs-rowbody__value">
                                SmartByte
                            </div>
                            <div className="techspecs-rowbody__value">
                                Dell Mobile Connect
                            </div>
                            <div className="techspecs-rowbody__value">
                                Dell Help and Support
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Microsoft Office
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                1-month trial for new Microsoft 365 customers.
                                Credit card required.
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Security
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                Trusted Platform Module (TPM)
                            </div>
                            <div className="techspecs-rowbody__value">
                                IR webcam with Windows Hello support
                            </div>
                            <div className="techspecs-rowbody__value">
                                McAfee® LiveSafe™
                            </div>
                        </div>
                    </div>
                    <div className="techspecs-row">
                        <div
                            role="rowheader"
                            className="techspecs-rowheader">
                            Included in the Box
                        </div>
                        <div
                            role="cell"
                            className="techspecs-rowbody">
                            <div className="techspecs-rowbody__value">
                                Media Suite Essentials
                            </div>
                            <div className="techspecs-rowbody__value">
                                Dell Power Manager
                            </div>
                            <div className="techspecs-rowbody__value">
                                SmartByte
                            </div>
                            <div className="techspecs-rowbody__value">
                                Dell Mobile Connect
                            </div>
                            <div className="techspecs-rowbody__value">
                                Dell Help and Support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    Reviews = () => {
        const { idproduct } = useParams();
        const product = products.find((product) => idproduct === product.idproduct)
        const { name, images, shortSpecs, specs } = product;

        return (
            <div className="product-reviews">
                <div className="reviews-container">
                    <div className="leftside">
                        <div
                            className="sticky-mode"
                            style={{ top: '100px' }}>
                            <div className="review-summary">
                                <div className="review-summary__title">
                                    <h2>Customer Reviews</h2>
                                </div>
                                <div className="review-summary__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                    <div className="average-rating">
                                        <span>4.3 out of 5</span>
                                    </div>
                                </div>
                                <div className="review-summary__total-review-count">
                                    <span>2,153 global ratings</span>
                                </div>
                                <div className="review-summary__histogram">
                                    <div className="histogram-ratings-container">
                                        <div className="histogram-ratings__star">
                                            5 star
                                        </div>
                                        <div className="histogram-ratings__bar">
                                            <span
                                                className="histogram-ratings__bar__inner"
                                                style={{ width: '66%' }}></span>
                                        </div>
                                        <div className="histogram-ratings__score">
                                            66%
                                        </div>
                                    </div>
                                    <div className="histogram-ratings-container">
                                        <div className="histogram-ratings__star">
                                            4 star
                                        </div>
                                        <div className="histogram-ratings__bar">
                                            <span
                                                className="histogram-ratings__bar__inner"
                                                style={{ width: '16%' }}></span>
                                        </div>
                                        <div className="histogram-ratings__score">
                                            16%
                                        </div>
                                    </div>
                                    <div className="histogram-ratings-container">
                                        <div className="histogram-ratings__star">
                                            3 star
                                        </div>
                                        <div className="histogram-ratings__bar">
                                            <span
                                                className="histogram-ratings__bar__inner"
                                                style={{ width: '7%' }}></span>
                                        </div>
                                        <div className="histogram-ratings__score">
                                            7%
                                        </div>
                                    </div>
                                    <div className="histogram-ratings-container">
                                        <div className="histogram-ratings__star">
                                            2 star
                                        </div>
                                        <div className="histogram-ratings__bar">
                                            <span
                                                className="histogram-ratings__bar__inner"
                                                style={{ width: '4%' }}></span>
                                        </div>
                                        <div className="histogram-ratings__score">
                                            4%
                                        </div>
                                    </div>
                                    <div className="histogram-ratings-container">
                                        <div className="histogram-ratings__star">
                                            1 star
                                        </div>
                                        <div className="histogram-ratings__bar">
                                            <span
                                                className="histogram-ratings__bar__inner"
                                                style={{ width: '7%' }}></span>
                                        </div>
                                        <div className="histogram-ratings__score">
                                            7%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-solicitation">
                                <div className="review-solicitation__title">
                                    Review this product
                                </div>
                                <div className="review-solicitation__text">
                                    Share your thoughts with other customers
                                </div>
                                <div className="review-solicitation__button">
                                    Write a customer review
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightside">
                        <div className="comments-container">
                            <div className="comments__bar">
                                <div className="comments__bar--count">
                                    1 – 8 of 196 Reviews
                                </div>
                                <div className="comments__bar--sort">
                                    <select
                                        name="sort"
                                        id="sort"
                                        className="sort__select">
                                        <option value="top-reviews">
                                            Top reviews
                                        </option>
                                        <option value="most-recent">
                                            Most recent
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="comments__list">
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment__user">
                                    <img
                                        src="/assets/images/user/user-default.png"
                                        alt=""
                                        className="user__image"
                                    />
                                    <span className="user__name">John Doe</span>
                                </div>
                                <div className="comment__rating">
                                    <div className="star-rating">
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarFill className="star-rating__star" />
                                        <BsStarHalf className="star-rating__star" />
                                    </div>
                                </div>
                                <div className="comment__title">
                                    <span>Great laptop</span>
                                </div>
                                <div className="comment__date">
                                    <span>
                                        Reviewed in the United States on{' '}
                                    </span>
                                    <span>June 10, 2019</span>
                                </div>
                                <div className="comment__text">
                                    <span>
                                        I've been using for about 3 Months. They
                                        aren't as comfortable as the Evolve
                                        75's, but, I am able to wear them for
                                        several hours without issue or
                                        discomfort. The battery life is
                                        fantastic and can easily go for two-3
                                        days of use. They charge really fast as
                                        well. The sound quality for receive and
                                        transmit is perfect. I am able to walk
                                        around my house and still stay
                                        connected, so the transmit strength is
                                        very effective. I would give these a
                                        higher score than the 75's because I
                                        really love the battery life.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    Support = () => {
        return (
            <div className="product-support">
                <div className="support__container">
                    <div className="support__logo">
                        <img
                            src="/assets/images/utils/support.png"
                            alt="support"
                        />
                    </div>
                    <div className="support__content">
                        <h2 className="support__content--title">Support</h2>
                        <p className="support__content--text">
                            From drivers and manuals to diagnostic tools and
                            replacement parts, Dell Product Support has you
                            covered!
                        </p>
                        <button
                            className="support__content--button"
                            onClick={() => {
                                window.location =
                                    'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers';
                            }}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    Customize = () => {
        const { idproduct } = useParams();
        const product = products.find((product) => idproduct === product.idproduct)
        const { name, images, shortSpecs, specs } = product;

        const galleryItem = useRef();
        const mediaThumbs = useRef();
        const thumbItems = useRef([]);

        const [currentDisplayImage, setCurrentDisplayImage] = useState({
            idImage: 0,
            image: `/assets/images/products/${images[0]}`,
        });

        useEffect(() => {
            galleryItem.current.dataset.gallery = currentDisplayImage.idImage;
            galleryItem.current.src = currentDisplayImage.image;
        }, [currentDisplayImage]);

        const handleImageChange = (image, index) => {
            setCurrentDisplayImage({
                idImage: index,
                image: `/assets/images/products/${image}`,
            });
        };

        const handleScrollUp = () => {
            const rect = thumbItems.current[0].getBoundingClientRect();
            const thumbItemsHeight = rect.height + 8;
            mediaThumbs.current.scrollTop -= thumbItemsHeight;
        };

        const handleScrollDown = () => {
            const rect = thumbItems.current[0].getBoundingClientRect();
            const thumbItemsHeight = rect.height + 8;
            mediaThumbs.current.scrollTop += thumbItemsHeight;
        };

        return (
            <div className="product-customize">
                <div className="product-image-block">
                    <div className="leftside sticky-mode">
                        <nav className="thumbs-modal">
                            <button
                                className="thumbs-up-btn"
                                onClick={handleScrollUp}>
                                <IoIosArrowUp />
                            </button>
                            <div
                                className="media-thumbs"
                                ref={mediaThumbs}>
                                <ul className="thumbs-wrapper">
                                    {images.map((image, index) => (
                                        <li
                                            className={
                                                currentDisplayImage.idImage ===
                                                index
                                                    ? 'thumb-item active'
                                                    : 'thumb-item'
                                            }
                                            key={index}
                                            ref={(el) =>
                                                (thumbItems.current[index] = el)
                                            }
                                            onClick={() =>
                                                handleImageChange(image, index)
                                            }>
                                            <img
                                                className="thumb-img"
                                                src={`/assets/images/products/${image}`}
                                                alt={name}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                className="thumbs-down-btn"
                                onClick={handleScrollDown}>
                                <IoIosArrowDown />
                            </button>
                        </nav>
                        <div className="gallery-modal">
                            <figure className="media-gallery">
                                <figure
                                    className="gallery-item"
                                    data-gallery={`${currentDisplayImage.idImage}`}>
                                    <img
                                        ref={galleryItem}
                                        alt="product"
                                    />
                                </figure>
                            </figure>
                            <figcaption class="gallery-label">
                                <span class="figcaption-label">View Gallery</span>
                            </figcaption>
                        </div>
                    </div>
                </div>
                <div className="product-main-block">
                    <div className="rightside">
                        <div className="content-modal">
                            <div className="configure-panel">
                                <p className="panel-violator">new</p>
                                <h3 className="panel-title">
                                    Customization Your Laptop
                                </h3>
                            </div>
                            <div className="configuration-summary">
                                {Object.entries(shortSpecs).map(
                                    ([title, label], index) => {
                                        return (
                                            <div
                                                className="configure-specs-wrap"
                                                key={index}>
                                                <span className="specs-title">
                                                    {title}:
                                                </span>
                                                <span className="specs-label">
                                                    {label}
                                                </span>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <div className="configuration-settings">
                                <div className="configuration-optiongroup">
                                    <div className="configuration-optiongroup-header">
                                        <h3 className="configuration-optiongroup-title">
                                            Processor
                                        </h3>
                                        <button className="configuration-learnmore-btn">
                                            <span>
                                                How much memory is right for
                                                you?
                                            </span>
                                        </button>
                                    </div>
                                    <div className="configuration-optiongroup-options">
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.processor"
                                                id="processor-1"
                                            />
                                            <label
                                                className="form-selector-label active"
                                                htmlFor="processor-1">
                                                12th Gen Intel® Core™ i5-12500H
                                                (18 MB cache, 12 cores, 16
                                                threads, up to 4.50 GHz Turbo)
                                            </label>
                                        </div>
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.processor"
                                                id="processor-2"
                                            />
                                            <label
                                                className="form-selector-label"
                                                htmlFor="processor-2">
                                                12th Gen Intel® Core™ i7-12700H
                                                (24 MB cache, 14 cores, 20
                                                threads, up to 4.70 GHz Turbo)
                                            </label>
                                        </div>
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.processor"
                                                id="processor-3"
                                            />
                                            <label
                                                className="form-selector-label"
                                                htmlFor="processor-3">
                                                12th Gen Intel® Core™ i9-12900HK
                                                (24 MB cache, 14 cores, 20
                                                threads, up to 5.00 GHz Turbo)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="configuration-optiongroup">
                                    <div className="configuration-optiongroup-header">
                                        <h3 className="configuration-optiongroup-title">
                                            Operating System
                                        </h3>
                                        <button className="configuration-learnmore-btn">
                                            <span>
                                                Which operating system is right
                                                for you?
                                            </span>
                                        </button>
                                    </div>
                                    <div className="configuration-optiongroup-options">
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.operating_system"
                                                id="operating-system-1"
                                            />
                                            <label
                                                className="form-selector-label active"
                                                htmlFor="operating-system-1">
                                                Windows 11 Home, English
                                            </label>
                                        </div>
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.operating_system"
                                                id="operating-system-2"
                                            />
                                            <label
                                                className="form-selector-label"
                                                htmlFor="operating-system-2">
                                                Windows 11 Pro, English
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="configuration-optiongroup">
                                    <div className="configuration-optiongroup-header">
                                        <h3 className="configuration-optiongroup-title">
                                            Video Card
                                        </h3>
                                        <button className="configuration-learnmore-btn">
                                            <span>
                                                Which graphics card is right for
                                                you?
                                            </span>
                                        </button>
                                    </div>
                                    <div className="configuration-optiongroup-options">
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.graphic_card"
                                                id="graphic-card-1"
                                            />
                                            <label
                                                className="form-selector-label active"
                                                htmlFor="graphic-card-1">
                                                Intel® Iris® Xe Graphics
                                            </label>
                                        </div>
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.graphic_card"
                                                id="graphic-card-2"
                                            />
                                            <label
                                                className="form-selector-label"
                                                htmlFor="graphic-card-2">
                                                Intel® UHD Graphics
                                            </label>
                                        </div>
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.graphic_card"
                                                id="graphic-card-3"
                                            />
                                            <label
                                                className="form-selector-label"
                                                htmlFor="graphic-card-3">
                                                NVIDIA® GeForce RTX™ 3050, 4 GB
                                                GDDR6, 40 W
                                            </label>
                                        </div>
                                        <div className="configuration-categoryoption">
                                            <input
                                                className="form-selector-input"
                                                type="radio"
                                                name="config.graphic_card"
                                                id="graphic-card-4"
                                            />
                                            <label
                                                className="form-selector-label"
                                                htmlFor="graphic-card-4">
                                                NVIDIA® GeForce RTX™ 3050 Ti, 4
                                                GB GDDR6, 40 W
                                            </label>
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

export default new Product();
