import React, { useState } from "react"

import "./ChatInput.css"

import firebase from "firebase/compat/app"
import db from "../../firebase"
import { useStateValue } from "../../StateProvider"
const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("")
  const [{ user }] = useStateValue()
  const sendMessage = (e) => {
    e.preventDefault()
    console.log(typeof channelName)
    console.log(typeof channelId)
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      })
    }
    setInput("")
  }
  return (
    <div className="chatInput">
      <form id="myID">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message room  #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
        <img
          className="ChatInput__Attach"
          src="https://cdn-icons-png.flaticon.com/512/3756/3756614.png"
        />
        <img
          className="ChatInput__Emoji"
          src="https://cdn-icons-png.flaticon.com/512/743/743287.png"
        />
        <img
          type="submit"
          onClick={sendMessage}
          className="ChatInput__send"
          src="https://cdn-icons-png.flaticon.com/512/7286/7286142.png"
        />
      </form>
    </div>
  )
}

export default ChatInput
