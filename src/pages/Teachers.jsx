import React from 'react'
import TeacherCard from '../components/Cards/TeacherCard'
import { v4 } from 'uuid'

const Teachers = () => {

  const teachers_list = [{}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}]
  return (
    <main className="w-full h-full flex flex-col py-2 gap-2 rounded-lg  overflow-y-scroll">
      {teachers_list?.map(() => (
        <TeacherCard key={v4()}/>
      ))}
    </main>
  )
}

export default Teachers