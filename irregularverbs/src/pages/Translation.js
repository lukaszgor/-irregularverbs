import { useNavigate } from "react-router-dom"
import { useState,useEffect } from 'react';
import supabase from "../supabaseClient"
import Changesorce from "../components/Changesorce";
const Translation=()=>{

    return(
    <div>
<h1>Translation</h1>
<Changesorce></Changesorce>
    </div>
        
    )
}
export default Translation