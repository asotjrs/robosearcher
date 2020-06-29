import React from "react";
import Card from "./Card";

const Cardlist=({robots})=>{
    console.log(robots);
    const users=robots.split(",");
    const renderedList=users.map((userName,id)=>{
        return <Card robot={userName.trim()} key={id}/>;

    });
    return <div>{renderedList}</div>;



};
export default Cardlist;