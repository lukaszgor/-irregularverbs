import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dictionary=()=>{
    const [graduate, setGraduate] = useState(1);
    const handleChange = (event) => {
        setGraduate(event.target.value);
        fetchData();
    };
  
    const [data,setData] =useState(null)
    const [fetchError,setFetchError] =useState(null)

    const handleCellClick = (param, event) => {
        event.stopPropagation();
      };
      
      const handleRowClick = (param, event) => {
        event.stopPropagation();
      };

    const columns = [
        { field: 'id', headerName: 'ID', type: 'number', width: 10 },
        { field: 'infinitive', headerName: 'infinitive', width: 80 },
        { field: 'pastTense', headerName: 'past tense', width: 100 },
        { field: 'pastParticiple', headerName: 'past participle', width: 100 },
        { field: 'translation', headerName: 'translation', width: 80 },
        { field: 'graduate', headerName: 'grade', type: 'number', width: 60 },
      ];

      const fetchData = async()=>{

        if(graduate == 1){
            const{data,error} =  await supabase
            .from('irregularverbs')
            .select()
            if(error){
                console.log(error)
                setData(null)
                setFetchError("no data")
            }if(data){
              setData(data)
              setFetchError(null)
            }
        }
        else{
            const{data,error} =  await supabase
            .from('irregularverbs')
            .select()
            .eq('graduate', graduate)
            if(error){
                console.log(error)
                setData(null)
                setFetchError("no data")
            }if(data){
              setData(data)
              setFetchError(null)
            }
        }
    }

      useEffect(()=>{
      console.log(data)
      fetchData()
      },[])

    return(
    <div>
<h1>Dictionary</h1>
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
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
    <Button autoFocus onClick={fetchData}>
              refresh
        </Button>
<div>
  {fetchError &&(<p>{fetchError}</p>)}
  {data &&(
  <div>
<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
    </div>
<div>
</div>
  </div>
  )}

</div>
    </div>
  
        
    )
}
export default Dictionary