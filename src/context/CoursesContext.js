import { createContext, useContext, useState } from 'react'
import { exampleCourses } from '../data/courses.data'
import { nanoid } from 'nanoid'

const initialCourses = exampleCourses

export const CoursesContext = createContext({ courses: exampleCourses, setCourses: () => {} })

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialCourses)

  const addCourse = (courseData) => {
    console.log('got data:', courseData)

    setCourses(previousCourses => ([
      ...previousCourses,
      {...courseData, id: nanoid()}
    ]))
  }

  return (
    <CoursesContext.Provider value={{ courses, addCourse }}>
      {children}
    </CoursesContext.Provider>
  )
}

export const useCoursesContext = () => useContext(CoursesContext)

export default CoursesProvider