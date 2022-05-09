import { Box, Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"

const exampleCourse = {
  name: 'Physics',
  courseNumber: 104,
  score: 95
}

export const Courses = () => {

  return (
    <Box style={{marginTop: 20}}>
      <Typography variant="h4" component="h2" gutterBottom>Courses</Typography>
      
      {/* https://v4.mui.com/components/cards/#card */}
      <Card>
        <CardContent>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>{exampleCourse.name}</Typography> */}
          <Typography gutterBottom variant="h5" component="h3">{exampleCourse.name}</Typography>
          <Typography>{exampleCourse.courseNumber}</Typography>
          <Typography>{exampleCourse.score}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}