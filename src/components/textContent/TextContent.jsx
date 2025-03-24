import { useEffect } from 'react';
import './TextContent.css';
import PropTypes from 'prop-types';

const TextContent = ({ language, story, highlightingIndex }) => {
    const typedContent = highlightingIndex === 0 ? '' : story.slice(0, highlightingIndex).join('');
    const highlightedContent = story[highlightingIndex];
    const restContent = story.slice(highlightingIndex + 1, story.length);

    useEffect(() => {
        if (highlightingIndex > 0) {
            document.querySelector('.highlightedContent').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [highlightingIndex]);

    return (
        <p className="textContent" style={{ fontFamily: language || 'arial' }}>
            <span className="typedContent">{typedContent}</span>
            <span className="highlightedContent">{highlightedContent}</span>
            {restContent}
        </p>
    );
};

TextContent.propTypes = {
    language: PropTypes.string,
    story: PropTypes.array.isRequired,
    highlightingIndex: PropTypes.number,
};

export default TextContent;
