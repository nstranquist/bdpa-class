import { useContext } from 'react'
import { Box, TextField, Typography } from "@material-ui/core"
import ProfileContext from '../context/ProfileContext'

export const ProfileName = () => {
  const context = useContext(ProfileContext)

  return (
    <Box>
      <Typography>Profile Name</Typography>
      <TextField placeholder="Your name here" value={context.name} onChange={(e) => context.setName(e.target.value)} />
    </Box>
  )
}