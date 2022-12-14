import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './productnav.scss';

function ProductNav() {
    const { idproduct, menuchoice } = useParams();

    const menu = [
        {
            link: 'overview',
            name: 'Overview',
        },
        {
            link: 'specs',
            name: 'Tech Specs',
        },
        {
            link: 'reviews',
            name: 'Reviews',
        },
        {
            link: 'support',
            name: 'Support',
        },
    ];

    const [dynamicIsland, setDynamicIsland] = useState(false);
    const changeStatusNavbar = () => {
        if (window.scrollY >= 50) {
            setDynamicIsland(true);
        } else {
            setDynamicIsland(false);
        }
    };
    window.addEventListener('scroll', changeStatusNavbar);

    return (
        <div
            className={
                dynamicIsland
                    ? 'productnav dynamic-island sticky-mode'
                    : 'productnav sticky-mode'
            }>
            <div className="productnav__container">
                <div className='productnav__wrap'>
                    <div className="productnav__leftside">
                        <h2 className="productnav-name">
                            Precision 5570 Workstation
                        </h2>
                        <div className="productnav-menu">
                            {menu.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={`/shop/products/${idproduct}/${item.link}`}
                                        className={
                                            item.link === menuchoice
                                                ? 'productnav-menu-link active'
                                                : 'productnav-menu-link'
                                        }>
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="productnav__rightside">
                        {menuchoice === 'customize' ? (
                            <>
                                <div className="productnav-price">
                                    <span className="productnav-price__label">
                                        Starting at
                                    </span>
                                    <span className="productnav-price__value">
                                        $1,299.00
                                    </span>
                                </div>
                                <div className="productnav-actions">
                                    <Link
                                        to="/shop/cart"
                                        className="productnav-actions__add-to-cart">
                                        Add to Cart
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="productnav-actions">
                                <Link
                                    to={`/shop/products/${idproduct}/customize`}
                                    className="productnav-actions__customization">
                                    Customize
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductNav;
