const productsData = {
    categories: [
        // pc
        {
            type: 'pc',
            subCategory: [
                {
                    type: 'laptops',
                    products: [
                        {
                            id: 'precision-5570-workstation',
                            model: 'P5570W',
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
                            specs: {
                                processor: [
                                    `12ᵗʰ Gen Intel® Core™ i7-12700H, vPro® Essentials (24MB, 14 core 20 thread, 2.30-4.70GHz Turbo, 45W)`,
                                ],
                                os: [
                                    `Windows 11 Home, English`,
                                    `Windows 11 Pro, English`,
                                ],
                                graphics: [
                                    `NVIDIA® RTX™ A1000, 4 GB GDDR6`,
                                ],
                                memory: [
                                    `32 GB, 2 x 16 GB, DDR5, 4800 MHz`,
                                ],
                                storage: [
                                    `512 GB, M.2 2280, Gen 4 PCIe x4 NVMe, SSD`,
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
                                camera: [
                                    `720p at 30 fps, HD camera`,
                                    `Dual-array microphones`,
                                ],
                                audio: [
                                    `Stereo woofer 2.5 W x 2 and stereo tweeter 1.5 W x 2 = 8 W total peak`,
                                ],
                                wireless: {
                                    wifi: [
                                        'Intel® Killer™ Wi-Fi 6 1675 (AX211) 2x2',
                                    ],
                                    bluetooth: ['Bluetooth 5.2 Wireless Card'],
                                },
                                battery: [`6 Cell, 86 Wh, Lithium Ion, ExpressCharge™ Capable`],
                            },
                        },
                        {
                            id: 'xps-15',
                            model: 'XPS15',
                            name: 'XPS 15',
                            price: 2444.0,
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
                            specs: {
                                processor: [
                                    `12th Gen Intel® Core™ i5-12500H (18MB cache, 12 cores, 16 threads, up to 4.50 GHz Turbo)`,
                                    `12th Gen Intel® Core™ i7-12700H (24MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)`,
                                    `12th Gen Intel® Core™ i9-12900HK (24MB cache, 14 cores, 20 threads, up to 5.00 GHz Turbo)`,
                                ],
                                os: [
                                    `Windows 11 Home, English`,
                                    `Windows 11 Pro, English`,
                                ],
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
                                camera: [
                                    `720p at 30 fps, HD camera`,
                                    `Dual-array microphones`,
                                ],
                                audio: [
                                    `Stereo woofer 2.5 W x 2 and stereo tweeter 1.5 W x 2 = 8 W total peak`,
                                ],
                                wireless: {
                                    wifi: [
                                        'Intel® Killer™ Wi-Fi 6 1675 (AX211) 2x2',
                                    ],
                                    bluetooth: ['Bluetooth 5.2 Wireless Card'],
                                },
                                battery: [`6 Cell, 86 Wh, integrated`],
                            },
                        },
                        {
                            id: 'macbook-air',
                            name: 'Macbook Air',
                            price: 1199.0,
                            image: 'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers',
                        },
                        {
                            id: 'macbook-pro',
                            name: 'Macbook Pro',
                            price: 1499.0,
                            image: 'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers',
                        },
                        {
                            id: 'surface-laptop-5',
                            name: 'Surface Laptop 5',
                            price: 899.99,
                            image: 'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers',
                        },
                    ],
                },
                {
                    type: 'desktops',
                    products: [
                        {
                            id: 'precision-5570-workstation',
                            name: 'Precision 5570 Workstation',
                            price: 2913.29,
                            image: 'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers',
                        },
                    ],
                },
                {
                    type: 'accessories',
                    products: [
                        {
                            id: 'precision-5570-workstation',
                            name: 'Precision 5570 Workstation ',
                            price: 2913.29,
                            image: 'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers',
                        },
                    ],
                },
            ],
        },
        // console
        {
            type: 'console',
            subCategory: [
                {
                    type: 'hardwares',
                    products: [
                        {
                            id: 'playstation-5',
                            name: 'PlayStation 5',
                            price: 439.99,
                            image: 'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers',
                        },
                    ],
                },
                {
                    type: 'games',
                    products: [
                        {
                            id: 'playstation-5',
                            name: 'PlayStation 5',
                            price: 439.99,
                            image: 'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers',
                        },
                    ],
                },
                {
                    type: 'accessories',
                    products: [
                        {
                            id: 'playstation-5',
                            name: 'PlayStation 5',
                            price: 439.99,
                            image: 'https://www.dell.com/support/home/en-us/product-support/product/precision-15-5570-laptop/drivers',
                        },
                    ],
                },
            ],
        },
    ],
};
