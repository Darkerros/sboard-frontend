import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import Input from '../../ui/input/input';

interface PasswordInputInputProps {
  /*
   * Текущее значения пароля
   */
  value: string;
  /*
   * Колбек срабатывающий при изменении значения
   */
  onChange: (value: string) => void;
}

const PasswordInput: FC<PasswordInputInputProps> = memo(({ onChange, value }) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value), [onChange]);

  return (
    <Input name='password' type='password' placeholder='Введите пароль' value={value} onChange={handleChange} />
  );
});

export default PasswordInput;
