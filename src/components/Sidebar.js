import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utilis/constant'

const Sidebar = () => {
   
    const selectedCategory = 'New'
   
    return(
        <Stack direction='row' sx={{overflow:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
    {
        categories.map((category,index) => (
            <button key={index} className='category-btn' style={{background:category.name === selectedCategory && '#FC1503',color:'white'}}>
                <span style={{color:category.name === selectedCategory ? 'white' : 'red',marginRight:'15px'}}>{category.icon}</span>
                <span style={{opacity:category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
                {
                 console.log(category)
                }
            </button>
        ))
    }
  </Stack> 
    )
 
}

export default Sidebar