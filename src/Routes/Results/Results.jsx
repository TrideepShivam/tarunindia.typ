import Card from '../../Components/Card/Card';
import Hyperlink from '../../Components/Hyperlink/Hyperlink';
import './Results.css'

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
    return(
    <>
        <p className="sectionHead">RESULTS</p>
        <div className="resultContent">
            {data.map((item,index)=>
                <Card key={index} val={item} style={{width:"28%"}}/>
            )}
            <div className="resultTableContainer" style={{width:"97%"}}>
                <table>
                    <tr className='highlight'>
                        <td>ID</td>
                        <td>DATE</td>
                        <td>WPM</td>
                        <td>ACCURACY</td>
                        <td>LANGUAGE</td>
                        <td>SEARCH</td>
                    </tr>
                    {testDetail.length?
                    testDetail.map((item,index)=>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.wpm}</td>
                        <td>{item.accuracy}</td>
                        <td>{item.language}</td>
                        <td><Hyperlink to="#" value="details"/></td>
                    </tr>
                    ):
                    <tr>
                        <td style={{padding:'5em',textAlign:'center'}} colSpan={5}>No Data Found</td>
                    </tr>}
                </table>    
            </div>
        </div>
    </>
    )
}

export default Results;