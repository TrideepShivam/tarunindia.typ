import './WordCount.css'
 
const WordCount=({value})=>{

    return(
        <div className="wordContainer">
			<p className="highlight">{value>1?'Words':'Word'}</p>
			<h1>{value}</h1>
		</div>
    )
}

export default WordCount;