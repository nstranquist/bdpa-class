import { createContext, useContext, useState } from 'react'

const initialProfileValue = {
  name: '',
  setName: () => {}
}

const ProfileContext = createContext(initialProfileValue)

const ProfileProvider = ({ children }) => {
  const [profileName, setProfileName] = useState('')

  return (
    <ProfileContext.Provider value={{
      name: profileName,
      setName: setProfileName
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => useContext(ProfileContext)

export default ProfileProvider;

