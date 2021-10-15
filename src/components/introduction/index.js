import "./style.scss"

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro-box">
        <div className="intro-inner">
          {/* <h1 className="yellow">We are</h1>
          {/* <h1 className="yellow">Bullish.</h1>
          <h1>Are you?</h1> */} 
          <p className="intro-small">NFT Collection & Mobile app</p>
          <button className="get-llama-btn">Mint Your Mebs</button>
          <div className="intro-steps">
            <span className="ticked">Epoch1: SOLD OUT</span>
            <span>Epoch2: AVAILABLE</span>
          </div>
        </div>
      </div>
      <div className="empty-box"></div>
    </div>
  )

}

export default Introduction