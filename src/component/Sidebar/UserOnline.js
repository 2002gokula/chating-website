import { Avatar } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import "./UserOnline.css"
const UserOnline = ({ title, id }) => {
  const Navigate = useNavigate()
  const selectChannel = () => {
    if (id) {
      Navigate(`room/${id}`)
    } else {
      Navigate(title)
    }
  }
  return (
    <div className="UserOnline" onClick={selectChannel}>
      <div className="ReelCircle">
        <Avatar className="Reel__Avatar" />
      </div>
      <p style={{ color: "white", marginLeft: "0px" }}>{title}</p>
    </div>
  )
}

export default UserOnline
