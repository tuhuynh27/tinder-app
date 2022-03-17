import React, { useState, useEffect, useRef, useMemo } from 'react'
import './Explorer.scss'

import TinderCard from 'animation/swipe'

import ExplorerImage from './explorer-image/ExplorerImage'
import Button from './swipe-buttons/SwipeButtons'
import MatchScreen from './match-screen/MatchScreen'
import NotFound from '../notfound/NotFound'

import { getExplorerProfiles } from './data/explorer'

import { useDispatch } from 'react-redux'
import { addMatched, addLiked } from 'modules/app/explorer/redux/matchedSlice'

import PubSub from 'pubsub-js'

import { openProfile } from 'utils/openProfile'

function Explorer() {
  const dispatch = useDispatch()

  const [explorerProfiles, setExplorerProfiles] = useState([])
  const [currentIndex, setCurrentIndex] = useState(explorerProfiles.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [lastMatched, setLastMatched] = useState(false)
  const [lastMatchedId, setLastMatchedId] = useState(-1)
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)
  const abortCheck = useRef(false)

  const childRefs = useMemo(
    () =>
      Array(explorerProfiles.length)
        .fill(0)
        .map((i) => React.createRef()),
    [explorerProfiles.length]
  )

  const executeGetProfiles = () => {
    abortCheck.current = false
    getExplorerProfiles().then((profiles) => {
      if (abortCheck.current === true) return
      setExplorerProfiles(profiles)
      setCurrentIndex(profiles.length - 1)
    })
  }

  useEffect(() => {
    executeGetProfiles()
  }, [])

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < explorerProfiles.length - 1
  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, whoSwiped, index) => {
    console.debug(`${explorerProfiles[index].name} is swiped ${direction}`)
    setLastMatched(false)
    const match = Math.random() < 0.5
    if (direction === 'up' || direction === 'right') {
      if (match) {
        setTimeout(() => {
          console.debug(`It's a match with ${whoSwiped.name}`)
          dispatch(addMatched(whoSwiped))
          PubSub.publish('match', whoSwiped)
          setLastMatched(true)
          setLastMatchedId(index)
        }, 500)
      } else {
        dispatch(addLiked(whoSwiped))
      }
    }

    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.debug(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid

    // check load more profiles
    if (idx === 0) {
      executeGetProfiles()
    }
  }

  const swipe = async (dir) => {
    console.debug('Last direction: ', lastDirection)
    if (canSwipe && currentIndex < explorerProfiles.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (lastMatched || !canGoBack) return
    // Prevent back on profiles which matched already
    if (currentIndex + 1 >= lastMatchedId) {
      return
    }
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    abortCheck.current = true
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <React.Fragment>
      {explorerProfiles.map((profile, index) =>
        <TinderCard
          ref={childRefs[index]}
          className='swipe'
          key={profile.id}
          onSwipe={(dir) => swiped(dir, profile, index)}
          onCardLeftScreen={() => outOfFrame(profile.name, index)}
          preventSwipe={['up', 'down']}>
          <ExplorerImage profile={profile}/>
        </TinderCard>)}
      {!canSwipe && <NotFound/>}
      <Button canSwipe={canSwipe} canGoback={canGoBack}
        goBack={() => goBack()}
        swipeLeft={() => swipe('left')}
        swipeUp={() => swipe('up')}
        swipeRight={() => swipe('right')}
        openProfile={() => openProfile(explorerProfiles[currentIndex])}
      />
      <MatchScreen/>
    </React.Fragment>
  )
}

export default Explorer
