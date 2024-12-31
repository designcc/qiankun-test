// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function App({ onGlobalStateChange }) {
  const [userData, setUserData] = useState({})
  onGlobalStateChange((state) => {
    console.log(state);
    setUserData(state.user)
  })

  return (
    <>
      <div>
        react <br />
        { userData.name }
      </div>
    </>
  )
}

export default App
