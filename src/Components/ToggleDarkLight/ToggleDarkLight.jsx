import { useContext, useEffect,useState } from "react";
import './ToggleDarkLight.css'
import { Context } from "../../ContextAPI";

const ToggleDarkLight = () => {
    const [toggleOn,setToggleOn] = useState(false);
    let imgurl = toggleOn?
        "https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/28/FAB005/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png":
        "https://img.icons8.com/sf-regular-filled/28/000000/moon-symbol.png";
    const {setLightMode} = useContext(Context);

    useEffect(()=>{
        !toggleOn?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");
        setLightMode(toggleOn);
    },[toggleOn])

    return(
        <div className="toggleContainer">
            <input id="toggleCheckbox" type="checkbox" onChange={()=>setToggleOn(!toggleOn)}  checked={toggleOn}/>
            <label htmlFor="toggleCheckbox" className="toggle">
                <img width="28" height="28" src={imgurl} alt="Mode"/>
                {!toggleOn?"Dark mode":"Light mode"}
            </label>
        </div>
    )
}
export default ToggleDarkLight;