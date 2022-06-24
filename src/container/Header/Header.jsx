import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      < SubHeading title="Explorar El Nuevo Sabor" />
      <h1 className="app__header-h1">¡Barriga llena!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Es verdad que comer es una necesidad, pero comer con inteligencia es un arte.</p>
      <button type="button" className="custom__button">Explorar el Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.burguer} alt="header_img" />
    </div>
  </div>
);

export default Header;
