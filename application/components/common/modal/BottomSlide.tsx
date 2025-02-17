"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement } from "react";
import { ModalProps } from "./ModalHandler";
import useModalHook from "@/shared/hooks/useModal";
import * as styles from "./BottomSlide.css";

export const BottomSlideModal = (props: ModalProps): ReactElement => {
  const { isOpen, children, ele } = props;
  const { outerClickEvent } = useModalHook(ele);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          className={styles.modalLayout}
          key={"bottom-modal-key"}
          onClick={outerClickEvent}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <motion.div
            className={styles.bottomSlideContainer}
            initial={{ opacity: 1, y: 700 }}
            transition={{ ease: [0.17, 0.67, 0.83, 1] }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 700,
            }}
          >
            <div className={styles.bottomSlideBody} ref={ele}>
              {children}
            </div>
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};
