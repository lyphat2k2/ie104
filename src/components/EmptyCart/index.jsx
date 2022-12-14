import React from 'react';
import { Link } from 'react-router-dom';

import './EmptyCart.scss';

function EmptyCart() {
    return (
        <div id="cart-container">
            <header className="cart-items-header">
                <span className="cart-items-header-title">
                    Cart&nbsp;
                    <span className="cart-items-header-quantity-items">
                        (0 item)
                    </span>
                </span>
            </header>
            <div className="cart__empty">
                <h1 className="cart__empty--heading">Your cart is empty</h1>
                <p className="cart__empty--message">
                    Looks like you haven't added anything to your cart yet.
                </p>
                <div className="cart__empty--actions">
                    <Link
                        to="/"
                        className="cart__empty--links">
                        Continue Shopping
                    </Link>
                </div>
            </div>
            <div className="recently-viewed">
                <h1 className="recently-viewed__heading">Recently Viewed</h1>
                <div className="recently-viewed__items">
                    <div className="recently-viewed__item">
                        <img
                            src="/assets/images/products/galaxy-s22-ultra.webp"
                            alt="Galaxy S22 Ultra"
                            className="recently-viewed__item--image"
                        />
                        <div className="recently-viewed__item--details">
                            <h1 className="recently-viewed__item--name">
                                Galaxy S22 Ultra, 256GB
                            </h1>
                            <p className="recently-viewed__item--price">
                                $1,199.99
                            </p>
                            <button className="recently-viewed__item--add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="recently-viewed__item">
                        <img
                            src="/assets/images/products/galaxy-s22-ultra.webp"
                            alt="Galaxy S22 Ultra"
                            className="recently-viewed__item--image"
                        />
                        <div className="recently-viewed__item--details">
                            <h1 className="recently-viewed__item--name">
                                Galaxy S22 Ultra
                            </h1>
                            <p className="recently-viewed__item--price">
                                $1,199.99
                            </p>
                            <button className="recently-viewed__item--add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="recently-viewed__item">
                        <img
                            src="/assets/images/products/galaxy-s22-ultra.webp"
                            alt="Galaxy S22 Ultra"
                            className="recently-viewed__item--image"
                        />
                        <div className="recently-viewed__item--details">
                            <h1 className="recently-viewed__item--name">
                                Galaxy S22 Ultra
                            </h1>
                            <p className="recently-viewed__item--price">
                                $1,199.99
                            </p>
                            <button className="recently-viewed__item--add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="recently-viewed__item">
                        <img
                            src="/assets/images/products/galaxy-s22-ultra.webp"
                            alt="Galaxy S22 Ultra"
                            className="recently-viewed__item--image"
                        />
                        <div className="recently-viewed__item--details">
                            <h1 className="recently-viewed__item--name">
                                Galaxy S22 Ultra
                            </h1>
                            <p className="recently-viewed__item--price">
                                $1,199.99
                            </p>
                            <button className="recently-viewed__item--add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="recently-viewed__item">
                        <img
                            src="/assets/images/products/galaxy-s22-ultra.webp"
                            alt="Galaxy S22 Ultra"
                            className="recently-viewed__item--image"
                        />
                        <div className="recently-viewed__item--details">
                            <h1 className="recently-viewed__item--name">
                                Galaxy S22 Ultra
                            </h1>
                            <p className="recently-viewed__item--price">
                                $1,199.99
                            </p>
                            <button className="recently-viewed__item--add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="recently-viewed__item">
                        <img
                            src="/assets/images/products/galaxy-s22-ultra.webp"
                            alt="Galaxy S22 Ultra"
                            className="recently-viewed__item--image"
                        />
                        <div className="recently-viewed__item--details">
                            <h1 className="recently-viewed__item--name">
                                Galaxy S22 Ultra
                            </h1>
                            <p className="recently-viewed__item--price">
                                $1,199.99
                            </p>
                            <button className="recently-viewed__item--add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="recently-viewed__item">
                        <img
                            src="/assets/images/products/galaxy-s22-ultra.webp"
                            alt="Galaxy S22 Ultra"
                            className="recently-viewed__item--image"
                        />
                        <div className="recently-viewed__item--details">
                            <h1 className="recently-viewed__item--name">
                                Galaxy S22 Ultra
                            </h1>
                            <p className="recently-viewed__item--price">
                                $1,199.99
                            </p>
                            <button className="recently-viewed__item--add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="recently-viewed__item">
                        <img
                            src="/assets/images/products/galaxy-s22-ultra.webp"
                            alt="Galaxy S22 Ultra"
                            className="recently-viewed__item--image"
                        />
                        <div className="recently-viewed__item--details">
                            <h1 className="recently-viewed__item--name">
                                Galaxy S22 Ultra
                            </h1>
                            <p className="recently-viewed__item--price">
                                $1,199.99
                            </p>
                            <button className="recently-viewed__item--add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmptyCart;
