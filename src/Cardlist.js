import React from "react";
import Card from "./Card";

const Cardlist=({input})=>{
    const users=input.split(" ");
    const renderedList=users.map((userName)=>{
        return <Card input={userName} key={userName}/>;

    });
    return <div>{renderedList}</div>;



};
export default Cardlist;