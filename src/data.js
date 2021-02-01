const SHOP_DATA = [
    {
        id: 1,
        title: 'Protect Stash Case for Apple iPhone X and XS-Grey',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6288670_rd_1024x.jpg',
        brand: 'iPhone',
        rating: 2.5,
        price: 440
    },
    {
        id: 2,
        title: 'Protect Stash Case for Apple iPhone X and XS-Black-Crystal',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6045812_rd_600x.jpg',
        brand: 'iPhone',
        rating: 2.5,
        price: 440
    },
    {
        id: 3,
        title: 'Tech21 - Liberty London Pure Clear Case for Apple® iPhone® X and XS - Clear',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6285515cv1d_600x.jpg',
        brand: 'iPhone',
        rating: 2.5,
        price: 440
    },
    {
        id: 4,
        title: 'Tech21 - Evo Check Case for Apple® iPhone® X and XS - Whiterose',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6000403_rd_600x.jpg',
        brand: 'Under Urmour',
        rating: 2.5,
        price: 480
    },
    {
        id: 5,
        title: 'Speck - Presidio Clear + Glitter Case for Apple® iPhone® X and XS - Clearglitterbella pin',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6008355_rd_1024x.jpg',
        brand: 'Speck',
        rating: 2.5,
        price: 320
    },
    {
        id: 6,
        title: 'Pure Case for Apple® iPhone® X and XS - Clear',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6000600_rd_1024x.jpg?v=1554989678',
        brand: 'iPhone',
        rating: 5,
        price: 420
    },
    {
        id: 7,
        title: 'Protective Case for Apple® iPhone® XR - Charlotte Stripe Black ',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6288590_rd_600x.jpg?v=1554987673',
        brand: 'insignia',
        rating: 4,
        price: 430
    },
    {
        id: 8,
        title: 'Platinum - Wood Case for Apple® iPhone® X and XS - Walnut Woo',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/5979618_rd_1024x.jpg',
        brand: 'lifeproof',
        rating: 3.5,
        price: 440
    },
    {
        id: 9,
        title: 'Modal™ - Luxicon Case for Apple® iPhone® X and XS - Black Raven',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/5977408_rd_600x.jpg',
        brand: 'modal',
        rating: 4.5,
        price: 440
    },
    {
        id: 10,
        title: 'LifeProof - Case for Apple® iPhone® XR - Asphalt',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6283621_rd_600x.jpg',
        brand: 'liferproof',
        rating: 2.5,
        price: 440
    },
    {
        id: 11,
        title: 'Pure Case for Apple® iPhone® X and XS - Clear',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/5450153_rd_1024x.jpg',
        brand: 'insignia',
        rating: 5,
        price: 250
    },
    {
        id: 12,
        title: 'Apple - iPhone® XS Silicone Case - Pink Sandr Sweeper',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6292140cv1d_600x.jpg',
        brand: 'iPhone',
        rating: 2.5,
        price: 440
    },
    {
        id: 13,
        title: 'Speck - Presidio Clear + Glitter Case for Apple® iPhone® X and XS - Clearglitterbella pin',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6008355_rd_1024x.jpg',
        brand: 'Speck',
        rating: 2.5,
        price: 320
    },
    {
        id: 14,
        title: 'Pure Case for Apple® iPhone® X and XS - Clear',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6000600_rd_1024x.jpg?v=1554989678',
        brand: 'iPhone',
        rating: 5,
        price: 420
    },
    {
        id: 15,
        title: 'Protective Case for Apple® iPhone® XR - Charlotte Stripe Black ',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6288590_rd_600x.jpg?v=1554987673',
        brand: 'insignia',
        rating: 4,
        price: 430
    },
    {
        id: 16,
        title: 'Platinum - Wood Case for Apple® iPhone® X and XS - Walnut Woo',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/5979618_rd_1024x.jpg',
        brand: 'lifeproof',
        rating: 3.5,
        price: 440
    },
    {
        id: 17,
        title: 'Modal™ - Luxicon Case for Apple® iPhone® X and XS - Black Raven',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/5977408_rd_600x.jpg',
        brand: 'modal',
        rating: 4.5,
        price: 440
    },
    {
        id: 18,
        title: 'LifeProof - Case for Apple® iPhone® XR - Asphalt',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6283621_rd_600x.jpg',
        brand: 'liferproof',
        rating: 2.5,
        price: 440
    },
    {
        id: 19,
        title: 'Speck - Presidio Clear + Glitter Case for Apple® iPhone® X and XS - Clearglitterbella pin',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/6000403_rd_600x.jpg',
        brand: 'insignia',
        rating: 5,
        price: 250
    },
    {
        id: 20,
        title: 'Apple - iPhone® XS Silicone Case - Pink Sandr Sweeper',  
        imgUrl:'https://cdn.shopify.com/s/files/1/0067/6433/1090/products/5963802_sd_1024x.jpg',
        brand: 'iPhone',
        rating: 2.5,
        price: 440
    }
  ];
  
  export default SHOP_DATA;