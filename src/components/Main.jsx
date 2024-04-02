import React from 'react'
import {useSelector} from "react-redux";
const Main = () => {
  const experience = useSelector(state => state.experience.list);
  console.log(experience)
  return (
    <main className=' h-[50vh] pt-20'>
        this is my  actual content
    </main>

  
  )
}

export default Main