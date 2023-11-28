import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchusers } from "../slices/UserSlice";

function UserList ({data, renderFormat}){
    const dispatch = useDispatch();
    const {items: users, loading} = useSelector(state => state.users || {});
  
    useEffect(() => {
      dispatch(fetchusers());
      
  }, [dispatch]);
    return  (
        <ul>
            {loading ? (
          <p>Loading...</p>
        ) : ( 
            users?.map((user) =>(
                <li key={user.user_id}>{user.username}</li>

          )))}
        </ul>

    );


}

export default UserList;