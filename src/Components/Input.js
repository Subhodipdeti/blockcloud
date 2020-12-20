import React, {useImperativeHandle, forwardRef, useState, useRef} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';
import { Icon } from '../Assets/icons';
import useAppTheme from '../Themes/Context';

function Input({style, ...other}, ref) {
  const {theme} = useAppTheme();

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
  }));

  return (
    <TextInput
      ref={inputRef}
      theme={{colors: {background: theme.colors.surface}}}
      {...other}
      style={[style]}
    />
  );
}

Input = forwardRef(Input);

export function PasswordInputX(props, ref) {
  const thisRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      thisRef.current.focus();
    },
  }));

  const [visible, toggleVisibility] = useState(false);

  const toggle = () => {
    toggleVisibility(!visible);
  };

  return (
    <View>
      <Input ref={thisRef} {...props} secureTextEntry={!visible} />
      <View
        style={{
          position: 'absolute',
          justifyContent: 'flex-end',
          top: 0,
          bottom: 0,
          right: 0,
        }}>
        <TouchableOpacity onPress={toggle}>
          <View style={{padding: 10}}>
            <Icon name={visible ? 'md-eye' : 'md-eye-off'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

PasswordInputX = React.memo(forwardRef(PasswordInputX));

export default React.memo(Input);