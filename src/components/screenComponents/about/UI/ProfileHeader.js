import {View, Text} from 'react-native';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';
import {colors, typography} from '../../../../stylesheet';

const ProfileHeader = () => {
  return (
    <View style={{alignItems: 'center', paddingTop: 46}}>
      <UserAvatar
        bgColor={'transparent'}
        size={100}
        name={'Siva'}
        src={'https://picsum.photos/200/300?random=156'}
      />
      <View style={{alignItems: 'center', paddingTop: 16}}>
        <Text style={[typography.semiBold.h5]}>{'Siva Ganga'}</Text>
        <Text
          style={[typography.regular.h7, {color: colors.secondaryTextColor}]}>
          {'Vellore, India'}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
