import React from 'react';

import './productads.scss';

class ProductAds {
    Square = ({ ads, styles }) => {
        const { banner, events, title, subtitle, cta, link } = ads;
        const {
            color,
            backgroundColor,
            colorEvent,
            backgroundEvent,
            colorTitle,
            colorSubtitle,
            colorButton,
            backgroundButton,
        } = styles;

        return (
            <div className="sqr-container">
                <div
                    className="pda-background"
                    style={{ background: backgroundColor }}>
                    <img
                        src={banner}
                        alt={title}
                    />
                </div>
                <div className="pda-info">
                    {events && (
                        <p
                            className="info-events"
                            style={{
                                color: colorEvent,
                                background: backgroundEvent,
                            }}>
                            {events}
                        </p>
                    )}
                    <div className="info-title">
                        <h1 style={{ color: colorTitle }}>{title}</h1>
                    </div>
                    <div className="info-subtitle">
                        <h3 style={{ color: colorSubtitle }}>{subtitle}</h3>
                    </div>
                    <div className="info-cta">
                        <a
                            className="cta-button"
                            href={link}
                            style={{
                                color: color,
                                border: `1px solid ${color}`,
                            }}
                            onMouseOver={(e) => {
                                e.target.style.color = colorButton;
                                e.target.style.background = backgroundButton;
                                e.target.style.borderColor = 'transparent';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = color;
                                e.target.style.borderColor = color;
                                e.target.style.background = 'transparent';
                            }}>
                            {cta}
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    Rec = ({ ads, styles }) => {
        const { banner, events, title, subtitle, cta, link } = ads;
        const {
            color,
            backgroundColor,
            colorEvent,
            backgroundEvent,
            colorTitle,
            colorSubtitle,
            colorButton,
            backgroundButton,
        } = styles;

        return (
            <div className="rec-container">
                <div
                    className="pda-background"
                    style={{ background: backgroundColor }}>
                    <img
                        src={banner}
                        alt={title}
                    />
                </div>
                <div className="pda-info">
                    {events && (
                        <p
                            className="info-events"
                            style={{
                                color: colorEvent,
                                background: backgroundEvent,
                            }}>
                            {events}
                        </p>
                    )}
                    <div className="info-title">
                        <h1 style={{ color: colorTitle }}>{title}</h1>
                    </div>
                    <div className="info-subtitle">
                        <h3 style={{ color: colorSubtitle }}>{subtitle}</h3>
                    </div>
                    <div className="info-cta">
                        <a
                            className="cta-button"
                            href={link}
                            style={{
                                color: color,
                                border: `1px solid ${color}`,
                            }}
                            onMouseOver={(e) => {
                                e.target.style.color = colorButton;
                                e.target.style.background = backgroundButton;
                                e.target.style.borderColor = 'transparent';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = color;
                                e.target.style.borderColor = color;
                                e.target.style.background = 'transparent';
                            }}>
                            {cta}
                        </a>
                    </div>
                </div>
            </div>
        );
    };
}

export default new ProductAds();
