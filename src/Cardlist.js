import React from "react";
import Card from "./Card";

const Cardlist=({input})=>{
    const users=input.split(" ");
    const renderedList=users.map((userName,id)=>{
        return <Card input={userName.trim()} key={id}/>;

    });
    return <div>{renderedList}</div>;



};
export default Cardlist;