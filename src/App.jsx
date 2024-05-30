import Carousel from "./components/carousel/Carousel"
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
    </div>
  )
}

export default App