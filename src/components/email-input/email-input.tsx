import React, {ChangeEvent, FC, memo, useCallback} from 'react';
import Input from "ui/input/input";

interface EmailInputProps {
  onChange: (value: string) => void;
  value: string;
}

const EmailInput:FC<EmailInputProps> = memo(({onChange, value}) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange])

  return (<Input name="email" type="email" placeholder="Введите почту" value={value} onChange={handleChange}/>);
});

export default EmailInput;
