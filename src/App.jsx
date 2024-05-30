import Carousel from "./components/carousel/Carousel"
import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Resutlts from "./components/results/Results"
import Home from "./pages/home/Home"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Carousel/>
      <Resutlts/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App