import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../../../stylesheet';

const SectionHeader = ({title}) => {
  return (
    <View
      style={{
        padding: 8,
        paddingLeft: 16,
        marginBottom: 8,
        backgroundColor: colors.lightBlue,
      }}>
      <Text>{title}</Text>
    </View>
  );
};

export default SectionHeader;
