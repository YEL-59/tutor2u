import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      
      <div className="card mt-5">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          <h1 className='text-blue-500'>Vite + React</h1>
         
        </button>
        
      </div>
      
    </>
  )
}

export default App
