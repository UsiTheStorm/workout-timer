import { memo, useEffect, useState } from 'react'

import clickSound from './ClickSound.m4a'

function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises)
  const [sets, setSets] = useState(3)
  const [speed, setSpeed] = useState(90)
  const [durationBreak, setDurationBreak] = useState(5)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const newDuration = (number * sets * speed) / 60 + (sets - 1) * durationBreak
    setDuration(newDuration)
  }, [number, sets, speed, durationBreak])
  // const duration = (number * sets * speed) / 60 + (sets - 1) * durationBreak
  const mins = Math.floor(duration)
  const seconds = (duration - mins) * 60

  const playSound = function () {
    if (!allowSound)
      return
    const sound = new Audio(clickSound)
    sound.play()
  }

  const handleInc = () => {
    setDuration(duration => duration + 1)
  }
  const handleDec = () => {
    setDuration(duration => Math.max(0, duration - 1))
  }

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select onChange={e => setNumber(+e.target.value)} value={number}>
            {workouts.map(workout => (
              <option key={workout.name} value={workout.numExercises}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            max="5"
            min="1"
            onChange={e => setSets(e.target.value)}
            type="range"
            value={sets}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            max="180"
            min="30"
            onChange={e => setSpeed(e.target.value)}
            step="30"
            type="range"
            value={speed}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            max="10"
            min="1"
            onChange={e => setDurationBreak(e.target.value)}
            type="range"
            value={durationBreak}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>
      <section>
        <button onClick={handleDec}>–</button>
        <p>
          {mins < 10 && '0'}
          {mins}:{seconds < 10 && '0'}
          {seconds}
        </p>
        <button onClick={handleInc}>+</button>
      </section>
    </>
  )
}

export default memo(Calculator)
