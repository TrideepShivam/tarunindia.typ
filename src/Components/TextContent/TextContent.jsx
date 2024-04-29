import './TextContent.css'
import PropTypes from 'prop-types'

const TextContent=({story,highlightingIndex})=>{
    const typedContent = highlightingIndex==0?"":story.slice(0,highlightingIndex).join("")
    const highlightedContent = story[highlightingIndex]
    const restContent = story.slice(highlightingIndex+1,story.length)
    return(
        <p className='textContent'>
            <span className='typedContent'>{typedContent}</span>
            <span className='highlightedContent'>{highlightedContent}</span>
            {restContent}</p>
    )
}

TextContent.propTypes = {
    story:PropTypes.array.isRequired,
    highlightingIndex: PropTypes.number
}

export default TextContent;