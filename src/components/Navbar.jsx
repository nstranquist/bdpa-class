import { AppBar, Toolbar, Typography, Link } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import logo from '../logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    '&:hover': {
      textDecoration: 'none'
    }
  }
}))

export const Navbar = ({
  name
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar position="static">
          <div style={{marginRight: 8}}>
            <img src={logo} color="#fff" className="App-logo" alt="logo" style={{color:'#fff'}} />
          </div>
          <Link to="/" component={RouterLink} className={`${classes.link} ${classes.title}`}>
            <Typography variant="h6" component="h1" className={classes.title}>Student Classes Tracker</Typography>
          </Link>
          <Link to="/profile" component={RouterLink} className={classes.link}>
            <Typography variant="h6" component="p">Welcome, {name || 'guest'}</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}