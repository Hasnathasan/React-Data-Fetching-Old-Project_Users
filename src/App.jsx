import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './assets/Components/Users/Users'

function App() {
  const [data, setData] = useState([]);
  useEffect( () => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  },[]);
  const showId = (id) => {
    console.log(id);
  }
  return (
    <div className="App">
      {
        data.map(eachData => 
          <div>
            <Users></Users>
          </div>
        
        )
      }
    </div>
  )
}

export default App
