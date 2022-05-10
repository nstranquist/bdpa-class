import { nanoid } from 'nanoid'

const exampleCourse = {
  id: nanoid(),
  name: 'Physics',
  number: 104,
  score: 86
}
export const exampleCourses = [
  {...exampleCourse},
  {
    id: nanoid(),
    name: 'Math',
    number: 201,
    score: 75
  },
  {
    id: nanoid(),
    name: 'English',
    number: 404,
    score: 91
  }
]