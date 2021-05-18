import ReactDOM from 'react-dom'
// import App from './app.js'
import Counter from './components/Counter'
import './index.css'

const where = document.getElementById('root')

// ReactDOM.render(<App technology="React.js"/>, where)
ReactDOM.render(<Counter value={0} />, where)
