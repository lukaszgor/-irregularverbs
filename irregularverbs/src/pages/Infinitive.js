import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Changesorce from "../components/Changesorce";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
const Infinitive=()=>{
    const [data,setData] =useState(null)
    const [fetchError,setFetchError] =useState(null)

    const [infinitiveVariable,setinfinitiveVariable] =useState(null)
    const [pastParticipleVariable,setPastParticipleVariable] =useState(null)
    const [pastTenseVariable,setPastTenseVariable] =useState(null)
    const [translationVariable,setTranslationVariable] =useState(null)


let graduate;
    const fetchData = async()=>{
graduate = localStorage.getItem('graduateVariable');

if(graduate == 1){
    const{data,error} =  await supabase
    .from('randomirreguralverbs')
    .select()
    .limit(1)
    .single()
    if(error){
        console.log(error)
        setData(null)
        setFetchError("no data")
    }if(data){
      setData(data)
      setFetchError(null)
      console.log(data)
setinfinitiveVariable(data.infinitive)
setPastParticipleVariable(data.pastParticiple)
setPastTenseVariable(data.pastTense)
setTranslationVariable(data.translation)
    }
}
else{
    const{data,error} =  await supabase
    .from('randomirreguralverbs')
    .select()
    .eq('graduate', graduate)
    .limit(1)
    .single()
    if(error){
        console.log(error)
        setData(null)
        setFetchError("no data")
    }if(data){
      setData(data)
      setFetchError(null)
      console.log(data)

setinfinitiveVariable(data.infinitive)
setPastParticipleVariable(data.pastParticiple)
setPastTenseVariable(data.pastTense)
setTranslationVariable(data.translation)

    }
}
       
    }
    return(
    <div>
        <Box sx={{
          justifyContent: 'center',
        }}>
<h1>Infinitive</h1>
<Changesorce></Changesorce>
<p></p>
<TextField
          id="outlined-read-only-input"
          label="Infinitive"
          defaultValue="Hello World"
          value={infinitiveVariable}
          InputProps={{
            readOnly: true,
          }}
        />
         <br/>
         <br/>
        <TextField
          id="outlined-read-only-input"
          label="Past Participle"
          defaultValue="Hello World"
          value={pastParticipleVariable}
          InputProps={{
            readOnly: true,
          }}
        />
         <br/>
         <br/>
        <TextField
          id="outlined-read-only-input"
          label="Past Tense"
          defaultValue="Past Tense"
          value={pastTenseVariable}
          InputProps={{
            readOnly: true,
          }}
        />
         <br/>
         <br/>
        <TextField
          id="outlined-read-only-input"
          label="Translation"
          defaultValue="Translation"
          value={translationVariable}
          InputProps={{
            readOnly: true,
          }}
        />
         <br/>
         <br/>

<p></p>
<Button autoFocus onClick={fetchData}>
              Losuj
        </Button>

</Box>

    </div>
        
    )
}
export default Infinitive