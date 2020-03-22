import React from "react";
import Button from "components/CustomButtons/Button.js";

import logo from "assets/img/logo-sticker.png";

const Home = () => (
  <div>
      <div style={{
        position: 'absolute',
        maxWidth: '100%',
        top: '50px',
        left: '50%',
        transform: 'translate(-50%, 0)',
        background: '#fff',
        borderRadius: '20px', width: '760px'
      }}>
      <div style={{ padding: '40px', textAlign: 'center' }}>
        {/* <img src={logo} alt="logo" style={{ width: '200px', maxWidth: "80%"}} /> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EW529J86Mpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4>
          Mit <strong>Bleib Lokal!</strong> entwickeln wir eine Lösung,<br />
          um die Läden um die Ecke in dieser schwierigen Zeit zu unterstützen.
        </h4>
        <Button href="/customer/maps" color="info">
          Jetzt lokale Unternehmen finden
        </Button>
      </div>
      </div>
  </div>
)

export default Home