import { Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'


export const PageNotFound = () => {

  return (
    <div>
      <Typography variant="h1" component="h1">Page Not Found</Typography>
      <nav>
        <Link to="/">Back to Courses</Link>
      </nav>
    </div>
  )
}