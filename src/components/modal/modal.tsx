import {CloseModal} from "../../svg/export-svg";
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import {createPortal} from "react-dom";
import React, {useEffect} from "react";
import style from './modal.module.css'
const modalRoot  = document.getElementById("react-modals") as HTMLElement;

interface IModal {
  onClose: () => void,
}

export const Modal = (props : React.PropsWithChildren<IModal>) => {

  const btnEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape'){
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', btnEsc)
    return (() => {
      document.removeEventListener('keydown', btnEsc)
    })
  }, []) // eslint-disable-line


    return createPortal(
      (
        <>
          <ModalOverlay onClose={props.onClose}>
            <div onClick={(e) => {e.stopPropagation()}}>
              <img
                  className={`${style.clearIcon} absolute right-0 top-0 pt-6 pr-6 cursor-pointer z-10`}
                  src={CloseModal}
                  alt={'close icon for click'}
                  onClick={props.onClose}
              />
              <div  >
                {props.children}
              </div>
            </div>
            </ModalOverlay>
        </>
      ),
      modalRoot
    );
}


