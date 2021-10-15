import "./style.scss"
import pageLogo from "../../resources/images/download.webp"
import OpenSea from "../../resources/images/opensea-black.svg"
import Discord from "../../resources/images/discord-black.svg"
import Twitter from "../../resources/images/twitter-black.svg"
import Instgram from "../../resources/images/instagram-black.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <img src={pageLogo} />
        <div>
          <img src={OpenSea} />
          <img src={Discord} />
          <img src={Twitter} />
          <img src={Instgram} />
        </div>
        <p>Crated by Bullish.club in San Francisco</p>
      </div>
    </footer>
  )
}

export default Footer
