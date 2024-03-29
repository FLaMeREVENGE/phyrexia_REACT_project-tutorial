import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
<SubHeading title='come to power yourself' />
<h1 className='app__header-h1'>Phyrexia - All will be one</h1>
<p className='p__opensans' style={{margin: '2rem 0'}}>Esse in consectetur fugiat enim nisi cillum laborum sit. Cupidatat cupidatat commodo aute elit ad quis commodo qui deserunt culpa pariatur ut. Eiusmod eiusmod dolor ex quis exercitation. Ut occaecat elit esse laboris enim.</p>
<button type='button' className='custom__button'>Explore</button>
    </div>

<div className='app__wrapper_img'>
<img src={images.welcome} alt='header img' />

    </div>
  </div>
);

export default Header;
