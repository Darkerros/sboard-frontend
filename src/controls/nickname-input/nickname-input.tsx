import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import Input from "../../ui/input/input";

interface NicknameInputProps {
  /*
   * Текущее значения никнейма
   */
  value: string;
  /*
   * Колбек срабатывающий при изменении значения
   */
  onChange: (value: string) => void;
}

const NicknameInput:FC<NicknameInputProps> = memo(({onChange, value}) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange])

  return (
    <Input name="nickname" type="text" placeholder="Введите никнейм" value={value} onChange={handleChange}/>
  );
});

export default NicknameInput;
