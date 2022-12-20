import React from 'react';

import './welcome.scss';

function Welcome() {
    const recentlyViewed = [
        {
            uri: 'xps-17-9720',
            name: 'Dell XPS 17 Home & Business Laptop (Intel i9-12900HK 14-Core, 17.0" 60Hz Wide UXGA...',
            img: 'xps-17-9720/xps-17-9720-img-1.png',
            price: 3099,
        },
        {
            uri: 'gigabyte-aero-16',
            name: 'GIGABYTE AERO 16 XE5 - 16" 4K/UHD+ Samsung AMOLED - Intel Core i7-12700H',
            img: 'gigabyte-aero-16/gigabyte-aero-16.png',
            price: 1299,
        },
    ]
    return (
        <div className="welcome-container">
            <h1 className="welcome-msg">Welcome Back</h1>
            <div className="welcome-card-wrapper">
                <div
                    className="welcome-card"
                    data-type-card="cart">
                    <div className="welcome-card-heading">
                        <h3 className="welcome-card-title">
                            CATEGORIES YOU MAY BE INTERESTED IN
                        </h3>
                    </div>
                    <div className="welcome-card-copy">
                        <p className="price">$1123.98</p>
                        <p className="text">Cart (3 items)</p>
                    </div>
                </div>

                <div
                    className="welcome-card"
                    data-type-card="recently-viewed">
                    <div className="welcome-card-heading">
                        <h3 className="welcome-card-title">Recently Viewed</h3>
                        <button className="recently-viewed-btn">
                            View More
                        </button>
                    </div>
                    <div className="welcome-card-copy flex-mode">
                        {recentlyViewed.map(({uri, name, img, price}, index) => {
                            return (
                                <div className="welcome-card-goods">
                                <img
                                    className="goods-img"
                                    src={`/assets/images/products/${img}`}
                                    alt={name}
                                />
                                <div className="goods-details">
                                    <img
                                        className="goods-img"
                                        src={`/assets/images/products/${img}`}
                                        alt={name}
                                    />
                                    <a href={uri} className="goods-info">
                                        <p className="goods-name">
                                            {name}
                                        </p>
                                        <p className="goods-price">${price}</p>
                                    </a>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div
                    className="welcome-card"
                    data-type-card="account">
                    <div className="welcome-card-heading">
                        <h3 className="welcome-card-title">
                            SIGN IN FOR THE BEST EXPERIENCE
                        </h3>
                    </div>
                    <div className="welcome-card-copy">
                        <button className="account-btn"><span>Sign In</span></button>
                        <p className="text">
                            New to WaltGear? <span>sign up</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
