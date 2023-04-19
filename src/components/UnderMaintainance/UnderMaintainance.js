import React from 'react'
import "./UnderMaintainance.css";
import underworking from "../../assets/Images/UnderConstuction/under.gif";

export default function UnderMaintainance() {
  return (
    <div id="under1">
        <img src={underworking} />
        <div>Our website is undergoing some maintenance. We'll be back soon.</div>
    </div>
  )
}
