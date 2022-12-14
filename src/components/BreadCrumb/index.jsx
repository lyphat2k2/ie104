import React from 'react';
import { RiHome4Line } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import './breadcrumb.scss';

function BreadCrumb({ pathname }) {
    const path = pathname.split('/').filter((item) => item !== '');

    return (
        <nav
            className="breadcrumb-container"
            aria-label="breadcrumb">
            <ol className="breadcrumb-wrap">
                <RiHome4Line className="icon-home" />
                <li className="breadcrumb-item">
                    <a href="http://localhost:3000/">USA</a>
                </li>
                {path.map((item, index) => {
                    const link = path.slice(0, index + 1).join('/');
                    if (index === path.length - 1) {
                        return (
                            <li key={index} className="breadcrumb-item current-page">
                                <IoIosArrowForward className="category-hero-breadcrumb-separator" />
                                <span>{item}</span>
                            </li>
                        )
                    }
                    return (
                        <li key={index} className="breadcrumb-item">
                            <IoIosArrowForward className="category-hero-breadcrumb-separator" />
                            <a href={`/${link}`}>{item}</a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    );
}

export default BreadCrumb;
