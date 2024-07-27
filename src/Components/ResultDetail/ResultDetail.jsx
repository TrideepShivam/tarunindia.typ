import { useContext } from 'react';
import Percentage from './percentage/Percentage';
import './ResultDetail.css'
import { Context } from '../../ContextAPI';
import CircleButton from '../circleButton/CircleButton';

const testdetails={
    wpm:0,
    kpm:0,
    words:0,
    duration:1,
    language:'english',
    characters:0,
    story:"",
    date:"",
    accuracy:80,
    errors:{'[The]':"[the]",'[ago,]':"[ago]",'[devastating]':"[devestating]",'[in]':"[ins]",'[spell]':"[spel]",'[there]':"[thare]",'[thirsty]':"[thersty]",'[time]':"[tim]",'[water.]':"[watar]"}
}
const ResultDetail=({details,setDetails})=>{
    const {lightMode} = useContext(Context);
    const img = <img width="25" height="25" src={
        !lightMode?"https://img.icons8.com/ios-filled/25/000000/delete-sign--v1.png":
                "https://img.icons8.com/ios-filled/25/ffffff/delete-sign--v1.png"
    } alt="back"/>;
    const dateAndTime = details.data.created_at.split('T')
    const font = ()=>{
        var lang = details.data.stories.language
        if(lang=='english')
            return 'arial'
        else
            return lang
    }
    return(
    <div className="resultDetailContainer">
        <div className="details">
            <CircleButton details={details} action={setDetails} style={{top:"1em",right:"0.5em"}} value={img} />
            <Percentage value={details.data.test_details.accuracy} text={'accuracy'}/>
            <div>
                <h3 className="sectionHead">Details</h3>
                <table>
                    <tbody>
                        <tr><td>WPM</td><td className='highlight'>{details.data.test_details.wpm}</td></tr>
                        <tr><td>KPM</td><td className='highlight'>{details.data.test_details.kpm}</td></tr>
                        <tr><td>WORDS</td><td className='highlight'>{details.data.test_details.words}</td></tr>
                        <tr><td>CHAR WITH SPACES</td><td className='highlight'>{details.data.test_details.char_with_spaces}</td></tr>
                        <tr><td>DURATION</td><td className='highlight'>{details.data.duration} min</td></tr>
                        <tr><td>LANGUAGE</td><td className='highlight'>{details.data.stories.language}</td></tr>
                        <tr><td>STORY</td><td className='highlight'>{details.data.stories.title}</td></tr>
                        <tr><td>DATE</td><td className='highlight'>{dateAndTime[0]}</td></tr>
                        <tr><td>TIME</td><td className='highlight'>{dateAndTime[1].slice(0,8)}</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="errors">
                <h3 className="sectionHead">Errors</h3>
                <table>
                <tbody >
                {   JSON.parse(details.data.mistakes).length!=0?
                    Object.entries(JSON.parse(details.data.mistakes)).map(([key,value])=>
                        <tr key={key}>
                            <td>[<span style={{fontFamily:font()}}>{key}</span>]</td>
                            <td>[<span style={{fontFamily:font()}}>{value}</span>]</td>
                        </tr>
                    ):<p>No Mistakes</p>
                }
                </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default ResultDetail;