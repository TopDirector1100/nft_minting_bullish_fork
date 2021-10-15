import "./style.scss"
import AboutImg from "../../resources/images/about.7756b762.webp"

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="container-toolbar">
        <h1>Bullish Llama NFT</h1>
        <h3>Collection of 10,000 Handcrafted Artworks</h3>
        <div className="toolbar-main">
          <div className="collection">
            <img src={AboutImg} alt="about-img" />
          </div>
          <div className="tools">
            <p>
              Each Bullish Llama is unique and programmatically generated from over 160 handcrafted traits, including body, weapon, clothing, and more hand-drawn by the alumni FlumenFox4.
            </p>
            <ul>
              <li>10,000 rare Bullish Llama NFT’s</li>
              <li>Fair Launch & Distribution: all Llamas cost 0.07 ETH</li>
              <li>Control and own a unique avatar NFT (ERC-721)</li>
              <li>Gain additional benefits through roadmap activations</li>
            </ul>
            <button className="mint-btn">
              Mint Llama
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar