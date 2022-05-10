import { Box, Button, Card, CardActions, CardContent, CardHeader, Modal, TextField, Typography } from "@material-ui/core"
import { useState, useEffect } from "react"

export const EditCourseModal = ({
  open,
  onClose,
  onSubmit,
  courseData
}) => {
  const [course, setCourse] = useState(courseData)

  useEffect(() => {
    console.log('in useeffect')
    setCourse(courseData)
  }, [courseData])

  const handleChange = (e) => {
    setCourse(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e = undefined) => {
    if(e) {
      e.preventDefault()
    }

    console.log('submitting course data:', course)
    onSubmit(course)
  }

  if(!courseData || !course) return <></>
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-course-modal-title"
    >
      <Box style={{position: 'absolute', width: '50%', maxWidth: 800, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <form onSubmit={handleSubmit}>
          <Card style={{padding: 15}}>
            <CardHeader title={<Typography variant="h4" component="h2" id="edit-course-modal-title">Edit Course: {courseData.name}</Typography>} />
            <CardContent>
              <TextField margin="normal" autoFocus value={course.name} onChange={handleChange} name="name" placeholder="Course Name" fullWidth />
              <TextField margin="normal" type="number" value={course.number} onChange={handleChange} name="number" placeholder="Course Number" fullWidth />
              <TextField margin="normal" type="number" value={course.score} onChange={handleChange} name="score" placeholder="Course Score" fullWidth />
            </CardContent>
            <CardActions>
              <Button onClick={() => onClose()}>Cancel</Button>
              <Button type="submit">Save Changes</Button>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Modal>
  )
}