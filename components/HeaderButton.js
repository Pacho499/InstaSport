import React from 'react';
import {Ionicons} from '@expo/vector-icons';

const HeaderButton = (props) => {
  return <Ionicons name='md-menu' size={32} onPress={props.onPressLeft} />;
};

export default HeaderButton;
