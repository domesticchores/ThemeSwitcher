import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import Preview from './components/Preview'

function App() {
  const [count, setCount] = useState(0)
  // schema of what's expected from backend
  // const [data, setData] = useState({uid: '', name: '', rev: ''});

  // let imgStr = "https://profiles.csh.rit.edu/image/";

  // add the bootstrap stylesheet
  // const link = document.createElement('link');
  // useEffect(() => {
  //   link.rel = 'stylesheet';
  //   link.href = 'http://localhost:8081/api/get';
  //   document.head.appendChild(link);
  // }, []);

  // load user info from backend
  // useEffect(() => {
  //   fetch('http://localhost:8081/local')
  //   .then(response => {
  //     if (!response.ok) {
  //       console.error("couldnt get data")
  //     }
  //     return response.json()
  //   }).then(jsonresponse => {
  //     setData(jsonresponse)
  //   }).catch(err => {
  //     console.error("Using fallback, error on fetch:",err)
  //     // use fallback data on error
  //     setData({uid: 'test',name: 'Test',rev: ''
  //   })
  //   })
  // }, []);
  

  return (
    <>
      <Navbar/>
      <Preview/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <p>{imgStr.concat(data.uid)}, {data.name}, {data.rev}</p> */}
    </>
  )
}

export default App
