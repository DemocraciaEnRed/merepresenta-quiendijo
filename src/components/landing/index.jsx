import React from "react";
import WithBackground from "../withBackground";
import Logo from "../logo";
import Background from '../../images/roundBackground.svg';
import "./index.css";

const Landing = ({ follow }) => <div className="animate__animated animate__fadeOut animate__delay-3s" onAnimationEnd={follow}>
  <WithBackground background={Background}>
  <div className="centered animate__animated animate__fadeIn animate__delay-1s">
      <Logo />
      <p className="game-name">¿Quién dijo?</p>
    </div>
</WithBackground>
</div>

export default Landing;