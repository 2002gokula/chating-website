import React, { useEffect, useRef, useState } from "react"
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"
import "./Video.css"
function Video({
  url,

  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const onEnded = () => {
    var myDiv = document.getElementById("scroll-window")
    let x = myDiv.scrollTop
    myDiv.scrollTop = x + 500
    console.log("ended")
  }

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onEnded={onEnded}
        onLoad="autopplay"
        playsinline
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      {/* <VideoFooter channel={channel} description={description} song={song} /> */}
      <VideoSidebar likes={likes} messages={messages} />
    </div>
  )
}

export default Video
