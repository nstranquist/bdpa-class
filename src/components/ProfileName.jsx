import { useState } from 'react'
import { Box, TextField, Typography } from "@material-ui/core"

export const ProfileName = () => {
  const [profileName, setProfileName] = useState('')

  return (
    <Box>
      <Typography>Profile Name</Typography>
      <TextField placeholder="Your name here" value={profileName} onChange={(e) => setProfileName(e.target.value)} />
    </Box>
  )
}