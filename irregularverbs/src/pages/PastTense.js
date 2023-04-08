import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Changesorce from "../components/Changesorce";
const PastTense=()=>{

    return(
    <div>
<h1>PastTense</h1>
<Changesorce></Changesorce>
    </div>
        
    )
}
export default PastTense