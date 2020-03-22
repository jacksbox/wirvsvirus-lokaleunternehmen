import React from "react";
import Button from "components/CustomButtons/Button.js";

import logo from "assets/img/logo-sticker.png";

const Home = () => (
  <div>
    <center>
      <div style={{ padding: '40px', background: '#fff', borderRadius: '20px', width: '760px' }}>
        <img src={logo} alt="logo" style={{ width: '200px'}} />
        <h4>
          Mit <strong>Bleib Lokal!</strong> entwickeln wir eine Lösung,<br />
          um die Läden um die Ecke in dieser schwierigen Zeit zu unterstützen.
        </h4>
        <Button href="/customer/maps" color="info">
          Jetzt lokale Unternehmen finden
        </Button>
      </div>
    </center>
  </div>
)

export default Home