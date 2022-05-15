import { makeStyles } from "@material-ui/core"
import { Courses } from "./Courses"
import { ProfileName } from "./ProfileName"



const useStyles = makeStyles(() => ({
  container: {

  }
}))

// We will try to not add much custom logic or repeat code here,
// - we instead want to pull in the components we want to display in the user's home page

export const HomePage = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {/* Profile */}
      <ProfileName />

      {/* Classes */}
      <Courses />
    </div>
  )
}