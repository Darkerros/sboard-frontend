import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import Input from "../../ui/input/input";

interface NicknameInputProps {
  onChange: (value: string) => void;
  value: string;
}

const NicknameInput:FC<NicknameInputProps> = memo(({onChange, value}) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange])

  return (
    <Input name="nickname" type="text" placeholder="Введите никнейм" value={value} onChange={handleChange}/>
  );
});

export default NicknameInput;
