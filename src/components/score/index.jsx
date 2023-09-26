import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import _ from "lodash";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import roundBackground from '../../images/roundBackground.svg'
import Logo from "../logo";
import { ReactComponent as IconSvg } from '../../images/meRepresentaIcon.svg';
import Progress from '../progress';
import Separator from '../separator';
import bad from '../../images/scoreMemes/bad.jpg';
import good from '../../images/scoreMemes/good.gif';
import veryGood from '../../images/scoreMemes/veryGood.gif';
import excellent from '../../images/scoreMemes/excellent.webp';
import vof from '../../images/vof.png';
import trivia from '../../images/trivia.png';
import espectrometro from '../../images/espectrometro.png';

// import { ReactComponent as InstagramLogo } from "../../images/instagramLogo.svg";
// import { ReactComponent as TwitterLogo } from "../../images/twitterLogo.svg";
import { ReactComponent as TwitterIcono } from "../../images/iconoX.svg";
import { ReactComponent as WhatsappIcono } from "../../images/iconoWhats.svg";
import { ReactComponent as LinkIcono } from "../../images/iconoLink.svg";
// import { ReactComponent as JpgIcono } from "../../images/iconoJpg.svg";
import "./index.css";

const resultsByScore = [
  {
    max: 2,
    meme: bad,
    color: "FB2D11",
    description: "Al igual que Argentina superó obstáculos en el Mundial, tú puedes superar cualquier falta de información sobre las propuestas políticas. Infórmate sobre las discusiones de los políticos para las Elecciones Generales 2023 en #MeRepresenta y sé parte activa del proceso.",
    secondayDescription: "Pasá por #MeRepresenta para saber todo sobre las Elecciones 2023"
  },
  {
    max: 3,
    meme: good,
    color: "EEFF26",
    description: "Puede que tus conocimientos sobre las propuestas de campaña sean básicos, pero es crucial estar informado a la hora de votar. Accede a #MeRepresenta y entérate de todo sobre las Elecciones Generales 2023 y las discusiones políticas actuales.",
    secondayDescription: "Pero como votar, tenés que votar, mejor entrá a #MeRepresenta para saber todo sobre las Elecciones 2023"
  },
  {
    max: 5,
    meme: veryGood,
    color: "F7A334",
    description: "Sin duda, estás preparado para destacarte en cualquier conversación sobre las propuestas de los políticos en estas Elecciones Generales 2023. ¡Visita #MeRepresenta para seguir enriqueciendo tus conocimientos!",
    secondayDescription: "Para saber más sobre las Elecciones 2023, entrá a #MeRepresenta"
  },
  {
    max: 6,
    meme: excellent,
    color: "32F991",
    description: "Eres un verdadero experto en las propuestas de campaña de los políticos. 👏 Si quieres mantenerte al tanto de todo lo que están discutiendo para las Elecciones Generales 2023, visita #MeRepresenta y sé un ciudadano informado.",
    secondayDescription: "Para saber aún más sobre las Elecciones 2023, entrá a #MeRepresenta"
  }
];

const resultByScore = score => _.find(resultsByScore, ({ max }) => score <= max);

const ProgressWithResultColor = ({ score }) => {
  const result = resultByScore(score);
  const color = `#${result.color}`;

  return <Progress total={6} current={score} color={color} />
};

const FinalLoading = ({ setDoneLoading }) => {
  const [backgroundNumber, setBackgroundNumber] = useState(0);
  const moveBackground = () => {
    setBackgroundNumber(backgroundNumber+1);
    if (backgroundNumber === 3) setDoneLoading(true);
  }
  setTimeout(moveBackground, 1000)

  return <WithBackground  background={roundBackground} className="loading-background">
    <Logo color="black"/>
    <div className="centered">
      {/* <Spinner animation="border" role="status">
        <IconSvg fill="black" className="loading-logo"/>

      </Spinner> */}
      <Spinner animation="grow">
      <IconSvg fill="black" className="loading-logo"/>

      </Spinner>

    </div>
  </WithBackground>
};

const Score = ({ score, total, setPlayAgain }) => {
  const [doneLoading, setDoneLoading] = useState(false);
  const { meme, description, secondayDescription } = resultByScore(score);

  const textShare = `Te desafío a alcanzar mi puntaje de ${score}/6. \nPoné a prueba tu conocimiento sobre las propuestas electorales de estas elecciones. \nEntra a ¿Quien dijo? de #MeRepresenta y mostrá quién la tiene más clara.\n\nEntra a https://quiendijo.merepresenta.info/ para Jugar`

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
        <WithBackground background={roundBackground}>
          <WithFooter color="black">
            <div className="score-container animate__animated animate__fadeIn">
              <Logo color="black"/>
              <Separator color="black" />
              <div className="result">
                <ProgressWithResultColor score={score} total={total} />
              </div>
              <img className="meme" src={meme} height="200" alt="meme resultado" />
              <p className="score-description px-5">{_.toUpper(description)}</p>
              {/* { secondayDescription && <p>{_.toUpper(secondayDescription)}</p> } */}

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
                <div className="games">
                  <a href="https://verdaderofalso.merepresenta.info/" >
                    <img className="vof" src={vof} alt="Jugar a verdadero o falso" />
                  </a>
                  <a href="https://trivia.merepresenta.info/" >
                    <img className="vof" src={trivia} alt="Jugar a trivia" />
                  </a>
                  <a href="https://dequelado.merepresenta.info/" >
                    <img className="vof" src={espectrometro} alt="Jugar a espectrometro" />
                  </a>
                  {/* <a href="https://compas.merepresenta.info/" >
                    <img className="vof" src={compas} alt="Jugar a compas politico" />
                  </a> */}

                </div>
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