import { Box, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"

const exampleCourse = {
  name: 'Physics',
  number: 104,
  score: 86
}
const exampleCourses = [
  {...exampleCourse},
  {
    name: 'Math',
    number: 201,
    score: 75
  },
  {
    name: 'English',
    number: 404,
    score: 91
  }
]

export const Courses = () => {

  return (
    <Box style={{marginTop: 20}}>
      <Typography variant="h4" component="h2" gutterBottom>Courses</Typography>

      {/* https://v4.mui.com/components/cards/#card */}
      <Box flexDirection="column" alignItems="center">
        {exampleCourses.map((course) => (
          <Card key={course.name} elevation={2} style={{marginTop: 12, marginBottom: 12}}>
            <CardContent style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
              {/* <Typography className={classes.title} color="textSecondary" gutterBottom>{exampleCourse.name}</Typography> */}
              <Typography variant="h5" component="h3" style={{flex: 1}}>{course.name} - {course.number}</Typography>
              <Typography variant="h6" component="h6">{course.score}%</Typography>
            </CardContent>
            <CardActions>
              <Button color="primary">View More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}