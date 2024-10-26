import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Add = () => {
if (count >= 20){
  count = count
}else{
  setCount(count +1)
  };
}

  const remove = ()=>{
    if (count <= 0){
      count = count
    }else{
    setCount(count - 1)
  };
}

  return (
   
    <div className='   h-full flex flex-row min-h-screen justify-center items-center bg-slate-900 ' >
        <div className='bg-slate-800 w-150 h-100 text-center rounded-md shadow-md p-10'>
           <h1 className='font-sans font-serif uppercase font-semibold text-white mb-4'>
            Count your number
            </h1>
              <div className='bg-sky-400 w-7 h-7  rounded-full w-1/2 mx-auto mb-5'>
                 <h2 >{count}</h2>
              </div>
                   <button onClick={Add} className='rounded-md bg-green-700 text-white p-4 m-4'> Add value : {count}</button>
                  
                   <button onClick={remove} className='rounded-md bg-red-400 text-white p-4 m-4'> Remove value : {count}</button>
        </div>
                  <div>
                   {count >= 20 && <p>Limit reached!</p>}
                   </div>
    </div>
   
    
  )
}

export default App
