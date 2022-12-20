import React, { useState } from 'react';

import { BsBookmarkHeartFill } from 'react-icons/bs';
import { IoTrashSharp } from 'react-icons/io5';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';

import ProductCard from '../ProductCard';

import './cart.scss';

const itemsCart = [
    {
        id: 1,
        name: 'Razer Wireless Controller & Quick Charging Stand for Xbox Rzaer Limited Edition',
        image: 'razer-controller-quick-charging-stand-20th-anniversary.png',
        price: 199.99,
        description: [
            'Custom Razer Design',
            'Wireless and Universal',
            'Impulse Analog Triggers',
        ],
    },
    {
        id: 1,
        name: 'Razer Wireless Controller & Quick Charging Stand for Xbox Rzaer Limited Edition',
        image: 'razer-controller-quick-charging-stand-20th-anniversary.png',
        price: 199.99,
        description: [
            'Custom Razer Design',
            'Wireless and Universal',
            'Impulse Analog Triggers',
        ],
    },
];

const products = [
    {
        id: 2,
        name: 'Precision 5570 Workstation',
        model: 'P5570W',
        image: 'workstation-precision-15-5570/workstation-precision-15-5570-img-1.png',
        price: 199.99,
        violator: 'New',
        specs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
    },
    {
        id: 2,
        name: 'Precision 5570 Workstation',
        model: 'P5570W',
        image: 'workstation-precision-15-5570/workstation-precision-15-5570-img-1.png',
        price: 199.99,
        violator: 'New',
        specs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
    },
    {
        id: 2,
        name: 'Precision 5570 Workstation',
        model: 'P5570W',
        image: 'workstation-precision-15-5570/workstation-precision-15-5570-img-1.png',
        price: 199.99,
        violator: 'New',
        specs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
    },
    {
        id: 2,
        name: 'Precision 5570 Workstation',
        model: 'P5570W',
        image: 'workstation-precision-15-5570/workstation-precision-15-5570-img-1.png',
        price: 199.99,
        violator: 'New',
        specs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
    },
];

