import React from "react";

function FunctionProps(props){
    return(
        <>
        <h3>This is functional Component</h3>
        <h3>Hello World, I am {props.name} from {props.place}</h3>
        </>
    )
}

export default FunctionProps