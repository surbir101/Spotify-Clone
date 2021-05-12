import React from 'react'
import "./Player.css";
import Body from "./Body.js"
import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js"


function Player({spotify}) {
  return (
    <div className="player">
      <div className="player__body">
      <Sidebar />
      <Body spotify={spotify} />
      <Footer />

      </div>

    </div>

  )
}

export default Player
