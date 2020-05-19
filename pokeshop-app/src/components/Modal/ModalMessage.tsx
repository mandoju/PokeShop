import React from 'react';
import { Modal } from './Modal';

export const ModalMessage = ({
  showModal,
  children,
  closeFunction,
}: {
  showModal?: boolean;
  children: JSX.Element;
  closeFunction: () => void;
}) => {
  const containerStyle = showModal ? 'modal display' : 'modal';
  return (
    <Modal>
      <div
        id="modal-message"
        className={containerStyle}
        onClick={closeFunction}
      >
        <div
          className="modal-content"
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            e.stopPropagation()
          }
        >
          <div className="modal-header">
            <span
              role="button"
              className="modal-btn-close"
              onClick={closeFunction}
            >
              &times;
            </span>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </Modal>
  );
};
