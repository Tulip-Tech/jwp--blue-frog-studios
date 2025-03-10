import React from 'react';
import classNames from 'classnames';
import { testId } from '@jwp/ott-common/src/utils/common';

import Modal from '../Modal/Modal';
import Slide from '../Animation/Slide/Slide';
import ModalCloseButton from '../ModalCloseButton/ModalCloseButton';

import styles from './Dialog.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
  size?: 'small' | 'large';
  children: React.ReactNode;
  role?: React.AriaRole;
  hideCloseButton?: boolean;
} & React.AriaAttributes;

const Dialog: React.FC<Props> = ({ open, onClose, children, size = 'small', role, hideCloseButton, ...ariaAttributes }: Props) => {
  return (
    <Modal open={open} onClose={onClose} AnimationComponent={Slide} role={role} centered>
      <div className={classNames(styles.dialog, styles[size])} data-testid={testId('dialog')} {...ariaAttributes}>
        {children}
        {!hideCloseButton && <ModalCloseButton onClick={onClose} />}
      </div>
    </Modal>
  );
};

export default Dialog;
