import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import {getImageUrl} from '../clients/api.js'
import CardSection from './CardSection';

const DetailsView = (props) => {
  const {name, dateOfBirth, gender, image, contactsList} = props.person;
  const {
    thumbnailStyle,
    sectionStyle,
    thumbnailContainerStyle
  } = styles;

  return (
      <View>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
                style={thumbnailStyle}
                source={{uri: getImageUrl(image)}}
            />
          </View>
        </CardSection>
        <CardSection>
          <View style={sectionStyle}>
            <Text>Emergency Contact</Text>
            <Text>{contactsList.name}</Text>
            <Text>{contactsList.number}</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={sectionStyle}>
            <Text>Medications</Text>
            <Text>{contactsList.name}</Text>
            <Text>{contactsList.number}</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={sectionStyle}>
            <Text>Emergency Contact</Text>
            <Text>{contactsList.name}</Text>
            <Text>{contactsList.number}</Text>
          </View>
        </CardSection>
      </View>
  );
};

const styles = {
  sectionStyle: {
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default DetailsView;