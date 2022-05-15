import { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from "@material-ui/core"
import { useProfile } from '../context/ProfileContext'
import { Close, Edit } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'

// Could use route params, then use this on home page and profile page with slightly different behavior

export const ProfileName = () => {
  const context = useProfile()
  const location = useLocation()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    console.log({location}) // we get: hash, key, pathname, search, state
    if(location.pathname && location.pathname === '/profile') {
      // if we are on the profile page, let's make the form shown by default
      setShowForm(true)
    }
  }, [location])

  const toggleShowForm = () => setShowForm(!showForm)

  return (
    <Box style={{paddingTop: '30px'}}>
      {!showForm && (
        <Button startIcon={<Edit />} onClick={toggleShowForm} color="primary" style={{marginLeft: 10}}>
          Edit Profile
        </Button>
      )}

      {showForm && (
        <>
          <Typography variant="h5" component="h2" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span>Profile</span>
            <Button startIcon={<Close />} onClick={toggleShowForm} style={{marginLeft: 10}}>
              Close
            </Button>
          </Typography>
          <TextField placeholder="Your name here" value={context.name} onChange={(e) => context.setName(e.target.value)} onSubmit={toggleShowForm} margin="normal" fullWidth autoFocus={location.pathname === '/profile'} />
        </>
      )}
    </Box>
  )
}