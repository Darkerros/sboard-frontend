import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import Input from "../../ui/input/input";

interface TitleInputProps {
  /*
   * Текущее значения названия
   */
  value: string;
  /*
   * Колбек срабатывающий при изменении значения
   */
  onChange: (value: string) => void;
}

const TitleInput:FC<TitleInputProps> = memo(({onChange, value}) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange])

  return (
    <Input name="title" type="text" placeholder="Введите название статьи" value={value} onChange={handleChange}/>
  );
});

export default TitleInput;
