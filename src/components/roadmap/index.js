import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="container-roadmap">
        <h1>ROADMAP - PHASE 1</h1>
        <div className="roadmap-container">
          <div className="roadmap-piece">
            <div className="icon-div">
              <FontAwesomeIcon size="3x" icon={faCheckCircle} />
            </div>
            <div className="percentage-div">
              25%<br />SOLD
            </div>
            <div className="comment-div">
              Unlock 1ETH Giveaway for every 1000 Skullz minted through our website
            </div>
          </div>
          <div className="roadmap-piece">
            <div className="icon-div">
              <FontAwesomeIcon size="3x" icon={faCheckCircle} />
            </div>
            <div className="percentage-div">
              50%<br />SOLD
            </div>
            <div className="comment-div">
              Unlock 1ETH Giveaway for every 1000 Skullz minted through our website
            </div>
          </div>
          <div className="roadmap-piece">
            <div className="icon-div">
              <FontAwesomeIcon size="3x" icon={faCheckCircle} />
            </div>
            <div className="percentage-div">
              70%<br />SOLD
            </div>
            <div className="comment-div">
              Unlock 1ETH Giveaway for every 1000 Skullz minted through our website
            </div>
          </div>
          <div className="roadmap-piece">
            <div className="icon-div">
              <FontAwesomeIcon size="3x" icon={faCheckCircle} />
            </div>
            <div className="percentage-div">
              85%<br />SOLD
            </div>
            <div className="comment-div">
              Unlock 1ETH Giveaway for every 1000 Skullz minted through our website
            </div>
          </div>
          <div className="roadmap-piece">
            <div className="icon-div">
              <FontAwesomeIcon size="3x" icon={faCheckCircle} />
            </div>
            <div className="percentage-div">
              100%<br />SOLD
            </div>
            <div className="comment-div">
              Unlock 1ETH Giveaway for every 1000 Skullz minted through our website
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap