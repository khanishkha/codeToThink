import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
    sections= [
      {
        "title": "Trending Products",
        "description": "Everyday listed new products from our trusted seller.",
        "buttonText": "Show all products",
        "products": [
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          }
        ]
      },
      {
        "title": "Offers on Top Brands",
        "buttonText": "Show all offers",
        "description": "Everyday listed new products from our trusted seller.",
        "products": [
          {
            "name": "Shampoo",
            "image": "assets/offer.png",
            "description": "Nourishing Shampoo for healthy and shiny hair",
            "oldPrice": 14.99,
            "newPrice": 9.99,
            "discount": 33
          },
          {
            "name": "Nike Shoes",
            "image": "assets/offer.png",
            "description": "Men’s Running Shoes with Breathable Fabric",
            "oldPrice": 129.99,
            "newPrice": 99.99,
            "discount": 23
          },
          {
            "name": "Levi’s Backpack",
            "image": "assets/offer.png",
            "description": "Stylish Levi’s Backpack for everyday use",
            "oldPrice": 59.99,
            "newPrice": 49.99,
            "discount": 17
          },
          {
            "name": "Shampoo",
            "image": "assets/offer.png",
            "description": "Nourishing Shampoo for healthy and shiny hair",
            "oldPrice": 14.99,
            "newPrice": 9.99,
            "discount": 33
          },
          {
            "name": "Nike Shoes",
            "image": "assets/offer.png",
            "description": "Men’s Running Shoes with Breathable Fabric",
            "oldPrice": 129.99,
            "newPrice": 99.99,
            "discount": 23
          },
          {
            "name": "Levi’s Backpack",
            "image": "assets/offer.png",
            "description": "Stylish Levi’s Backpack for everyday use",
            "oldPrice": 59.99,
            "newPrice": 49.99,
            "discount": 17
          }
        ]
      },
      {
        "title": "Best Selling Items",
        "buttonText": "Show all best sellers",
        "description": "Everyday listed new products from our trusted seller.",
        "products": [
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          }
        ]
      },
      {
        "title": "Browsing History",
        "buttonText": "Show all history",
        "description": "Everyday listed new products from our trusted seller.",
        "products": [
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          },
          {
            "name": "MacBook",
            "image": "assets/macbook.jpg",
            "rating": "5.0",
            "reviews": "reviews",
            "description": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD",
            "oldPrice": 1024.99,
            "newPrice": 999.99,
            "discount": 10,
            "freeShipping": true,
            "shopSeller": true
          }
        ]
      }
    ]
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
