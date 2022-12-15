import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import './collection.scss';

class Collection {
    BigBanner = ({ ads, styles }) => {
        const { banner, head, subhead, cta, mainlink } = ads;
        const { colorHead, colorSubhead, colorButton } = styles;

        return (
            <>
                <div className="module-content">
                    <div className="unit-wrapper">
                        <a
                            className="unit-link"
                            href={mainlink}>
                            &nbsp;
                        </a>
                        <div className="unit-image">
                            <img
                                src={banner}
                                alt=""
                            />
                        </div>
                        <div className="unit-copy">
                            <h1
                                className="head"
                                style={{ color: colorHead }}>
                                {head}
                            </h1>
                            <h3
                                className="subHead"
                                style={{ color: colorSubhead }}>
                                {subhead}
                            </h3>
                            <div className="cta-wrapper">
                                {cta.map(({ text, type, link }, index) => (
                                    <div
                                        key={index}
                                        className="cta"
                                        data-type={type}>
                                        {type === 'default' ? (
                                            <a
                                                href={`link`}
                                                style={{
                                                    color: colorButton,
                                                }}>
                                                {text}
                                            </a>
                                        ) : (
                                            <button
                                                style={{ color: colorButton }}
                                                onClick={() => {
                                                    window.location.href = link;
                                                }}>
                                                {text}
                                            </button>
                                        )}
                                        {type === 'default' && (
                                            <IoIosArrowForward className="icon-arrow-right" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    SmallBanner = ({ ads, styles }) => {
        const { banner, head, subhead, cta, mainlink } = ads;
        const { colorHead, colorSubhead, colorButton } = styles;

        return (
            <div data-unit-id="ipad">
                <div className="module-content">
                    <div className="unit-wrapper">
                        <a
                            className="unit-link"
                            href={mainlink}>
                            &nbsp;
                        </a>
                        <div className="unit-image">
                            <img
                                src={banner}
                                alt=""
                            />
                        </div>
                        <div className="unit-copy">
                            <h1
                                className="head"
                                style={{ color: colorHead }}>
                                {head}
                            </h1>
                            <h3
                                className="subHead"
                                style={{ color: colorSubhead }}>
                                {subhead}
                            </h3>
                            <div className="cta-wrapper">
                                {cta.map(({ text, type, link }, index) => (
                                    <div
                                        key={index}
                                        className="cta"
                                        data-type={type}>
                                        {type === 'default' ? (
                                            <a
                                                href={`link`}
                                                style={{
                                                    color: colorButton,
                                                }}>
                                                {text}
                                            </a>
                                        ) : (
                                            <button
                                                style={{ color: colorButton }}
                                                onClick={() => {
                                                    window.location.href = link;
                                                }}>
                                                {text}
                                            </button>
                                        )}
                                        {type === 'default' && (
                                            <IoIosArrowForward className="icon-arrow-right" style={{color: colorButton}}/>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default new Collection();
