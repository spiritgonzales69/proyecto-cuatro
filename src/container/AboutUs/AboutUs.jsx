import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Somos un restaurante de comida rápida con un ambiente familiar y cálido. Ofrecemos servicio de restaurante, servicio rápido y servicio a domicilio.</p>
        <button type="button" className="custom__button">Saber Mas</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Con el trabajo diario y perseverancia nos posicionamos en el gusto y preferencia de nuestros clientes logrando así crecer de una forma significativa desde ampliar los servicios, remodelar el lugar, contratar más personal hasta el poder ofrecer un servicio a domicilio</p>
        <button type="button" className="custom__button">Saber Mas</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
