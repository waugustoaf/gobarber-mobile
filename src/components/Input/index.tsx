import { useField } from '@unform/core';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { TextInputProps } from 'react-native';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputElementRef = useRef<any>(null);

  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(value => !value);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      path: 'value',
      ref: inputValueRef.current,
      // setValue(ref: any, value) {
      //   inputValueRef.current.value = value;
      //   inputElementRef.current.setNaviteProps({ text: value });
      // },
      // clearValue() {
      //   inputValueRef.current.value = '';
      //   inputElementRef.current.clear();
      // },
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#ff9000' : '#666360'}
      />

      <TextInput
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        ref={inputElementRef}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
