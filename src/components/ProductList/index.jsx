import React from 'react';
import ProductCard from '../ProductCard';

import './productlist.scss';

function ProductList({type, products}) {

    return (
        <div className="product-frames">
            <div className="product-header">
                <div className="product-count">{products.length} Products</div>
                <div className="product-sort">
                    <label
                        htmlFor="sort"
                        className="product-sort__label">
                        Sort by:
                    </label>
                    <select
                        name="sort"
                        id="sort"
                        className="product-sort__select">
                        <option value="featured">Featured</option>
                        <option value="price-low-to-high">
                            Price: Low to High
                        </option>
                        <option value="price-high-to-low">
                            Price: High to Low
                        </option>
                        <option value="best-selling">Best Selling</option>
                        <option value="top-rated">Top Rated</option>
                    </select>
                </div>
            </div>
            {
                type === 'grid' ? (
                    <div
                        className="product-container"
                        data-type-card={type}>
                        {products.map((product) => (
                            <ProductCard.Grid key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div
                        className="product-container"
                        data-type-card={type}>
                        {products.map((product) => (
                            <ProductCard.List key={product.id} product={product} />
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default ProductList;
