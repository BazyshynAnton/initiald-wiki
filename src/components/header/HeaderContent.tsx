import ReusableLinks from "@/components/shared/ReusableNavLinks"

import { Image, Link } from "@/components/shared/nextjsImports"

import styles from "@/styles/header/HeaderForSmallScreens.module.scss"

interface Props {
  menuOpen: boolean
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

export default function HeaderContent({ menuOpen, handleClick }: Props) {
  return (
    <div
      className={`${
        menuOpen
          ? styles.headerSmall__content_open
          : styles.headerSmall__content_close
      }`}
    >
      <Link href="/">
        <Image
          width={500}
          height={500}
          src="/pictures/userInterface/logoD.webp"
          alt="logoD"
          loading="eager"
          className={styles.logoDInContent}
          onClick={handleClick}
        />
      </Link>
      <ReusableLinks />
    </div>
  )
}
