import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bgColor,setBgColor] = useState("bg-red-500")
  const [message , setMessage] =useState("")

  const Add = () => {
if (count < 20){
  setCount(prevCount => prevCount +1);
  setMessege("");
}
 }

  const remove = ()=>{
    if (count>0){
      setCount(prevCount => prevCount - 1);
      setMessege("");
}
};

useEffect(() => {
  if (count >= 20) {
    setBgColor('bg-red-500');
    setMessage('Limit reached!');
  } else if (count <= 0) {
    setBgColor('bg-gray-500');
    setMessage('Limit reached!');
  } else {
    setBgColor('bg-sky-400');
    setMessage('');
  }
}, [count]);

  return (
   
    <div className='   h-full flex flex-row min-h-screen justify-center items-center bg-slate-900 ' >
        <div className={` bg-slate-800 w-150 h-100 text-center rounded-md shadow-md p-10 ${bgColor}`}>
           <h1 className='font-sans font-serif uppercase font-semibold text-white mb-4'>
            Count your number
            </h1>
              <div className='bg-sky-400 w-7 h-7  rounded-full w-1/2 mx-auto mb-5'>
                 <h2 >{count}</h2>
              </div>
                   <button onClick={Add} className='rounded-md bg-green-700 text-white p-4 m-4'> Add value : {count}</button>
                  
                   <button onClick={remove} className='rounded-md bg-red-400 text-white p-4 m-4'> Remove value : {count}</button>
                   {message && <p className='text-red-500 font-bold mt-4'>{message}</p>}
        </div>
                 
    </div>
   
    
  )
}

export default App
