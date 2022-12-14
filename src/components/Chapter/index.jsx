import React from 'react';
import { IoIosDesktop } from 'react-icons/io';
import { IoLaptopOutline, IoHardwareChip } from 'react-icons/io5';
import { RiSpeakerFill } from 'react-icons/ri';
import { BsHeadphones } from 'react-icons/bs';
import './chapter.scss';

function ChapterNav() {
    return (
        <nav id="ac-localnav--pc">
            <div className="ac-ln-categories">
                <div className="categories-item">
                    <IoLaptopOutline className="item-svg" />
                    <span className="item-label">Laptop</span>
                </div>
                <div className="categories-item">
                    <IoIosDesktop className="item-svg" />
                    <span className="item-label">Desktop</span>
                </div>
                <div className="categories-item">
                    <img
                        src="/assets/svg/pc-mice-icon.svg"
                        alt="mice"
                    />
                    <span className="item-label">mice</span>
                </div>
                <div className="categories-item">
                    <img
                        src="/assets/svg/pc-mousepad-icon.svg"
                        alt="mousepad"
                    />
                    <span className="item-label">mouse pads</span>
                </div>
                <div className="categories-item">
                    <img
                        src="/assets/svg/pc-keyboard-icon.svg"
                        alt="keyboard"
                    />
                    <span className="item-label">keyboards</span>
                </div>
                <div className="categories-item">
                    <img
                        src="/assets/svg/pc-monitor-icon.svg"
                        alt="monitors"
                    />
                    <span className="item-label">Monitors</span>
                </div>
                <div className="categories-item">
                    <BsHeadphones className="item-svg" />
                    <span className="item-label">Headsets</span>
                </div>
                <div className="categories-item">
                    <RiSpeakerFill className="item-svg" />
                    <span className="item-label">Speakers</span>
                </div>
                <div className="categories-item">
                    <IoHardwareChip className="item-svg" />
                    <span className="item-label">Components</span>
                </div>
                <div className="categories-item">
                    <img
                        src="/assets/svg/pc-cables-icon.svg"
                        alt="accessories"
                    />
                    <span className="item-label">Accessories</span>
                </div>
            </div>
        </nav>
    );
}

export default ChapterNav;
