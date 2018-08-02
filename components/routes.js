import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import DetailsView from './DetailsView';
import List from './List';
import CameraView from './CameraView';

const RouterComponent = () => {
  return (
      <Router sceneStyle={{paddingTop: 20}} hideNavBar>
        <Scene key="main" hideNavBar={true}>
          <Scene
              key="takePicture"
              component={CameraView}
              title="Take a Picture"
              initial
              hideNavBar={true}
          />
          <Scene hideNavBar={true} key="list" component={List} title="List People" />
          <Scene hideNavBar={true} key="details" component={DetailsView} title="Details" />
        </Scene>
      </Router>
  );
};

export default RouterComponent;