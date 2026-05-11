import { UserContext } from "../App";
import React from "react";


const ComponentF = () => {
    return(
       
            <UserContext.Consumer >
                {topic => {
                    return <div>React topic : {topic}</div>
                }}
                
            </UserContext.Consumer>
           
        
    )
}

export default ComponentF;