import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CountContextProvider from "./providers/CountContextProvider";
import AuthContextProvider from "./providers/AuthContextProvider";
import CartContextProvider from "./providers/CartContextProvider";

// roles={["Admin", "ProductOwner"]}

function App() {
  return (
    <CountContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </CartContextProvider>
      </AuthContextProvider>
    </CountContextProvider>
  );
}

export default App;
