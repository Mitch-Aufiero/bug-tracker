import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchusers } from "../users/slices/UserSlice";
import UserProfile from '../users/components/UserProfile';
import UserList from "../users/components/UserList";

function Profile() {
    const dispatch = useDispatch();
    const {items: users, loading} = useSelector(state => state.users || {});
  
    useEffect(() => {
      dispatch(fetchusers());
      
  }, [dispatch]);

    return (
      <div>
        <h2>My Profile</h2>
        {loading ? (
          <p>Loading...</p>
        ) : ( 
            <UserProfile user={users[1]} /> // once sessions enabled pull active session user
          )}


        <p>Settings coming soon...</p>

        <div>
            <h3>All Users</h3>
            <UserList></UserList>
        </div>
        
      </div>
    );
  }
  
  export default Profile;