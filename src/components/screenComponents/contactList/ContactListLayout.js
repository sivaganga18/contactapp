import {View, SectionList, Text} from 'react-native';
import React from 'react';
import CommonHeader from '../../common/CommonHeader';
import SearchHeader from './UI/SearchHeader';
import {colors} from '../../../stylesheet';
import {SectionFormat} from '../../../utils/SectionFormat';
import UserCard from './UI/UserCard';
import SectionHeader from './UI/SectionHeader';

const ContactListLayout = ({
  userCallback,
  createCallback,
  contactArray,
  drawerCallback,
}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CommonHeader
        leftIcon={'ios-grid'}
        rightIcon
        leftCallback={drawerCallback}
        rightCallback={createCallback}
        title={'CONTACTS'}
      />
      <SearchHeader />
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={SectionFormat(contactArray)}
        renderItem={({item, key}) => (
          <UserCard
            key={key}
            name={`${item.first_name} ${item.last_name ? item.last_name : ''}`}
            phonNumber={`+91 ${item.phone_number}`}
            image={`https://picsum.photos/200/300?random={key+1}`}
            callback={() => {
              userCallback(item);
            }}
          />
        )}
        renderSectionHeader={({section}) => (
          <SectionHeader title={section.title} />
        )}
        keyExtractor={item => item.index}
      />
    </View>
  );
};

export default ContactListLayout;
