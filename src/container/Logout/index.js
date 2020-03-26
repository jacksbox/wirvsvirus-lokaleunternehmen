import React, { useEffect, useContext } from 'react'

import { AuthContext } from 'App.js'
import { Redirect } from "react-router-dom";

const Logout = () => {
  const { setLoggedIn } = useContext(AuthContext)
  useEffect(() => {
    setLoggedIn(false)
  })

  return <Redirect to="/customer/home" />
}

export default Logout