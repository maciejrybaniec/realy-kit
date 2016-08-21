/**
 * Application main module.
 * @module Application
 * @author maciej.rybaniec@gmail.com
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import Relay from 'react-relay';

 import Main from 'components/Main';
 import MainRoute from 'routes/MainRoute';

 import config from './config';

 Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(config.apiURL)
);

 ReactDOM.render(
   <Relay.RootContainer
     Component={Main}
     route={new MainRoute()}
   />,
   document.getElementById('root')
 );
