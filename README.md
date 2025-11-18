##  GitHub Repository Link

https://github.com/fzwaz/Product-api.git

---


# Product Catalog API

## 1. Project Description

This project is a simple **Product Catalog API** built using **Node.js** and **Express**.
It provides endpoints to fetch product data and display it on a simple frontend webpage.

**Technologies used:**

* Node.js
* Express.js
* HTML, CSS, JavaScript (frontend)
* In-memory JavaScript array for data storage (no database)

---

## 2. Project Structure

```
product-catalog-api/
│
├── public/
│   └── index.html       # Frontend page
│
├── server.js            # Main server file
├── package.json
├── package-lock.json
└── README.md
```

---

## 3. API Documentation

### **GET /products**

* **URL:** `/products`
* **Method:** GET
* **Description:** Returns a list of all products.
* **Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "category": "Electronics",
    "price": 45000,
    "inStock": true
  },
  {
    "id": 2,
    "name": "Office Chair",
    "category": "Furniture",
    "price": 12000,
    "inStock": false
  }
]
```

### **GET /products/categories**

* **URL:** `/products/categories`
* **Method:** GET
* **Description:** Returns a list of unique product categories.
* **Sample Response:**

```json
{
  "categories": ["Electronics", "Accessories", "Furniture"]
}
```

### **GET /products/instock**

* **URL:** `/products/instock`
* **Method:** GET
* **Description:** Returns products that are currently in stock.
* **Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "category": "Electronics",
    "price": 45000,
    "inStock": true
  }
]
```

---

## 4. Installation & Setup Instructions

1. **Clone the repository**

```bash
git clone <your-repo-link>
cd product-catalog-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the server**

```bash
node server.js
```

4. **Access the API**

* Open your browser or Postman:

  * All products: `http://localhost:3000/products`
  * Categories: `http://localhost:3000/products/categories`
  * In-stock products: `http://localhost:3000/products/instock`
* Frontend page: `http://localhost:3000/index.html`

---


## 6. Author Information

**Name:** Your Name Here

---
