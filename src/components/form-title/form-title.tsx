import React, { FC, memo, ReactNode } from 'react';
import { styled } from 'styled-components';

const FormTitleComponent = styled.h3`
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

interface FormTitleProps {
  children: ReactNode;
}

const FormTitle: FC<FormTitleProps> = memo(({ children }) => {
  return (
    <FormTitleComponent>
      {children}
    </FormTitleComponent>
  );
});

export default FormTitle;
