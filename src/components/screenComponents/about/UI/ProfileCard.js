import {View, Text} from 'react-native';
import React from 'react';
import {colors, typography} from '../../../../stylesheet';

const ProfileCard = ({title, value}) => {
  return (
    <View style={{paddingBottom: 26}}>
      <Text style={[typography.regular.h9, {color: colors.secondaryTextColor}]}>
        {title}
      </Text>
      <Text style={[typography.regular.h7]}>{value}</Text>
    </View>
  );
};

export default ProfileCard;
