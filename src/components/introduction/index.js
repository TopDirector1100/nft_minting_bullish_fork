import "./style.scss"

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro-container">
        <div className="intro-box">
          <div className="intro-inner">
            <p className="intro-small-first">Mutant Ether Babies</p>
            <p className="intro-small-second">NFT Collection Gaming-Metaverse</p>
            <button className="get-llama-btn">Mint Mebs Now</button>
            <div className="intro-steps">
              <span className="ticked">Minted Mebs</span>
              <span>Available Mebs</span>
            </div>
          </div>
        </div>
        <div className="empty-box"></div>
      </div>
    </div>
  )

}

export default Introduction