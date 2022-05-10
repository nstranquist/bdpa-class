import { createContext } from 'react'

const initialProfileValue = {
  name: '',
  setName: () => {}
}

const ProfileContext = createContext(initialProfileValue)

export default ProfileContext;

