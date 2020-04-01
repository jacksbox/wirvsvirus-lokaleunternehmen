import React, { useContext } from 'react'
import { Redirect } from "react-router-dom";

import ProfilComponent from 'components/Profil'

import { AuthContext } from 'App.js'

const Profil = () => {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return <Redirect to='/home' />
  }

  const handleChange = event => {}
  const errors = []

  return <ProfilComponent  handleChange={handleChange} errors={errors}/>
}

export default Profil