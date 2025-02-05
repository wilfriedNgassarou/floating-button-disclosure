import { motion } from "motion/react"
import { useState } from "react"
import { BellFill, FileEarmarkFill, FileTextFill, FolderFill, Plus, X } from "react-bootstrap-icons"
import { Credits } from "./components/credits"

function App() {
  const [state, setState] = useState<'extended' | 'collapsed'>('collapsed')

  const items = [
    {
      title: 'Task',
      text: 'Create a new task',
      icon: <FileTextFill size={20} className="fill-inherit" />
    },
    {
      title: 'Reminder',
      text: 'Create reminders with alerts',
      icon: <BellFill size={20} className="fill-inherit" />
    },
    {
      title: 'Note',
      text: 'Capture ideas on the fly',
      icon: <FileEarmarkFill size={20} className="fill-inherit" />
    },
    {
      title: 'Project',
      text: 'Organise better with projects',
      icon: <FolderFill size={20} className="fill-inherit" />
    },
  ]

  return (
    <section className="w-full h-dvh flex flex-col justify-center items-center">
      <Credits />
      {/* add button */}
      {state == 'collapsed' && (
        <>
          <motion.div
            onClick={() => setState('extended')}
            layoutId="card" 
            style={{ borderRadius: 24 }}
            className="w-24 h-12 bg-stone-300 relative z-10 flex items-center justify-center"
          >
            <motion.span
              className="absolute" 
              layout="position"
            >
              <Plus 
                size={36} 
                className="fill-stone-500" 
              />
            </motion.span>
          </motion.div>
          <motion.div 
            layoutId="close-btn"
            className="w-16 h-12 bg-stone-300 rounded-full -mt-12" 
          />
        </>
      )}
      
      {/* menu  */}
      {state == 'extended' && (
        <>
          <motion.div
            onClick={() => setState('collapsed')} 
            layoutId="close-btn"
            className="w-16 h-12 flex justify-center items-center bg-stone-300 rounded-full mb-4" 
          >
            <X 
              size={36} 
              className="fill-stone-500" 
            />
          </motion.div>
          <motion.div
            layoutId="card"
            style={{ borderRadius: 24 }}
            className=" border-gray-700/5 shadow-md border-[1px] p-4 flex flex-col gap-5"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { delay: .3, type: 'tween', duration: .2, ease: 'easeOut' } 
                }}
                className="flex gap-2 items-center"
              >
                <div 
                  className="w-10 h-10 bg-stone-300/50 fill-stone-400 rounded-md flex justify-center items-center"
                >
                  {item.icon}
                </div>
                <div>
                  <h1 className="font-semibold leading-4">
                    {item.title}
                  </h1>
                  <p className="text-stone-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </section>
  )
}

export default App
