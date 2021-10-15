import "./style.scss"

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro-box">
        <div className="intro-inner">
          {/* <h1 className="yellow">We are</h1>
          {/* <h1 className="yellow">Bullish.</h1>
          <h1>Are you?</h1> */} 
          <p className="intro-small">Mutant Ether Babies NFT Collecion</p>
          <p className="intro-small">Nutant Ether Babies</p>
          <p className="intro-small">NFT Collection Gaming-Metaverse</p>
          <button className="get-llama-btn">Mint Mebs Now</button>
          <div className="intro-steps">
            <span className="ticked">Minted Mebs</span>
            <span>Available Mebs</span>
          </div>
        </div>
      </div>
      <div className="empty-box"></div>
    </div>
  )

}

export default Introduction