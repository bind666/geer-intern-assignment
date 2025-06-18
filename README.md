# 🛒 E-Commerce Product Listing Platform

A simple, responsive E-commerce product listing app (like Geer.in) built with the MERN stack. This platform allows you to add, view, delete, and filter products.

---

## 🚀 How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform
````

### 2. Install Backend Dependencies
```
cd backend
npm install
```

### 3. Start MongoDB

Make sure MongoDB are installed else use atlas url:

**create .env file**
add this url: MONGO_URI=mongodb://localhost:27017/ecommerce-assignment

### 4. Run Backend Server

```
npm run dev
```

> Server runs at: `http://localhost:5000`

### 5. Install Frontend Dependencies

```
cd ../frontend
npm install
```

### 6. Run Frontend App

```
npm run dev
```

> Frontend runs at: `http://localhost:5173`

---

## 🧱 Tech Stack

### 🔹 Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### 🔹 Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Multer (for image upload)
* CORS & Dotenv

---

## 📂 Folder Structure

```
ecommerce-platform/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── app.js
├── frontend/
│   ├── components/
│   ├── pages/
│   └── main.jsx
└── README.md
```

---

## 📝 Features

* View all products
* Filter/search by product name
* Add new product with image upload
* Delete product with confirmation
* View individual product details
* Responsive layout with smooth UI animations

---

## ⚙️ Assumptions & Notes

* Image uploads are stored locally in the `/uploads/` folder.
* No authentication or role-based access (admin/user) is implemented yet.
* All users can add or delete products for simplicity.
* Product filtering is based only on `name`; category filter is ready in backend but not yet implemented in UI.
* For production, image uploads should be moved to a cloud storage (like Cloudinary or S3).

---

I already created a Full stack E-Commerce Website. Explore this for more. 
Link: 
