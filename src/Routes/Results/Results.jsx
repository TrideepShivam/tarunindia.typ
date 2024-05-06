import { useState } from 'react';
import Card from '../../Components/Card/Card';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import './Results.css'
import ResultDetail from '../../Components/ResultDetail/ResultDetail';
import Button from '../../Components/Button/Button';

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
const testDetail=[
    {
        id:'0',
        date:'9/4/2024',
        wpm:'23.7',
        accuracy:'91.03',
        language:'Hindi'
    },{
        id:'0',
        date:'9/4/2024',
        wpm:'23.7',
        accuracy:'91.03',
        language:'Hindi'
    },{
        id:'0',
        date:'9/4/2024',
        wpm:'23.7',
        accuracy:'91.03',
        language:'Hindi'
    },{
        id:'0',
        date:'9/4/2024',
        wpm:'23.7',
        accuracy:'91.03',
        language:'Hindi'
    },{
        id:'0',
        date:'9/4/2024',
        wpm:'23.7',
        accuracy:'91.03',
        language:'Hindi'
    },{
        id:'0',
        date:'9/4/2024',
        wpm:'23.7',
        accuracy:'91.03',
        language:'Hindi'
    },{
        id:'0',
        date:'9/4/2024',
        wpm:'23.7',
        accuracy:'91.03',
        language:'Hindi'
    },{
        id:'0',
        date:'9/4/2024',
        wpm:'23.7',
        accuracy:'91.03',
        language:'Hindi'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    },{
        id:'1',
        date:'10/4/2024',
        wpm:'25',
        accuracy:'95',
        language:'English'
    }
]
const Results=()=>{
    const [details,setDetails]=useState({
        open:false,
        id:-1
    })

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
                        <td>ID</td>
                        <td>DATE</td>
                        <td>WPM</td>
                        <td>ACCURACY</td>
                        <td>LANGUAGE</td>
                        <td>SEARCH</td>
                    </tr>
                    </thead>
                    <tbody>
                    {testDetail.length?
                    testDetail.map((item,index)=>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.wpm}</td>
                        <td>{item.accuracy}</td>
                        <td>{item.language}</td>
                        <td><Button transparancy={true} onClick={()=>setDetails({
                            ...details,
                            open:true,
                            id:item.id,
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