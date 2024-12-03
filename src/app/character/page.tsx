import CharacterPage from "@/components/characterPage/CharacterPage"

import characters from "../../../public/data/characters/characters.json"

export default function AllCharacter() {
  return <CharacterPage characters={characters} />
}
