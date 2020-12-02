import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import styled from '@emotion/styled'

import { DicePanel } from './dice-panel.component'
import { Roll } from './roll.component'
import { IRoll } from 'interfaces-and-types/roll.interface'

const RollFeedContainer = styled.div({
  height: '100vh',
  position: 'fixed',
  right: 0,
  width: '33%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '0 2rem 2rem 0',
})

const RollFeed: React.FC<{ characterName: string }> = ({ characterName }) => {
  const { sessionId } = useParams<{ sessionId: string }>()

  const sessionsRollsRef = useFirestore().collection('sessions').doc(sessionId).collection('rolls')
  const sessionsRollsQuery = sessionsRollsRef.orderBy('createdAt', 'desc').limit(20)
  const rolls = useFirestoreCollectionData<{ roll: string; docId: string; createdAt: Date; characterName: string }>(
    sessionsRollsQuery,
    {
      idField: 'docId',
    },
  )

  return (
    <RollFeedContainer>
      <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
        {rolls.map(stringRoll => {
          const roll: IRoll = JSON.parse(stringRoll.roll)
          return <Roll key={stringRoll.docId} roll={roll} />
        })}
      </div>
      <DicePanel rollsRef={sessionsRollsRef} characterName={characterName} />
    </RollFeedContainer>
  )
}

export { RollFeed }
