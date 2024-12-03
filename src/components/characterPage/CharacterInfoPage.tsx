"use client"

import ClientLoader from "@/components/shared/ClientLoader"

import { Character } from "@/types/character/characterInfoTypes"
import { Image, usePathname, Link } from "@/components/shared/nextjsImports"

import styles from "@/styles/characterPage/CharacterInfoPage.module.scss"

export default function CharacterInfoPage({
  characters,
}: {
  characters: Character[]
}) {
  const pathname = usePathname()

  const currLink = pathname.substring(pathname.lastIndexOf("/") + 1)

  const character: Character | null = findCharacterByCurrentLink(
    characters,
    currLink
  )

  return (
    <>
      {!character ? (
        <ClientLoader />
      ) : (
        <div className={styles.info}>
          <span className={styles.info__background}></span>
          <Link href="/character" className={styles.info__closeButton} />
          <div className={styles.info__visual}>
            <div className={styles.info__visual__figure}>
              <Image
                className={styles.info__visual__figure__img}
                width={1000}
                height={1000}
                src={character.characterImg}
                alt="characterCar"
                loading="eager"
              />
            </div>
          </div>
          <div className={styles.info__content}>
            <div className={styles.info__content__text}>
              <h3>{character.name}</h3>
              <p>{character.aboutCharacter}</p>
              {character.carImg !== "noCar" && (
                <Image
                  width={900}
                  height={500}
                  src={character.carImg}
                  alt="characterCar"
                  loading="eager"
                />
              )}
              <h3>{character.carName}</h3>
              <p>{character.aboutCar}</p>
            </div>
          </div>
          <div className={styles.navigationArrows}>
            <Link href={character.prevLink} className={styles.arrowLeft}></Link>
            <Link
              href={character.nextLink}
              className={styles.arrowRight}
            ></Link>
          </div>
        </div>
      )}
    </>
  )
}

// Find Character By Current Link
function findCharacterByCurrentLink(
  characters: Character[],
  currLink: string
): Character | null {
  for (let i = 0; i < characters.length; ++i) {
    if (characters[i].link === currLink) {
      return characters[i]
    }
  }

  return null
}
