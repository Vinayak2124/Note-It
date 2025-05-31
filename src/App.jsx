import React,{useState,useRef} from 'react'
import './App.css'
import Notes from './components/Notes'
import Create_note from './components/Create_note'
function App() {

  const constraintsRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  }
  return (
    <>
      <div  className="relative background h-screen w-[100vw] bg-zinc-900 px-20 py-8 z-2 overflow-auto selection:text-yellow-500">
        <div  className="head text-center text-2xl font-md text-gray-600  flex items-center justify-between">
          Note - It!
          {isOpen ? (<div><button onClick={handleForm} className='bg-red-700 py-2 px-5 rounded-lg text-sm text-white cursor-pointer hover:scale-90 hover:bg-red-900 hover:text-zinc-500 outline-offset-4 outline-white'> Close</button></div>):
          (<div><button onClick={handleForm} className='bg-blue-700 py-2 px-5 rounded-lg text-sm text-white cursor-pointer hover:scale-90 hover:bg-blue-900 hover:text-zinc-500 outline-offset-4 outline-white'> New</button></div>)}
        </div>
        <div  className="text absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold text-9xl text-zinc-600">
        
          DOCS
        </div>
        <div>
        {(!isOpen) && < Notes />}
        {(isOpen) && <Create_note setOpen={setOpen}  />}
        </div>
      </div>
      
    </>
  )
}

export default App
