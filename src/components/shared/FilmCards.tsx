import { Image } from '@/components/shared/nextjsImports'

import styles from '@/styles/reusableComponents/FilmCards.module.scss'

interface Prop {
  img: string
}

const FilmCards = ({ img }: Prop) => {
  return (
    <Image
      width={500}
      height={500}
      src={img}
      alt="film"
      className={styles.imageContainer}
      priority={true}
      loading="eager"
    />
  )
}

export default FilmCards
