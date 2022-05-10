import { useState } from 'react'
import logo from './logo.svg'
import { Button, Container } from '@material-ui/core'
import { ProfileName } from './components/ProfileName';
import ProfileContext from './context/ProfileContext'
import { Courses } from './components/Courses';
import CourseContext from './context/CourseContext';
import { exampleCourses } from './data/courses.data'

function App() {
  const [profileName, setProfileName] = useState('')
  const [courses, setCourses] = useState(exampleCourses)

  const setName = (name) => {
    console.log('new name:', name)
    setProfileName(name)
  }

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="primary">Learn React!</Button>
      </header>

      <Container>
        {/* Profile */}
        <ProfileContext.Provider value={{
          name: profileName,
          setName: setName
        }}>
          <ProfileName />
        </ProfileContext.Provider>

        {/* Courses */}
        <CourseContext.Provider value={{
          courses: courses,
          setCourses: setCourses
        }}>
          <Courses />
        </CourseContext.Provider>
      </Container>

      
    </div>
  );
}

export default App;
