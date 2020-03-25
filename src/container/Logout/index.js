import React, { useEffect } from 'react'
import { Redirect } from "react-router-dom";

const Logout = ({ setLoggedIn }) => {
  useEffect(() => {
    setLoggedIn(false)
  })

  return <Redirect to='/home' />
}

export default Logout