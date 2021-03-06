import * as React from 'react'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'
import { User } from 'firebase/app'

import { Button, ButtonGroup, Text, Flex, Center, Stack } from '@chakra-ui/react'

import {
  ICharacter,
  ICriticalInjury,
  ICustomSkill,
  IPersonalGear,
  ITalent,
  IWeapon,
} from 'interfaces-and-types/character-sheet.interface'

import { ISkillRoll } from 'interfaces-and-types/roll.interface'

import { CharacterSheetContainer } from 'components/character-sheet/character-sheet-container.component'
import { RollFeed } from 'components/roll-feed/roll-feed.component'

export const SkillContext = React.createContext<
  [ISkillRoll, ({ ability, proficiency, skillName }: ISkillRoll) => void]
>([{ ability: 0, proficiency: 0, skillName: '' }, () => null])

const Session: React.FC = () => {
  const [character, setCharacter] = React.useState<ICharacter>()
  const user: User = useUser()

  const userCharactersCollectionQuery = useFirestore()
    .collection('characters')
    .where('characterDetails.playerId', '==', user.uid)

  const userCharacters: ICharacter[] = useFirestoreCollectionData(userCharactersCollectionQuery, { idField: 'docId' })
  const [skillRoll, setSkillRoll] = React.useState({ ability: 0, proficiency: 0, skillName: '' })

  const charactersRef = useFirestore().collection('characters')
  function createCharacter() {
    charactersRef.add({
      attributes: {
        agility: 0,
        brawn: 0,
        cunning: 0,
        intellect: 0,
        presence: 0,
        willpower: 0,
      },
      characterDescription: {
        age: '',
        build: '',
        eyes: '',
        gender: '',
        hair: '',
        height: '',
        notableFeatures: new Array<string>(),
      },
      characterDetails: {
        archetype: '',
        career: '',
        name: '',
        playerId: user.uid,
      },
      criticalInuries: new Array<ICriticalInjury>(),
      equipmentLog: {
        money: 0,
        personalGear: new Array<IPersonalGear>(),
        weaponsAndArmor: new Array<string>(),
      },
      favors: {
        given: new Array<string>(),
        owed: new Array<string>(),
      },
      motivations: {
        desire: '',
        fear: '',
        flaw: '',
        strength: '',
      },
      skills: {
        combatSkills: {
          brawl: 0,
          gunnery: 0,
          melee: 0,
          rangedHeavy: 0,
          rangedLight: 0,
        },
        generalSkills: {
          athletics: 0,
          compHacking: 0,
          compSysops: 0,
          cool: 0,
          coordination: 0,
          discipline: 0,
          driving: 0,
          mechanics: 0,
          medicine: 0,
          operating: 0,
          perception: 0,
          piloting: 0,
          resilience: 0,
          skulduggery: 0,
          stealth: 0,
          streetwise: 0,
          survival: 0,
          vigilance: 0,
        },
        knowledgeSkills: {
          science: 0,
          society: 0,
          theNet: 0,
        },
        socialSkills: {
          charm: 0,
          coercion: 0,
          deception: 0,
          leadership: 0,
          negotiation: 0,
        },
        customSkills: new Array<ICustomSkill>(),
      },
      talentsAndSpecialAbilities: new Array<ITalent>(),
      weapons: new Array<IWeapon>(),
      woundStrainAndDefense: {
        defense: {
          melee: 0,
          ranged: 0,
        },
        soak: 0,
        strainThreshold: {
          current: 0,
          total: 0,
        },
        woundThreshold: {
          current: 0,
          total: 0,
        },
      },
      xp: {
        availableXp: 0,
        totalXp: 0,
      },
    } as ICharacter)
  }
  return (
    <>
      {character ? (
        <>
          <SkillContext.Provider value={[skillRoll, setSkillRoll]}>
            <Flex>
              <CharacterSheetContainer character={character} />
              <RollFeed characterName={character.characterDetails.name} />
            </Flex>
          </SkillContext.Provider>
        </>
      ) : (
        <Center height="100vh">
          <Stack>
            <Text fontSize="2xl">Select Character</Text>
            <ButtonGroup>
              {userCharacters.map(char => (
                <Button key={char.docId} onClick={() => setCharacter(char)}>
                  {char.characterDetails.name || 'Click to edit new character'}
                </Button>
              ))}
              <Button onClick={() => createCharacter()}>Create Character +</Button>
            </ButtonGroup>
          </Stack>
        </Center>
      )}
    </>
  )
}

export { Session }
