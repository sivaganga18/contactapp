import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomStatusBar from './CustomStatusBar';
import {colors, typography} from '../../stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

const CommonHeader = ({
  title,
  leftIcon,
  rightIcon,
  rightCallback,
  leftCallback,
}) => {
  return (
    <View
      style={{
        borderBottomWidth: 3,
        borderBottomColor: colors.lightBlue,
      }}>
      <CustomStatusBar />
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {leftIcon ? (
          <TouchableOpacity onPress={leftCallback} style={{padding: 16}}>
            <View
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderRadius: 35 / 2,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: colors.secondaryBorderColor,
              }}>
              <Icon name={leftIcon} size={15} color={colors.secondaryColor} />
            </View>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <View style={{padding: 16, paddingLeft: 0, paddingRight: 0}}>
          <Text style={[typography.bold.h5]}>{title}</Text>
        </View>
        {rightIcon ? (
          <TouchableOpacity onPress={rightCallback} style={{padding: 16}}>
            <View
              style={{
                width: 35,
                height: 35,
                borderWidth: 2,
                borderRadius: 35 / 2,
                borderColor: colors.secondaryBorderColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="person-add" size={18} color={colors.secondaryColor} />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={{width: 35, height: 35}} />
        )}
      </View>
    </View>
  );
};

export default CommonHeader;
