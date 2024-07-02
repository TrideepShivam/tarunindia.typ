import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import './Results.css'
import ResultDetail from '../../Components/ResultDetail/ResultDetail';
import Button from '../../Components/Button/Button';
import api from '../../api';

const data = [{
    value:"31",
    unit:"WPM",
    cardHead:"Last Attempt",
    more:false,
    increment:true
},{
    value:"94.3",
    unit:"%",
    cardHead:"Last Accuracy",
    more:false,
    increment:true
},{
    value:"343",
    unit:"",
    cardHead:"Last Accuracy",
    more:false,
    increment:true
}]
const Results=()=>{
    const [testDetail,setTestDetail]=useState()
    const [loading,setLoading] = useState(true)
    const [details,setDetails]=useState({
        open:false,
        data:''
    })
    useEffect(()=>{
        api.get('/get-attempts')
        .then(({data})=>{
            console.log(data)
            setTestDetail(data)
            setLoading(false)
        }).catch(({response})=>{
            console.log(response)
        })
    },[])
    if(loading){
        return <p>Loading...</p>
    }
    return(
    <>
        {details.open&&<ResultDetail details={details} setDetails={setDetails}/>}   
        <p className="sectionHead">RESULTS</p>
        <div className="resultContent">
            {data.map((item,index)=>
                <Card key={index} val={item} style={{width:"28%"}}/>
            )}
            <div className="resultTableContainer" style={{width:"97%"}}>
                <table>
                    <thead>
                    <tr className='highlight'>
                        <td>DATE</td>
                        <td>WPM</td>
                        <td>ACCURACY</td>
                        <td>LANGUAGE</td>
                        <td>ERRORS</td>
                        <td>SEARCH</td>
                    </tr>
                    </thead>
                    <tbody>
                    {testDetail.length?
                    testDetail.slice(0).reverse().map((item,index)=>
                    <tr key={index}>
                        <td>{item.created_at}</td>
                        <td>{item.test_details.wpm}</td>
                        <td>{item.test_details.accuracy}</td>
                        <td>{item.stories.language}</td>
                        <td>{item.test_details.errors}</td>
                        <td><Button transparancy={true} onClick={()=>setDetails({
                            ...details,
                            open:true,
                            data:item,
                        })} value="details"/></td>
                    </tr>
                    ):
                    <tr>
                        <td style={{padding:'5em',textAlign:'center'}} colSpan={5}>No Data Found</td>
                    </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default Results;