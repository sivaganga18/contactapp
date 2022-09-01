import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';
import {colors, typography} from '../../../../stylesheet';

const UserCard = ({name, phonNumber, callback, image}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={callback}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 16,
          paddingBottom: 16,
        }}>
        <UserAvatar size={50} name={name} src={image} />
        <View style={{paddingLeft: 8}}>
          <Text style={[typography.medium.h8]}>{name}</Text>
          <Text
            style={[typography.regular.h8, {color: colors.secondaryTextColor}]}>
            {phonNumber}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;
