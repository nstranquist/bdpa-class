import { AppBar, Toolbar, Typography, Link, Box } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import logo from '../logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbarLeft: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'baseline'
  },
  link: {
    color: "#fff",
    '&:hover': {
      textDecoration: 'none'
    }
  },
  heading: {
    margin: 0
  }
}))

export const Navbar = () => {
  const classes = useStyles()
  const { name } = useProfile()

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar position="static">
          <Box className={classes.navbarLeft}>
            <Link to="/" component={RouterLink} className={classes.link} style={{marginRight: 15}}>
              <Typography variant="h6" component="h1" className={classes.heading}>
                <img src={logo} color="#fff" className="App-logo" alt="logo" style={{color:'#fff', marginRight: 8}} />
                Student Classes Tracker
              </Typography>
            </Link>
            <Link to="/courses" component={RouterLink} style={{color:"#fff"}}>
              <Typography variant="body1" component="h4" className={classes.heading}>Courses</Typography>
            </Link>
          </Box>
          
          <Link to="/profile" component={RouterLink} className={classes.link}>
            <Typography variant="h6" component="p">Welcome, {name || 'guest'}</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}