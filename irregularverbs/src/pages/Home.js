import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home=()=>{


  useEffect(()=>{
    localStorage.setItem('graduateVariable', 1);
    },[])





    const navigate = useNavigate()//add to nav

    const dictionaryNavigate = () => {
        navigate('/Dictionary')
      };
      const InfinitiveNavigate = () => {
        navigate('/Infinitive')
      };
      const PastParticipleNavigate = () => {
        navigate('/PastParticiple')
      };
      const PastTenseNavigate = () => {
        navigate('/PastTense')
      };
      const TranslationNavigate = () => {
        navigate('/Translation')
      };
      const GapMixNavigate = () => {
        navigate('/GapMix')
      };
    return(
    <div>
                <p className="m-0">
                An application for learning irregular verbs.
                </p>


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 80 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        <TableRow>
            <TableCell>Dictionary</TableCell>
            <TableCell>The module allows you to preview the entire dictionary of irregular verbs with a breakdown of the list of verbs for specific school grades </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={dictionaryNavigate}>Show</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Infinitive</TableCell>
            <TableCell>The module allows learning in the form of quziu. The student should identify the correct form based on the three forms and the translation. </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={InfinitiveNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Past Tense </TableCell>
            <TableCell>The module allows learning in the form of quziu. The student should identify the correct form based on the three forms and the translation. </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={PastTenseNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Past Participle </TableCell>
            <TableCell>The module allows learning in the form of quziu. The student should identify the correct form based on the three forms and the translation. </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={PastParticipleNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Translation </TableCell>
            <TableCell>The module allows learning in the form of quziu. The student should identify the correct form based on the three forms and the translation.</TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={TranslationNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gap Mix </TableCell>
            <TableCell>The module allows learning in the form of quziu. The learner should indicate the correct form based on the three forms and the translation depending on the type drawn.</TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={GapMixNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
    
        </TableBody>
      </Table>
    </TableContainer>


    </div>
        
    )
}
export default Home