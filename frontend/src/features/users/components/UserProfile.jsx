import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchusers } from "../slices/UserSlice";


function UserProfile ({user}){
    
    return  (
        <div>
            <h3>{user?.username}</h3>
        </div>

    );


}

export default UserProfile;