import React from 'react'
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';


function TotalScore(props) {
    return (
        <div className="totalscore">
<h2>Score Area</h2>    
<TotalCorrect correct={props.correct}/>
<TotalIncorrect incorrect={props.incorrect}/>        
        </div>
    )
}

export default TotalScore

