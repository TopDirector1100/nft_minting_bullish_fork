import "slick-carousel/slick/slick.css"
import { Carousal } from "react-3d-carousal"
import "slick-carousel/slick/slick-theme.css"
import "./style.scss"
import AboutImg from "../../resources/images/about.7756b762.webp"
import Slide1 from "../../resources/images/1.jfif"
import Slide2 from "../../resources/images/3.jfif"
import Slide3 from "../../resources/images/4.png"

const Toolbar = () => {
  let slides = [
    <img src={Slide1} alt="1" />,
    <img src={Slide2} alt="2" />,
    <img src={Slide3} alt="3" />,
  ]

  return (
    <div className="toolbar">
      <div className="container-toolbar">
        <h1>Bullish Llama NFT</h1>
        <h3>Collection of 10,000 Handcrafted Artworks</h3>
        <div className="toolbar-main">
          <div className="collection">
            <div className="sc-cTJkRt lmGFyU">
              <div className="sc-dPaNzc fqbJCS">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="#ff4cb5"
                  height="70"
                  width="70"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(255, 76, 181)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="sc-bBjRSN cdTyhF">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="#ff4cb5"
                  height="70"
                  width="70"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(255, 76, 181)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="sc-cOifOu haQoIp">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="#ff4cb5"
                  height="70"
                  width="70"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(255, 76, 181)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="sc-Arkif eJDRKz">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="#ff4cb5"
                  height="70"
                  width="70"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(255, 76, 181)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <Carousal slides={slides} autoplay={false} interval={1000} />
            </div>
            <div className="slick-comment">Doge Pound Puppies Collections</div>
          </div>
          <div className="tools">
            <p>
              Each Bullish Llama is unique and programmatically generated from
              over 160 handcrafted traits, including body, weapon, clothing, and
              more hand-drawn by the alumni FlumenFox4.
            </p>
            <ul>
              <li>10,000 rare Bullish Llama NFT’s</li>
              <li>Fair Launch & Distribution: all Llamas cost 0.07 ETH</li>
              <li>Control and own a unique avatar NFT (ERC-721)</li>
              <li>Gain additional benefits through roadmap activations</li>
            </ul>
            <button className="mint-btn">Mint Llama</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
