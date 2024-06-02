import Resutlts from "../../components/results/Results.jsx"
import Carousel from "../../components/carousel/Carousel.jsx"
import Features from "../../components/features/Features.jsx"
import Hero from "../../components/hero/Hero.jsx"
import './Home.css'

const Home = () => {
  return (
    <div className="home-main">
      <Hero/>
      <Carousel/>
      <Resutlts/>
      <Features/>
    </div>
  )
}

export default Home