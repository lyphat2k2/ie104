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
        {
            id: 4,
            uri: '',
            name: 'Yeyian Gaming Desktop Katana X10 Intel Core i5 11th Gen 11400F (2.60GHz) 16GB DDR4 500 GB NVMe SSD NVIDIA GeForce RTX 3060 Ti Windows 11 Home 64-bit',
            violator: '',
            model: '',
            image: 'gskill-trident-z5-rgb/gskill-trident-z5-rgb.png',
            origprice: 1399,
            price: 949,
            specs: {

            }
        },
        {
            id: 5,
            uri: '',
            name: 'Yeyian Gaming Desktop Katana X10 Intel Core i5 11th Gen 11400F (2.60GHz) 16GB DDR4 500 GB NVMe SSD NVIDIA GeForce RTX 3060 Ti Windows 11 Home 64-bit',
            violator: '',
            model: '',
            image: 'gskill-trident-z5-rgb/gskill-trident-z5-rgb.png',
            origprice: 1399,
            price: 949,
            specs: {

            }
        },
        {
            id: 6,
            uri: '',
            name: 'Yeyian Gaming Desktop Katana X10 Intel Core i5 11th Gen 11400F (2.60GHz) 16GB DDR4 500 GB NVMe SSD NVIDIA GeForce RTX 3060 Ti Windows 11 Home 64-bit',
            violator: '',
            model: '',
            image: 'gskill-trident-z5-rgb/gskill-trident-z5-rgb.png',
            origprice: 1399,
            price: 949,
            specs: {

            }
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

    const cards = [
        {
            link: 'https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true',
            percent: 58,
            title: 'PCs & Laptops',
            img: '1_1117.png',
            background: 'Card_1.png',
        },
        {
            link: 'https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true',
            percent: 70,
            title: 'Components',
            img: '1_1118.png',
            background: 'Card_2.png'
        },
        {
            link: 'https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true',
            percent: 60,
            title: 'Storage & Memory',
            img: '1_1119.png',
            background: 'Card_3.png'
        },
        {
            link: 'https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true',
            percent: 81,
            title: 'Gaming',
            img: '1_1123.png',
            background: 'Card_4.png'
        },
        {
            link: 'https://www.newegg.com/PCs-Laptops/EventSaleStore/ID-1117?cm_sp=HP-holiday_section_top-_-1117&quicklink=true',
            percent: 78,
            title: 'Electronics',
            img: '1_1121.png',
            background: 'Card_1.png'
        },
    ]

    const cates =[
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'Homepage_CategoryCircle_Software.png',
            name: 'Software'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'CategoryCircles__0001_Sporting-Goods.png',
            name: 'Sporting Goods'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'CategoryCircles__0002_Drones.png',
            name: 'Drones'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'Homepage_CategoryCircle_Auto.png',
            name: 'Automotive'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'CategoryCircles__0004_TVs.png',
            name: 'TVs'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'CategoryCircles__0005_Home-Audio.png',
            name: 'Home Audio'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'CategoryCircles__0006_Cell-Phones.png',
            name: 'Cell Phones'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'CategoryCircles__0007_VR-Headsets.png',
            name: 'VR Headsets'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'CategoryCircles__0008_Office-Furniture.png',
            name: 'Office Furniture'
        },
        {
            link: '//www.newegg.com/Software-Services/Store/ID-6?cm_sp=Homepage-Circle-_-nepro%2f22-0820-_-%2f%2fpromotions.newegg.com%2fnepro%2f22-0820%2fHomepage_CategoryCircle_Software.png&icid=656132',
            img: 'CategoryCircles__0009_PCsMonitors.png',
            name: 'PCs & Monitors'
        },
    ]

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
            <PageSection.ChristmasBox cards={cards}/>
            <GridLayout.G4Cx1R />
            <PageSection.Promotions />
            <GridLayout.G4Cx1R />
            <GridLayout.G4Cx1R />
            <PageSection.HomepageCategories cates={cates} />
            <PageSection.HomepageAd products={products}/>
            <Footer />
        </>
    );
}

export default Store;
