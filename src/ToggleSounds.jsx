import * as React from 'react'

function ToggleSoundsComponent({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound(allow => !allow)}
    >
      {allowSound ? '🔈' : '🔇'}
    </button>
  )
}
const ToggleSounds = React.memo(ToggleSoundsComponent)

export default ToggleSounds
