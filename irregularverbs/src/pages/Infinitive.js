import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Changesorce from "../components/Changesorce";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import { useSpeechSynthesis } from "react-speech-kit";
const Infinitive=()=>{
    const [data,setData] =useState(null)
    const [fetchError,setFetchError] =useState(null)

    const [infinitiveCheck,setinfinitiveCheck] =useState(null)

    const [infinitiveVariable,setinfinitiveVariable] =useState(null)
    const [pastParticipleVariable,setPastParticipleVariable] =useState(null)
    const [pastTenseVariable,setPastTenseVariable] =useState(null)
    const [translationVariable,setTranslationVariable] =useState(null)
    const { speak,voices } = useSpeechSynthesis();



const checkInfinitive = async()=>{
if(infinitiveVariable === infinitiveCheck){
    console.log('ok')
}else{
    console.log('zle')
}
}

let graduate;
    const fetchData = async()=>{

setinfinitiveCheck("")

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
    
        <Box sx={{
          display: 'flex',
          p: 1,
          m: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', 
        }}>
<h1>Infinitive</h1>
<Changesorce></Changesorce>
<p></p>
<TextField
          id="outlined-read-only-input"
          label="Infinitive"
          value={infinitiveCheck}
          onChange={(e) =>
            setinfinitiveCheck(e.target.value)} 
        />
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
        <TextField
          id="outlined-read-only-input"
          label="Translation"
          defaultValue="Translation"
          value={translationVariable}
          InputProps={{
            readOnly: true,
          }}
        />
      

<p></p>
<Button autoFocus onClick={fetchData}>
              Losuj
        </Button>
        <Button autoFocus onClick={checkInfinitive}>
              Sprawdz
        </Button>
        <Button autoFocus onClick={() => speak({ text: pastParticipleVariable, voice: voices[52] })}>
              wymowa
        </Button>
</Box>

    
        
    )
}
export default Infinitive