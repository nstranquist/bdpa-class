import { Box, Button, Card, CardActions, CardContent, CardHeader, Modal, TextField, Typography } from "@material-ui/core"
import { useState } from "react"

export const EditCourseModal = ({
  open,
  onClose,
  onSubmit,
  courseData
}) => {
  const [course, setCourse] = useState(courseData)

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

    onSubmit(course)
  }

  if(!courseData) return <></>
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-course-modal-title"
    >
      <form onSubmit={handleSubmit}>
        <Card style={{padding: 15}}>
          <CardHeader title={<Typography variant="h4" component="h2" id="edit-course-modal-title">Edit Course: {courseData.name}</Typography>} />
          <CardContent>
            <TextField autoFocus value={course.name} onChange={handleChange} name="name" placeholder="Course Name" gutterBottom fullWidth />
            <TextField type="number" value={course.number} onChange={handleChange} name="number" placeholder="Course Number" gutterBottom fullWidth />
            <TextField type="number" value={course.score} onChange={handleChange} name="score" placeholder="Course Score" fullWidth />
          </CardContent>
          <CardActions>
            <Button onClick={() => onClose()}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </CardActions>
        </Card>
      </form>
    </Modal>
  )
}