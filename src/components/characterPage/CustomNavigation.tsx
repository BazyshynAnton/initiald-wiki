import { useSwiper } from 'swiper/react'

import styles from '@/styles/characterPage/CharacterPage.module.scss'

export default function CustomNavigation() {
  const swiper = useSwiper()

  return (
    <>
      <div
        className={styles.arrowLeft}
        onClick={() => swiper.slidePrev()}
      ></div>
      <div
        className={styles.arrowRight}
        onClick={() => swiper.slideNext()}
      ></div>
    </>
  )
}
