import React, { Component } from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardSection from './CardSection';
import {getImageUrl} from '../clients/api.js';

class ListItem extends Component {
  onRowPress() {
    console.log('test')
    Actions.details({person: this.props.person});
  }

  render() {
    const {name, dateOfBirth, gender, image} = this.props.person;
    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle
    } = styles;

    return (
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <View>
            <CardSection>
              <View style={thumbnailContainerStyle}>
                <Image
                    style={thumbnailStyle}
                    source={{uri: getImageUrl(image)}}
                />
              </View>
              <View style={headerContentStyle}>
                <Text>{name.en}</Text>
                <Text>{`${dateOfBirth} - ${gender}`}</Text>
              </View>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
    );
  };
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 150,
    width: 75
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  }
};

export default ListItem;