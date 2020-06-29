import React from "react";

const Card=({robot})=>{
    return robot===""?null:
     <div className={" bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 tc"}>
        <img src={'https://robohash.org/'+robot+"?size=200x200"} alt={'robot'}/>
        <div>
            <h2>{robot}</h2>
            <p>{robot.replace(' ','_')+'@gmail.com'}</p>
        </div>
    </div>

};
export default Card;