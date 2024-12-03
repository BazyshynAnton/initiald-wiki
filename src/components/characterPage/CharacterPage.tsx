"use client"

import TitleText from "../shared/TitleText"
import ReusablePage from "../shared/ReusablePage"

import dynamic from "next/dynamic"
import { Character } from "@/types/character/characterTypes"

import styles from "@/styles/characterPage/CharacterPage.module.scss"

const DynamicCharacterSwiper = dynamic(() => import("./CharacterSwiper"), {
  ssr: false,
})

export default function CharacterPage({
  characters,
}: {
  characters: Character[]
}) {
  return (
    <>
      <ReusablePage>
        <main className={styles.character}>
          <div className={styles.character__text}>
            <TitleText title={"CHARACTER"} underTitle={"キャラクター"} />
          </div>
          <DynamicCharacterSwiper characters={characters} />
        </main>
      </ReusablePage>
    </>
  )
}
