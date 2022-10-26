import React, { useEffect, useState } from "react"
import "./VideoSidebar.css"
import ShareIcon from "@mui/icons-material/Share"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import MessageIcon from "@mui/icons-material/Message"
import CopyToClipboard from "react-copy-to-clipboard"
import styled from "styled-components"
function VideoSidebar({ likes, messages }) {
  const [liked, setLiked] = useState(false)
  const [burgerStatus, setBurgerStatus] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText("gokula")
    setBurgerStatus(true)
  }
  useEffect(() => {
    setTimeout(() => {
      setBurgerStatus(false)
    }, 100)
  }, [])

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon
            style={{ color: "red" }}
            fontSize="large"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div onClick={copyToClipboard} className="videoSidebar__button">
        <ShareIcon fontSize="large" />
      </div>
      <BurgerNav show={burgerStatus}>
        <span>Copid</span>
      </BurgerNav>
    </div>
  )
}

const BurgerNav = styled.div`
  position: fixed;
  bottom: 30px;
  bottom: 0;
  right: 90px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  width: 100px;
  z-index: 9999;
  list-style: none;
  padding: 20px;
  height: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;

  transform: ${(props) => (props.show ? "translateY(0%)" : "translateY(100%)")};
  transition: transform 0.5s ease-in-out;

  overflow-y: scroll;
  span {
    color: black;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`

export default VideoSidebar
