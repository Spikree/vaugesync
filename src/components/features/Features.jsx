import './Features.css'
import Broadcasst from '../../assets/Broadcasst.webp'
import Boatfloow from '../../assets/Botfloow.webp'
import Team from '../../assets/Team-Inbox-.webp'

const Features = () => {
  return (
    <div className='features'>
        <div className="feature-header">
            <h1>Features</h1>
        </div>

        <div className="big-card">
            <div className="small-card">
                <img src={Broadcasst} alt="" />
                <div className="broadcast">
                    <h1>Broadcast</h1>
                    <p>Push out your campaigns and engage with high response whatsApp message.</p>
                    <p>Tag contacts,categorize and target them in groups using personalized communications.</p>
                    <p>Build and nurture the relationships that generate future sales by engaging with your audiences regularly on WhatsApp.</p>
                    <br />
                    <a href="">Broadcast Overview</a>
                </div>
            </div>

            <div className="small-card">
                <div className="broadcast">
                    <h1>Chatbots</h1>
                    <p>Create no-code chatbots to provide instant responses to common requests.</p>
                    <p>Simplify mass communication and personalized responses with automated tools.</p>
                    <p>Boost sales by directly converting more customer communications on WhatsApp.</p>
                    <br />
                    <a href="">Chatbots Overview</a>
                </div>
                <img src={Boatfloow} alt="" />
            </div>

            <div className="small-card">
                <img src={Team} alt="" />
                <div className="broadcast">
                    <h1>Shared Team Inbox</h1>
                    <p>Share the Wati inbox across your team and provide stellar support on WhatsApp</p>
                    <p>Use pre-built integrations to bring in customer context in a few clicks.</p>
                    <p>Push post sales communications such as order updates, and resolve support requests quickly through WhatsApp.</p>
                    <br />
                    <a href="">Team inbox Overview</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features