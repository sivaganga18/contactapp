import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {colors, typography} from '../../stylesheet';

const CustomBotton = ({callback, text}) => {
  return (
    <TouchableOpacity
      onPress={callback}
      style={{
        margin: 16,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryColor,
      }}>
      <Text style={[typography.medium.h6, {color: colors.white}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomBotton;
