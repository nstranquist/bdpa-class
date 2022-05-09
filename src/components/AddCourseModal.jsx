import { Box, Button, Card, CardActions, CardContent, CardHeader, Modal, TextField, Typography } from "@material-ui/core"
import { useState } from "react"

const initialFormState = {
  name: '',
  number: 0,
  score: 100
}

// https://mui.com/material-ui/react-modal/
export const AddCourseModal = ({
  open,
  onClose,
  onSubmit
}) => {
  const [course, setCourse] = useState(initialFormState)

  const handleChange = (e) => {
    setCourse(previousState => ({
      ...previousState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e = undefined) => {
    if(e) {
      e.preventDefault()
    }

    // TODO: Do any validation you'd like here, before submitting

    onSubmit(course)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="add-course-modal-title"
    >
      <Box style={{position: 'absolute', width: '50%', maxWidth: 800, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <form onSubmit={handleSubmit}>
          <Card style={{padding: 15}}>
            <CardHeader title={<Typography variant="h4" component="h2" id="add-course-modal-title">Add Course</Typography>} />
            <CardContent>
              <Box flexDirection='column'>
                <TextField margin="normal" autoFocus fullWidth value={course.name} name="name" onChange={handleChange} placeholder="Course Name" required />
                <TextField margin="normal" type="number" min={0} autoFocus fullWidth value={course.number} name="number" onChange={handleChange} placeholder="Course Number" required />
                <TextField margin="normal" type="number" min={0} autoFocus fullWidth value={course.score} name="score" onChange={handleChange} placeholder="Course Score" />
              </Box>
            </CardContent>
            <CardActions>
              <Button onClick={() => onClose()}>Cancel</Button>
              <Button color="primary" variant="contained" onClick={() => handleSubmit()}>Save</Button>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Modal>
  )
}