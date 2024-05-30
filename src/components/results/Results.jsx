import './Results.css'
import Habuildd from '../../assets/Habuildd.webp'
import inves from '../../assets/inves.jpg'
import Vedantuhome from '../../assets/Vedantuhome.webp'
import Zellbury from '../../assets/zellbury.svg'

const Resutlts = () => {
  return (
    <div className='results'>
      <div className="header">
        <h1>Real Result.Real Stories!</h1>
        <p>Discover how brands thrive with wavesync</p>
      </div>
      <div className="cards">

        <div className="card">
          <img src={Habuildd} alt="" />
          <p>
            From 200 to 80,000+
            Subscribers:How wavesync
            Empowered Habuild's
            Remarkable Growth
          </p>
        </div>

        <div className="card">
          <img src={inves} alt="" />
          <p>
            InvestAI got 30x more
            responses than traditional
            emails using wavesync 
          </p>
        </div>

        <div className="card">
          <img src={Vedantuhome} alt="" />
          <p>
            Vedantu's Triumph with
            wavesync:50% Drop in Contact
            Center Calls
          </p>
        </div>

        <div className="card">
          <img src={Zellbury} alt="" />
          <p>
            wavesync helped Zellbury 
            achieve an impressive 87%
            customer satisfaction rate
            on support!
          </p>
        </div>

      </div>
    </div>
  )
}

export default Resutlts