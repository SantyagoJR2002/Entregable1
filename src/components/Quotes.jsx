import React from "react";

const Quo = ({quoRandom, colRandom, click, getAleatoryThing, quotes, colorsArray})=>{
    return(
        <article className='Quote-article'style={{color:'white'}}>
            <p>{quoRandom.quote}</p>
            <h3>{quoRandom.author}</h3>
            <button onClick={click}>new</button>
        </article>
    )
}
export default Quo