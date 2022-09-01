import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const CommonLoader = ({visible}) => {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      statusBarTranslucent
      transparent
      style={{margin: 0}}
      isVisible={visible}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    </Modal>
  );
};

export default CommonLoader;
