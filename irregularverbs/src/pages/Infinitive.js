import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Changesorce from "../components/Changesorce";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import { useSpeechSynthesis } from "react-speech-kit";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const Infinitive=()=>{
    const [data,setData] =useState(null)
    const [fetchError,setFetchError] =useState(null)

    const [infinitiveCheck,setinfinitiveCheck] =useState(null)

    const [infinitiveVariable,setinfinitiveVariable] =useState(null)
    const [pastParticipleVariable,setPastParticipleVariable] =useState(null)
    const [pastTenseVariable,setPastTenseVariable] =useState(null)
    const [translationVariable,setTranslationVariable] =useState(null)
    const { speak,voices } = useSpeechSynthesis();

    //check valid
const checkInfinitive = async()=>{
if(infinitiveVariable === infinitiveCheck){
    console.log('ok')
    handleClickAlertCorrect()
}else{
    console.log('zle')
    handleClickAlertInCorrect()
}
}
//alert configuration

// Correct
const [openCorrect,setOpenCorrect] =useState(null)

const handleClickAlertCorrect = () => {
  setOpenCorrect(true);
};

const handleCloseAlertCorrect = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpenCorrect(false);
};

//Incorrect
const [openInCorrect,setOpenInCorrect] =useState(null)

const handleClickAlertInCorrect = () => {
  setOpenInCorrect(true);
};

const handleCloseAlertInCorrect = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpenInCorrect(false);
};

// set graduate data
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
        <Box sx={{display: 'flex',p: 1,m: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', 
        }}>
<h1>Infinitive</h1>
<Changesorce></Changesorce>
<p></p>
{/* Infinitive */}
<Box sx={{
          display: 'flex',p: 1,m: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center', 
        }}>
<TextField
          id="outlined-read-only-input"
          label="Infinitive"
          value={infinitiveCheck}
          onChange={(e) =>
            setinfinitiveCheck(e.target.value)} 
  />
   <Button  onClick={() => speak({ text: infinitiveVariable, voice: voices[52] })}>
    <VolumeUpIcon></VolumeUpIcon>
     </Button>
 </Box>       
  <br/>
  {/* Past Tense */}
  <Box sx={{
          display: 'flex',p: 1,m: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center', 
        }}>
        <TextField
          id="outlined-read-only-input"
          label="Past Tense"
          defaultValue="Past Tense"
          value={pastTenseVariable}
          InputProps={{
            readOnly: true,
          }}
        />
        <Button  onClick={() => speak({ text: pastTenseVariable, voice: voices[52] })}>
        <VolumeUpIcon></VolumeUpIcon>
        </Button>
  </Box>
  <br/>
  {/* Past Participle */}
  <Box sx={{display: 'flex',p: 1,m: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center', 
        }}>
         <TextField
          id="outlined-read-only-input"
          label="Past Participle"
          defaultValue="Hello World"
          value={pastParticipleVariable}
          InputProps={{
            readOnly: true,
          }}
        />
        <Button  onClick={() => speak({ text: pastParticipleVariable, voice: voices[52] })}>
        <VolumeUpIcon></VolumeUpIcon>
        </Button>
</Box>
<br/>
<Box sx={{
          display: 'flex',p: 1,m: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center', 
        }}>
        <TextField
          id="outlined-read-only-input"
          label="Translation"
          defaultValue="Translation"
          value={translationVariable}
          InputProps={{
            readOnly: true,
          }}
        />
         <Button  onClick={() => speak({ text: translationVariable })}>
        <VolumeUpIcon></VolumeUpIcon>
        </Button>
</Box>

<Button autoFocus onClick={fetchData}>
              Losuj
        </Button>
        <Button autoFocus onClick={checkInfinitive}>
              Sprawdz
        </Button> 

{/* <Snackbar
        open={openCorrect}
        autoHideDuration={2000}
        onClose={handleCloseAlertCorrect}
        message="Correct!"
      /> */}
 {/* <Snackbar 
        open={openInCorrect}
        autoHideDuration={2000}
        onClose={handleCloseAlertInCorrect}
        message="Incorrect!"
      /> */}

      <Snackbar open={openCorrect}
        autoHideDuration={2000}
        onClose={handleCloseAlertCorrect}>
      <Alert severity="success">Correct!</Alert>
      </Snackbar>
      <Snackbar open={openInCorrect}
        autoHideDuration={2000}
        onClose={handleCloseAlertInCorrect}>
      <Alert severity="error">Incorrect! Correct answer: {infinitiveVariable}</Alert>
      </Snackbar>





</Box>  
    )
}
export default Infinitive