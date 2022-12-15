import React from 'react';
import Navbar from '../../components/Navbar';
import Ribbon from '../../components/Ribbon';
import CategoryHero from '../../components/CategoryHero';
import ProductAds from '../../components/ProductAds';
import BreadCrumb from '../../components/BreadCrumb';
import Filters from '../../components/Filters';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

function ConsolePage() {
    const { pathname } = window.location;
    const title = "Console";
    const ads = {
        banner: "/assets/images/ads/console-ads.png",
        events: "Deal on Week",
        title: "Play has no limit.",
        subtitle: "Own your games with PlayStation 5",
        cta: "Shop Now",
        link: "https://www.samsung.com/us/mobile/mobile-accessories/galaxy-buds2-pro/SM-R190NZKAXAR/",
    };

    const styles = {
        color: '#1b1e24',
        backgroundColor: "linear-gradient(to right, #e2e1e6, #fdfdfd, #e2e1e6)",
        colorEvent: '#fff',
        backgroundEvent: '#00439c',
        colorTitle: '#333',
        colorSubtitle: '#6f6f6f',
        colorButton: '#fff',
        backgroundButton: '#1b1e24',
    }

    const products = [
        {
            id: 1,
            uri: 'precision-5570-workstation',
            name: 'Precision 5570 Workstation',
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

    return (
        <>
            <Navbar />
            <Ribbon />
            <CategoryHero title={title} />
            <ProductAds.Square ads={ads} styles={styles} />
            <BreadCrumb pathname={pathname}/>
            <div className="product-page-content">
                <Filters />
                <ProductList type="list" products={products} />
            </div>
            <Footer />
        </>
    );
}

export default ConsolePage;
