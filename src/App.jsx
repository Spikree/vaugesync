import Carousel from "./components/carousel/Carousel"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Carousel/>
    </div>
  )
}

export default App