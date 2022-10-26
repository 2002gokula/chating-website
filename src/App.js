import React from "react"

import "./App.css"
import Sidebar from "./component/Sidebar/Sidebar"
import Chat from "./component/Chat/Chat"
import Feed from "./component/Feed/Feed"
import Header from "./component/Header/Header"
import { Route, Routes } from "react-router-dom"
import Login from "./component/Login/Login"
import { useStateValue } from "./StateProvider"
import ChatWelcomeScreen from "./component/Chat/ChatWelcomeScreen"
import VideoCall from "./component/VideoCall/VideoCall"

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Sidebar />

          <Routes>
            <Route path="/room/:roomId" element={<Chat />} />
            <Route path="/" element={<ChatWelcomeScreen />} />
            <Route path="/meetingroom" element={<VideoCall />} />
          </Routes>
          <Feed />
        </>
      )}
    </div>
  )
}

export default App
