import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Actions} from 'react-native-router-flux';


// Make a component
const Header = (props) => {

  const { back, headerText } = props;

  if (back) {
    return renderWithBack(headerText);
  } else {
    return renderWithoutBack(headerText);
  }
};

const renderWithBack = (headerText) => {
  const { textStyleWithBack, viewStyleWithBack, iconStyle } = styles;

  return (<View style={viewStyleWithBack}>
    <View style={iconStyle}>
      <TouchableWithoutFeedback onPress={() => Actions.pop()}>
        <FontAwesome5.Button name={'arrow-left'} backgroundColor={'#00BBD3'}/>
      </TouchableWithoutFeedback>
    </View>
    <Text style={textStyleWithBack}>{headerText}</Text>
  </View>);
};

const renderWithoutBack = (headerText) => {
  const { textStyleWithoutBack, viewStyleWithoutBack, iconStyle } = styles;

  return (<View style={viewStyleWithoutBack}>
    <Text style={textStyleWithoutBack}>{headerText}</Text>
    <View style={iconStyle}>
      <TouchableOpacity>
        <FontAwesome5.Button name={'search'} backgroundColor={'#00BBD3'}/>
      </TouchableOpacity>
    </View>
  </View>);
};

const styles = {
  viewStyleWithoutBack: {
    flexDirection: 'row',
    backgroundColor: '#00BBD3',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    elevation: 2,
    position: 'relative'
  },
  viewStyleWithBack: {
    flexDirection: 'row',
    backgroundColor: '#00BBD3',
    alignItems: 'center',
    height: 62,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    elevation: 2,
    position: 'relative'
  },
  textStyleWithoutBack: {
    fontSize: 22,
    color: '#FFFFFF',
    paddingBottom: 15,
    paddingLeft: 24,
    fontWeight: 'bold'
  },
  textStyleWithBack: {
    fontSize: 18,
    color: '#FFFFFF',
    paddingBottom: 10,
    paddingRight: 24,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  iconStyle: {
    backgroundColor: '#00BBD3',
    paddingBottom: 15
  }
};

// Make the component available to other parts of the app
export default Header;