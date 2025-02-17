import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

export enum ModalType {
  EMPTY = '',
  SIGN_ALERT = 'signInAlertModal'
}

type ModalInitialState = {
  isOpen: boolean;
  type: ModalType;
};

type SetModalStore = {
  setIsOpen: (payload: boolean) => void;
  setModalType: (type: ModalType) => void;
};

const initialState: ModalInitialState = {
  isOpen: false,
  type: ModalType.EMPTY,
};

const useModalStore = create(
  devtools(
    combine<ModalInitialState, SetModalStore>(initialState, (set) => ({
      setIsOpen: (payload: boolean) => set(() => ({ isOpen: payload })),
      setModalType: (type: ModalType) => set(() => ({ type })),
    }))
  )
);

export default useModalStore;
