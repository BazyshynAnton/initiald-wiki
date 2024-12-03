import CharacterInfoPage from "@/components/characterPage/CharacterInfoPage"
import characters from "../../../../public/data/characters/characters.json"

export default function AboutCharacter() {
  return <CharacterInfoPage characters={characters} />
}
