import React from "react";

import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import AGB from "./AGB";

const metaMap = {
  impressum: Impressum,
  datenschutz: Datenschutz,
  agb: AGB
};

const MetaTexte = () => {
  const Component = metaMap[window.location.pathname.split("/")[2]]
  return <div style={{ background: '#fff', padding: '10px 20px', borderRadius: '10px' }}><Component /></div>
};

export default MetaTexte;
