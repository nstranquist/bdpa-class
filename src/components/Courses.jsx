import { useState } from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { AddCourseModal } from './AddCourseModal';
import { nanoid } from 'nanoid';

const exampleCourse = {
  id: nanoid(),
  name: 'Physics',
  number: 104,
  score: 86
}
const exampleCourses = [
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

export const Courses = () => {
  const [showAddCourseForm, setShowAddCourseForm] = useState(false)
  const [courses, setCourses] = useState(exampleCourses)

  const toggleAddCourseForm = () => {
    setShowAddCourseForm(true)
  }

  const closeModal = () => setShowAddCourseForm(false)

  const addCourse = (courseData) => {
    console.log('got data:', courseData)

    setCourses(previousCourses => ([
      ...previousCourses,
      {...courseData, id: nanoid()}
    ]))

    setShowAddCourseForm(false)
  }

  return (
    <Box style={{marginTop: 20}}>
      <Typography variant="h4" component="h2" gutterBottom>Courses</Typography>

      <Button color="primary" size="large" startIcon={<AddIcon />} onClick={() => toggleAddCourseForm()}>Add</Button>
      <AddCourseModal open={showAddCourseForm} onClose={closeModal} onSubmit={addCourse} />

      {/* https://v4.mui.com/components/cards/#card */}
      <Box flexDirection="column" alignItems="center">
        {courses.map((course) => (
          <Card key={course.id} elevation={2} style={{marginTop: 12, marginBottom: 12}}>
            <CardContent style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
              <Typography variant="h5" component="h3" style={{flex: 1}}>{course.name} - {course.number}</Typography>
              <Typography variant="h6" component="h6">{course.score}%</Typography>
            </CardContent>
            <CardActions>
              <Button>View More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}