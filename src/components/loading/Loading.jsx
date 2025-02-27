import './Loading.css'

const Loading =({type})=>{

    return(
        <div className='loadingContainer'>
            {!type?<svg width="120" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter2_i_598_142)">
            <rect x="104" y="148" width="50" height="50" rx="10" fill="#5000ff" className="svg-elem-1"></rect>
            <rect x="159.73" y="92" width="50" height="50" rx="10" fill="#5000ff" className="svg-elem-2"></rect>
            <rect x="48" y="92" width="50" height="50" rx="10" fill="#5000ff" className="svg-elem-3"></rect>
            <rect x="103.865" y="92" width="50" height="50" rx="10" fill="#5000ff" className="svg-elem-4"></rect>
            </g>
            <defs>
            <filter id="filter0_i_598_142" x="13" y="14" width="244" height="244" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="-4" dy="-4"></feOffset>
                <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_598_142"></feBlend>
            </filter>
            <filter id="filter1_d_598_142" x="0" y="0" width="260" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="4" dy="4"></feOffset>
                <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_598_142"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_598_142" result="shape"></feBlend>
            </filter>
            <filter id="filter2_i_598_142" x="46" y="90" width="163.73" height="108" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="-4" dy="-4"></feOffset>
                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_598_142"></feBlend>
            </filter>
            </defs>
            </svg>:
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xmlSpace="preserve">
            <g>
              <linearGradient id="linear-gradient">
                <stop offset="0%" stopColor="#0055ff"/>
                <stop offset="100%" stopColor="#71a0ff"/>
              </linearGradient>
              <linearGradient id="linear-gradient2">
                <stop offset="0%" stopColor="#0055ff"/>
                <stop offset="100%" stopColor="#cfdfff"/>
              </linearGradient>
              <path d="M64 .98A63.02 63.02 0 1 1 .98 64 63.02 63.02 0 0 1 64 .98zm0 15.76A47.26 47.26 0 1 1 16.74 64 47.26 47.26 0 0 1 64 16.74z" fillRule="evenodd" fill="url(#linear-gradient)"/>
              <path d="M64.12 125.54A61.54 61.54 0 1 1 125.66 64a61.54 61.54 0 0 1-61.54 61.54zm0-121.1A59.57 59.57 0 1 0 123.7 64 59.57 59.57 0 0 0 64.1 4.43zM64 115.56a51.7 51.7 0 1 1 51.7-51.7 51.7 51.7 0 0 1-51.7 51.7zM64 14.4a49.48 49.48 0 1 0 49.48 49.48A49.48 49.48 0 0 0 64 14.4z" fillRule="evenodd" fill="url(#linear-gradient2)"/>
              <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform>
            </g>
            </svg>}
        </div>
    )
}

export default Loading;