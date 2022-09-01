import * as types from './actionTypes';

export function createContactAction(formData) {
  return dispatch => {
    dispatch({
      type: types.CREATE_CONTACT,
      newContact: formData,
    });
  };
}
export function updateContactAction(formData) {
  return dispatch => {
    dispatch({
      type: types.UPDATE_CONTACT,
      updateContact: formData,
    });
  };
}
export function deleteContactAction(formData) {
  return dispatch => {
    dispatch({
      type: types.DELETE_CONTACT,
      contactId: formData.index,
    });
  };
}

export function tempContactAction(formData) {
  return dispatch => {
    dispatch({
      type: types.TEMP_CONTACT,
      tempContact: formData,
    });
  };
}

export function clearTempContactAction() {
  return dispatch => {
    dispatch({
      type: types.CLEAR_TEMP_CONTACT,
    });
  };
}

export function clearLoadingAction() {
  return dispatch => {
    dispatch({
      type: types.CLEAR_LOADING,
    });
  };
}
