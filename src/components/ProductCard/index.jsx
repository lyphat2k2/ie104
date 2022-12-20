import React from 'react';

import { IoMdStar, IoMdStarOutline } from 'react-icons/io';
import { HiArrowNarrowRight } from 'react-icons/hi';

import './productcard.scss';

class ProductCard {
    Grid = ({ product }) => {
        return (
            <div
                className="product-card-grid"
                key={product.id}>
                <div className="card">
                    <div className="card-image-wrap">
                        <a href={`/shop/products/${product.uri}`}>
                            <img
                                className="card-image"
                                src={`/assets/images/products/${product.image}`}
                                alt={product.name}
                            />
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="card-content">
                            <a href={`/shop/products/${product.uri}/overview`}>
                                <h3 className="card-content-title">
                                    {product.name}
                                </h3>
                            </a>
                        </div>
                        <a href={`/shop/products/${product.uri}/reviews`}>
                            <div className="card-rating">
                                <span className="card-rating-icon">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStarOutline />
                                </span>
                                <span className="card-rating-text">
                                    4.3 (1872)
                                </span>
                            </div>
                        </a>
                        <div className="card-price-with-total-savings">
                            {product.origprice && (
                                <div className="card-orig">
                                    <button data-message="Estimated Value is Dell’s estimate of product value based on industry data, including the prices at which third-party retailers have offered or valued the same or comparable products, in its most recent survey of major online and/or off-line retailers. Third-party retailer data may not be based on actual sales.">
                                        Estimated Value
                                    </button>
                                    <span className="strike-through">
                                        ${product.origprice}
                                    </span>
                                </div>
                            )}
                            <div className="card-price">
                                <span>${product.price}</span>
                            </div>
                            {product.origprice && (
                                <div className="card-total-savings">
                                    You Save
                                    <span> ${product.saving}</span>
                                    <span> {`(${product.percents}%)`}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    List = ({ product }) => {
        return (
            <div
                className="product-card-list"
                key={product.id}>
                <div className="card">
                    <section className="card-image-wrap">
                        <a href={`/shop/products/${product.uri}/overview`}>
                            <img
                                className="card-image"
                                src={`/assets/images/products/${product.image}`}
                                alt={product.name}
                            />
                        </a>
                    </section>
                    <section className="card-content">
                        <a href={`/shop/products/${product.uri}/overview`}>
                            <h3 className="card-title">{product.name}</h3>
                        </a>
                        <p className="card-model">
                            <strong>Model:</strong> {product.model}
                        </p>
                        <a href={`/shop/products/${product.uri}/reviews`}>
                            <div className="card-rating">
                                <span className="card-rating-icon">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStarOutline />
                                </span>
                                <span className="card-rating-text">
                                    4.3 (1872)
                                </span>
                            </div>
                        </a>
                        <div className="card-iconography-container">
                            <div className="card-iconography-header">
                                <h4 className="card-iconography-header-title">
                                    Specs
                                </h4>
                                <a
                                    className="card-iconography-header-customize-title"
                                    href={`/shop/products/${product.uri}/customize`}>
                                    Customize
                                    <HiArrowNarrowRight />
                                </a>
                            </div>
                            <div className="card-iconography-specs">
                                {Object.entries(product.specs).map(
                                    ([title, label], index) => {
                                        return (
                                            <div
                                                className="card-iconography-specs-wrap"
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
                        </div>
                    </section>
                    <section className="card-pricing-container">
                        {product.origprice && (
                            <div className="card-orig">
                                <button
                                    onClick={(e) => {
                                        console.log(e.target.dataset.message);
                                    }}
                                    data-message="Estimated Value is Dell’s estimate of product value based on industry data, including the prices at which third-party retailers have offered or valued the same or comparable products, in its most recent survey of major online and/or off-line retailers. Third-party retailer data may not be based on actual sales.">
                                    Estimated Value
                                </button>
                                <span className="strike-through">
                                    ${product.origprice.toFixed(2)}
                                </span>
                            </div>
                        )}
                        <div className="card-price">
                            <span>${product.price.toFixed(2)}</span>
                        </div>
                        {product.origprice && (
                            <div className="card-total-savings">
                                You Save
                                <span>
                                    {' '}
                                    $
                                    {(
                                        product.origprice - product.price
                                    ).toFixed(2)}
                                </span>
                                <span>
                                    {' '}
                                    (
                                    {Math.round(
                                        (product.price / product.origprice) *
                                            100
                                    )}
                                    %)
                                </span>
                            </div>
                        )}

                        <button
                            className="card-button-add-to-cart"
                            onClick={() => {
                                alert('add to cart');
                            }}>
                            Add to Cart
                        </button>
                    </section>
                </div>
            </div>
        );
    };
    Showcase = ({ product }) => {
        return (
            <div
                className="product-card-showcase"
                key={product.id}>
                <div className="card">
                    <div className="card-image-wrap">
                        <a href={`/shop/products/${product.uri}`}>
                            <img
                                className="card-image"
                                src={`/assets/images/products/${product.image}`}
                                alt={product.name}
                            />
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="card-content">
                            <p className="card-content-violator">
                                {product.violator}
                            </p>
                            <a href={`/shop/products/${product.uri}/overview`}>
                                <h3 className="card-content-title">
                                    {product.name}
                                </h3>
                            </a>
                        </div>
                        <div className="card-price-with-total-savings">
                            <div className="card-price">
                                <span>${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default new ProductCard();
