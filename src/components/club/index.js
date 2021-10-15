import "./style.scss"
import Discord from "../../resources/images/discord-black.svg"
import Twitter from "../../resources/images/twitter-black.svg"
import Bullish from "../../resources/images/bullish.svg"
import SPC from "../../resources/images/download (1).webp"

const Club = () => {
  return (
    <div className="club">
      <div className="container-club">
        <div className="community-container">
          <div className="community-piece">
            <span className="community-piece-text">Community Member</span>
            <span className="community-piece-info">
              <img src={Discord} />
              9,000 +
            </span>
          </div>
          <div className="community-piece">
            <span className="community-piece-text">Followers on twitter</span>
            <span className="community-piece-info">
              <img src={Twitter} />
              6,000 +
            </span>
          </div>
          <div className="community-piece">
            <span className="community-piece-text">Llama owners</span>
            <span className="community-piece-info">
              <img src={Bullish} />
              1,100 +
            </span>
          </div>
        </div>
        <h1>Bullish Club is a community of humans who believe in a crypto future.</h1>
        <div className="newspaper">
          <div>
            Passion for NFTs connected our international team from the US and Europe with the remarkable creator FlumenFox4. Bullish club is starting with a collection of 10,000 Bullish Llamas NFTs—unique digital collectibles living on the Ethereum blockchain.
          </div>
          <div>
            As a Bullish Llama owner, you gain access to a Bullish Club app which will allow you to collect and herd your Llamas in one place. Future areas and perks can be unlocked by the community through roadmap activation together with charity donations.
          </div>
        </div>
        <div className="partnership">
          <img src={SPC} />
          <div className="partnership-main">
            <h2>Partnership with SPC</h2>
            <h3>
              We are happy to announce collaboration with amazing Space Punks Club.
            </h3>
          </div>
          <div>
            <button className="learn">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Club