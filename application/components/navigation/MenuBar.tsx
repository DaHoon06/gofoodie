"use client";

import { ReactElement, useEffect, useState } from "react";
import * as styles from "./MenuBar.css";
import {
  RiHome5Line,
  RiMessage3Line,
  RiPencilFill,
  RiUserLine,
} from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { CiViewList } from "react-icons/ci";
import useModalStore, { ModalType } from "@/shared/store/modalStore";
import { useSession } from "next-auth/react";

const link = {
  home: { label: "홈", to: "/" },
  timeline: { label: "소식", to: "/timeline" },
  posts: { label: "글작성", to: "/feeds/post" },
  myFeedLists: { label: "내가 작성한 게시글", to: "/feeds" },
  management: { label: "마이", to: "/management" },
};

export const MenuBar = (): ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const { setIsOpen, setModalType } = useModalStore();
  const { data: session } = useSession();

  useEffect(() => {
    if (pathname.includes("search")) setCurrentPath("/");
    else setCurrentPath(pathname);
  }, [currentPath]);

  const onClickHandlerMenu = async (to: string) => {
    const targetLink =
      to === link.posts.to ||
      to === link.myFeedLists.to ||
      to === link.timeline.to;
    if (targetLink && !session) {
      setModalType(ModalType.SIGN_ALERT);
      setIsOpen(true);
      return;
    }
    setCurrentPath(to);
    router.push(to);
  };

  const active = (to: string) => {
    return pathname.startsWith(to) ? "#FF7101" : "#646464";
  };

  return (
    <nav className={styles.navBarBottomLayout}>
      <ul className={styles.navBarBottomContainer}>
        <li className={styles.navBarLeftBox}>
          <button
            aria-label="home-button"
            type={"button"}
            className={styles.buttonItem}
            onClick={() => onClickHandlerMenu(link.home.to)}
          >
            <RiHome5Line size={22} color={active(link.home.to)} />
          </button>
          <button
            aria-label="pick-button"
            type={"button"}
            className={styles.buttonItem}
            onClick={() => onClickHandlerMenu(link.myFeedLists.to)}
          >
            <CiViewList size={22} color={active(link.myFeedLists.to)} />
          </button>
        </li>
        <li className={styles.navBarCenterBox}>
          <button
            type={"button"}
            aria-label={"post_register_button"}
            className={styles.navBarCenterButton}
            onClick={() => onClickHandlerMenu(link.posts.to)}
          >
            <RiPencilFill size={22} color={"#fff"} />
          </button>
        </li>
        <li className={styles.navBarRightBox}>
          <button
            aria-label="message-button"
            type={"button"}
            className={styles.buttonItem}
            onClick={() => onClickHandlerMenu(link.timeline.to)}
          >
            <RiMessage3Line size={22} color={active(link.timeline.to)} />
          </button>
          <button
            aria-label="management-button"
            type={"button"}
            className={styles.buttonItem}
            onClick={() => onClickHandlerMenu(link.management.to)}
          >
            <RiUserLine size={22} color={active(link.management.to)} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
