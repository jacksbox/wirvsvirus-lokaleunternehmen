import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import AGB from "./AGB";

const metaMap = {
  impressum: Impressum,
  datenschutz: Datenschutz,
  agb: AGB
};

const MetaTexte = () => {
  const Component = metaMap[window.location.pathname.split("/")[1]];
  return (
    <Card elevation={2}>
      <CardContent>
          <Component />
      </CardContent>
    </Card>
  );
};

export default MetaTexte;
