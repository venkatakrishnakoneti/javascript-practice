const json = {
  "website": "Amazon",
  "url": "https://www.amazon.com",
  "products": [
    {
      "id": "123456",
      "name": "Product A",
      "price": 49.99,
      "description": "This is a high-quality product A.",
      "category": "Electronics",
      "availability": true,
      "image": "https://example.com/images/product_a.jpg",
      "ratings": {
        "average": 4.5,
        "total": 1000
      },
      "reviews": [
        {
          "username": "User1",
          "rating": 5,
          "comment": "Great product! Highly recommended."
        },
        {
          "username": "User2",
          "rating": 4,
          "comment": "Good value for the price."
        }
      ],
      "seller": {
        "name": "ElectroTech",
        "rating": 4.8,
        "location": "New York, USA"
      },
      "shipping": {
        "method": "Standard",
        "price": 3.99,
        "estimated_delivery": "2023-08-05"
      }
    },
    {
      "id": "789012",
      "name": "Product B",
      "price": 29.99,
      "description": "Product B comes in various colors and sizes.",
      "category": "Clothing",
      "availability": true,
      "image": "https://example.com/images/product_b.jpg",
      "ratings": {
        "average": 4.2,
        "total": 800
      },
      "reviews": [
        {
          "username": "User3",
          "rating": 4,
          "comment": "Nice design and comfortable."
        },
        {
          "username": "User4",
          "rating": 3,
          "comment": "Slightly small for me."
        }
      ],
      "seller": {
        "name": "FashionStyle",
        "rating": 4.5,
        "location": "Los Angeles, USA"
      },
      "shipping": {
        "method": "Prime",
        "price": 0,
        "estimated_delivery": "2023-08-02"
      }
    }
  ]
}


console.log(json.products[1].description)