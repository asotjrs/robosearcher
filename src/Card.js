import React from "react";

const Card=({input})=>{

    return <div className={" bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"}>
        <img src={'https://robohash.org/'+input} alt={'robot'}/>
        <div>
            <h2>{input}</h2>
            <p>{input+'@gmail.com'}</p>
        </div>
    </div>

};
export default Card;