function Cart() {
    const [isPromoCode, setIsPromoCode] = useState(true);
    const [showPromoCodeNotice, setShowPromoCodeNotice] = useState(false);
    const [showDetailSavings, setShowDetailSavings] = useState(false);

    const handleShowPromoCodeNotice = () => {
        setShowPromoCodeNotice(true);
    };

    const handleShowDetailSavings = () => {
        setShowDetailSavings(!showDetailSavings);
    };

    return (
        <div id="cart-container">
            <div className="cart-content">
                <div className="cart-body">
                    <header className="cart-items-header">
                        <span className="cart-items-header-title">
                            Cart&nbsp;
                            <span className="cart-items-header-quantity-items">
                                (1 item)
                            </span>
                        </span>
                        <div className="cart-items-header-actions">
                            <button className="move-to-wishlist">
                                <BsBookmarkHeartFill className="cart-items-header-icons" />
                                Move to Wishlist
                            </button>
                            <button className="remove-all">
                                <IoTrashSharp className="cart-items-header-icons" />
                                Remove All
                            </button>
                        </div>
                    </header>
                    <div className="cart-items-list">
                        {itemsCart.map((item, itemIndex) => (
                            <div className="cart-item">
                                <div className="cart-item__image--box">
                                    <img
                                        className="cart-item__image"
                                        src={`/assets/images/products/${item.image}`}
                                        alt={item.image}
                                    />
                                </div>
                                <div className="cart-item__details">
                                    <div className="cart-item__details-name">
                                        {item.name}
                                    </div>
                                    <ul className="cart-item__details-description">
                                        {item.description.map(
                                            (description, descriptionIndex) => (
                                                <li
                                                    key={descriptionIndex}
                                                    className="cart-item__details-description-item">
                                                    {description}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="cart-item__details-delivery">
                                        <div className="cart-item__details-delivery-title">
                                            Delivers
                                        </div>
                                        <div className="cart-item__details-delivery-date">
                                            <p>Dec 08 - Dec 12 — US$10.00</p>
                                            <p>Dec 14 - Dec 16 — Free</p>
                                        </div>
                                    </div>
                                    <div className="cart-item__quantity">
                                        <div className="cart-item__quantity-box">
                                            <select
                                                className="cart-item__quantity-input"
                                                id={`quantity-${itemIndex}`}
                                                onMouseDown={() => {
                                                    this.size = 5;
                                                }}>
                                                <option
                                                    value="1"
                                                    selected>
                                                    1
                                                </option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                            {/* <FiChevronDown className="cart-item__quantity-icon" /> */}
                                            <label
                                                htmlFor={`quantity-${itemIndex}`}
                                                className="cart-item__quantity-label">
                                                Qty
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item__box">
                                    <div className="cart-item__box--price">
                                        ${item.price}
                                    </div>
                                    <div className="cart-item__box--actions">
                                        <button className="cart-item__box--actions-remove">
                                            Remove
                                        </button>
                                        <button className="cart-item__box--actions-save-for-later">
                                            Save for Later
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart-side">
                    <div className="cart-summary__container">
                        <div className="cart-summary__box">
                            <h1 className="cart-summary__heading">
                                Order Summary
                            </h1>
                            {/* Price Section */}
                            <div className="cart-summary__wrap">
                                <div className="row__jc-sb cart-summary__subtotal">
                                    <span className="cart-summary__subtotal-label">
                                        <strong>Subtotal</strong>
                                        &nbsp;
                                        <small>(3 items)</small>
                                    </span>
                                    <span className="cart-summary__subtotal-value">
                                        $0.00
                                    </span>
                                </div>
                                <div className="row__jc-sb cart-summary__shipping">
                                    <span className="cart-summary__shipping-label">
                                        <strong>Shipping</strong>
                                    </span>
                                    <span className="cart-summary__shipping-value">
                                        Free
                                    </span>
                                </div>
                                <div className="row__jc-sb cart-summary__taxes">
                                    <span className="cart-summary__taxes-label">
                                        <strong>Estimated Tax</strong>
                                    </span>
                                    <span className="cart-summary__taxes-value">
                                        Calculated at checkout
                                    </span>
                                </div>
                            </div>
                            {/* Promo Section */}
                            <div className="cart-summary__wrap">
                                <div className="cart-summary__promo">
                                    <p className="cart-summary__promo-label">
                                        <strong>Have a promo code?</strong>
                                    </p>
                                    <div className="row__jc-sb cart-summary__promo-form">
                                        <input
                                            type="text"
                                            id="promo-code"
                                            className="cart-summary__promo-input"
                                            placeholder="Promo Code"
                                        />
                                        <button
                                            className="cart-summary__promo-button"
                                            onClick={handleShowPromoCodeNotice}>
                                            Apply
                                        </button>
                                    </div>
                                    {/* When user click on Apply button, notice appear (display: inherit/ block)*/}
                                    {showPromoCodeNotice && (
                                        <div className="cart-summary__promo-notice">
                                            {isPromoCode ? (
                                                <div className="cart-summary__promo-success">
                                                    <div className="cart-summary__promo-code-message">
                                                        <AiOutlineCheckCircle className="cart-summary__promo-success-icon" />
                                                        Promo Code applied
                                                    </div>
                                                    <p className="cart-summary__promo-code-value">
                                                        You save $50.00
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="cart-summary__promo-error">
                                                    <VscError className="cart-summary__promo-error-icon" />
                                                    The Promo code is invalid.
                                                    Please try again.
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Total Section */}
                            <div className="cart-summary__wrap">
                                <div className="row__jc-sb cart-summary__total">
                                    <span className="cart-summary__total-label">
                                        <strong>Total</strong>
                                    </span>
                                    <div className="col__ai-fe cart-summary__total-value">
                                        <span className="cart-summary__total-value--pay-full">
                                            $655.49
                                        </span>
                                        <span className="cart-summary__total-value--pay-monthly">
                                            <strong>$23.59/mo</strong> with{' '}
                                            <a
                                                href="/"
                                                className="meeta-card-link">
                                                <strong>Meeta Card</strong>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Savings Section */}
                            <div className="cart-summary__wrap">
                                <div className="row__jc-sb cart-summary__total-savings">
                                    <span className="cart-summary__savings-label savings-detail">
                                        <strong>Total Savings </strong>
                                        {showDetailSavings ? (
                                            <FiChevronUp
                                                className="cart-summary__savings-label-icon"
                                                onClick={
                                                    handleShowDetailSavings
                                                }
                                            />
                                        ) : (
                                            <FiChevronDown
                                                className="cart-summary__savings-label-icon"
                                                onClick={
                                                    handleShowDetailSavings
                                                }
                                            />
                                        )}
                                    </span>
                                    <span className="cart-summary__savings-value">
                                        $378.86
                                    </span>
                                </div>
                                {showDetailSavings && (
                                    <>
                                        <div className="row__jc-sb cart-summary__bundle-discount">
                                            <span className="cart-summary__bundle-discount-label">
                                                <strong>
                                                    Bundle Discount(s)
                                                </strong>
                                            </span>
                                            <span className="cart-summary__bundle-discount-value">
                                                $0.00
                                            </span>
                                        </div>
                                        <div className="row__jc-sb cart-summary__sale-discount">
                                            <span className="cart-summary__sale-discount-label">
                                                <strong>
                                                    Sale Discount(s)
                                                </strong>
                                            </span>
                                            <span className="cart-summary__sale-discount-value">
                                                $0.00
                                            </span>
                                        </div>
                                        <div className="row__jc-sb cart-summary__promotional-discount">
                                            <span className="cart-summary__promotional-discount-label">
                                                <strong>
                                                    Promotional Discount(s)
                                                </strong>
                                            </span>
                                            <span className="cart-summary__promotional-discount-value">
                                                $0.00
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* Checkout Section */}
                        <div className="cart-summary__checkout">
                            <button className="cart-summary__checkout-button">
                                Continue to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recently-viewed">
                <h1 className="recently-viewed__heading">Recently Viewed</h1>
                <div className="recently-viewed__items">
                    {/* <div className="recently-viewed__item">
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
                    </div> */}
                    {products.map((product) => (
                        <ProductCard.Grid product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cart;
