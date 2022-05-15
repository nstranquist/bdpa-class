import { makeStyles, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  pageContainer: {
    padding: '30px 0'
  }
}))

export const PageNotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h2" component="h1">Page Not Found</Typography>
      <nav>
        <Link to="/">Back to Courses</Link>
      </nav>
    </div>
  )
}