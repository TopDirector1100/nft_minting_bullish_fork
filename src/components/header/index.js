import "./style.scss"
import pageLogo from "../../resources/images/download.webp"
import OpenSea from "../../resources/images/opensea.svg"
import Discord from "../../resources/images/discord.svg"
import Twitter from "../../resources/images/twitter.svg"
import Instgram from "../../resources/images/instagram.svg"
import Foldable from "../../resources/images/foldable.svg"
import Folded from "../../resources/images/folded.svg"

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-header">
          <button className="toggle">
            <img src={Foldable} className="foldable" />
            <img src={Folded} className="folded" />
          </button>
          <ul className="in-links">
            <li>About</li>
            <li>Collection</li>
            <li>Mobile app</li>
            <li>Roadmap</li>
          </ul>
          <img src={pageLogo} alt="page-logo" className="page-logo" />
          <div className="out-links">
            <ul className="social-links">
              <li>
                <img src={OpenSea} alt="open-sea" />
              </li>
              <li>
                <img src={Discord} alt="discord" />
              </li>
              <li>
                <img src={Twitter} alt="twitter" />
              </li>
              <li>
                <img src={Instgram} alt="instagram" />
              </li>
            </ul>
            <button className="get-btn">
              Get Llama
            </button>
          </div>
        </div>
      </nav>
      <div className="screen-blocker">
      </div>
    </>
  )
}

export default Header
