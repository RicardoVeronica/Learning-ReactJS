import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value)

  return (
    <div>
      <h1>Counter app</h1>
      <h2>{ counter }</h2>
      <button onClick={ () => setCounter(counter + 1) }>Add</button>
      <button onClick={ () => setCounter(counter - 1) }>Sub</button>
      <button onClick={ () => setCounter(counter - counter) }>Reset</button>
    </div>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
}

export default Counter
