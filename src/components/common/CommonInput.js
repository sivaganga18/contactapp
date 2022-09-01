import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {colors, typography} from '../../stylesheet';

const CommonInput = ({value, onChangeText, placeholder, error}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[
          typography.medium.h7,
          {
            height: 56,
            padding: 16,
            backgroundColor: colors.lightBlue,
            borderRadius: 8,
            margin: 16,
            marginBottom: 0,
          },
        ]}
        placeholder={placeholder}
      />
      <View style={{paddingTop: 3, paddingLeft: 18}}>
        <Text style={[typography.regular.h9, {color: 'red'}]}>
          {error ? error : ''}
        </Text>
      </View>
    </View>
  );
};

export default CommonInput;
