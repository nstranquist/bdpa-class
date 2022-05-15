import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CircularProgress, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useCourses } from "../context/CoursesContext"


const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 20,
  },
  progressContainer: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

export const CourseDetail = () => {
  const classes = useStyles()
  const { id } = useParams()
  // TODO: make selector from context
  const [course, setCourse] = useState(null)
  const { findCourse } = useCourses()

  useEffect(() => {
    if(id) {
      const foundCourse = findCourse(id)
      if(foundCourse)
        setCourse(foundCourse)
    }
  }, [id, findCourse])

  if(!course) {
    return (
      <div className={classes.container}>
        <Box className={classes.progressContainer}>
          <CircularProgress size={50} style={{marginBottom: 22, marginTop: 8}} />
          <Typography variant="h5" component="h2">Loading Course...</Typography>
        </Box>
      </div>
    )
  }
  return (
    <div className={classes.container}>
      <Typography variant="h3" component="h1">{course.name}</Typography>
      <Typography variant="h6" component="h3">#{course.number}</Typography>
      <Typography variant="h6" component="h3">{course.score}%</Typography>
    </div>
  )
}