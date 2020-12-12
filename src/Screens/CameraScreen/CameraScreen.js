import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RNCamera} from 'react-native-camera';
import {Appbar} from 'react-native-paper';
import BarcodeMask from 'react-native-barcode-mask';
// import Loading from './Loading';

class Camera extends PureComponent {
  state = {
    spinner: false,
  };
  render() {
    const {screenName} = this.props?.route?.params;
    console.log('===>>', this.props.navigation);
    return (
      <>
        <Appbar.Header style={{backgroundColor: '#192A56'}}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Text
            style={{fontFamily: 'BlissPro-Bold', fontSize: 18, color: '#fff'}}>
            {screenName}
          </Text>
        </Appbar.Header>
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            captureAudio={false}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
          <BarcodeMask />
          <View
            style={{
              width: '40%',
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-around',
              position: 'absolute',
              bottom: 20,
            }}>
            {/* <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={[
                styles.capture,
                {borderTopLeftRadius: 50, borderBottomLeftRadius: 50},
              ]}>
              <MaterialCommunityIcons name="camera" size={30} color="#fff" />
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => this.props.closeCamera()}
              style={[
                styles.capture,
                {
                  borderLeftColor: '#005D62',
                  borderLeftWidth: 1,
                  borderTopRightRadius: 50,
                  borderBottomRightRadius: 50,
                },
              ]}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={25}
                color="#003948"
              />
            </TouchableOpacity> */}
          </View>
          {/* <Loading spin={this.state.spinner} /> */}
        </View>
      </>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      this.setState({spinner: true});
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      let prefixBase64Uri = `data:image/jpeg;base64,${data.base64}`;
      this.props.afterCapture(prefixBase64Uri);
      console.log(data.uri);
      this.setState({spinner: false});
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    // backgroundColor: '#c3d500',
    alignItems: 'center',
    padding: 15,
    width: '50%',
  },
});

export default Camera;
