import React from 'react';
import { Text, View, Image, Linking, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {getImageUrl} from '../clients/api.js'
import CardSection from './CardSection';
import { Actions } from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from '../node_modules/moment';


const DetailsView = (props) => {
  const {
    name,
    dateOfBirth,
    gender,
    image,
    contactsList,
    medications,
    surgicalHistory,
    allergies
  } = props.person;
  const {
    thumbnailStyle,
    sectionStyle,
    thumbnailContainerStyle,
    headerStyle,
    iconStyle,
    emergencyContact,
    titleStyle,
    nameStyle,
    moreInforStyle,
    generalInfoContainer,
    listItemStyle,
    sectionHeader,
    buttonStyle
  } = styles;

  const age = moment().diff(dateOfBirth, 'years');

  return (
      <View style={{flex: 1}}>
        <View style={headerStyle}>
          <View style={iconStyle}>
            <TouchableWithoutFeedback onPress={() => Actions.pop()}>
              <FontAwesome5.Button name={'arrow-left'} backgroundColor={'#00BBD3'}/>
            </TouchableWithoutFeedback>
          </View>
          <View style={thumbnailContainerStyle}>
            <Image
                style={thumbnailStyle}
                source={{uri: getImageUrl(image)}}
                loadingIndicatorSource={require('../spinner.gif')}
            />
          </View>
          <View style={generalInfoContainer}>
            <Text style={nameStyle}>{name.en}</Text>
            <Text style={moreInforStyle}>{`${age} years • ${gender}`}</Text>
          </View>
        </View>
<ScrollView >
        <View>
          <View>
            <View style={emergencyContact}>
              <View style={sectionHeader}>
                <FontAwesome5.Button name={'id-card'} backgroundColor={'#f0f0f0'} color={'#696969'}/>
                <Text style={titleStyle}>Emergency Contact</Text>
              </View>
              {
                contactsList.map(c => (
                    <View key={c._id}>
                    <Text style={listItemStyle}>{c.name}</Text>
                    <Text style={listItemStyle}>{c.number}</Text>
                    </View>
                      )
                )
              }
            </View>
          </View>
            <View style={sectionStyle}>
              <View style={sectionHeader}>
                <FontAwesome5.Button name={'pills'} style={{alignSelf: 'flex-start'}} backgroundColor={'white'} color={'#696969'}/>
                <Text style={titleStyle}>Medications</Text>
              </View>
              {
                medications.map(m => (<Text key={m._id} style={listItemStyle}>• {m.name} - {m.dosage}</Text>))
              }
            </View>
          <View>
            <View style={sectionStyle}>
              <View style={sectionHeader}>
                <FontAwesome5.Button name={'notes-medical'} backgroundColor={'white'} color={'#696969'}/>
               <Text style={titleStyle}>Surgical History</Text>
              </View>
              {
                surgicalHistory.map(s => (<Text key={s._id} style={listItemStyle}>{s.name}</Text>))
              }
            </View>
          </View>
          <View>
            <View style={sectionStyle}>
              <View style={sectionHeader}>
                <FontAwesome5.Button name={'prescription-bottle'} backgroundColor={'white'} color={'#696969'}/>
                <Text style={titleStyle}>Allergies</Text>
              </View>
              {
                allergies.map(a => (<Text key={a._id} style={listItemStyle}>{a.name}</Text>))
              }
            </View>
          </View>
        </View>
</ScrollView>
      </View>
  );
};

const styles = {
  headerStyle: {
    flexDirection: 'column',
    backgroundColor: '#00BBD3',
    height: 260,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    elevation: 2,
    position: 'relative'
  },
  sectionStyle: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 6,

  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: .64,
    paddingTop: -15
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  iconStyle: {
    backgroundColor: '#00BBD3',
    paddingBottom: 15,

  },
  emergencyContact: {
    backgroundColor: '#f0f0f0',
    height: 120,
    width: '100%',
    flexDirection: 'column',

  },
  titleStyle: {
    fontSize: 24,
    color: '#696969'
  },
  nameStyle: {
    fontSize: 20,
    marginBottom: 4,
    color: 'white'
  },
  moreInforStyle: {
    fontSize: 12,
    color: 'white',

  },
  generalInfoContainer: {
    fontColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemStyle: {
    fontSize: 16,
    color: '#a3a3a3',
    marginLeft: 60,
    marginBottom: 5
  },
  sectionHeader: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 25
  },

};

export default DetailsView;