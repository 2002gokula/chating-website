import { Avatar } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./SidebarChat.css"
const SidebarChat = ({ timestamp, userImage, desription, title, id }) => {
  const Navigate = useNavigate()
  const selectChannel = () => {
    if (id) {
      Navigate(`room/${id}`)
    } else {
      Navigate(title)
    }
  }
  function timeNow(i) {
    var d = new Date(),
      h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
      m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
    i.value = h + ":" + m
  }
  return (
    <div onClick={selectChannel} className="SidebarChat">
      <Avatar
        src={userImage}
        style={{ marginTop: "5px" }}
        className="SidebarChat__Avator"
      />

      <div className="SidebarChat__info">
        <div className="SidebarChat__title">
          <h4>{title}</h4>
          {/* <span>{new Date(timestamp?.toDate()).toUTCString()}</span> */}
        </div>
        <div className="SidebarChat__Message">
          <p>{desription}</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarChat
