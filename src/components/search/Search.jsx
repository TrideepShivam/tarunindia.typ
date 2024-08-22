import { useContext, useRef, useState } from 'react';
import { Context } from '../../ContextAPI';
import './Search.css'
import CircleButton from '../circleButton/CircleButton';
import Textbox from '../textbox/Textbox';
import Button from '../button/Button';
import api from '../../api';
import Loading from '../loading/Loading';
import Hyperlink from '../hyperlink/Hyperlink';
import PopUpContainer from '../popUpContainer/PopUpContainer';
 
const Search=(props)=>{
    const {lightMode} = useContext(Context);
    const [loading,setLoading]= useState(false)
    const today = new Date().toISOString().split('T')[0];
    const [more,setMore]=useState(false)
    const startDateRef = useRef(today)
    const endDateRef = useRef(today)
    const img = <img width="25" height="25" src={
        !lightMode?"https://img.icons8.com/ios-filled/25/000000/delete-sign--v1.png":
                "https://img.icons8.com/ios-filled/25/ffffff/delete-sign--v1.png"
    } alt="back"/>;
    const yymmdd = (d)=>{
        const date = new Date(d)
        console.log(d)
        const formattedYear = date.getFullYear().toString();
        const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0");
        const formattedDay = date.getDate().toString().padStart(2, "0");

        const result = `${formattedYear}/${formattedMonth}/${formattedDay}`;
        return result
    }
    const handleSearch=()=>{
        setLoading(true)
        api.post('/search',{
            start:yymmdd(startDateRef.current.value),
            end:more&&yymmdd(endDateRef.current.value)
        })
        .then(({data})=>{
            props.setTestDetail(data)
            props.onClick()
            setLoading(false)
        }).catch(({response})=>{
            console.log(response)
            setLoading(false)
        })
    }
    if(loading)
        return <Loading/>
    return(
        <PopUpContainer>
            <div className="searchBox">
                <h2 className="highlight">Search {more?'between dates':'with date'}</h2>
                <CircleButton onClick={props.onClick} style={{top:"1em",right:"0.5em"}} value={img} />
                <Textbox var={startDateRef} legendStyle={true} type={'date'} legend={more?'Start':'Date'} />
                {more&&<Textbox var={endDateRef} legendStyle={true} type={'date'} legend={'End'} />}
                <Hyperlink value={more?'less':'more'} onClick={()=>setMore(!more)}/>
                <Button value={'Search'} onClick={handleSearch}/>

            </div>
        </PopUpContainer>
    )
}

export default Search;