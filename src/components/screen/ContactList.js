import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import ContactListLayout from '../screenComponents/contactList/ContactListLayout';
import {colors, typography} from '../../stylesheet';
import ModalUserCard from '../screenComponents/contactList/UI/ModalUserCard';
import Drawer from 'react-native-drawer';
import Share from 'react-native-share';

const ContactList = ({navigation, contactReducer: {contactArray}, actions}) => {
  const [currentData, setCurrentData] = useState({});

  const bottomSheetRef = useRef();
  const drawerRef = useRef();

  const snapPoints = ['50%'];

  const handleSheetChanges = index => {};

  const doShare = () => {
    const options = {
      title: 'Contact App',
      message: 'Install Contact APP',
      url: 'https://contactapp.in',
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View style={{flex: 1}}>
      <Drawer
        ref={drawerRef}
        openDrawerOffset={0.5}
        panCloseMask={0.2}
        tapToClose={true}
        content={
          <View
            style={{flex: 1, backgroundColor: colors.white, paddingTop: 56}}>
            <TouchableOpacity onPress={doShare} style={{padding: 16}}>
              <Text style={[typography.medium.h7]}>Share App</Text>
            </TouchableOpacity>
          </View>
        }>
        <ContactListLayout
          contactArray={contactArray}
          userCallback={data => {
            bottomSheetRef.current?.snapToIndex(0);
            setCurrentData(data);
          }}
          drawerCallback={() => {
            drawerRef.current.open();
          }}
          createCallback={() => {
            navigation.navigate('managecontact');
          }}
        />
      </Drawer>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backgroundColor={colors.black}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            close={() => {
              bottomSheetRef.current?.close();
              setCurrentData(null);
            }}
          />
        )}
        onChange={handleSheetChanges}>
        {currentData && currentData.first_name ? (
          <ModalUserCard
            currentData={currentData}
            callback={callbackType => {
              bottomSheetRef.current?.close();
              if (callbackType === 'edit') {
                actions.tempContactAction(currentData);
                navigation.navigate('managecontact');
              } else if (callbackType === 'delete') {
                actions.deleteContactAction(currentData);
              }
              setCurrentData(null);
            }}
          />
        ) : (
          <View />
        )}
      </BottomSheet>
    </View>
  );
};

export default ContactList;
