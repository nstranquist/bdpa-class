import { useState } from 'react'
import logo from './logo.svg'
import { Button, Container } from '@material-ui/core'
import { ProfileName } from './components/ProfileName';
import ProfileContext from './context/ProfileContext'

function App() {
  const [profileName, setProfileName] = useState('')

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

      <ProfileContext.Provider value={{
        name: profileName,
        setName: setName
      }}>
        <Container>
          <ProfileName />
        </Container>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
