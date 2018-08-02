import React, { Component } from 'react';
import {Image, Text, TouchableWithoutFeedback, View, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardSection from './CardSection';
import {getImageUrl} from '../clients/api.js';
import moment from 'moment';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

class ListItem extends Component {
  onRowPress() {
    Actions.details({person: this.props.person});
  }

  render() {
    const {name, dateOfBirth, gender, image, distance} = this.props.person;
    const {
      thumbnailStyle,
      headerContentStyle,
      headerContainerStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle,
      nameStyle,
      moreInforStyle,
      recordButton,
      cardStyle,
      medicalRecordsContainerStyle
    } = styles;

    const age = moment().diff(dateOfBirth, 'years');
    return (
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <View style={cardStyle}>
            <CardSection >
              <View style={thumbnailContainerStyle}>
                <Image
                    style={thumbnailStyle}
                    source={{uri: getImageUrl(image)}}
                    defaultSource={require('../spinner.gif')}
                />
              </View>
              <View style={headerContainerStyle}>
                <View style={{flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: "#dbdbdb",
                  height: 80}}>
                  <View style={headerContentStyle}>
                    <Text style={nameStyle}>{name.en}</Text>
                    <Text style={moreInforStyle}>{`${age} years • ${gender}`}</Text>
                  </View>
                  <View style={{
                    position:"absolute",
                    top: 5,
                    left: 230
                  }}>
                    <AnimatedCircularProgress
                        size={50}
                        width={3}
                        fill={distance*100}
                        rotation={0}
                        duration={1000}
                        tintColor="#7ed321"
                        backgroundColor="#F4F4F4">
                      {
                        () => (
                            <Text style={{color:'#6e6e6e'}}>
                              { Math.round(distance * 100) } %
                            </Text>
                        )
                      }
                    </AnimatedCircularProgress>
                  </View>
                </View>


                <View style={medicalRecordsContainerStyle}>
                  <Text style={recordButton}>
                    VIEW MEDICAL RECORDS
                  </Text>
                </View>
              </View>


            </CardSection>
          </View>
        </TouchableWithoutFeedback>
    );
  };
}

const styles = {
  cardStyle: {
    marginLeft: 8,
    marginTop: 4,
    marginBottom: 4,
    marginRight: 8,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: .24,
  },
  headerContainerStyle: {
    width: '100%',
    marginTop: 20
  },
  headerContentStyle: {
    flexDirection: 'column'
  },
  nameStyle: {
    fontSize: 20,
    marginBottom: 4,
    marginLeft: 21,
    color: '#6e6e6e'
  },
  moreInforStyle: {
    fontSize: 12,
    marginLeft: 21,
    color: '#a0a0a0'
  },
  recordButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#009688',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 5,
    left:85
  },
  medicalRecordsContainerStyle: {
    flexDirection: 'column',
    flex: 1
  },
  thumbnailStyle: {
    height: 158,
    width: 102,
  },
};

export default ListItem;