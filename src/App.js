import { Routes, Route } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core'
import { ProfileName } from './components/ProfileName';
import { Navbar } from './components/Navbar'
import { Courses } from './components/Courses';
import { CourseDetail } from './components/CourseDetail';
import { PageNotFound } from './components/PageNotFound';
import ProfileProvider from './context/ProfileContext'
import CoursesProvider from './context/CoursesContext';
import { HomePage } from './components/HomePage';

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

  return (
    <CoursesProvider>
      <ProfileProvider>
        <div className={classes.layoutContainer}>
          <Navbar />

          <div className={classes.contentContainer}>
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/profile" element={<ProfileName />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Container>
          </div>
        </div>
      </ProfileProvider>
    </CoursesProvider>
  );
}

export default App;
