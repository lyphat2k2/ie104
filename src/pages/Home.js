import React from 'react';
import Navbar from '../components/Navbar';
import Collection from '../components/Collection';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';

function Home() {
    const BigBanner = [
        {
            ads: {
                banner: '/assets/images/collections/holiday-gift-visual-homepage-desktop.jpg',
                head: 'WIN IT AT THE LAST MINUTE',
                subhead: 'GEAR UP TO GAME THIS GREEN MONDAY',
                cta: [
                    {
                        text: 'Shop Now',
                        type: 'default',
                        link: ''
                    },
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: ''
                    },
                ],
                mainlink: 'https://www.razer.com/campaigns/holiday-gift-guide',
            },
            styles: {
                colorHead: '#02b334',
                colorSubhead: '#a4a6a8',
                colorButton: '#fff',
            },
        },
        {
            ads: {
                banner: '/assets/images/collections/razer-kraken-kitty-v2-pro--homepage-desktop.jpg',
                head: 'RAZER KRAKEN KITTY V2 PRO',
                subhead: 'THE MEOW FACTOR',
                cta: [
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: ''
                    },
                    {
                        text: 'Buy',
                        type: 'default',
                        link: ''
                    },
                ],
                mainlink: 'https://www.razer.com/campaigns/holiday-gift-guide',
            },
            styles: {
                colorHead: '#fff',
                colorSubhead: '#fed1f0',
                colorButton: '#f8f8f8',
            },
        },
        {
            ads: {
                banner: '/assets/images/collections/razer-blade14-mercury-2022-homepage-desktop.jpg',
                head: 'RAZER BLADE 14 MERCURY EDITION',
                subhead: 'ULTRA-FRESH. ULTRA-GAMING',
                cta: [
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: ''
                    },
                    {
                        text: 'Buy',
                        type: 'default',
                        link: ''
                    },
                ],
                mainlink: 'https://www.razer.com/campaigns/holiday-gift-guide',
            },
            styles: {
                colorHead: '#fff',
                colorSubhead: '#fff',
                colorButton: '#f8f8f8',
            },
        },
    ];

    const SmallBanner = [
        {
            ads: {
                banner: '/assets/images/collections/collection-2.png',
                head: 'iPhone 14 Pro',
                subhead: 'Pro.Beyond.',
                cta: [
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                    {
                        text: 'Buy',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                ],
                mainlink: 'https://www.apple.com/iphone-14-pro/',
            },
            styles: {
                colorHead: '#ce6cff',
                colorSubhead: '#e5e5e5',
                colorButton: '#fff',
                backgroundButton: '#0071e3',
            },
        },
        {
            ads: {
                banner: '/assets/images/collections/Xbox-Series-S-Highlight-canva.png',
                head: 'Xbox Series S',
                subhead: 'Ready for action',
                cta: [
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                    {
                        text: 'Buy',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                ],
                mainlink: 'https://www.apple.com/iphone-14-pro/',
            },
            styles: {
                colorHead: '#000',
                colorSubhead: '#6d6d6d',
                colorButton: '#000',
                backgroundButton: '#0071e3',
            },
        },
        {
            ads: {
                banner: '/assets/images/collections/alienware-franchise-desktops-lif-canva.png',
                head: 'Alienware',
                subhead: 'Massive power. Minimal noise.',
                cta: [
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                    {
                        text: 'Buy',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                ],
                mainlink: 'https://www.apple.com/iphone-14-pro/',
            },
            styles: {
                colorHead: '#00c6c8',
                colorSubhead: '#00c6c8',
                colorButton: '#00c6c8',
            },
        },
        {
            ads: {
                banner: '/assets/images/collections/promo_ipadpro__ch217v9v7no2_large.jpg',
                head: 'Macbook',
                subhead: 'Lovable. Drawable. Magical.',
                cta: [
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                    {
                        text: 'Buy',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                ],
                mainlink: 'https://www.apple.com/iphone-14-pro/',
            },
            styles: {
                colorHead: '#ff12ab',
                colorSubhead: '#d08bbf',
                colorButton: '#fff',
                backgroundButton: '#0071e3',
            },
        },
        {
            ads: {
                banner: '/assets/images/collections/nintendo-switch-promo-01.png',
                head: 'Nintendo Switch',
                subhead: 'Choose your way to play',
                cta: [
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                    {
                        text: 'Buy',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                ],
                mainlink: 'https://www.apple.com/iphone-14-pro/',
            },
            styles: {
                colorHead: '#11bbc9',
                colorSubhead: '#e5e5e5',
                colorButton: '#fff',
                backgroundButton: '#0071e3',
            },
        },
        {
            ads: {
                banner: '/assets/images/collections/console_sony_playstation.png',
                head: 'Cyber Wednesday',
                subhead: 'Relax on Weekend',
                cta: [
                    {
                        text: 'Learn More',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                    {
                        text: 'Buy',
                        type: 'default',
                        link: 'https://www.apple.com/iphone-14-pro/',
                    },
                ],
                mainlink: 'https://www.apple.com/iphone-14-pro/',
            },
            styles: {
                colorHead: '#f711e5',
                colorSubhead: '#e5e5e5',
                colorButton: '#fff',
                backgroundButton: '#0071e3',
            },
        },
    ];

    return (
        <>
            <Navbar status="fixed" />

            <section
                className="collection-module"
                data-module-template="heroes">
                {BigBanner.map((item, index) => (
                    <Collection.BigBanner
                        key={index}
                        ads={item.ads}
                        styles={item.styles}
                    />
                ))}
            </section>

            <section
                className="collection-module"
                data-module-template="promos">
                {SmallBanner.map((item, index) => (
                    <Collection.SmallBanner
                        key={index}
                        ads={item.ads}
                        styles={item.styles}
                    />
                ))}
            </section>

            <Slideshow />

            <Footer />
        </>
    );
}

export default Home;
