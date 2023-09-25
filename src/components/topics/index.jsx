import React from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";
import Logo from "../logo";
import WithBackground from "../withBackground";
import WithTopicColor from "../withTopicColor";
import Background from '../../images/roundBackground.svg';
import topicColors from "../../helpers/topicColors";
import "./index.css";

const Topics = ({ follow }) => <WithBackground background={Background}>
  <div className="animate__animated animate__fadeIn">
    <Logo color="black"/>
    <div className="topics col-10">
      <p className="topics-description">Te vamos a mostrar 10 frases y
vas a tener que adivinar que candidato/a a la presidencia lo dijo.Los mismas serán entorno a las temáticas de las propuestas:</p>
      {_(topicColors).keys()
        .map((value, i) =>
          <WithTopicColor
            key={i}
            topic={value}
            render={color => <p style={{ color }}>{value}</p>}
          />
        ).value()}
      <Button onClick={follow} className="col-md-3 col-sm-4 col-10 play" variant="outline-dark">JUGAR</Button>
      <p className="game-owner">Desarrollado por Directorio Legislativo y Democracia en Red</p>
    </div>
  </div>
</WithBackground>

export default Topics;