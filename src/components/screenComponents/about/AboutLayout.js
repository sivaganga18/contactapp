import {View, Text} from 'react-native';
import React from 'react';
import CommonHeader from '../../common/CommonHeader';
import {colors} from '../../../stylesheet';
import ProfileHeader from './UI/ProfileHeader';
import {map} from 'lodash';
import ProfileCard from './UI/ProfileCard';

const AboutLayout = () => {
  const details = [
    {
      title: 'Phone Number',
      value: '+91 904329562',
    },
    {
      title: 'Email Address',
      value: 'sivaganga18@gmail.com',
    },
    {
      title: 'Website',
      value: 'www.sivaganga.com',
    },
    {
      title: 'Date of Birth',
      value: '20 Aug, 1991',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CommonHeader title={'ABOUT'} />
      <ProfileHeader />
      <View style={{padding: 26, paddingTop: 56}}>
        {map(details, (detail, key) => {
          return (
            <ProfileCard key={key} value={detail.value} title={detail.title} />
          );
        })}
      </View>
    </View>
  );
};

export default AboutLayout;
