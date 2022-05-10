import { createContext } from 'react'
import { exampleCourses } from '../data/courses.data'

const initialCourses = exampleCourses

const CourseContext = createContext(initialCourses)

export default CourseContext