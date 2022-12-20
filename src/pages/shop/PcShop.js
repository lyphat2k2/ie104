import React from 'react';
import Navbar from '../../components/Navbar';
import Ribbon from '../../components/Ribbon';
import CategoryHero from '../../components/CategoryHero';
import ProductAds from '../../components/ProductAds';
import BreadCrumb from '../../components/BreadCrumb';
import Filters from '../../components/Filters';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

function PcPage() {
    const { pathname } = window.location;
    const title = 'Computing';
    const ads = {
        banner: '/assets/images/ads/pc-ads.png',
        title: 'Desktop Computers & All-in-One PCs',
        subtitle:
            'Shop desktop computers and all-in-one PCs from Dell. See top desktop computer deals today.',
        cta: 'Shop Now',
        link: 'https://www.samsung.com/us/mobile/mobile-accessories/galaxy-buds2-pro/SM-R190NZKAXAR/',
    };

    const styles = {
        color: '#333',
        colorTitle: '#333',
        colorSubtitle: '#6f6f6f',
        colorButton: '#fff',
        backgroundButton: '#2c3033',
        backgroundColor: 'linear-gradient(to right, #e2e1e6, #fdfdfd, #e2e1e6)',
    };

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
            uri: 'msi-sword-gaming',
            name: 'MSI Sword Gaming 17',
            model: 'Sword Gaming',
            image: 'msi-sword-gaming-17/msi-sword-gaming-17-img-1.png',
            origprice: 1199,
            price: 999,
            specs: {
                Processor: '12ᵗʰ Gen Intel® Core™ i7-12700H',
                OS: 'Windows 11 Home',
                Graphics: 'NVIDIA® GeForce RTX™ 3070Ti',
                Memory: '16 GB DDR5',
                Storage: '2 TB, M.2, PCIe NVMe, SSD',
                Display: '17.3-in 4K / Ultra HD',
            },
        },
        {
            id: 3,
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
            id: 4,
            uri: 'gigabyte-aero-16',
            name: 'Gigabyte Aero 16 XE5',
            model: 'Aero 16',
            image: 'gigabyte-aero-16/gigabyte-aero-16.png',
            price: 1299,
            specs: {
                Processor: '12ᵗʰ Gen Intel® Core™ i7-12700H',
                OS: 'Windows 11 Home',
                Graphics: 'NVIDIA® GeForce RTX™ 3070Ti',
                Memory: '16 GB DDR5',
                Storage: '2 TB, M.2, PCIe NVMe, SSD',
                Display: '17.3-in 4K / Ultra HD',
            },
        },
        {
            id: 5,
            uri: 'asus-vivobook-s-15',
            name: 'Asus Vivobook S 15',
            model: 'Vivobook S',
            image: 'asus-vivobook-s-15/asus-vivobook-s-15-img-1.png',
            price: 749.99,
            specs: {
                Processor: 'AMD Ryzen 7 5000 Series',
                OS: 'Windows 11 Home',
                Graphics: 'AMD Radeon™ Graphics',
                Memory: '16 GB DDR4',
                Storage: '1 TB PCIe SSD',
                Display: '15.6" FHD Display',
            },
        },
        {
            id: 6,
            uri: 'xps-17-9720',
            name: 'XPS 17 9720',
            model: 'XPS 15',
            image: 'xps-17-9720/xps-17-9720-img-1.png',
            origprice: 3699,
            price: 3099,
            specs: {
                Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
                OS: 'Windows 11 Home',
                Graphics: 'NVIDIA® GeForce RTX™ 3060',
                Memory: '64 GB, DDR5',
                Storage: '2 TB, M.2, PCIe NVMe, SSD',
                Display: '17.0-in. display Ultra HD (3840X2400)',
            },
        },
    ];

    return (
        <>
            <Navbar />
            <Ribbon />
            <CategoryHero title={title} />
            {products.length === 0 ? (
                <div style={{ margin: '8.4rem', textAlign: 'center' }}>
                    Nothing products to show.
                </div>
            ) : (
                <>
                    <ProductAds.Square
                        ads={ads}
                        styles={styles}
                    />
                    <BreadCrumb pathname={pathname} />
                    <div className="product-page-content">
                        <Filters />
                        <ProductList
                            type="list"
                            products={products}
                        />
                    </div>
                </>
            )}
            <Footer />
        </>
    );
}

export default PcPage;
