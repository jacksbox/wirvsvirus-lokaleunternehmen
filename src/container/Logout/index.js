import React, { useEffect, useContext } from 'react'
import { Redirect } from "react-router-dom";

import { AuthContext } from 'App.js'

const Logout = () => {
  const { setLoggedIn } = useContext(AuthContext)
  useEffect(() => {
    setLoggedIn(false)
  })

  return <Redirect to="/customer/home" />
}

export default Logout