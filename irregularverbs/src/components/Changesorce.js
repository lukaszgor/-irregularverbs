import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Changesorce=()=>{

    const [graduate, setGraduate] = useState(1);

    const handleChange = (event) => {
        setGraduate(event.target.value);
        localStorage.setItem('graduateVariable', event.target.value);
        
    };
    return(
    <div>
<h1>Changesorce</h1>
<Box sx={{ minWidth: 120,
display: 'flex',
justifyContent: 'center',
}}>
      <FormControl >
        <InputLabel id="demo-simple-select-label">grade</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={graduate}
          label="grade"
          onChange={handleChange}
        >
          <MenuItem value={1}>All</MenuItem>
          <MenuItem value={5}>Grade 5</MenuItem>
          <MenuItem value={6}>Grade 6</MenuItem>
          <MenuItem value={7}>Grade 7</MenuItem>
          <MenuItem value={8}>Grade 8</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
        
    )
}
export default Changesorce