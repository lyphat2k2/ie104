import React, { useState, useEffect, useRef } from 'react';
import gallery from '../../data/gallery';
import './slideshow.scss';
import { MdPauseCircleOutline } from 'react-icons/md';

function Slideshow() {
    const [pos, setPos] = useState(0);
    const [loopSlideshow, setLoopSlideshow] = useState(true);

    let intervalId = useRef(null);

    useEffect(() => {
        if (loopSlideshow) {
            intervalId.current = setInterval(() => {
                nextGallery();
            }, 3000);
        } else {
            clearInterval(intervalId.current);
        }
    }, [loopSlideshow]);

    const previousGallery = () => {
        setPos((prev) => {
            if (prev === 0) {
                return gallery.length - 1;
            }
            return prev - 1;
        });
    };

    const nextGallery = () => {
        setPos((prev) => {
            if (prev === gallery.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    };

    const dotElems = document.querySelectorAll('.dot');
    dotElems.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            setPos(index);
        });
    });

    return (
        <section className="slideshow-module">
            <div className="module-content">
                <div
                    className="gallery"
                    data-pos={pos}>
                    <div className="gallery__container">
                        {gallery.map((image, galleryIndex) => {
                            return (
                                <div
                                    className="gallery__container--item"
                                    key={galleryIndex}>
                                    <img
                                        src={image}
                                        alt="gallery"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="gallery__paddlenav">
                        <button
                            aria-label="Previous"
                            className="paddlenav-arrow paddlenav-arrow-previous"
                            onClick={previousGallery}
                        />
                        <button
                            aria-label="Next"
                            className="paddlenav-arrow paddlenav-arrow-next"
                            onClick={nextGallery}
                        />
                    </div>

                    <div className="gallery__dots">
                        <span className="indicator"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <div
                        className="gallery__controls"
                        onClick={() => {
                            setLoopSlideshow(!loopSlideshow);
                        }}>
                        <MdPauseCircleOutline className="icons" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slideshow;
