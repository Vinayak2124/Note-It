import React,{useState, useEffect,useRef} from 'react'
import { motion } from "motion/react"

const Notes = () => {
  const constraintsRef = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const notesFromStorage = JSON.parse(localStorage.getItem('note')) || [];
    const notesArray = Array.isArray(notesFromStorage) ? notesFromStorage : [notesFromStorage];
    setData(notesArray);
  }, []);
  const handleDelete = (indexToDelete) => {
    const notesFromStorage = JSON.parse(localStorage.getItem('note')) || [];
    const updatedNotes = notesFromStorage.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('note', JSON.stringify(updatedNotes));
    setData(updatedNotes);
  };
  return (
    <div ref={constraintsRef} className='relative h-auto w-full notes z-3 py-7 text-white flex flex-wrap  items-center gap-7 '>
      {data.length === 0 ? (
        <div className='text-center text-2xl font-semibold w-full'>No Notes Available</div>
      ) :
        (data.map((note, index) => (
          <motion.div drag dragConstraints={constraintsRef} whileDrag={{ scale: 1.2 }} dragElastic={0.2 } dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}key={index} 
          initial={{ opacity: 0, scale: 0.5, y: 200 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 100, delay: index * 0.2, type: 'spring', stiffness: 100 }}
            className=' relative Note h-60 w-60 bg-zinc-700 rounded-4xl flex flex-col hover:scale-105 border-2 border-gray-500'>
            <h2 className='text-lg font-semibold text-center px-auto py-3' >{note.title}</h2>
            <h3 className='px-4 text-sm '>{note.description}</h3>
            <button onClick={() => handleDelete(index)} className='absolute bottom-0 bg-red-500 w-full rounded-4xl mt-auto py-2 hover:bg-red-800 cursor-pointer text-md font-semibold hover:line-through border-2 border-gray-500'>Delete</button>
          </motion.div>
          
        )))
      }
          
         
    </div>
  )
}

export default Notes;