export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/top/k/i/j/s-1-sdt1019-siddhanam-original-imahf8fzu8wgvde7.jpeg?q=70',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/l/u/y/3xl-bk-blue-flower-short-kurta-swag-fashion-original-imah54yrxtbnvghe.jpeg?q=70',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Women Jeans', id: 'women_jeans' },
              { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Kurtas', id: 'kurtas' },
            ],
          },
        //   {
        //     id: 'accessories',
        //     name: 'Accessories',
        //     items: [
        //       { name: 'Watches', id: 'watch' },
        //       { name: 'Wallets', id: 'wallet' },
        //       { name: 'Bags', id: 'bag' },
        //       { name: 'Sunglasses', id: 'sunglasse' },
        //       { name: 'Hats', id: 'hat' },
        //       { name: 'Belts', id: 'belt' },
        //     ],
        //   },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/v/6/k/l-hlsh014354-highlander-original-imagmu2yznykqzt7.jpeg?q=70',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/h/d/w/l-st73-vebnor-original-imah9m98gsvt5k7z.jpeg?q=70',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: '#' },
              { name: 'Wallets', id: '#' },
              { name: 'Bags', id: '#' },
              { name: 'Sunglasses', id: '#' },
              { name: 'Hats', id: '#' },
              { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'kid',
        name: 'Kids',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/l/g/t/9-10-years-kurta-01simple-censal-original-imah2wwt8h5qghn4.jpeg?q=70',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/s/t/x/10-11-years-vesh-vishesta-original-imah9d8dtuzwufee.jpeg?q=70',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Kids Kurtas', id: 'kid_kurta' },
              { name: 'Shirt', id: 'kid_shirt' },
              { name: 'Kids Jeans', id: 'kid_jeans' },
              { name: 'Sweaters', id: 'kid_sweater' },
              { name: 'T-Shirts', id: 'kid_tshirt' },
              { name: 'Jackets', id: 'kid_jacket' },
              { name: 'Activewear', id: '#' },
              
            ],
          },
          // {
          //   id: 'accessories',
          //   name: 'Accessories',
          //   items: [
          //     { name: 'Watches', id: '#' },
          //     { name: 'Wallets', id: '#' },
          //     { name: 'Bags', id: '#' },
          //     { name: 'Sunglasses', id: '#' },
          //     { name: 'Hats', id: '#' },
          //     { name: 'Belts', id: '#' },
          //   ],
          // },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }