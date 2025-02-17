import React from "react";
import useModalStore, { ModalType } from "@/shared/store/modalStore";

export type Element = React.MutableRefObject<HTMLDivElement> | any;

export default function useModal(ele: Element) {
  const { setModalType, setIsOpen } = useModalStore();

  const onRequestClose = () => {
    setIsOpen(false);
    setModalType("" as ModalType.EMPTY);
  };

  const outerClickEvent = (e: React.MouseEvent) => {
    const { target } = e;
    if (ele && ele.current) {
      const elements = ele.current.contains(target as Node);
      if (!elements) onRequestClose();
    }
  };

  return { onRequestClose, outerClickEvent };
}
