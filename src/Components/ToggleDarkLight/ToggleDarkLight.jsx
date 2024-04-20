import { useContext, useEffect,useState } from "react";
import './ToggleDarkLight.css'
import { Context } from "../../ContextAPI";

const ToggleDarkLight = () => {
    const {lightMode,setLightMode} = useContext(Context);
    const handleMode=()=>{
        localStorage.setItem('LIGHT_MODE',!lightMode)
        setLightMode(!lightMode)
    }
    let imgurl = lightMode?
        "https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/28/FAB005/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png":
        "https://img.icons8.com/sf-regular-filled/28/000000/moon-symbol.png";

    useEffect(()=>{
        !lightMode?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");
    },[lightMode])

    return(
        <div className="toggleContainer">
            <input id="toggleCheckbox" type="checkbox" onChange={handleMode}  checked={lightMode}/>
            <label htmlFor="toggleCheckbox" className="toggle">
                <img width="28" height="28" src={imgurl} alt="Mode"/>
                {!lightMode?"Dark mode":"Light mode"}
            </label>
        </div>
    )
}
export default ToggleDarkLight;