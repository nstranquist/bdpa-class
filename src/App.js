import logo from './logo.svg'
import { Button, Container } from '@material-ui/core'
import { ProfileName } from './components/ProfileName';

function App() {
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
        <ProfileName />
      </Container>
    </div>
  );
}

export default App;
