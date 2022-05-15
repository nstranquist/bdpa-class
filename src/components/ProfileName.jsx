import { useState } from 'react'
import { Box, Button, TextField, Typography } from "@material-ui/core"
import { useProfile } from '../context/ProfileContext'
import { Close, Edit } from '@material-ui/icons'

export const ProfileName = () => {
  const context = useProfile()
  const [showForm, setShowForm] = useState(false)

  // Could use route params, then use this on home page and profile page with slightly different behavior

  const toggleShowForm = () => setShowForm(!showForm)

  return (
    <Box style={{paddingTop: '30px'}}>
      {!showForm && (
        <Button startIcon={<Edit />} onClick={toggleShowForm} variant="primary" style={{marginLeft: 10}}>
          Edit Profile
        </Button>
      )}

      {showForm && (
        <>
          <Typography variant="h5" component="h2" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span>Profile</span>
            <Button startIcon={<Close />} onClick={toggleShowForm} style={{marginLeft: 10}}>
              Cancel
            </Button>
          </Typography>
          <TextField placeholder="Your name here" value={context.name} onChange={(e) => context.setName(e.target.value)} onSubmit={toggleShowForm} margin="normal" fullWidth />
        </>
      )}
    </Box>
  )
}