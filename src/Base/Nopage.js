import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import { Box } from '@mui/material'

function Nopage() {
    const history = useHistory()
  return (
   <Base>
   <Box>
    <div>
      <h4>404 No Page Content</h4>
    </div>
    <div>
      <h4>Wrong Url please click below button</h4>
    </div>
    <div className='dashboard'>
        <button
        onClick={()=>history.push("/")}
        >
            Go to DashBoard
        </button>
      </div>
   </Box>
   </Base>
  )
}

export default Nopage