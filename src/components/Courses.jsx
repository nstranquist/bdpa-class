import { useState } from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { AddCourseModal } from './AddCourseModal';
import { EditCourseModal } from './EditCourseModal';
import { useCoursesContext } from '../context/CoursesContext';

export const Courses = () => {
  const [showAddCourseForm, setShowAddCourseForm] = useState(false)
  const [showEditCourseForm, setShowEditCourseForm] = useState(false)
  const [selectedCourseData, setSelectedCourseData] = useState(undefined)
  const { courses, addCourse, updateCourse, removeCourse } = useCoursesContext()

  const toggleAddCourseForm = () => {
    setShowEditCourseForm(false)
    setShowAddCourseForm(true)
  }
  const toggleUpdateCourse = (courseId) => {
    // first, need to find the course with the id, and set the temporary data
    const courseData = courses.find(course => course.id === courseId)
    if(!courseData) {
      // display error to the user!
      alert("The course you chose could not be found")
      return
    }
    setSelectedCourseData(courseData)
    setShowAddCourseForm(false)
    setShowEditCourseForm(true)
  }

  const closeAddCourseModal = () => setShowAddCourseForm(false)
  const closeEditCourseModal = () => setShowEditCourseForm(false)

  const onAddCourse = (courseData) => {
    addCourse(courseData)
    setShowAddCourseForm(false)
  }

  const onEditCourse = (courseData) => {
    updateCourse(courseData.id, courseData)
    setShowEditCourseForm(false)
  }

  return (
    <Box style={{marginTop: 50}}>
      <Typography variant="h4" component="h2" gutterBottom>Courses</Typography>

      <Button color="primary" size="large" startIcon={<AddIcon />} onClick={() => toggleAddCourseForm()}>New Course</Button>
      
      <AddCourseModal open={showAddCourseForm} onClose={closeAddCourseModal} onSubmit={onAddCourse} />
      <EditCourseModal open={showEditCourseForm} onClose={closeEditCourseModal} onSubmit={onEditCourse} courseData={selectedCourseData} />

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
              <Button startIcon={<DeleteOutlineIcon />} onClick={() => removeCourse(course.id)}>Remove</Button>
              <Button startIcon={<EditIcon />} onClick={() => toggleUpdateCourse(course.id)}>Edit</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}