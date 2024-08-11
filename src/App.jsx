import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import BookADemo from "./pages/book-a-demo/BookADemo";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login and signup/Login";
import SignUp from "./pages/login and signup/SignUp";
import Main from "./pages/main/Main";
import { useState } from "react";
import UserProfile from "./pages/user-profile/UserProfile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/main" element={<Main />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
