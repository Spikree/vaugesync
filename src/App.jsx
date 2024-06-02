import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import BookADemo from "./pages/book-a-demo/BookADemo";
import Home from "./pages/home/Home"
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App