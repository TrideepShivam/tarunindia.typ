import { useState } from 'react'
import './TextContent.css'
import PropTypes from 'prop-types'

const TextContent=({language,story,highlightingIndex})=>{
    const typedContent = highlightingIndex==0?"":story.slice(0,highlightingIndex).join("")
    const highlightedContent = story[highlightingIndex]
    const restContent = story.slice(highlightingIndex+1,story.length)
    highlightingIndex>0&&document.querySelector('.highlightedContent').scrollIntoView({ behavior: 'smooth', block: 'center' })

    return(
        <p className='textContent' style={{fontFamily:language?language:'arial'}}>
            <span className='typedContent'>{typedContent}</span>
            <span className='highlightedContent'>{highlightedContent}</span>
            {restContent}
        </p>
    )
}

TextContent.propTypes = {
    story:PropTypes.array.isRequired,
    highlightingIndex: PropTypes.number
}

export default TextContent;