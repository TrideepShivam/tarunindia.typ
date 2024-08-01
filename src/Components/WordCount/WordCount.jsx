import './WordCount.css'
 
const WordCount=({value})=>{

    return(
        <div className="wordContainer">
			<p className="highlight">Words</p>
			<h1>{value}</h1>
		</div>
    )
}

export default WordCount;