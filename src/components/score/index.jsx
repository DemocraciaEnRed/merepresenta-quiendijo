import React, { useState } from "react";
import { Button } from "react-bootstrap";
import _ from "lodash";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import Background from '../../images/scoreBackground.svg';
import FirstLoading from '../../images/firstLoadingBackground.svg';
import SecondLoading from '../../images/secondLoadingBackground.svg';
import ThirdLoading from '../../images/thirdLoadingBackground.svg';
import Logo from "../logo";
import { ReactComponent as IconSvg } from '../../images/meRepresentaIcon.svg';
import Progress from '../progress';
import Separator from '../separator';
import bad from '../../images/scoreMemes/bad.png';
import good from '../../images/scoreMemes/good.png';
import veryGood from '../../images/scoreMemes/veryGood.png';
import excellent from '../../images/scoreMemes/excellent.png';
import vof from '../../images/vof.png';
// import { ReactComponent as InstagramLogo } from "../../images/instagramLogo.svg";
// import { ReactComponent as TwitterLogo } from "../../images/twitterLogo.svg";
import { ReactComponent as TwitterIcono } from "../../images/iconoX.svg";
import { ReactComponent as WhatsappIcono } from "../../images/iconoWhats.svg";
import { ReactComponent as LinkIcono } from "../../images/iconoLink.svg";
// import { ReactComponent as JpgIcono } from "../../images/iconoJpg.svg";
import "./index.css";

const resultsByScore = [
  {
    max: 4,
    meme: bad,
    color: "FB2D11",
    description: "Argentina perdió el primer partido del Mundial y salió campeón. Vos podés repetir la historia.",
    secondayDescription: "Pasá por #MeRepresenta para saber todo sobre las Elecciones 2023"
  },
  {
    max: 6,
    meme: good,
    color: "EEFF26",
    description: "Aprobás raspando.",
    secondayDescription: "Pero como votar, tenés que votar, mejor entrá a #MeRepresenta para saber todo sobre las Elecciones 2023"
  },
  {
    max: 8,
    meme: veryGood,
    color: "F7A334",
    description: "Sin duda, tenés altas chances de ganar en la discusión familiar del domingo.",
    secondayDescription: "Para saber más sobre las Elecciones 2023, entrá a #MeRepresenta"
  },
  {
    max: 10,
    meme: excellent,
    color: "32F991",
    description: "Mis respetos: tenés un gran conocimiento de la política argentina 👏.",
    secondayDescription: "Para saber aún más sobre las Elecciones 2023, entrá a #MeRepresenta"
  }
];

const resultByScore = score => _.find(resultsByScore, ({ max }) => score <= max);

const ProgressWithResultColor = ({ score }) => {
  const result = resultByScore(score);
  const color = `#${result.color}`;

  return <Progress total={10} current={score} color={color} />
};

const backgrounds = [ FirstLoading, SecondLoading, ThirdLoading, FirstLoading ];
const FinalLoading = ({ setDoneLoading }) => {
  const [backgroundNumber, setBackgroundNumber] = useState(0);
  const background = _.get(backgrounds, backgroundNumber);
  const moveBackground = () => {
    setBackgroundNumber(backgroundNumber+1);
    if (backgroundNumber == 3)
      setDoneLoading(true);
  }
  setTimeout(moveBackground, 1000)

  return <WithBackground key={backgroundNumber} background={background} className="loading-background">
    <Logo color="white"/>
    <div className="centered">
      <IconSvg fill="white" className="loading-logo"/>
    </div>
  </WithBackground>
};

const Score = ({ score, total, setPlayAgain }) => {
  const [doneLoading, setDoneLoading] = useState(false);
  const { meme, description, secondayDescription } = resultByScore(score);

  const textShare = `¿A que no superás mi puntaje ${score}/10 en esta trivia? \nPoné a prueba tus conocimientos sobre política argentina y veamos quién sabe más 😉 \nEntrá a MR que tenés toda la data sobre la elecciones.\n\nEntra a https://trivia.merepresenta.info/ para Jugar`

    const shareOnWhatsApp = () => {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textShare)}`;
      window.open(whatsappUrl, '_blank');
    };

    const shareOnTwitter = () => {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textShare)}`;
      window.open(twitterUrl, '_blank');
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(textShare);
    };



  return <div className="full-height">
    {
      doneLoading?
        <WithBackground background={Background}>
          <WithFooter color="white">
            <div className="score-container animate__animated animate__fadeIn">
              <Logo color="white"/>
              <Separator color="white" />
              <div className="result">
                <ProgressWithResultColor score={score} total={total} />
              </div>
              <img className="meme" src={meme} alt="meme resultado" />
              <p className="score-description">{_.toUpper(description)}</p>
              { secondayDescription && <p>{_.toUpper(secondayDescription)}</p> }

              <p className="share-text">Compartí tu resultado en Redes sociales</p> 
              <div>
                <a onClick={shareOnTwitter} className="iconos">
                  <TwitterIcono alt="twitter" />
                </a>
                <a onClick={shareOnWhatsApp}  className="iconos">
                  <WhatsappIcono alt="twitter" />
                </a>
                <a onClick={copyToClipboard} className="iconos">
                  <LinkIcono alt="twitter" />
                </a>
                {/* <a  className="iconos">
                  <JpgIcono alt="twitter" />
                </a>                                 */}
              </div>
              <div>
                <Button className="col-md-3 col-sm-4 col-10 play-again" variant="outline-light" onClick={setPlayAgain}>VOLVER A JUGAR</Button>
                <p className="call-to">Te invitamos a Jugar a:</p> 
                <a href="https://verdaderofalso.merepresenta.info/" >
                  <img className="vof" src={vof} alt="Jugar a verdadero o falso" />
                </a>
              </div>
              <p>ó</p>
              <p className="more-info">Encontrá más info sobre las elecciones en: </p>
              <Button target="_blank" href="https://merepresenta.info/" className="merepresenta-button col-md-3 col-sm-4 col-10" variant="light">#MEREPRESENTA</Button>
              

              {/* <p>Para conocer lo que hacemos seguinos en:</p>
              <a href="https://www.instagram.com/democraciaenred" target="_blank">
                <InstagramLogo alt="instagram" />
              </a>
              <a href="https://twitter.com/fundacionDER" target="_blank" className="twitter">
                <TwitterLogo alt="twitter" />
              </a> */}

            </div>
          </WithFooter>
        </WithBackground>
      : <FinalLoading setDoneLoading={setDoneLoading}/>
  }
  </div>
};

export default Score;