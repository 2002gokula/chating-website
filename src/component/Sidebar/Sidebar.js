import { Avatar, Button, IconButton } from "@mui/material"
import React, { useEffect, useState } from "react"
import "./Sidebar.css"
import SearchIcon from "@mui/icons-material/Search"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import SidebarChat from "./SidebarChat"
import UserOnline from "./UserOnline"
import { useStateValue } from "../../StateProvider"
import db from "../../firebase"
const Sidebar = () => {
  const [searchIcon, setSearchIcon] = useState(false)
  const [{ user }] = useStateValue()
  const [channels, setChannels] = useState([])

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          userImage: doc.data().userImage,
          desription: doc.data().desription,
        }))
      )
    )
  }, [])
  return (
    <div className="Sidebar">
      <div className="sidebar__Header">
        <div className="Sidebar__Header__Left">
          <Avatar src={user.photoURL} />
          <div className="sidebar__headerRight">
            <h1>{user?.displayName}</h1>
            <p>online</p>
          </div>
        </div>
        <div className="MoreOption__Icon">
          <img color="white" width="22px" height="22px" src="/Icon/more.png" />
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          {searchIcon ? (
            <ArrowBackIcon
              style={{ color: "green", cursor: "pointer" }}
              onClick={(e) => setSearchIcon(true)}
            />
          ) : (
            <SearchIcon
              style={{ color: "#54656f", fontSize: "20px" }}
              onClick={(e) => setSearchIcon(false)}
            />
          )}

          <input
            placeholder="Search or start new chat"
            onClick={(e) => setSearchIcon(false)}
            type="text"
            className="searchInput"
          />
        </div>
      </div>
      <div className="Reel__Sections">
        <div className="Reel__Header">
          <h2>Reels</h2>
          <div className="Header__MoreButtn">
            <p>More</p>
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="reels__Screen">
          <UserOnline />
        </div>
      </div>
      <div className="sidebarChat">
        <h1 style={{ color: "white", fontSize: "20px", marginLeft: "10px" }}>
          Messages
        </h1>

        {channels.map((channel) => (
          <SidebarChat
            timestamp={channel.timestamp}
            desription={channel.desription}
            userImage={channel.userImage}
            title={channel.name}
            id={channel.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
