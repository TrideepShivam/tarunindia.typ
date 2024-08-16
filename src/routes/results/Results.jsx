import { useContext, useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import './Results.css'
import ResultDetail from '../../components/resultDetail/ResultDetail'
import Button from '../../components/button/Button'
import api from '../../api'
import Loading from '../../components/loading/Loading'
import CircleButton from '../../components/circleButton/CircleButton'
import { Context } from '../../ContextAPI'
import Search from '../../components/search/Search'
import useAuthInterceptor from '../../hooks/useAuthInterceptor'


const Results=()=>{
    useAuthInterceptor()
    const {lightMode,setMsg} = useContext(Context);
    const img = <img width="25" height="25" src={
        !lightMode?"https://img.icons8.com/ios-filled/25/000000/search.png":
                "https://img.icons8.com/ios-filled/25/ffffff/search.png"
    } alt="back"/>;
    const imgrefresh = <img width="25" height="25" src={
        !lightMode?"https://img.icons8.com/ios-filled/25/000000/refresh.png":
                "https://img.icons8.com/ios-filled/25/ffffff/refresh.png"
    } alt="back"/>;

    const cardData = [{
        id:0,
        value:"31",
        unit:"WPM",
        cardHead:"Average WPM",
        more:false,
        increment:true
    },{
        id:1,
        value:"94.3",
        unit:"%",
        cardHead:"Average Accuracy",
        more:false,
        increment:true
    },{
        id:2,
        value:"343",
        unit:"KPM",
        cardHead:"Average KPM",
        more:false,
        increment:true
    }]
    const [cards,setCards]=useState(cardData)
    //used to concatinate all new avg value and store it into cards state in a one go
    const updateCardValues = (newWPM, newAccuracy, newKPM) => {
        const updatedCards = cards.map((card) => {
          switch (card.id) {
            case 0:
              return { ...card, value: newWPM.toString() }
            case 1:
              return { ...card, value: newAccuracy.toString() }
            case 2:
              return { ...card, value: newKPM.toString() }
            default:
              return card
          }
        })
        setCards(updatedCards)
    }
    const [refresh,setRefresh]=useState(false)
    const [testDetail,setTestDetail]=useState()
    const [loading,setLoading] = useState(true)
    const [details,setDetails]=useState({
        open:false,
        data:''
    })
    const [search,setSearch]=useState(false)
    useEffect(()=>{
        api.get('/get-attempts')
        .then(({data})=>{
            setRefresh(false)
            setTestDetail(data)
            const averageWPM = (data.reduce((sum, user) => sum + user.test_details.wpm, 0) / data.length).toFixed(2)
            const averageAccuracy = (data.reduce((sum, user) => sum + user.test_details.accuracy, 0) / data.length).toFixed(2)
            const averageKPM = (data.reduce((sum, user) => sum + user.test_details.kpm, 0) / data.length).toFixed(2)
            //call fn with 3 values
            updateCardValues(averageWPM, averageAccuracy, averageKPM)
            setLoading(false)
        }).catch((response)=>{
            setMsg({
                isOpen:true,
                status:"Error",
                message:response.message
            })
        })
    },[refresh])
    if(loading){
        return <Loading/>
    }
    return(
    <>
        {search&&<Search setTestDetail={setTestDetail} onClick={()=>setSearch(false)}/>}
        {details.open&&<ResultDetail details={details} setDetails={setDetails}/>}   
        <p className="sectionHead">RESULTS</p>
        <div className="resultContent">
            {cards.map((item,index)=>
                <Card key={index} val={item} />
            )}
            <div className="resultTableContainer" style={{width:"95%"}}>
                <table>
                    <thead>
                    <tr className='highlight'>
                        <td>DATE (yyyy-mm-dd)</td>
                        <td>TIME</td>
                        <td>WPM</td>
                        <td>ACCURACY</td>
                        <td>LANGUAGE</td>
                        <td>ERRORS</td>
                        <td>DURATION</td>
                        <td style={{position:'relative'}}>
                            <CircleButton style={{top:'-.2em',right:'4em'}} value={imgrefresh} onClick={()=>{
                                setRefresh(true)
                                setLoading(true)
                            }}/>
                            <CircleButton style={{top:'-.2em',right:'.5em'}} value={img} onClick={()=>setSearch(true)}/>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {testDetail.length?
                    testDetail.slice(0).reverse().map((item,index)=>
                    <tr key={index}>
                        <td>{item.created_at.split('T')[0]}</td>
                        <td>{item.created_at.split('T')[1].slice(0,8)}</td>
                        <td>{item.test_details.wpm}</td>
                        <td>{item.test_details.accuracy}</td>
                        <td>{item.stories.language}</td>
                        <td>{item.test_details.errors}</td>
                        <td>{item.duration} min</td>
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

export default Results