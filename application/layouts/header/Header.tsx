'use client';

import Image from "next/image";
import * as styles from './Header.css';
import {IoSearchOutline} from "react-icons/io5";
import Link from "next/link";

const SEARCH_TO = '/search'

export const Header = () => {
  return (
    <header className={styles.headerLayout}>
      <ul className={styles.headerLists}>
        <li>
          <Link href={'/'}>
            <Image priority={true} className={styles.logo} src={'/images/logo.svg'} alt={'foodie_logo'} width={120}
                   height={60}/>
          </Link>
        </li>
        <li>
          <Link href={SEARCH_TO}>
            <IoSearchOutline size={24} color={'#5e5e5e'}/>
          </Link>
        </li>
      </ul>
    </header>
  )
}
