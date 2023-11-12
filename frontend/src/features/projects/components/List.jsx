import React from "react";


function List ({data, renderFormat}){

    return  (
        <ul>
            {data.map((item, index) =>(
                <li key={index}>{renderFormat(item)}</li>
            ))}
        </ul>

    );

}

export default List;