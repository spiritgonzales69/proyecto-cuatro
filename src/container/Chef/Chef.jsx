import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Lema del chef" />
      <h1 className="headtext__cormorant">¿En que creemos?</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"> "Ser cocinero es un gran honor.</p>
        </div>
        <p className="p__opensans"> El poeta triste escribe poemas y te hace llorar. El pintor triste pinta cuadros y te logra emocionar. El músico triste compone canciones y te hace cantar. Al cocinero triste... le está prohibido cocinar" </p>
      </div>

      <div className="app__chef-sign">
        <p>Gersson Gutierrez</p>
        <p className="p__opensans">Chef & Fundador</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
