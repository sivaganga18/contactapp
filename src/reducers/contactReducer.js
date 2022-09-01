import {cloneDeep, remove} from 'lodash';
import * as types from '../actions/actionTypes';

const initialState = {
  contactArray: [
    {
      index: 0,
      first_name: 'Lokesh',
      last_name: 'Kumar',
      phone_number: '8764225632',
      email: 'lokesh@gmail.com',
      work: 'ICICI',
    },
    {
      index: 1,
      first_name: 'Praveen',
      last_name: 'Kumar',
      phone_number: '7256328764',
      email: 'praveen@gmail.com',
      work: 'Google',
    },
    {
      index: 2,
      first_name: 'Santhosh',
      last_name: 'Pandian',
      phone_number: '8256327649',
      email: 'santhosh@gmail.com',
      work: 'Infosys',
    },
    {
      index: 3,
      first_name: 'Senthil',
      last_name: 'Kumar',
      phone_number: '6327648256',
      email: 'senthil@gmail.com',
      work: 'IDFC Bank',
    },
    {
      index: 4,
      first_name: 'Danush',
      last_name: '',
      phone_number: '8256327647',
      email: 'danush@gmail.com',
      work: 'YES Bank',
    },
    {
      index: 5,
      first_name: 'Kamala',
      last_name: 'Hashan',
      phone_number: '7648256328',
      email: 'kamal@gmail.com',
      work: 'HDFC',
    },
  ],
  tempContact: {},
  isEditContact: false,
  isContactListUpdated: false,
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_CONTACT:
      let updateContactList = cloneDeep(state.contactArray);
      let currentData = {
        index: updateContactList.length == 0 ? 0 : updateContactList.length - 1,
        ...action.newContact,
      };
      updateContactList.push(currentData);
      return Object.assign({}, state, {
        contactArray: updateContactList,
        isContactListUpdated: true,
      });
    case types.UPDATE_CONTACT:
      let updateContactList2 = cloneDeep(state.contactArray);
      updateContactList2[action.updateContact.index] = action.updateContact;
      return Object.assign({}, state, {
        contactArray: updateContactList2,
        tempContact: {},
        isEditContact: false,
        isContactListUpdated: true,
      });
    case types.DELETE_CONTACT:
      let updateContactList3 = cloneDeep(state.contactArray);
      remove(updateContactList3, (contact, key) => {
        return contact.index == action.contactId;
      });
      updateContactList3;
      return Object.assign({}, state, {
        contactArray: updateContactList3,
      });
    case types.TEMP_CONTACT:
      return Object.assign({}, state, {
        tempContact: action.tempContact,
        isEditContact: true,
      });
    case types.CLEAR_TEMP_CONTACT:
      return Object.assign({}, state, {
        tempContact: {},
        isEditContact: false,
      });
    case types.CLEAR_LOADING:
      return Object.assign({}, state, {
        isContactListUpdated: false,
      });
    default:
      return state;
  }
}
