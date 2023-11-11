import React from "react";


function BugList ({bugs}){

    return  (
        <ul>
            {bugs.map(bug =>(
                <li key={bug.bug_id}>{bug.title}</li>
            ))}
        </ul>

    );

}

export default BugList;