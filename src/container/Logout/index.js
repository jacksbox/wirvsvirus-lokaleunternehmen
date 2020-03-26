import React, { useEffect } from 'react'
import { Redirect } from "react-router-dom";

const Logout = ({ setLoggedIn }) => {
  useEffect(() => {
    setLoggedIn(false)
    window.location = '/'
  })

  return <div><h4>Sie werden ausgelogged</h4></div>
}

export default Logout