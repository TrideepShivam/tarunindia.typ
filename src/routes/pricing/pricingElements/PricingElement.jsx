import { useContext, useEffect, useState } from 'react'
import './PricingElement.css'
import { Context } from '../../../ContextAPI'
import Loading from '../../../components/loading/Loading'
import api from '../../../api'
import CardContainer from '../../../components/cardContainer/CardContainer'
import Hyperlink from '../../../components/hyperlink/Hyperlink'
import Button from '../../../components/button/Button'
 
const PricingElement=()=>{
    const {setMsg,responsive} = useContext(Context)
    const [loading,setLoading] =useState(false)
    const pricingDays=[365,180,90,30,15]
    const [day,setDay]=useState(pricingDays[0])
    const [data,setData] = useState([])
    useEffect(()=>{
        setLoading(true)
        api.post(`/plan/day/${day}`).then(({data}) =>{
            setData(data)
            setLoading(false)
        }).catch(({response}) => {
            setLoading(false)
            setMsg({
                isOpen:true,
                status:response.data?response.data.state:'Error',
                message:response.data?response.data.message:'Server Error. Try again'
            })
        });
    },[day])
    
    return(
    <div className='pricingElementContainer'>
        <CardContainer style={{justifyContent:!responsive?'center':'left'}}>
            {pricingDays.map((item,index)=>
                <Hyperlink key={index} type={item==day?'themed':'trans-hover'} value={item+'D'} onClick={()=>setDay(item)}/>
            )}
        </CardContainer>
        {!loading?<div className="priceCardContainer">
            {data.map((item,index)=>
                <div key={index} className={index==data.length-1?'planCard exclusive':'planCard'}>
                    <h2>{item.language}</h2>
                    <h1 className='highlight'>{item.price}₹</h1>
                    <h3>{item.duration} Days</h3>
                    <p><span className="highlight">{parseFloat((item.price / day).toFixed(2))}₹</span> per day</p>
                    <p>{index==data.length-1?'Unlimited':item.language} access</p>
                    <p>{index==data.length-1?'Free':'Paid'} Event Tickets</p>
                    <p>24/7 support</p>
                    <Button style={{width:'10em'}} value={'Buy Now'} onClick={()=>{}}/>
                </div>
            )}
        </div>:<Loading/>}
    </div>
    )
}

export default PricingElement;