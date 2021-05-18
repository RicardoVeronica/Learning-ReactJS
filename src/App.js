import PropTypes from 'prop-types'

const App = ({technology, type = 'component'}) => {
  return (
    <div>
      <h1>Hello {technology} from App {type}</h1>
    </div>
  )
}

App.propTypes = {
  technology: PropTypes.string.isRequired
}

export default App
