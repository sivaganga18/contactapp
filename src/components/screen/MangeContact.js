import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import ManageContactLayout from '../screenComponents/manageContact/ManageContactLayout';
import {isEmpty} from 'lodash';
import {
  alphabeticRegx,
  emailRegx,
  mobileRegx,
} from '../../utils/VaildationRegex';
import CommonLoader from '../common/CommonLoader';

const MangeContact = ({
  navigation,
  actions,
  contactReducer: {tempContact, isEditContact, isContactListUpdated},
}) => {
  const [formData, setFormData] = useState(
    isEditContact
      ? tempContact
      : {
          first_name: '',
          last_name: '',
          phone_number: '',
          email: '',
          work: '',
        },
  );
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    work: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isContactListUpdated) {
      clearAction();
    }
  }, [isContactListUpdated]);

  clearAction = () => {
    setIsLoading(false);
    actions.clearLoadingAction();
    navigation.goBack();
  };

  handleChangeText = (value, key) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const validationCheck = (value, key) => {
    console.log(value, key);
    let isError = '';
    if (isEmpty(value)) {
      isError = 'Please provide the necessary details';
    } else {
      if (key === 'phone_number') {
        if (mobileRegx.test(value)) {
          isError = '';
        } else {
          isError = 'Invalid phone number';
        }
      } else if (key === 'email') {
        if (emailRegx.test(value)) {
          isError = '';
        } else {
          isError = 'Invalid email address';
        }
      } else if (key === 'first_name' || key === 'last_name') {
        if (alphabeticRegx.test(value)) {
          isError = '';
        } else {
          isError =
            key == 'first_name' ? 'Invalid first name' : 'Invalid last name';
        }
      } else {
        isError = '';
      }
    }
    return isError;
  };

  const doAction = () => {
    let tempError = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      work: '',
    };

    tempError.first_name = validationCheck(formData.first_name, 'first_name');
    tempError.last_name = validationCheck(formData.last_name, 'last_name');
    tempError.email = validationCheck(formData.email, 'email');
    tempError.work = validationCheck(formData.work, 'work');
    tempError.phone_number = validationCheck(
      formData.phone_number,
      'phone_number',
    );

    setErrors(tempError);
    if (
      tempError.first_name == '' &&
      tempError.last_name == '' &&
      tempError.email == '' &&
      tempError.work == '' &&
      tempError.phone_number == ''
    ) {
      setIsLoading(true);
      setTimeout(() => {
        if (isEditContact) {
          actions.updateContactAction(formData);
        } else {
          actions.createContactAction(formData);
        }
      }, 500);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ManageContactLayout
        isEditContact={isEditContact}
        backCallback={() => {
          actions.clearTempContactAction();
          navigation.goBack();
        }}
        formData={formData}
        errors={errors}
        onChangeText={handleChangeText}
        callback={doAction}
      />
      <CommonLoader visible={isLoading} />
    </View>
  );
};

export default MangeContact;
