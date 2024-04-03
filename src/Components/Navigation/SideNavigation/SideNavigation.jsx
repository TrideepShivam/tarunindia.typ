import { useState } from 'react';
import Navigation from './Navigation/Navigation';
import './SideNavigation.css'

const sideMenu = [//0:green 1:blue 2:white 3:black
    {
        href:"/dashboard",
        value:"DASHBOARD",
        icons:[
            "https://img.icons8.com/ios-filled/30/00ff85/performance-macbook.png",
            "https://img.icons8.com/ios-filled/30/5000ff/performance-macbook.png",
            "https://img.icons8.com/ios-filled/30/fefeff/performance-macbook.png",
            "https://img.icons8.com/ios-filled/30/101010/performance-macbook.png",
        ]
    },
    {
        href:"/playground",
        value:"PLAYGROUND",
        icons:[
            "https://img.icons8.com/ios-filled/30/00ff85/key-press.png",
            "https://img.icons8.com/ios-filled/30/5000ff/key-press.png",
            "https://img.icons8.com/ios-filled/30/fefeff/key-press.png",
            "https://img.icons8.com/ios-filled/30/101010/key-press.png"
        ]
    },
    {
        href:"/events",
        value:"EVENTS",
        icons:[
            "https://img.icons8.com/ios-glyphs/30/00ff85/confetti--v1.png",
            "https://img.icons8.com/ios-glyphs/30/5000ff/confetti--v1.png",
            "https://img.icons8.com/ios-glyphs/30/fefeff/confetti--v1.png",
            "https://img.icons8.com/ios-glyphs/30/101010/confetti--v1.png"
        ]
    },
    {
        href:"/leaderboard",
        value:"LEADERBOARD",
        icons:[
            "https://img.icons8.com/ios-filled/30/00ff85/leaderboard.png",
            "https://img.icons8.com/ios-filled/30/5000ff/leaderboard.png",
            "https://img.icons8.com/ios-filled/30/fefeff/leaderboard.png",
            "https://img.icons8.com/ios-filled/30/101010/leaderboard.png"
        ]
    },
    {
        href:"/results",
        value:"RESULTS",
        icons:[
            "https://img.icons8.com/ios-glyphs/30/00ff85/improvement.png",
            "https://img.icons8.com/ios-glyphs/30/5000ff/improvement.png",
            "https://img.icons8.com/ios-glyphs/30/fefeff/improvement.png",
            "https://img.icons8.com/ios-glyphs/30/101010/improvement.png"
        ]
    },
    {
        href:"/support",
        value:"SUPPORT",
        icons:[
            "https://img.icons8.com/ios-glyphs/30/00ff85/customer-support.png",
            "https://img.icons8.com/ios-glyphs/30/5000ff/customer-support.png",
            "https://img.icons8.com/ios-glyphs/30/fefeff/customer-support.png",
            "https://img.icons8.com/ios-glyphs/30/101010/customer-support.png"
        ]
    },
    {
        href:"/about",
        value:"ABOUT",
        icons:[
            "https://img.icons8.com/ios-glyphs/30/00ff85/info-squared.png",
            "https://img.icons8.com/ios-glyphs/30/5000ff/info-squared.png",
            "https://img.icons8.com/ios-glyphs/30/fefeff/info-squared.png",
            "https://img.icons8.com/ios-glyphs/30/101010/info-squared.png"
        ]
    }
]

const SideNavigation=({sideNavOpen})=>{
    const [clickedMenu,setClickedMenu] = useState(0)
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