import { Avatar, IconButton } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import MicIcon from "@mui/icons-material/Mic"
import CallOutlinedIcon from "@mui/icons-material/CallOutlined"
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import "./Chat.css"
import Message from "../Message/Message"
import db from "../../firebase"
import { useParams } from "react-router-dom"
import ChatInput from "../ChatInput/ChatInput"
const Chat = () => {
  const { roomId } = useParams()
  const [roomDetails, setRoomDetails] = useState(null)
  const [roomMessages, setRoomMessages] = useState([])
  const messageEndRef = useRef(null)
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      )
  }, [roomId])

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [roomMessages])
  return (
    <div className="chat">
      <div className="Chat_Header">
        <div className="Header__display">
          <Avatar src={roomDetails?.userImage} className="Chating__Avatar" />
          <div className="Header__name">
            <h3>{roomDetails?.name}</h3>
            <span>Online</span>
          </div>
        </div>
        <div className="Feature__div">
          <CallOutlinedIcon style={{ color: "white", marginLeft: "30px" }} />
          <DuoOutlinedIcon style={{ color: "white", marginLeft: "30px" }} />
          <MoreVertIcon style={{ color: "white", marginLeft: "30px" }} />
        </div>
      </div>
      <div className="Chating__page">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            messageName={roomDetails?.name}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}

        <div ref={messageEndRef} />
      </div>
      <div className="Chat__Footer">
        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
      </div>
    </div>
  )
}

export default Chat
