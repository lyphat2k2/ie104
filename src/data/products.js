const products = [
    {
        id: 1,
        idproduct: 'precision-5570-workstation',
        model: 'Dell Precision',
        name: 'Precision 5570 Workstation',
        price: 2913.29,
        violator: 'New',
        images: [
            'workstation-precision-15-5570/workstation-precision-15-5570-img-1.png',
            'workstation-precision-15-5570/workstation-precision-15-5570-img-2.png',
            'workstation-precision-15-5570/workstation-precision-15-5570-img-3.png',
            'workstation-precision-15-5570/workstation-precision-15-5570-img-4.png',
            'workstation-precision-15-5570/workstation-precision-15-5570-img-5.png',
            'workstation-precision-15-5570/workstation-precision-15-5570-img-6.jpg',
            'workstation-precision-15-5570/workstation-precision-15-5570-img-7.jpg',
            'workstation-precision-15-5570/workstation-precision-15-5570-img-8.jpg',
        ],
        shortSpecs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
        specs: {
            processor: [
                `12ᵗʰ Gen Intel® Core™ i7-12700H, vPro® Essentials (24MB, 14 core 20 thread, 2.30-4.70GHz Turbo, 45W)`,
            ],
            os: [`Windows 11 Home, English`, `Windows 11 Pro, English`],
            graphics: [`NVIDIA® RTX™ A1000, 4 GB GDDR6`],
            memory: [`32 GB, 2 x 16 GB, DDR5, 4800 MHz`],
            storage: [`512 GB, M.2 2280, Gen 4 PCIe x4 NVMe, SSD`],
            display: [
                `15.6", FHD+ 1920 x 1200, 60Hz, Non-Touch, Anti-Glare, 500 nit, InfinityEdge`,
                `15.6", 3.5K 3456 x 2160, 60Hz, OLED, Touch, Anti-Reflect, 400 nit, InfinityEdge`,
                `15.6", UHD+ 3840x2400, 60Hz, Touch, Anti-Reflect, 500 nit, InfinityEdge`,
            ],
            color: [
                `Platinum Silver exterior, Black interior`,
                `Frost exterior, Arctic White interior`,
            ],
            keyboard: [
                `Backlit Black English Keyboard w/ Fingerprint Reader`,
                `Backlit White English Keyboard w/ Fingerprint Reader`,
            ],
            ports: [
                `1 USB 3.2 Gen 2 Type-C™ (with DisplayPort and PowerDelivery)`,
                `2 Thunderbolt™ 4 (USB Type-C™) with DisplayPort and Power Delivery`,
                `1 3.5mm headphone/microphone combo jack`,
            ],
            dimensions: {
                height: '0.73 in. (18.54 mm)',
                width: '13.56 in. (344.40 mm)',
                depth: '9.06 in. (230.10 mm)',
            },
            camera: [`720p at 30 fps, HD camera`, `Dual-array microphones`],
            audio: [
                `Stereo woofer 2.5 W x 2 and stereo tweeter 1.5 W x 2 = 8 W total peak`,
            ],
            wireless: {
                wifi: ['Intel® Killer™ Wi-Fi 6 1675 (AX211) 2x2'],
                bluetooth: ['Bluetooth 5.2 Wireless Card'],
            },
            battery: [`6 Cell, 86 Wh, Lithium Ion, ExpressCharge™ Capable`],
        },
    },
    {
        id: 2,
        idproduct: 'msi-sword-gaming',
        model: 'Sword Gaming',
        name: 'MSI Sword Gaming 17',
        price: 999,
        images: [
            'msi-sword-gaming-17/msi-sword-gaming-17-img-1.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-2.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-3.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-4.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-5.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-6.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-7.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-8.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-9.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-10.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-11.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-12.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-13.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-14.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-15.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-16.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-17.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-18.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-19.png',
            'msi-sword-gaming-17/msi-sword-gaming-17-img-20.png',
        ],
        shortSpecs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
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
        idproduct: 'xps-15-9520',
        model: 'XPS 15',
        name: 'XPS 15 Laptop',
        price: 2599,
        violator: 'New',
        images: [
            'xps-15-9520/xps-15-9520-img-1.png',
            'xps-15-9520/xps-15-9520-img-2.png',
            'xps-15-9520/xps-15-9520-img-3.png',
            'xps-15-9520/xps-15-9520-img-4.png',
            'xps-15-9520/xps-15-9520-img-5.png',
            'xps-15-9520/xps-15-9520-img-6.png',
            'xps-15-9520/xps-15-9520-img-7.png',
        ],
        shortSpecs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
        specs: {
            processor: [
                `12th Gen Intel® Core™ i5-12500H (18MB cache, 12 cores, 16 threads, up to 4.50 GHz Turbo)`,
                `12th Gen Intel® Core™ i7-12700H (24MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)`,
                `12th Gen Intel® Core™ i9-12900HK (24MB cache, 14 cores, 20 threads, up to 5.00 GHz Turbo)`,
            ],
            os: [`Windows 11 Home, English`, `Windows 11 Pro, English`],
            graphics: [
                `Intel® Iris® Xe Graphics`,
                `Intel® UHD Graphics`,
                `NVIDIA® GeForce RTX™ 3050, 4 GB GDDR6, 40 W`,
                `NVIDIA® GeForce RTX™ 3050 Ti, 4 GB GDDR6, 40 W`,
            ],
            memory: [
                `8 GB, 1 x 8 GB, DDR5, 4800 MHz`,
                `16 GB, 2 x 8 GB, DDR5, 4800 MHz, dual-channel`,
                `32 GB, 2 x 16 GB, DDR5, 4800 MHz, dual-channel`,
                `64 GB, 2 x 32 GB, DDR5, 4800 MHz, dual-channel`,
            ],
            storage: [
                `512 GB, M.2, PCIe NVMe, SSD`,
                `1 TB, M.2, PCIe NVMe, SSD`,
                `2 TB, M.2, PCIe NVMe, SSD`,
                `4 TB, M.2, PCIe NVMe, SSD`,
                `8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD`,
            ],
            display: [
                `15.6", FHD+ 1920 x 1200, 60Hz, Non-Touch, Anti-Glare, 500 nit, InfinityEdge`,
                `15.6", 3.5K 3456 x 2160, 60Hz, OLED, Touch, Anti-Reflect, 400 nit, InfinityEdge`,
                `15.6", UHD+ 3840x2400, 60Hz, Touch, Anti-Reflect, 500 nit, InfinityEdge`,
            ],
            color: [
                `Platinum Silver exterior, Black interior`,
                `Frost exterior, Arctic White interior`,
            ],
            keyboard: [
                `Backlit Black English Keyboard w/ Fingerprint Reader`,
                `Backlit White English Keyboard w/ Fingerprint Reader`,
            ],
            ports: [
                `1 USB 3.2 Gen 2 Type-C™ (with DisplayPort and PowerDelivery)`,
                `2 Thunderbolt™ 4 (USB Type-C™) with DisplayPort and Power Delivery`,
                `1 3.5mm headphone/microphone combo jack`,
            ],
            dimensions: {
                height: '0.73 in. (18.54 mm)',
                width: '13.56 in. (344.40 mm)',
                depth: '9.06 in. (230.10 mm)',
            },
            camera: [`720p at 30 fps, HD camera`, `Dual-array microphones`],
            audio: [
                `Stereo woofer 2.5 W x 2 and stereo tweeter 1.5 W x 2 = 8 W total peak`,
            ],
            wireless: {
                wifi: ['Intel® Killer™ Wi-Fi 6 1675 (AX211) 2x2'],
                bluetooth: ['Bluetooth 5.2 Wireless Card'],
            },
            battery: [`6 Cell, 86 Wh, integrated`],
        },
    },
    {
        id: 4,
        idproduct: 'gigabyte-aero-16',
        model: 'Aero 16',
        name: 'Gigabyte Aero 16 XE5',
        images: 'gigabyte-aero-16/gigabyte-aero-16.png',
        price: 1299,
        shortSpecs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
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
        idproduct: 'asus-vivobook-s-15',
        model: 'Vivobook S',
        name: 'Asus Vivobook S 15',
        images: [
            'asus-vivobook-s-15/asus-vivobook-s-15-img-1.png',
            'asus-vivobook-s-15/asus-vivobook-s-15-img-2.png',
            'asus-vivobook-s-15/asus-vivobook-s-15-img-3.png',
            'asus-vivobook-s-15/asus-vivobook-s-15-img-4.png',
            'asus-vivobook-s-15/asus-vivobook-s-15-img-5.png',
            'asus-vivobook-s-15/asus-vivobook-s-15-img-6.png',
            'asus-vivobook-s-15/asus-vivobook-s-15-img-7.png',
            'asus-vivobook-s-15/asus-vivobook-s-15-img-8.png',
            'asus-vivobook-s-15/asus-vivobook-s-15-img-9.png',
        ],
        price: 749.99,
        shortSpecs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Pro (Dell Technologies recommends Windows 11 Pro for business)',
            Graphics: 'NVIDIA® GeForce RTX™ 3050 Ti',
            Memory: '16 GB, DDR5',
            Storage: '512 GB SSD',
            Display: '15.6-in. display Full HD (1920X1200)',
        },
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
        idproduct: 'xps-17-9720',
        model: 'XPS 15',
        name: 'XPS 17 Laptop',
        images: [
            'xps-17-9720/xps-17-9720-img-1.png',
            'xps-17-9720/xps-17-9720-img-2.png',
            'xps-17-9720/xps-17-9720-img-3.png',
            'xps-17-9720/xps-17-9720-img-4.png',
            'xps-17-9720/xps-17-9720-img-5.png',
            'xps-17-9720/xps-17-9720-img-6.png',
            'xps-17-9720/xps-17-9720-img-7.png',
        ],
        price: 3099,
        shortSpecs: {
            Processor: '12ᵗʰ Gen Intel® Core™ i9-12900HK',
            OS: 'Windows 11 Home',
            Graphics: 'NVIDIA® GeForce RTX™ 3060',
            Memory: '64 GB, DDR5',
            Storage: '2 TB, M.2, PCIe NVMe, SSD',
            Display: '17.0-in. display Ultra HD (3840X2400)',
        },
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

export default products;
