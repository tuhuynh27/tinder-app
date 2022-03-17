import React, { useState, useRef, useMemo } from 'react'
import './Explorer.scss'

import PubSub from 'pubsub-js'

import TinderCard from 'react-tinder-card'

import ExplorerImage from './explorer-image/ExplorerImage'
import Button from './swipe-buttons/SwipeButtons'
import MatchScreen from './match-screen/MatchScreen'
import NotFound from '../notfound/NotFound'

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const db = [
  {
    name: 'Hà',
    age: 'K15',
    bio: 'True love stories never have endings',
    image: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/217125181_3001527403425707_1832821722404312806_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1gMzzkoZtzcAX-bEW8O&_nc_ht=scontent-xsp1-3.xx&oh=00_AT_zTE9PYJe9xmcZcrzwDHB1eAOnHn8L1W4F7P8cJ5vk3A&oe=6236D950'
  },
  {
    name: 'Nguyên',
    age: 'K14',
    bio: 'If you don\'t fight for what you want, don\'t cry for what you lost',
    image: 'https://images-ssl.gotinder.com/6225789fca044301007d251f/640x800_bf226470-baec-4ba2-b848-297292d068b1.jpg'
  },
  {
    name: 'Nhi',
    age: 'K15',
    bio: 'Love all, trust a few, do wrong to none',
    image: 'https://images-ssl.gotinder.com/5e42b809f26ad90100e89933/640x800_9afb16d7-f18e-4b0b-9989-01fe65b61b33.jpg'
  },
  {
    name: 'Hoàng',
    age: 'K15',
    bio: 'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.',
    image: 'https://images-ssl.gotinder.com/5f941409ed2ff70100f71327/640x800_e877b848-53f9-4428-9e1b-3ffc863bf179.jpg'
  },
  {
    name: 'Ly',
    age: 'K15',
    bio: 'There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment',
    image: 'https://images-ssl.gotinder.com/5fcfaead95fef0010068946b/640x800_5ce9a7eb-bb7c-42bf-ba54-b12914e3831e.jpg'
  },
  {
    name: 'Linh',
    age: 'K15',
    bio: 'I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.',
    image: 'https://i.imgur.com/ZHAn1uy.jpg'
  }
]

shuffle(db)

export default function Explorer() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [lastMatched, setLastMatched] = useState(false)
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1
  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    console.log(`${db[index].name} is swiped ${direction}`)

    setLastMatched(false)
    const match = Math.random() < 0.5
    if ((direction === 'up' || direction === 'right') && match) {
      PubSub.publish('match', { name: db[index].name, image: db[index].image })
      setLastMatched(true)
    }

    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    console.log('Last direction: ', lastDirection)
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (lastMatched || !canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <React.Fragment>
      {db.map((character, index) =>
        <TinderCard
          ref={childRefs[index]}
          className='swipe'
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name, index)}
          onCardLeftScreen={() => outOfFrame(character.name, index)}
          preventSwipe={['up', 'down']}>
          <ExplorerImage
            name={character.name} age={character.age}
            bio={character.bio}
            image={character.image} />
        </TinderCard>)}
      {!canSwipe && <NotFound/>}
      <Button canSwipe={canSwipe} canGoback={canGoBack}
              goBack={() => goBack()}
              swipeLeft={() => swipe('left')}
              swipeUp={() => swipe('up')}
              swipeRight={() => swipe('right')} />
      <MatchScreen/>
    </React.Fragment>
  )
}
