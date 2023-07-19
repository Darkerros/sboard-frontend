import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import { styled } from 'styled-components';

const DescriptionInputComponent = styled.textarea`
  border: solid 1px #f6f6f6;
  min-height: 120px;

  &:focus {
    outline: solid 1px #eaeaea;
  }
`;

interface DescriptionInputProps {
  /*
   * Текущее значения описания
   */
  value: string;
  /*
   * Колбек срабатывающий при изменении значения
   */
  onChange: (value: string) => void;
}

const DescriptionInput: FC<DescriptionInputProps> = memo(({ onChange, value }) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => onChange(evt.target.value), [onChange]);

  return (
    <DescriptionInputComponent name='description' placeholder='Введите описание статьи' value={value}
                               onChange={handleChange} />
  );
});

export default DescriptionInput;
