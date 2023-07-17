import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import Input from "ui/input/input";

interface PasswordInputInputProps {
  onChange: (value: string) => void;
  value: string;
}

const PasswordInput:FC<PasswordInputInputProps> = memo(({onChange, value}) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange])

  return (
    <Input name="password" type="text" placeholder="Введите пароль" value={value} onChange={handleChange}/>
);
});

export default PasswordInput;
