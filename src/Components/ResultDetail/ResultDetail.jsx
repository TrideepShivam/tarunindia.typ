import { useContext } from 'react';
import Percentage from './Percentage/Percentage';
import './ResultDetail.css'
import { Context } from '../../ContextAPI';
import CircleButton from '../CircleButton/CircleButton';

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

    return(
    <div className="resultDetailContainer">
        <h1 className="highlight">Test Details</h1>
        <div className="details">
            <CircleButton details={details} setDetails={setDetails} style={{top:"1em",right:"0.5em"}} value={img} />
            <Percentage value={testdetails.accuracy} text={'accuracy'}/>
            <div>
                <h3 className="sectionHead">Details</h3>
                <table>
                    <tbody>
                    {
                        Object.entries(testdetails).map(([key,value])=>
                            key!=='errors'&&key!=='accuracy'&&<tr key={key}><td>{key.toUpperCase()} </td><td className='highlight'>{value}</td></tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div className="errors">
                <h3 className="sectionHead">Errors</h3>
                <table>
                <tbody>
                {
                    Object.entries(testdetails.errors).map(([key,value])=>
                        <tr key={key}><td>{key} </td><td>{value}</td></tr>
                    )
                }
                </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default ResultDetail;