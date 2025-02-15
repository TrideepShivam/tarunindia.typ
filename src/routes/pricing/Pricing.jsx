import { useContext, useEffect, useState } from 'react'
import './Pricing.css'
import { Context } from '../../ContextAPI'
import { Navigate, useLocation } from 'react-router-dom'
import PricingElement from './pricingElements/PricingElement'
 
const Pricing=()=>{
    const {userDetails,msg,setMsg} = useContext(Context)
    const location = useLocation()
    if(userDetails&&location.pathname=='/pricing'){
        return <>
            <Navigate to={'/dashboard/pricing'}/>
        </>
    }
    return(
    <div className='pricingContainer'>
        <div className="pricingHead">
            <h1>Boost your typing skill</h1>
            <h1>with <span className="highlight">Typathon</span></h1>
            <p>Yearly and Half Yearly plan is starting from</p>
            <h1 className='price'>5₹</h1>
        </div>
        <div className="comparisonContainer">
            <h1 className="sectionHead">Why Premium</h1>
            <p>Compare our Freemium and Premium Plans</p>
            <div className="comparisonTable">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Freemium Version</th>
                            <th>Premium Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 min Testing</td>
                            <td>Unlimited</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>10 min Testing</td>
                            <td>1 per day</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>Advanced Analytics</td>
                            <td>Limited</td>
                            <td>Full</td>
                        </tr>
                        <tr>
                            <td>Event Tickets</td>
                            <td>Paid</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>Exam Based Test</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Schedule Reminder</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Ad-Free Experience</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Priority Updates</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="planContainer">
            <h1 className="sectionHead">Choose your plan</h1>
            <PricingElement/>
        </div>
    </div>
    )
}

export default Pricing;