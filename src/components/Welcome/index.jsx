import React from 'react';

import './welcome.scss';

function Welcome() {
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
                        <div className="welcome-card-goods">
                            <img
                                className="goods-img"
                                src="/assets/images/products/razer-controller-quick-charging-stand-20th-anniversary.png"
                                alt=""
                            />
                            <div className="goods-details">
                                <img
                                    className="goods-img"
                                    src="/assets/images/products/razer-controller-quick-charging-stand-20th-anniversary.png"
                                    alt=""
                                />
                                <div className="goods-info">
                                    <p className="goods-name">
                                        Razer Controller Quick Charging Stand
                                        20th Anniversary
                                    </p>
                                    <p className="goods-price">$199.99</p>
                                </div>
                            </div>
                        </div>
                        <div className="welcome-card-goods">
                            <img
                                className="goods-img"
                                src="/assets/images/products/razer-controller-quick-charging-stand-20th-anniversary.png"
                                alt=""
                            />
                            <div className="goods-details">
                                <img
                                    className="goods-img"
                                    src="/assets/images/products/razer-controller-quick-charging-stand-20th-anniversary.png"
                                    alt=""
                                />
                                <div className="goods-info">
                                    <p className="goods-name">
                                        Razer Controller Quick Charging Stand
                                        20th Anniversary
                                    </p>
                                    <p className="goods-price">$199.99</p>
                                </div>
                            </div>
                        </div>
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
