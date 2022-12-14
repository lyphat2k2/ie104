import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import laptops from '../../data/filters/laptops.js';

import FiltersAccordion from './FiltersAccordion';
import './filters.scss';

function Filters() {
    const filterResults = [
        'Macbook',
        'Air',
        'Dell',
        'Latitude',
        'Alienware',
        'Inspiron',
    ];
    return (
        <div className="filters__container">
            <div className="filters__box">
                <div className="filters__result__wrapper">
                    <div className="filters__box__title-block">
                        <h3>Filter Results</h3>
                        <button
                            className="clear-all"
                            onClick={() => {}}>
                            Clear All
                        </button>
                    </div>
                    {/* <div className="filters__facets__wrapper">
                        {filterResults.map((filterResult, index) => (
                            <div
                                className="filters__facet__item"
                                key={index}>
                                {filterResult}
                                <AiOutlineClose className="filters__facet__item--icon" />
                            </div>
                        ))}
                    </div> */}
                </div>
                {Object.entries(laptops).map(([nameAccordion, bodyAccordion], index) => (
                    <FiltersAccordion key={index} nameAccordion={nameAccordion} bodyAccordion={bodyAccordion} />
                ))}
            </div>
        </div>
    );
}

export default Filters;
