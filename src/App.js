import { useState } from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { ProfileName } from './components/ProfileName';
import { Navbar } from './components/Navbar'
import { Courses } from './components/Courses';
import ProfileContext from './context/ProfileContext'
import CoursesProvider from './context/CoursesContext';

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    minHeight: '100vh',
    width: '100%'
  },
  contentContainer: {
    marginTop: '64px', // theme.mixins.toolbar.minHeight
  }
}))

function App() {
  const classes = useStyles()
  const [profileName, setProfileName] = useState('')

  const setName = (name) => {
    console.log('new name:', name)
    setProfileName(name)
  }

  return (
    <div className={classes.layoutContainer}>
      <Navbar name={profileName} />

      <div className={classes.contentContainer}>
        <Container>
          {/* Profile */}
          <ProfileContext.Provider value={{
            name: profileName,
            setName: setName
          }}>
            <ProfileName />
          </ProfileContext.Provider>

          {/* Courses */}
          <CoursesProvider>
            <Courses />
          </CoursesProvider>
        </Container>
      </div>
    </div>
  );
}

export default App;
