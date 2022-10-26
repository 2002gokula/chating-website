import { Avatar } from "@mui/material"

import React, { useEffect, useState } from "react"
import PeopleIcon from "@mui/icons-material/People"
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined"
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark"
import SettingsIcon from "@mui/icons-material/Settings"
import CloseIcon from "@mui/icons-material/Close"
import styled from "styled-components"
import "./Header.css"
import firebase from "firebase/compat/app"

import { useStateValue } from "../../StateProvider"
import db from "../../firebase"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const [{ user }, dispatch] = useStateValue()
  const [burgerStatus, setBurgerStatus] = useState(false)
  const [formValue, setFormValue] = useState("")
  const [desription, setDesription] = useState("")
  const [userImage, setUserImage] = useState("")
  const [imageUpload, setImageUpload] = useState(null)
  const [imageUrls, setImageUrls] = useState([])
  const [imgUrl, setImgUrl] = useState(null)
  const [progresspercent, setProgresspercent] = useState(0)
  const Navigate = useNavigate()
  const addChannel = () => {
    if (true) {
      db.collection("rooms").add({
        name: formValue,
        userImage: userImage,
        desription: desription,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }

    setFormValue("")
    setUserImage("")
    setDesription("")
  }

  return (
    <div className="Header">
      <div className="Header__logo">
        {/* <Avatar /> */}
        <img
          onClick={() => Navigate("/")}
          className="Logo__website"
          src="https://drive.google.com/uc?export=download&id=1VcY-6D09Lu-dPw4Dp595hK6AOn2z3fWN"
        />
      </div>

      <div className="Header__icon">
        <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" />
      </div>

      <div className="Header__icon">
        <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" />
      </div>

      <div className="Header__icon">
        <img src="https://cdn-icons-png.flaticon.com/512/4116/4116377.png" />
      </div>

      <div className="Header__icon">
        <img
          style={{ maxWidth: "24px" }}
          src="https://cdn-icons-png.flaticon.com/512/907/907027.png"
        />
      </div>

      <div className="Header__icon">
        <img src="https://cdn-icons-png.flaticon.com/512/720/720245.png" />
      </div>

      <div className="Header__Button">
        <div className="Add__icon" onClick={() => setBurgerStatus(true)}>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" />
        </div>
        <div className="Profile__Pic">
          <Avatar src={user.photoURL} className="profile__Image" />
        </div>
      </div>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CloseIcon onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <div className="BurgerNav__Header">
          <Avatar src={user.photoURL} />
          <h1>{user.displayName}</h1>
        </div>
        <div className="BurgerNav__Input">
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            type="text"
            placeholder="Enter your room name"
          />
          <input
            value={desription}
            onChange={(e) => setDesription(e.target.value)}
            type="text"
            placeholder="Enter your Desription"
          />
        </div>

        <div className="BurgerNav__PhotoURL">
          <input
            value={userImage}
            placeholder="Enter your PhotoURL"
            accept="/image/*"
            type="text"
            onChange={(e) => setUserImage(e.target.value)}
          />
        </div>
        <button className="Burger__nav__Btn" onClick={addChannel} type="submit">
          submit
        </button>
      </BurgerNav>
    </div>
  )
}
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  border-radius: 30px;

  right: 380px;
  background: rgba(255, 255, 255, 1);
  width: 500px;
  z-index: 9999;
  list-style: none;
  padding: 20px;
  height: 360px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) =>
    props.show ? "translateY(10%)" : "translateY(-100%)"};
  transition: transform 0.5s ease-in-out;
  overflow-y: scroll;
  gap: 20px;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      color: black;
      font-weight: 600;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default Header
