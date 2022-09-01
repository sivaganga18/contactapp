import {View, Text} from 'react-native';
import React, {useEffect, useRef, useMemo} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {colors} from '../../../stylesheet';

const UserModal = () => {
  // ref
  const bottomSheetRef = useRef();

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  useEffect(() => {
    bottomSheetRef.current?.snapToIndex(1);
  }, []);

  const handleSheetChanges = index => {
    console.log('handleSheetChanges', index);
  };
  return (
    <View style={{position: 'absolute'}}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundColor={colors.black}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            close={() => bottomSheetRef.current?.close()}
          />
        )}
        onChange={handleSheetChanges}>
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default UserModal;
