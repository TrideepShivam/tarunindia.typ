import './Loading.css'

const Loading =()=>{

    return(
        <div className='loadingContainer'>
            <svg width="120" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter2_i_598_142)">
            <rect x="104" y="148" width="50" height="50" rx="10" fill="#5000ff" class="svg-elem-1"></rect>
            <rect x="159.73" y="92" width="50" height="50" rx="10" fill="#5000ff" class="svg-elem-2"></rect>
            <rect x="48" y="92" width="50" height="50" rx="10" fill="#5000ff" class="svg-elem-3"></rect>
            <rect x="103.865" y="92" width="50" height="50" rx="10" fill="#5000ff" class="svg-elem-4"></rect>
            </g>
            <defs>
            <filter id="filter0_i_598_142" x="13" y="14" width="244" height="244" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="-4" dy="-4"></feOffset>
                <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_598_142"></feBlend>
            </filter>
            <filter id="filter1_d_598_142" x="0" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="4" dy="4"></feOffset>
                <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_598_142"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_598_142" result="shape"></feBlend>
            </filter>
            <filter id="filter2_i_598_142" x="46" y="90" width="163.73" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dx="-4" dy="-4"></feOffset>
                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_598_142"></feBlend>
            </filter>
            </defs>
            </svg>
        </div>
    )
}

export default Loading;