import React from 'react';
import Navbar from '../components/Navbar';
import Ribbon from '../components/Ribbon';
import Promo from '../components/Promo';
import Welcome from '../components/Welcome';
import GridLayout from '../components/GridLayout';
import PageSection from '../components/PageSection';
import Footer from '../components/Footer';

function Store() {
    const products = [
        {
            id: 1,
            uri: 'precision-5570-workstation',
            name: 'Precision 5570 Workstation',
            violator: 'new',
            model: 'Precision 5570',
            image: 'workstation-precision-15-5570/workstation-precision-15-5570-img-1.png',
            origprice: 4661.99,
            price: 2889,
            specs: {
                Processor: '12ᵗʰ Gen Intel® Core™ i7-12700H',
                OS: 'Windows 11 Pro (We recommends Windows 11 Pro for business)',
                Graphics: 'NVIDIA® RTX™ A1000',
                Memory: '32 GB, DDR5',
                Storage: '512 GB, M.2, PCIe NVMe, SSD',
                Display: '15.6-in. display Full HD (1920X1200)',
            },
        },
        {
            id: 2,
            uri: 'xps-15-9520',
            name: 'XPS 15 9520',
            violator: 'new',
            model: 'XPS 15',
            image: 'xps-15-9520/xps-15-9520-img-1.png',
            origprice: 3099,
            price: 2599,
            specs: {
                Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
                OS: 'Windows 11 Home',
                Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
                Memory: '64 GB, DDR5',
                Storage: '2 TB, M.2, PCIe NVMe, SSD',
                Display: '15.6-in. display Full HD (1920X1200)',
            },
        },
        {
            id: 3,
            uri: 'xps-17-9720',
            name: 'XPS 17 9720',
            violator: 'new',
            model: 'XPS 15',
            image: 'xps-15-9520/xps-15-9520-img-1.png',
            origprice: 3099,
            price: 2599,
            specs: {
                Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
                OS: 'Windows 11 Home',
                Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
                Memory: '64 GB, DDR5',
                Storage: '2 TB, M.2, PCIe NVMe, SSD',
                Display: '15.6-in. display Full HD (1920X1200)',
            },
        },
    ];

    const ads = [
        {
            banner: '/assets/images/promos/playstation-christmas-guide-2022.png',
            title: 'The PlayStation® Holiday Gift Guide',
            subtitle:
                'Discover the best gift ideas for gamers on PS4 & PS5, from incredible games and accessories.',
            cta: 'Shop Now',
            link: 'https://www.samsung.com/us/mobile/mobile-accessories/galaxy-buds2-pro/SM-R190NZKAXAR/',
            pos: 'top-center',
        },
        {
            banner: '/assets/images/promos/playstation-christmas-guide-2022.png',
            title: 'The PlayStation® Holiday Gift Guide',
            subtitle:
                '2',
            cta: 'Shop Now',
            link: 'https://www.samsung.com/us/mobile/mobile-accessories/galaxy-buds2-pro/SM-R190NZKAXAR/',
            pos: 'top-center',
        },
        {
            banner: '/assets/images/promos/playstation-christmas-guide-2022.png',
            title: 'The PlayStation® Holiday Gift Guide',
            subtitle:
                '3',
            cta: 'Shop Now',
            link: 'https://www.samsung.com/us/mobile/mobile-accessories/galaxy-buds2-pro/SM-R190NZKAXAR/',
            pos: 'top-center',
        },
        {
            banner: '/assets/images/promos/playstation-christmas-guide-2022.png',
            title: 'The PlayStation® Holiday Gift Guide',
            subtitle:
                '4',
            cta: 'Shop Now',
            link: 'https://www.samsung.com/us/mobile/mobile-accessories/galaxy-buds2-pro/SM-R190NZKAXAR/',
            pos: 'top-center',
        },
    ]

    const styles = [
        {
            color: '#cc4100',
            colorTitle: '#fff',
            colorSubtitle: '#fff',
            colorButton: '#fff',
            backgroundButton: '#cc4100',
        },
        {
            color: '#cc4100',
            colorTitle: '#fff',
            colorSubtitle: '#fff',
            colorButton: '#fff',
            backgroundButton: '#cc4100',
        },
        {
            color: '#cc4100',
            colorTitle: '#fff',
            colorSubtitle: '#fff',
            colorButton: '#fff',
            backgroundButton: '#cc4100',
        },
        {
            color: '#cc4100',
            colorTitle: '#fff',
            colorSubtitle: '#fff',
            colorButton: '#fff',
            backgroundButton: '#cc4100',
        },
    ];

    return (
        <>
            <Navbar status="fixed" />
            <Ribbon />
            <Promo
                ads={ads}
                styles={styles}
            />    
            <Welcome />
            <GridLayout.G3Cx2R />
            <PageSection.ChristmasBox />
            <GridLayout.G4Cx1R />
            <PageSection.Promotions />
            <GridLayout.G4Cx1R />
            <GridLayout.G4Cx1R />
            <PageSection.HomepageCategories />
            <PageSection.HomepageAd />
            <Footer />
        </>
    );
}

export default Store;
