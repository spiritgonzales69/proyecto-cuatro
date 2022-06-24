import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Boletin Informativo" />
      <h1 className="headtext__cormorant">Suscribete a Nuestra Boletin informativo</h1>
      <p className="p__opensans">Nunca te pierdas nuestras ultimas actualizaciones!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Introduce tu correo electronico" />
      <button type="button" className="custom__button">Subscribirse</button>
    </div>
  </div>
);

export default Newsletter;
