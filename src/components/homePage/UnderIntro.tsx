"use client"

import FilmCards from "@/components/shared/FilmCards"

import { motion } from "@/components/shared/framerMotionImports"
import { useEffect, useState } from "@/components/shared/reactImports"

import styles from "@/styles/homePage/HomePage.module.scss"

export default function UnderIntro() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1001)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1001)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <div className={styles.underIntro}>
      <div className={styles.underIntro__text}>
        <div className={styles.underIntro__text__watch}>
          {isDesktop ? (
            <>
              <div className={styles.watchPlusMovie}>
                <motion.h2
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  Watch
                </motion.h2>
                <motion.div
                  style={{ width: "fit-content", height: "fit-content" }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <FilmCards img="/pictures/userInterface/fifthStageLogo.jpg" />
                </motion.div>
              </div>
              <motion.div
                className={styles.playLinkToMovies}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
              ></motion.div>
              <div className={styles.nowPlusMovie}>
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  Now
                </motion.h2>
                <motion.div
                  style={{ width: "fit-content", height: "fit-content" }}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <FilmCards img="/pictures/userInterface/firstStageLogo.jpg" />
                </motion.div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.smallScreenText}>
                <motion.h2
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  Watch
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  Now
                </motion.h2>
              </div>
              <motion.div
                className={styles.playLinkToMovies}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
              ></motion.div>
              <div className={styles.smallScreenMovie}>
                <motion.div
                  style={{ width: "fit-content", height: "fit-content" }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <FilmCards img="/pictures/userInterface/fifthStageLogo.jpg" />
                </motion.div>
                <motion.div
                  style={{ width: "fit-content", height: "fit-content" }}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <FilmCards img="/pictures/userInterface/firstStageLogo.jpg" />
                </motion.div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.underIntro__video}>
        <iframe
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/D6T6MeMdjfo?controls=0&autoplay=1&mute=1&loop=1&playlist=D6T6MeMdjfo"
          title="initd"
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
