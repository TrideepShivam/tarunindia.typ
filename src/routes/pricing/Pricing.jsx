import { useContext, useState } from 'react'
import './Pricing.css'
import { Context } from '../../ContextAPI'
import Loading from '../../components/loading/Loading'
import { Navigate, useLocation } from 'react-router-dom'
 
const Pricing=()=>{
    const {userDetails,msg,setMsg} = useContext(Context)
    const [loading,setLoading] =useState(false)
    const location = useLocation()
    if(loading){
        return <Loading/>
    }
    if(userDetails&&location.pathname=='/pricing'){
        return <>
            <Navigate to={'/dashboard/pricing'}/>
        </>
    }
    return(
        <>Pricing</>
    )
}

export default Pricing;