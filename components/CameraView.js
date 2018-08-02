import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import { searchByFaceImage } from '../clients/api.js';
import Header from './Header';
import { Actions } from 'react-native-router-flux';
import Loader from './loader';

type Props = {};
export default class CameraView extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Loader
              loading={this.state.loading} />
          <Header headerText={'LabeebHQ'}/>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
          />
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
            <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style = {styles.capture}
            >
              <Text style={{fontSize: 14}}> Scan </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, width: 900 };
      const data = await this.camera.takePictureAsync(options);

      this.setState({
        loading: true
      });

      searchByFaceImage(data.uri)
      .then(resp => {
        this.setState({
          loading: false
        });
        Actions.list({list: resp})
      })
      .then(() => {
        this.setState({
          loading: false
        });
      });

      // setTimeout(() => {
      //    this.setState({
      //           loading: false
      //         });
      //   Actions.list({ list: [
      //       {
      //         "_id": "5b62bbb1fbc68e31a63204b4",
      //         "updatedAt": "2018-08-02T08:07:13.715Z",
      //         "createdAt": "2018-08-02T08:07:13.715Z",
      //         "officialId": "XYZ123",
      //         "dateOfBirth": "1970-03-14T00:00:00.000Z",
      //         "image": "e9656b0c-ea09-49a5-8b50-01d70b0e12cb",
      //         "gender": "Male",
      //         "medicalNotes": [
      //           "Misues his medications by mistake frequently"
      //         ],
      //         "contactsList": [
      //           {
      //             "name": "أحمد محمد سالم",
      //             "number": "+966512345678",
      //             "relation": "Friend",
      //             "_id": "5b62bbb1fbc68e31a63204b5"
      //           }
      //         ],
      //         "allergies": [
      //           {
      //             "name": "Nuts",
      //             "_id": "5b62bbb1fbc68e31a63204b7"
      //           },
      //           {
      //             "name": "Lactose",
      //             "_id": "5b62bbb1fbc68e31a63204b6"
      //           }
      //         ],
      //         "surgicalHistory": [
      //           {
      //             "name": "Cardiac catheterization",
      //             "date": "2000-01-29T00:00:00.000Z",
      //             "_id": "5b62bbb1fbc68e31a63204b8"
      //           }
      //         ],
      //         "medications": [
      //           {
      //             "name": "Cortizol",
      //             "dosage": "20mg",
      //             "_id": "5b62bbb1fbc68e31a63204ba"
      //           },
      //           {
      //             "name": "aspirin",
      //             "dosage": "45mg",
      //             "_id": "5b62bbb1fbc68e31a63204b9"
      //           }
      //         ],
      //         "name": {
      //           "ar": "عمر قنواتي",
      //           "en": "Omar Kanawati"
      //         },
      //         "distance": 0.99,
      //         "__v": 0
      //       },
      //       {
      //         "_id": "5b62bbb1fbc68e31a63204b4",
      //         "updatedAt": "2018-08-02T08:07:13.715Z",
      //         "createdAt": "2018-08-02T08:07:13.715Z",
      //         "officialId": "XYZ123",
      //         "dateOfBirth": "1970-03-14T00:00:00.000Z",
      //         "image": "e9656b0c-ea09-49a5-8b50-01d70b0e12cb",
      //         "gender": "Male",
      //         "medicalNotes": [
      //           "Misues his medications by mistake frequently"
      //         ],
      //         "contactsList": [
      //           {
      //             "name": "أحمد محمد سالم",
      //             "number": "+966512345678",
      //             "relation": "Friend",
      //             "_id": "5b62bbb1fbc68e31a63204b5"
      //           }
      //         ],
      //         "allergies": [
      //           {
      //             "name": "Nuts",
      //             "_id": "5b62bbb1fbc68e31a63204b7"
      //           },
      //           {
      //             "name": "Lactose",
      //             "_id": "5b62bbb1fbc68e31a63204b6"
      //           }
      //         ],
      //         "surgicalHistory": [
      //           {
      //             "name": "Cardiac catheterization",
      //             "date": "2000-01-29T00:00:00.000Z",
      //             "_id": "5b62bbb1fbc68e31a63204b8"
      //           }
      //         ],
      //         "medications": [
      //           {
      //             "name": "Cortizol",
      //             "dosage": "20mg",
      //             "_id": "5b62bbb1fbc68e31a63204ba"
      //           },
      //           {
      //             "name": "aspirin",
      //             "dosage": "45mg",
      //             "_id": "5b62bbb1fbc68e31a63204b9"
      //           }
      //         ],
      //         "distance": 0.45,
      //         "name": {
      //           "ar": "عمر قنواتي",
      //           "en": "Omar Kanawati"
      //         },
      //         "__v": 0
      //       },
      //       {
      //         "_id": "5b62bbb1fbc68e31a63204b4",
      //         "updatedAt": "2018-08-02T08:07:13.715Z",
      //         "createdAt": "2018-08-02T08:07:13.715Z",
      //         "officialId": "XYZ123",
      //         "dateOfBirth": "1970-03-14T00:00:00.000Z",
      //         "image": "e9656b0c-ea09-49a5-8b50-01d70b0e12cb",
      //         "gender": "Male",
      //         "medicalNotes": [
      //           "Misues his medications by mistake frequently"
      //         ],
      //         "contactsList": [
      //           {
      //             "name": "أحمد محمد سالم",
      //             "number": "+966512345678",
      //             "relation": "Friend",
      //             "_id": "5b62bbb1fbc68e31a63204b5"
      //           }
      //         ],
      //         "allergies": [
      //           {
      //             "name": "Nuts",
      //             "_id": "5b62bbb1fbc68e31a63204b7"
      //           },
      //           {
      //             "name": "Lactose",
      //             "_id": "5b62bbb1fbc68e31a63204b6"
      //           }
      //         ],
      //         "surgicalHistory": [
      //           {
      //             "name": "Cardiac catheterization",
      //             "date": "2000-01-29T00:00:00.000Z",
      //             "_id": "5b62bbb1fbc68e31a63204b8"
      //           }
      //         ],
      //         "medications": [
      //           {
      //             "name": "Cortizol",
      //             "dosage": "20mg",
      //             "_id": "5b62bbb1fbc68e31a63204ba"
      //           },
      //           {
      //             "name": "aspirin",
      //             "dosage": "45mg",
      //             "_id": "5b62bbb1fbc68e31a63204b9"
      //           }
      //         ],
      //         "distance": 0.50,
      //         "name": {
      //           "ar": "عمر قنواتي",
      //           "en": "Omar Kanawati"
      //         },
      //         "__v": 0
      //       },
      //       {
      //         "_id": "5b62bbb1fbc68e31a63204b4",
      //         "updatedAt": "2018-08-02T08:07:13.715Z",
      //         "createdAt": "2018-08-02T08:07:13.715Z",
      //         "officialId": "XYZ123",
      //         "dateOfBirth": "1970-03-14T00:00:00.000Z",
      //         "image": "e9656b0c-ea09-49a5-8b50-01d70b0e12cb",
      //         "gender": "Male",
      //         "medicalNotes": [
      //           "Misues his medications by mistake frequently"
      //         ],
      //         "contactsList": [
      //           {
      //             "name": "أحمد محمد سالم",
      //             "number": "+966512345678",
      //             "relation": "Friend",
      //             "_id": "5b62bbb1fbc68e31a63204b5"
      //           }
      //         ],
      //         "distance": 0.85,
      //         "allergies": [
      //           {
      //             "name": "Nuts",
      //             "_id": "5b62bbb1fbc68e31a63204b7"
      //           },
      //           {
      //             "name": "Lactose",
      //             "_id": "5b62bbb1fbc68e31a63204b6"
      //           }
      //         ],
      //         "surgicalHistory": [
      //           {
      //             "name": "Cardiac catheterization",
      //             "date": "2000-01-29T00:00:00.000Z",
      //             "_id": "5b62bbb1fbc68e31a63204b8"
      //           }
      //         ],
      //         "medications": [
      //           {
      //             "name": "Cortizol",
      //             "dosage": "20mg",
      //             "_id": "5b62bbb1fbc68e31a63204ba"
      //           },
      //           {
      //             "name": "aspirin",
      //             "dosage": "45mg",
      //             "_id": "5b62bbb1fbc68e31a63204b9"
      //           }
      //         ],
      //         "name": {
      //           "ar": "عمر قنواتي",
      //           "en": "Omar Kanawati"
      //         },
      //         "__v": 0
      //       }
      //     ]})
      // }, 10)
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

