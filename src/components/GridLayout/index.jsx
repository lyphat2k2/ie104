import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { TbChristmasTree } from 'react-icons/tb';

import './gridlayout.scss';

class GridLayout {
    G3Cx2R = () => {
        const [textHour, setTextHour] = useState(0);
        const [textMinute, setTextMinute] = useState(0);
        const [textSecond, setTextSecond] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                const countDate = new Date('Dec 25, 2022 00:00:00').getTime();
                const now = new Date().getTime();
                const gap = countDate - now;

                // Time work
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;

                // calculate time
                setTextHour(Math.floor((gap % day) / hour));
                setTextMinute(Math.floor((gap % hour) / minute));
                setTextSecond(Math.floor((gap % minute) / second));
                
            }, 1000);
            return () => {
                clearInterval(interval)
            };
        }, [textSecond]);

        return (
            <div className="section-grid-container g3cx2r">
                <div className="grid-heading">
                    <h1 className="grid-title">
                        <TbChristmasTree />
                        Christmas's Best Deals
                    </h1>
                    <div className="countdown">
                        <span>Ending in: </span>
                        <h3 className="hour">{textHour}</h3>:
                        <h3 className="min">{textMinute}</h3>:
                        <h3 className="sec">{textSecond}</h3>
                    </div>
                </div>
                <div className="grid-card-wrapper g3cx2r">
                    <div className="bigger">
                        <div className="goods-container is-reverse is-vertical">
                            <a
                                href="localhost"
                                className="goods-img">
                                <img
                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                    alt="gskill-trident-z5-rgb"
                                />
                            </a>
                            <div className="goods-info">
                                <div className="goods-branding">
                                    <a
                                        href="localhost"
                                        className="goods-rating">
                                        <span className="goods-rating-icons">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </span>
                                        <span className="goods-rating-nums">
                                            (8)
                                        </span>
                                    </a>
                                </div>
                                <h2 className="goods-title">
                                    <a href="localhost">
                                        Yeyian Gaming Desktop Katana X10 Intel
                                        Core i5 11th Gen 11400F (2.60GHz) 16GB
                                        DDR4 500 GB NVMe SSD NVIDIA GeForce RTX
                                        3060 Ti Windows 11 Home 64-bit
                                    </a>
                                </h2>
                                <div className="tag-list">
                                    <div className="tag is-skewed bg-darkorange">
                                        <span className="tag-text">
                                            Save 32%
                                        </span>
                                    </div>
                                    <div className="tag is-skewed bg-lightorange">
                                        <span className="tag-text">
                                            Promotion Deal
                                        </span>
                                    </div>
                                </div>
                                <div class="goods-price is-horizontal">
                                    <div class="goods-price-current">
                                        <span class="goods-price-symbol">
                                            $
                                        </span>
                                        <span class="goods-price-value">
                                            <strong>949</strong>
                                            <sup>.00</sup>
                                        </span>
                                    </div>
                                    <div class="goods-price-was">$1,399.00</div>
                                    <div class="goods-price-ship">
                                        <span class="goods-price-ship-eligible text-blue">
                                            Free Shipping
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="item-a"
                        className="small">
                        <div className="goods-container is-reverse is-horizontal">
                            <a
                                href="localhost"
                                className="goods-img">
                                <img
                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                    alt="gskill-trident-z5-rgb"
                                />
                            </a>
                            <div className="goods-info">
                                <div className="goods-branding">
                                    <a
                                        href="localhost"
                                        className="goods-rating">
                                        <span className="goods-rating-icons">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </span>
                                        <span className="goods-rating-nums">
                                            (8)
                                        </span>
                                    </a>
                                </div>
                                <h2 className="goods-title">
                                    <a href="localhost">
                                        Yeyian Gaming Desktop Katana X10 Intel
                                        Core i5 11th Gen 11400F (2.60GHz) 16GB
                                        DDR4 500 GB NVMe SSD NVIDIA GeForce RTX
                                        3060 Ti Windows 11 Home 64-bit
                                    </a>
                                </h2>
                                <div className="tag-list">
                                    <div className="tag is-skewed bg-darkorange">
                                        <span className="tag-text">
                                            Save 32%
                                        </span>
                                    </div>
                                    <div className="tag is-skewed bg-lightorange">
                                        <span className="tag-text">
                                            Promotion Deal
                                        </span>
                                    </div>
                                </div>
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
                                    <div class="goods-price-was">$1,399.00</div>
                                    <div class="goods-price-ship">
                                        <span class="goods-price-ship-eligible text-blue">
                                            Free Shipping
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="item-b"
                        className="small">
                        <div className="goods-container is-reverse is-horizontal">
                            <a
                                href="localhost"
                                className="goods-img">
                                <img
                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                    alt="gskill-trident-z5-rgb"
                                />
                            </a>
                            <div className="goods-info">
                                <div className="goods-branding">
                                    <a
                                        href="localhost"
                                        className="goods-rating">
                                        <span className="goods-rating-icons">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </span>
                                        <span className="goods-rating-nums">
                                            (8)
                                        </span>
                                    </a>
                                </div>
                                <h2 className="goods-title">
                                    <a href="localhost">
                                        Yeyian Gaming Desktop Katana X10 Intel
                                        Core i5 11th Gen 11400F (2.60GHz) 16GB
                                        DDR4 500 GB NVMe SSD NVIDIA GeForce RTX
                                        3060 Ti Windows 11 Home 64-bit
                                    </a>
                                </h2>
                                <div className="tag-list">
                                    <div className="tag is-skewed bg-darkorange">
                                        <span className="tag-text">
                                            Save 32%
                                        </span>
                                    </div>
                                    <div className="tag is-skewed bg-lightorange">
                                        <span className="tag-text">
                                            Promotion Deal
                                        </span>
                                    </div>
                                </div>
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
                                    <div class="goods-price-was">$1,399.00</div>
                                    <div class="goods-price-ship">
                                        <span class="goods-price-ship-eligible text-blue">
                                            Free Shipping
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="item-c"
                        className="small">
                        <div className="goods-container is-reverse is-horizontal">
                            <a
                                href="localhost"
                                className="goods-img">
                                <img
                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                    alt="gskill-trident-z5-rgb"
                                />
                            </a>
                            <div className="goods-info">
                                <div className="goods-branding">
                                    <a
                                        href="localhost"
                                        className="goods-rating">
                                        <span className="goods-rating-icons">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </span>
                                        <span className="goods-rating-nums">
                                            (8)
                                        </span>
                                    </a>
                                </div>
                                <h2 className="goods-title">
                                    <a href="localhost">
                                        Yeyian Gaming Desktop Katana X10 Intel
                                        Core i5 11th Gen 11400F (2.60GHz) 16GB
                                        DDR4 500 GB NVMe SSD NVIDIA GeForce RTX
                                        3060 Ti Windows 11 Home 64-bit
                                    </a>
                                </h2>
                                <div className="tag-list">
                                    <div className="tag is-skewed bg-darkorange">
                                        <span className="tag-text">
                                            Save 32%
                                        </span>
                                    </div>
                                    <div className="tag is-skewed bg-lightorange">
                                        <span className="tag-text">
                                            Promotion Deal
                                        </span>
                                    </div>
                                </div>
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
                                    <div class="goods-price-was">$1,399.00</div>
                                    <div class="goods-price-ship">
                                        <span class="goods-price-ship-eligible text-blue">
                                            Free Shipping
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="item-d"
                        className="small">
                        <div className="goods-container is-reverse is-horizontal">
                            <a
                                href="localhost"
                                className="goods-img">
                                <img
                                    src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                    alt="gskill-trident-z5-rgb"
                                />
                            </a>
                            <div className="goods-info">
                                <div className="goods-branding">
                                    <a
                                        href="localhost"
                                        className="goods-rating">
                                        <span className="goods-rating-icons">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </span>
                                        <span className="goods-rating-nums">
                                            (8)
                                        </span>
                                    </a>
                                </div>
                                <h2 className="goods-title">
                                    <a href="localhost">
                                        Yeyian Gaming Desktop Katana X10 Intel
                                        Core i5 11th Gen 11400F (2.60GHz) 16GB
                                        DDR4 500 GB NVMe SSD NVIDIA GeForce RTX
                                        3060 Ti Windows 11 Home 64-bit
                                    </a>
                                </h2>
                                <div className="tag-list">
                                    <div className="tag is-skewed bg-darkorange">
                                        <span className="tag-text">
                                            Save 32%
                                        </span>
                                    </div>
                                    <div className="tag is-skewed bg-lightorange">
                                        <span className="tag-text">
                                            Promotion Deal
                                        </span>
                                    </div>
                                </div>
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
                                    <div class="goods-price-was">$1,399.00</div>
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
                <div className="grid-bottom">
                    <a
                        href="viewmore"
                        className="btn">
                        See All Deals
                    </a>
                </div>
            </div>
        );
    };

    G4Cx1R = () => {
        return (
            <div className="section-grid-container g4cx1r">
                <h1 className="grid-title text-brandblue">
                    EXPLORE OUR TOP SHOPS
                </h1>
                <div className="grid-card-wrapper g3cx2r">
                    <div className="goods-container is-vertical">
                        <a
                            href="localhost"
                            className="goods-img">
                            <img
                                src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                alt="gskill-trident-z5-rgb"
                            />
                        </a>
                        <div className="goods-info">
                            <div className="goods-branding">
                                <a
                                    href="localhost"
                                    className="goods-rating">
                                    <span className="goods-rating-icons">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>
                                    <span className="goods-rating-nums">
                                        (8)
                                    </span>
                                </a>
                            </div>
                            <h2 className="goods-title">
                                <a href="localhost">
                                    Yeyian Gaming Desktop Katana X10 Intel Core
                                    i5 11th Gen 11400F (2.60GHz) 16GB DDR4 500
                                    GB NVMe SSD NVIDIA GeForce RTX 3060 Ti
                                    Windows 11 Home 64-bit
                                </a>
                            </h2>
                            <div className="tag-list">
                                <div className="tag is-skewed bg-darkorange">
                                    <span className="tag-text">Save 32%</span>
                                </div>
                                <div className="tag is-skewed bg-lightorange">
                                    <span className="tag-text">
                                        Promotion Deal
                                    </span>
                                </div>
                            </div>
                            <div class="goods-price">
                                <div class="goods-price-current">
                                    <span class="goods-price-symbol">$</span>
                                    <span class="goods-price-value">
                                        <strong>949</strong>
                                        <sup>.00</sup>
                                    </span>
                                </div>
                                <div class="goods-price-was">$1,399.00</div>
                                <div class="goods-price-ship">
                                    <span class="goods-price-ship-eligible text-blue">
                                        Free Shipping
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="goods-container is-vertical">
                        <a
                            href="localhost"
                            className="goods-img">
                            <img
                                src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                alt="gskill-trident-z5-rgb"
                            />
                        </a>
                        <div className="goods-info">
                            <div className="goods-branding">
                                <a
                                    href="localhost"
                                    className="goods-rating">
                                    <span className="goods-rating-icons">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>
                                    <span className="goods-rating-nums">
                                        (8)
                                    </span>
                                </a>
                            </div>
                            <h2 className="goods-title">
                                <a href="localhost">
                                    Yeyian Gaming Desktop Katana X10 Intel Core
                                    i5 11th Gen 11400F (2.60GHz) 16GB DDR4 500
                                    GB NVMe SSD NVIDIA GeForce RTX 3060 Ti
                                    Windows 11 Home 64-bit
                                </a>
                            </h2>
                            <div className="tag-list">
                                <div className="tag is-skewed bg-darkorange">
                                    <span className="tag-text">Save 32%</span>
                                </div>
                                <div className="tag is-skewed bg-lightorange">
                                    <span className="tag-text">
                                        Promotion Deal
                                    </span>
                                </div>
                            </div>
                            <div class="goods-price">
                                <div class="goods-price-current">
                                    <span class="goods-price-symbol">$</span>
                                    <span class="goods-price-value">
                                        <strong>949</strong>
                                        <sup>.00</sup>
                                    </span>
                                </div>
                                <div class="goods-price-was">$1,399.00</div>
                                <div class="goods-price-ship">
                                    <span class="goods-price-ship-eligible text-blue">
                                        Free Shipping
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="goods-container is-vertical">
                        <a
                            href="localhost"
                            className="goods-img">
                            <img
                                src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                alt="gskill-trident-z5-rgb"
                            />
                        </a>
                        <div className="goods-info">
                            <div className="goods-branding">
                                <a
                                    href="localhost"
                                    className="goods-rating">
                                    <span className="goods-rating-icons">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>
                                    <span className="goods-rating-nums">
                                        (8)
                                    </span>
                                </a>
                            </div>
                            <h2 className="goods-title">
                                <a href="localhost">
                                    Yeyian Gaming Desktop Katana X10 Intel Core
                                    i5 11th Gen 11400F (2.60GHz) 16GB DDR4 500
                                    GB NVMe SSD NVIDIA GeForce RTX 3060 Ti
                                    Windows 11 Home 64-bit
                                </a>
                            </h2>
                            <div className="tag-list">
                                <div className="tag is-skewed bg-darkorange">
                                    <span className="tag-text">Save 32%</span>
                                </div>
                                <div className="tag is-skewed bg-lightorange">
                                    <span className="tag-text">
                                        Promotion Deal
                                    </span>
                                </div>
                            </div>
                            <div class="goods-price">
                                <div class="goods-price-current">
                                    <span class="goods-price-symbol">$</span>
                                    <span class="goods-price-value">
                                        <strong>949</strong>
                                        <sup>.00</sup>
                                    </span>
                                </div>
                                <div class="goods-price-was">$1,399.00</div>
                                <div class="goods-price-ship">
                                    <span class="goods-price-ship-eligible text-blue">
                                        Free Shipping
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="goods-container is-vertical">
                        <a
                            href="localhost"
                            className="goods-img">
                            <img
                                src="/assets/images/products/gskill-trident-z5-rgb/gskill-trident-z5-rgb.png"
                                alt="gskill-trident-z5-rgb"
                            />
                        </a>
                        <div className="goods-info">
                            <div className="goods-branding">
                                <a
                                    href="localhost"
                                    className="goods-rating">
                                    <span className="goods-rating-icons">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>
                                    <span className="goods-rating-nums">
                                        (8)
                                    </span>
                                </a>
                            </div>
                            <h2 className="goods-title">
                                <a href="localhost">
                                    Yeyian Gaming Desktop Katana X10 Intel Core
                                    i5 11th Gen 11400F (2.60GHz) 16GB DDR4 500
                                    GB NVMe SSD NVIDIA GeForce RTX 3060 Ti
                                    Windows 11 Home 64-bit
                                </a>
                            </h2>
                            <div className="tag-list">
                                <div className="tag is-skewed bg-darkorange">
                                    <span className="tag-text">Save 32%</span>
                                </div>
                                <div className="tag is-skewed bg-lightorange">
                                    <span className="tag-text">
                                        Promotion Deal
                                    </span>
                                </div>
                            </div>
                            <div class="goods-price">
                                <div class="goods-price-current">
                                    <span class="goods-price-symbol">$</span>
                                    <span class="goods-price-value">
                                        <strong>949</strong>
                                        <sup>.00</sup>
                                    </span>
                                </div>
                                <div class="goods-price-was">$1,399.00</div>
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
        );
    };
}

export default new GridLayout();
