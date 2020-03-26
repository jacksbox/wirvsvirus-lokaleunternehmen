import React, { useContext } from 'react'

// import Register from "functionalComponents/LoginRegister/RegisterForm.js";

import { AuthContext } from 'App.js'
import { Redirect } from "react-router-dom";

const Profil = () => {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return <Redirect to='/home' />
  }

  return <h2>Profil</h2>
}

export default Profil