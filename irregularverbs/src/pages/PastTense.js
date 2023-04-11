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
import Speech from 'react-speech';

const PastTense=()=>{
    const [data,setData] =useState(null)
    const [fetchError,setFetchError] =useState(null)

    const [pastTenseCheck,setpastTenseCheck] =useState(null)

    const [infinitiveVariable,setinfinitiveVariable] =useState(null)
    const [pastParticipleVariable,setPastParticipleVariable] =useState(null)
    const [pastTenseVariable,setPastTenseVariable] =useState(null)
    const [translationVariable,setTranslationVariable] =useState(null)
    const { speak,voices } = useSpeechSynthesis();


    useEffect(()=>{
      fetchData()
        },[])

    //check valid
const checkPastTense = async()=>{
if(pastTenseVariable === pastTenseCheck){
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

setpastTenseCheck("")

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
<h2>Past Tense</h2>
<Changesorce></Changesorce>
<p></p>
{/* Infinitive */}
<Box>
<TextField
          id="outlined-read-only-input"
          label="Infinitive"
          focused
          value={infinitiveVariable}
          InputProps={{
            readOnly: true,
          }}
  />
  <br></br>
  <Speech  textAsButton={true}  
            displayText="Pronunciation"   
            text={infinitiveVariable}
                pitch="1"
                rate="1"
                volume="1"
                lang="en-GB"
                voice="Google UK English Male">
        </Speech>
 </Box>       
  <br/>
  {/* Past Tense */}
  <Box>
        <TextField
          id="outlined-read-only-input"
          label="Past Tense"
          focused
          value={pastTenseCheck}
          onChange={(e) =>
            setpastTenseCheck(e.target.value)} 
        />
        <br></br>
  <Speech  textAsButton={true}  
            displayText="Pronunciation"   
            text={pastTenseVariable}
                pitch="1"
                rate="1"
                volume="1"
                lang="en-GB"
                voice="Google UK English Male">
        </Speech>
  </Box>
  <br/>
  {/* Past Participle */}
  <Box>
         <TextField
          id="outlined-read-only-input"
          label="Past Participle"
          focused
          value={pastParticipleVariable}
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br>
  <Speech  textAsButton={true}  
            displayText="Pronunciation"   
            text={pastParticipleVariable}
                pitch="1"
                rate="1"
                volume="1"
                lang="en-GB"
                voice="Google UK English Male">
        </Speech>
</Box>
<br/>
<Box sx={{
          display: 'flex',p: 1,m: 1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center', 
        }}>
        <TextField
          id="outlined-read-only-input"
          label="Translation"
          focused
          value={translationVariable}
          InputProps={{
            readOnly: true,
          }}
        />
</Box>

<Button variant="outlined" autoFocus onClick={fetchData}  sx={{m: 1 }}>        
Random verb
        </Button>
        <Button variant="outlined" color="success" autoFocus onClick={checkPastTense}>
              Check
        </Button> 
      <Snackbar open={openCorrect}
        autoHideDuration={2000}
        onClose={handleCloseAlertCorrect}>
      <Alert severity="success">Correct!</Alert>
      </Snackbar>
      <Snackbar open={openInCorrect}
        autoHideDuration={2000}
        onClose={handleCloseAlertInCorrect}>
      <Alert severity="error">Incorrect! Correct answer: {pastTenseVariable}</Alert>
      </Snackbar>
</Box>  
    )
}
export default PastTense