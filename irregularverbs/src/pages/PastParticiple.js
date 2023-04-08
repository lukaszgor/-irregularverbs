import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Changesorce from "../components/Changesorce";
const PastParticiple=()=>{

    return(
    <div>
<h1>PastParticiple</h1>
<Changesorce></Changesorce>
    </div>
        
    )
}
export default PastParticiple