import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';

const modalContainer = document.querySelector('#modal') as Element;

const ModalContainer = styled.div`
  top: 0;
  left: 0;
  z-index: 3;
  position: fixed;

  width: 100%;
  height: 100%;


  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.25);
  cursor: pointer;

  width: 100%;
  height: 100%;
`;

const ModalContentContainer = styled.div`
  z-index: 5;
`;

interface ModalProps {
  /*
   * Колюек срабатывающий при закрытии модалки
   */
  onClose: VoidFunction;
  /*
   * Любая нода
   */
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {

  return createPortal(
    <ModalContainer>
      <ModalOverlay onClick={onClose} />
      <ModalContentContainer>
        {children}
      </ModalContentContainer>
    </ModalContainer>,
    modalContainer);
};


export default Modal;
