import React from "react"
import "./ChatWelcomeScreen.css"
import Spline from "@splinetool/react-spline"
const ChatWelcomeScreen = () => {
  return (
    <div className="ChatWelcomeScreen">
      <div className="SvgIcon">
        <Spline
          className="Spine__design"
          width="500px"
          height="400px"
          scene="https://prod.spline.design/dO3CUyT-njNgpUgY/scene.splinecode"
        />
      </div>
      <div className="ChatingScreen__Text">
        Select Room And Chat With Your Frinds
      </div>
    </div>
  )
}

export default ChatWelcomeScreen
