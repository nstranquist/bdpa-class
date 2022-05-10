import { createContext, useContext, useState } from 'react'
import { exampleCourses } from '../data/courses.data'

const initialCourses = exampleCourses

export const CoursesContext = createContext({ courses: exampleCourses, setCourses: () => {} })

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialCourses)

  // Can add methods here to add, update, remove courses

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  )
}

export const useCoursesContext = () => useContext(CoursesContext)

export default CoursesProvider