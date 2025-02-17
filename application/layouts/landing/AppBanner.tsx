import * as styles from './AppBanner.css';
import Image from "next/image";

export const AppBanner = () => {
  return (
    <div className={styles.appLandingLayout}>
      <div className={styles.appLandingContainer}>
        <div className={styles.bannerWrapper}>
          <Image priority={true} className={styles.bannerImage} src={'/images/banner2.webp'} alt={'thumbnail_banner'}
                 width={200}
                 height={300}/>
        </div>
        <div className={styles.contentsBoxDownloadGuid}>
          <p>
            고푸디 모바일 앱 설치하고
          </p>
          <p>
            간편하게 맛집을 검색해보세요.
          </p>
        </div>
      </div>
    </div>
  )
}
