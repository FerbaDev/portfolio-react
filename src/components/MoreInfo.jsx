import { useState } from 'react';
import '../styles/moreInfo.css';


const MoreInfo = () => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="principal">
      <div className="mas-info" id="masInfo">
        <p>¿Más info?</p>
        <div className="info-botones">
          <button onClick={() => setShowInfo(false)}>Cancelar</button>
          <button onClick={() => setShowInfo(true)}>Continuar</button>
        </div>
      </div>
      {showInfo && (
        <div id="contenedorEstudios">
          <div className="estudios">
            <fieldset className="fieldset">
              <legend className="legend">Mis conocimientos:</legend>
              <ul className="lista-estudios">
                <li>HTML5</li>
                <li>CSS3 y librerías</li>
                <li>Flex-box y Grid</li>
                <li>Bootstrap</li>
                <li>Sass</li>
                <li>Responsive design</li>
                <li>Accesibilidad</li>
                <li>SEO</li>
                <li>Git/Github</li>
                <li>JavaScript</li>
                <li>APIs</li>
                <li>React JS</li>
                <li>NPM</li>
                <li>Vite</li>
                <li>Material UI</li>
                <li>Integración de Mercado Pago</li>
                <li>Firebase</li>
                <li>Node js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Passport</li>
                <li>JWT</li>
                <li>Mongoose</li>
                <li>Websockets</li>
                <li>Twilio & OWASP</li>
              </ul>
            </fieldset>
          </div>
        </div>
      )}
    </div>
  )
}


export default MoreInfo