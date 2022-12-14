import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

function FiltersAccordion({ nameAccordion, bodyAccordion }) {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <div
                className="filters__accordion__item"
                key={nameAccordion}>
                <div
                    className={
                        !collapsed
                            ? 'filters__accordion__item__trigger collapsed'
                            : 'filters__accordion__item__trigger'
                    }
                    onClick={handleCollapse}>
                    <button
                        className="filters__accordion__item__name"
                        aria-expanded="true">
                        {nameAccordion}
                    </button>
                    <IoMdArrowDropdown className="filters__accordion__item__caret" />
                </div>
                {!collapsed && (
                    <div className="filters__accordion__body">
                        {bodyAccordion.map((value, index) => (
                            <div
                                className="filters__accordion__row-item"
                                key={index}>
                                <span className="box">
                                    <input
                                        type="checkbox"
                                        id={value}
                                        name={value}
                                        value={value}
                                    />
                                    <label htmlFor={value}>
                                        {value} <span>(30)</span>
                                    </label>
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default FiltersAccordion;
