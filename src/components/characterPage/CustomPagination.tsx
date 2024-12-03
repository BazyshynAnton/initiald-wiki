import { useSwiper } from "swiper/react"
import { Character } from "@/types/character/characterTypes"
import { useEffect, useState } from "@/components/shared/reactImports"

import styles from "@/styles/characterPage/CharacterPage.module.scss"

export default function CustomPagination({
  characters,
}: {
  characters: Character[]
}) {
  const swiper = useSwiper()
  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex)
  const buttons = new Array(characters.length).fill(0)

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex)
    }

    swiper.on("slideChange", handleSlideChange)

    return () => {
      swiper.off("slideChange", handleSlideChange)
    }
  }, [swiper])

  return (
    <div className={styles.buttons}>
      {buttons.map((_, idx: number) => {
        return (
          <div
            className={`${
              activeIndex === idx ? styles.buttons_active : styles.buttons_nav
            }`}
            key={idx}
            onClick={() => {
              swiper.slideTo(idx)
            }}
          />
        )
      })}
    </div>
  )
}
