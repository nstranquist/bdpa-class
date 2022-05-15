import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core'
import { ProfileName } from './components/ProfileName';
import { Navbar } from './components/Navbar'
import { Courses } from './components/Courses';
import { PageNotFound } from './components/PageNotFound';
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
    <CoursesProvider>
      <ProfileContext.Provider value={{
        name: profileName,
        setName: setName
      }}>
        <div className={classes.layoutContainer}>
          <Navbar name={profileName} />

          <div className={classes.contentContainer}>
            <Container>
              <Routes>
                <Route path="/" element={<Courses />} />
                <Route path="/profile" element={<ProfileName />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Container>
          </div>
        </div>
      </ProfileContext.Provider>
    </CoursesProvider>
  );
}

export default App;
