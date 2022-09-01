import {View, Text} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonHeader from '../../common/CommonHeader';
import CommonInput from '../../common/CommonInput';
import CustomBotton from '../../common/CustomBotton';

const ManageContactLayout = ({
  formData,
  onChangeText,
  errors,
  callback,
  backCallback,
  isEditContact,
}) => {
  return (
    <View style={{flex: 1}}>
      <CommonHeader
        leftIcon="arrow-back"
        leftCallback={backCallback}
        title={isEditContact ? 'Edit Contact' : 'Create Contact'}
      />
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <CommonInput
          placeholder={'First Name'}
          value={formData.first_name}
          onChangeText={text => {
            onChangeText(text, 'first_name');
          }}
          error={errors.first_name}
        />
        <CommonInput
          placeholder={'Last Name'}
          value={formData.last_name}
          onChangeText={text => {
            onChangeText(text, 'last_name');
          }}
          error={errors.last_name}
        />
        <CommonInput
          placeholder={'Phone Number'}
          value={formData.phone_number}
          onChangeText={text => {
            onChangeText(text, 'phone_number');
          }}
          error={errors.phone_number}
        />
        <CommonInput
          placeholder={'Email Address'}
          value={formData.email}
          onChangeText={text => {
            onChangeText(text, 'email');
          }}
          error={errors.email}
        />
        <CommonInput
          placeholder={'Work'}
          value={formData.work}
          onChangeText={text => {
            onChangeText(text, 'work');
          }}
          error={errors.work}
        />
        <CustomBotton text="Create" callback={callback} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ManageContactLayout;
