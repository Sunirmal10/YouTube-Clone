import { Stack } from '@mui/material'
import React, { useContext } from "react";
import { list3 } from '../../utils/constants'
import { VidContext } from "../Context/VidContext";
import { useNavigate } from 'react-router-dom';

const SlimSideBar = () => {

  const navigate = useNavigate();

  const {showSlim, setSelectedCategory} = useContext(VidContext)

  return (
    <Stack
    direction={'column'} sx={{ display: showSlim ? 'block' : 'none', px:'0.25rem', color: '#000000', zIndex: '10', backgroundColor: '#0f0f0f', pr: '0.7rem', position:'fixed', width: '3.5rem', height:'90vh', left: '0'
     }}
    >
      <Stack>
      {list3.map((cat) => (
          <button 
           className="slim-btn"   
           onClick={() =>{ 
            navigate('/')
            setSelectedCategory(cat.name)}}        
            style={
               { background: "#0f0f0f", color: "#ffffff"}
               
            }
            key={cat.name}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
           ))}
      </Stack>
    </Stack>
  )
}

export default SlimSideBar