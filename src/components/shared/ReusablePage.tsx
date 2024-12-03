"use client"

import HeaderForSmallScreens from "@/components/header/HeaderForSmallScreens"
import HeaderForBigScreensNextLayout from "@/components/header/HeaderForBigScreensNextLayout"

import { usePathname } from "@/components/shared/nextjsImports"

import styles from "@/styles/reusableComponents/ReusablePage.module.scss"

interface ContentProps {
  children: React.ReactNode
}

const ReusablePage = ({ children }: ContentProps) => {
  const currentPath = usePathname()

  return (
    <>
      <span
        className={`${
          currentPath === "/introduction" ? styles.introductionBg : ""
        } ${currentPath === "/character" ? styles.characterBg : ""} ${
          currentPath === "/initiald_product" ? styles.productBg : ""
        }`}
      ></span>
      <span className={styles.introBgTexture}></span>
      {children}
    </>
  )
}

export default ReusablePage
