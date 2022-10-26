import React, { useEffect, useState } from "react"
import "./Feed.css"
import Video from "../Vidoe/Video"
import db from "../../firebase"
const Feed = () => {
  const [videos, setVideos] = useState([])
  const [input, setInput] = useState("")
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    )
  }, [])
  const sendMessage = (e) => {
    e.preventDefault()

    if (true) {
      db.collection("videos").add({
        url: input,
      })
    }
    setInput("")
  }
  return (
    <div className="Feed">
      <div className="app__videos">
        {videos.map(
          ({
            url,
            index,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              url={url}
              index={index}
              // channel={channel}
              // song={song}
              likes={0}
              // messages={0}
              // description={description}
              // shares={shares}
            />
          )
        )}
      </div>
      <div className="AddVideo">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Your URL"
        />
        <button
          style={{
            color: "white",
            backgroundColor: "black",
          }}
          onClick={sendMessage}
        >
          add
        </button>
      </div>
    </div>
  )
}

export default Feed
