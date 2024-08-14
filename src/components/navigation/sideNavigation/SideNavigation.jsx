import { useEffect, useState } from 'react';
import Navigation from './navigation/Navigation';
import './SideNavigation.css'
import { useLocation } from 'react-router-dom';


const SideNavigation=({sideMenu,sideNavOpen})=>{
    const [clickedMenu,setClickedMenu] = useState(0)
    var location = useLocation()
    useEffect(()=>{
        sideMenu.map((item,index)=>{
            item.href==location.pathname&&setClickedMenu(index)
        })
    })
    return(
        <div 
            className="sideNavigation"
            style={{borderColor:sideNavOpen?"transparent":"var(--theme-color)"}}
        >
            {sideMenu.map((item,index)=>
                <Navigation 
                    sideNavOpen={sideNavOpen}
                    isClicked={clickedMenu==index} 
                    setClickedMenu={setClickedMenu} 
                    key={index} 
                    id={index}
                    menu={item}
                />
            )}
        </div>
    )
}

export default SideNavigation;