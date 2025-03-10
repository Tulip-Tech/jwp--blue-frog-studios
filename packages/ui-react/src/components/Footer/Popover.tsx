import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import styles from './Footer.module.scss';

type PopoverProps = {
  message: string;
  isSuccess: boolean | null;
  onClose: () => void;
};

const CustomPopover: React.FC<PopoverProps> = ({ message, isSuccess, onClose }) => {
  return (
    <div className={`${styles.popoverContainer} ${isSuccess ? styles.success : styles.error}`}>
      {isSuccess ? <CheckCircle size={20} color="#10b981" /> : <XCircle size={20} color="#ef4444" />}
      <span className={styles.message}>{message}</span>
      <button className={styles.closeButton} onClick={onClose}>
        <X size={16} color="#6b7280" />
      </button>
    </div>
  );
};

export default CustomPopover;
