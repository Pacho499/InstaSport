import React from 'react';
import {Ionicons} from '@expo/vector-icons';

const HeaderButton = (props) => {
  const renderLeft = () => <Ionicons name='md-menu' size={32} onPress={props.onPressLeft} />;
  const renderRight = () => <Ionicons name='md-add-circle-outline' size={32} onPress={props.onPressRight} />;
  return props.left ? renderLeft() : renderRight()
  
};

export default HeaderButton;
