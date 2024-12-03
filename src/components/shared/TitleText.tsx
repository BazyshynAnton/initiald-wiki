'use client'

import { usePathname } from '@/components/shared/nextjsImports'

import styles from '@/styles/reusableComponents/TitleText.module.scss'

interface Props {
  title: string
  underTitle: string
}
const TitleText = ({ title, underTitle }: Props) => {
  const currentPath = usePathname()
  return (
    <h1 className={styles.textBlock}>
      <span
        className={`${
          currentPath === '/introduction' ? styles.titleIntroduction : ''
        } ${currentPath === '/character' ? styles.titleCharacter : ''} ${
          currentPath === '/initiald_product' ? styles.titleProduct : ''
        }`}
      >
        {title}
      </span>
      <span
        className={`${
          currentPath === '/introduction' ? styles.underTitleIntroduction : ''
        } ${currentPath === '/character' ? styles.underTitleCharacter : ''} ${
          currentPath === '/initiald_product' ? styles.underTitleProduct : ''
        }`}
      >
        {underTitle}
      </span>
    </h1>
  )
}

export default TitleText
