import {View, SectionList, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../../../stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchHeader = () => {
  return (
    <View style={{padding: 16}}>
      <View style={{}}>
        <TextInput
          style={{
            // padding: 16,
            paddingLeft: 16,
            paddingRight: 56,
            height: 46,
            borderRadius: 46 / 2,
            backgroundColor: colors.lightBlue,
          }}
        />
        <View style={{position: 'absolute', right: 0}}>
          <View
            style={{
              width: 46,
              height: 46,
              borderRadius: 46 / 2,
              backgroundColor: colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="search" size={20} color={colors.white} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchHeader;
