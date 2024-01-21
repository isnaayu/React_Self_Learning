import React from "react";

const updateComp = OriginalComp => {
    class NewComp extends React.Component{
        render(){
            return <OriginalComp name="The User"/>
        }
    }
    return NewComp;
}

export default updateComp