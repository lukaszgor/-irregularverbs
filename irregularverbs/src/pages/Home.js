import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import { Card } from 'primereact/card';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home=()=>{

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

<Card title="Title">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
</Card>



<TableContainer component={Paper}>
      <Table sx={{ minWidth: 80 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rodzaj</TableCell>
            <TableCell align="left">Opis</TableCell>
            <TableCell align="right">Akcje</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        <TableRow>
            <TableCell>Dictionary</TableCell>
            <TableCell>olor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={dictionaryNavigate}>Show</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Infinitive</TableCell>
            <TableCell>olor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={InfinitiveNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Past Tense </TableCell>
            <TableCell>olor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={PastTenseNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Past Participle </TableCell>
            <TableCell>olor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={PastParticipleNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Translation </TableCell>
            <TableCell>olor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam </TableCell>
            <TableCell align="right">
            <Button variant="contained" onClick={TranslationNavigate}>Exercise</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gap Mix </TableCell>
            <TableCell>olor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam </TableCell>
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