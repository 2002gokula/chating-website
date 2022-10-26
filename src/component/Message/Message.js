import { Avatar } from "@mui/material"
import React from "react"
import { useStateValue } from "../../StateProvider"
import "./Message.css"
const Message = ({ message, timestamp, user, userImage }) => {
  // const timestamp = Date.now()
  return (
    <div className="Message">
      <div className="Message__header">
        {" "}
        <Avatar src={userImage} className="Avatar__Profile" />
        <h1> {user}</h1>
        <span className="chat__timestamp">
          {new Date(timestamp?.toDate()).toLocaleTimeString()}
        </span>
      </div>
      <div className="Chat__body">
        <h1>{message}</h1>
      </div>
    </div>
  )
}

export default Message
