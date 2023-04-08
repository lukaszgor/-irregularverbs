import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Changesorce from "../components/Changesorce";

const GapMix=()=>{

    return(
    <div>
<h1>GapMix</h1>
<Changesorce></Changesorce>
    </div>

        
    )
}
export default GapMix