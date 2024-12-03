"use client"

import CustomNavigation from "./CustomNavigation"
import CustomPagination from "./CustomPagination"

import { motion } from "@/components/shared/framerMotionImports"
import { Character } from "@/types/character/characterTypes"
import { Mousewheel } from "swiper/modules"
import { Link, Image } from "@/components/shared/nextjsImports"
import { Swiper, SwiperSlide } from "swiper/react"
import { React, useEffect, useState } from "@/components/shared/reactImports"

import "swiper/css"
import "swiper/css/pagination"
import styles from "@/styles/characterPage/CharacterPage.module.scss"

export default function CharacterSwiper({
  characters,
}: {
  characters: Character[]
}) {
  const sortedCharactersByChapters = characters.sort(
    (a, b) => parseInt(a.chapter) - parseInt(b.chapter)
  )

  const [slidesNumber, setSlidesNumber] = useState<number>(7)

  useEffect(() => {
    const handleSlidesNumberChange = () => {
      const width = window.innerWidth
      if (width <= 1120) {
        setSlidesNumber(3)
      } else if (width <= 1400) {
        setSlidesNumber(4)
      } else if (width <= 1660) {
        setSlidesNumber(5)
      } else if (width < 1920) {
        setSlidesNumber(6)
      } else {
        setSlidesNumber(7)
      }
    }

    handleSlidesNumberChange()
    window.addEventListener("resize", handleSlidesNumberChange)

    return () => {
      window.removeEventListener("resize", handleSlidesNumberChange)
    }
  }, [])

  const [isSwiper, setIsSwiper] = useState<boolean | undefined>(
    window.innerWidth <= 1000
  )

  useEffect(() => {
    const handleResize = () => {
      setIsSwiper(window.innerWidth <= 1000)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      {!isSwiper ? (
        <div style={{ width: "100%", height: "800px" }}>
          <Swiper
            slidesPerView={slidesNumber}
            spaceBetween={30}
            mousewheel={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel]}
            style={{
              overflow: "visible",
              overflowX: "clip",
              overflowY: "visible",
              height: "auto",
              zIndex: "200",
            }}
          >
            {sortedCharactersByChapters.map(
              (character: Character, index: number) => {
                const delay = 0.2 * index

                return (
                  <React.Fragment key={character.id}>
                    <SwiperSlide
                      key={`slide-${character.id}`}
                      className={styles.slide}
                    >
                      <motion.div
                        style={{ width: "fit-content", height: "fit-content" }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          delay: delay,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <Link href={`/character/${character.link}`}>
                          <div className={styles.slide__character}>
                            <Image
                              width={500}
                              height={500}
                              src={character.img}
                              alt="character"
                              loading="eager"
                            />
                          </div>
                          <p>{character.name}</p>
                        </Link>
                      </motion.div>
                    </SwiperSlide>
                  </React.Fragment>
                )
              }
            )}

            <CustomNavigation />
            <CustomPagination characters={sortedCharactersByChapters} />
          </Swiper>
        </div>
      ) : (
        <div className={styles.charactersTable}>
          {sortedCharactersByChapters.map(
            (character: Character, index: number) => {
              const delay = 0.2 * index
              return (
                <motion.div
                  key={character.id}
                  style={{ width: "fit-content", height: "fit-content" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: delay,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/character/${character.link}`}
                    style={{
                      display: "block",
                      width: "fit-content",
                      height: "fit-content",
                      textAlign: "center",
                    }}
                  >
                    <div className={styles.characterContainer}>
                      <Image
                        width={500}
                        height={500}
                        src={character.img}
                        alt="character"
                        loading="eager"
                      />
                    </div>
                    <p>{character.name}</p>
                  </Link>
                </motion.div>
              )
            }
          )}
        </div>
      )}
    </>
  )
}
