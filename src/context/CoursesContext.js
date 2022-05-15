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

  // https://stackoverflow.com/questions/45878147/how-to-update-an-object-in-an-array-of-objects-using-setstate
  const updateCourse = (courseId, courseData) => {
    const index = courses.findIndex(course => course.id === courseId)
    if(index === -1) {
      // send to error system
      return;
    }

    setCourses(prev => ([
      ...prev.slice(0, index),
      {id: prev[index].id, ...courseData},
      ...prev.slice(index + 1)
    ]))
  }

  const removeCourse = (courseId) => {
    setCourses(prev => prev.filter(course => course.id !== courseId))
  }

  const findCourse = (courseId) => {
    const course = courses.find(course => course.id === courseId)
    if(!course) {
      console.log('Course not found!')
      return null
    }
    console.log({course})
    return course
  }

  return (
    <CoursesContext.Provider value={{ courses, addCourse, updateCourse, removeCourse, findCourse }}>
      {children}
    </CoursesContext.Provider>
  )
}

export const useCourses = () => useContext(CoursesContext)

export default CoursesProvider