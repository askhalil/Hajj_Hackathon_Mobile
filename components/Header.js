import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, iconStyle } = styles;

  return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        <View style={iconStyle}>
          <TouchableOpacity>
            <FontAwesome5.Button name={'search'} backgroundColor={'#00BBD3'}/>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#00BBD3',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 62,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 22,
    color: '#FFFFFF',
    paddingBottom: 15,
    paddingLeft: 24,
    fontWeight: 'bold'
  },
  iconStyle: {
    backgroundColor: '#00BBD3',
    paddingBottom: 15
  }
};

// Make the component available to other parts of the app
export default Header;