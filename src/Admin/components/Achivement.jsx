import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent' 
import { styled } from '@mui/material/styles'

const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute'
  })

  // Styled component for the trophy image
// const TrophyImg = styled('img')({
//     right: 36,
//     bottom: 20,
//     height: 98,
//     position: 'absolute'
//   })

const Achivement = () => {

    
  return (

    <div className='' sx={{ position: 'relative',
    //  bgcolor:"#f39c12",color:'white'
     }} >
      <CardContent>
      <Typography variant='h6' sx={{ letterSpacing: '0.20px' }}>
         RoyalNavy: Wear RoyalNavy Look Royal..
        </Typography>
        <Typography variant='body2'>Congratulations 🥳</Typography>
        
        <Typography variant='h5' sx={{my:3.1 }}>
          420.8k
        </Typography>

        <Button size='small' variant='contained'>
          View Sales
        </Button>
        <TriangleImg src={''} />
        {/* <TrophyImg alt='trophy' src='http://localhost:3001/images/misc/trophy.png'/> */}
      </CardContent>
    </div>

  )
}

export default Achivement