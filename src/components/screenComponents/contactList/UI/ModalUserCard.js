import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import UserAvatar from 'react-native-user-avatar';
import {colors, typography} from '../../../../stylesheet';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Ionicons';

const ModalUserCard = ({currentData, callback}) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View>
      <View style={{alignItems: 'center', paddingTop: 16}}>
        <UserAvatar
          bgColor={'transparent'}
          size={100}
          name={currentData.first_name}
          src={`https://picsum.photos/200/300?random=${currentData.index}`}
        />
        <View style={{alignItems: 'center', paddingTop: 16}}>
          <Text style={[typography.semiBold.h5]}>{`${currentData.first_name}${
            currentData.last_name ? ` ${currentData.last_name}` : ''
          }`}</Text>
          <Text
            style={[typography.regular.h7, {color: colors.secondaryTextColor}]}>
            {currentData.work}
          </Text>
        </View>
      </View>
      <View style={[{padding: 26}]}>
        <View style={{paddingBottom: 26}}>
          <Text
            style={[typography.regular.h9, {color: colors.secondaryTextColor}]}>
            {'Phone Number'}
          </Text>
          <Text style={[typography.regular.h7]}>
            {`+91 ${currentData.phone_number}`}
          </Text>
        </View>
        <View style={{paddingBottom: 26}}>
          <Text
            style={[typography.regular.h9, {color: colors.secondaryTextColor}]}>
            {'Email Address'}
          </Text>
          <Text style={[typography.regular.h7]}>
            {currentData.email ? currentData.email : '-'}
          </Text>
        </View>
      </View>
      <View style={{position: 'absolute', right: 0}}>
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity style={{padding: 16}} onPress={showMenu}>
              <Icon name="ellipsis-vertical" color={'#000'} size={26} />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}>
          <MenuItem
            onPress={() => {
              callback('edit');
              hideMenu();
            }}>
            <Text style={[typography.regular.h8]}>Edit</Text>
          </MenuItem>
          <MenuItem
            onPress={() => {
              callback('delete');
              hideMenu();
            }}>
            <Text style={[typography.regular.h8]}>Delete</Text>
          </MenuItem>
        </Menu>
      </View>
    </View>
  );
};

export default ModalUserCard;
