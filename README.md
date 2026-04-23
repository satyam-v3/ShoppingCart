<h1 align="center">🛒 React-Redux E-Commerce App</h1>

<p align="center">
  <em>A modern, responsive frontend e-commerce application demonstrating global state management.</em>
</p>

---

## 📖 About The Project

This project is a fully functional e-commerce storefront built with React. It dynamically fetches product data from a mock REST API and allows users to seamlessly browse products, add them to a global cart, and manage their selections. 

The primary focus of this build is implementing robust global state management using **Redux Toolkit** and handling client-side routing with **React Router DOM**, ensuring a fast, Single Page Application (SPA) experience without page reloads.

## ✨ Key Features

* **Global State Management:** Utilizes Redux Toolkit (`createSlice`, `useSelector`, `useDispatch`) to manage the shopping cart globally, allowing immediate UI updates across different routes (e.g., the Navbar cart badge updates instantly).
* **Dynamic Routing:** Implemented React Router DOM for seamless navigation between the product listing (`Home`) and the checkout summary (`Cart`).
* **Asynchronous Data Fetching:** Consumes the Fake Store API using async/await, featuring a custom CSS loading spinner during the network request.
* **Interactive UI/UX:** * Animated cart badge notifications.
  * Image lazy-loading for optimized performance.
  * `react-hot-toast` integration for elegant success and removal notifications.
* **Modern Styling:** Built with Tailwind CSS v4, utilizing CSS Grid for the responsive product catalog and Flexbox for precise alignment.

## 🛠️ Built With

* **React (Vite):** Frontend framework.
* **Redux Toolkit:** State management architecture.
* **React Router DOM:** Client-side routing.
* **Tailwind CSS v4:** Utility-first CSS framework.
* **React Hot Toast:** Notification library.
* **Fake Store API:** Mock backend product data.

## 🚀 Getting Started

To run this project locally:

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/redux-ecommerce.git](https://github.com/satyam-v3/ShoppingCart.git)

2. Navigate into the project directory:
    ```bash
    cd ShoppingCart

3. Install the required dependencies:
    ```bash
    npm install

4. Start the Vite development server:
    ```bash
    npm run dev

## 📁 Project Architecture
```text
src/
├── assets/               # Static assets (logos, images)
├── components/
│   ├── CartItem.jsx      # Individual cart row with delete functionality
│   ├── Navbar.jsx        # Top navigation with dynamic cart badge
│   ├── Product.jsx       # Catalog card with Add/Remove dispatch logic
│   └── Spinner.jsx       # Custom CSS loading indicator
├── pages/
│   ├── Cart.jsx          # Cart summary and total calculation
│   └── Home.jsx          # Main product catalog and API fetching
├── redux/
│   ├── slices/
│   │   └── cartSlice.js  # Redux reducers for add/remove actions
│   └── store.js          # Centralized Redux store configuration
├── App.jsx               # Route definitions
└── main.jsx              # App entry point & Provider wrapping