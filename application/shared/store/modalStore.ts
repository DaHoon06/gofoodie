import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

export enum ModalType {
  EMPTY = "",
  SIGN_ALERT = "signInAlertModal",
  REGISTER_SHOP = "registerShop",
  REGISTER_MAP = "registerMap",
}

export enum OpenType {
  SLIDE = "slide",
  FADE = "fade",
}

type ModalInitialState = {
  isOpen: boolean;
  type: ModalType;
  openType: OpenType;
};

type SetModalStore = {
  setIsOpen: (payload: boolean) => void;
  setModalType: (type: ModalType) => void;
  setOpenType: (type: OpenType) => void;
  closeModal: () => void;
};

const initialState: ModalInitialState = {
  isOpen: false,
  type: ModalType.EMPTY,
  openType: OpenType.SLIDE,
};

const useModalStore = create(
  devtools(
    combine<ModalInitialState, SetModalStore>(initialState, (set) => ({
      setIsOpen: (payload: boolean) => set(() => ({ isOpen: payload })),
      setModalType: (type: ModalType) => set(() => ({ type })),
      setOpenType: (openType: OpenType) => set(() => ({ openType })),
      closeModal: () =>
        set(() => ({
          isOpen: false,
          type: ModalType.EMPTY,
          openType: OpenType.SLIDE,
        })),
    }))
  )
);

export default useModalStore;
