import React from 'react';
import { connect } from 'react-redux';

import Header from '../header/header';
import Game from '../game/game'
import Controller from '../controller/controller';

const Home = () => {

  return (
    <div>
      <Header />
      <Game />
      <Controller />
    </div>
  );
}

export default connect()(Home);
