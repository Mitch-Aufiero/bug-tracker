import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProjectCard from '../projects/components/projectCard';
import {fetchProjects} from '../projects/slices/ProjectSlice';

function Home() {
  const dispatch = useDispatch();
  const {items: projects, loading} = useSelector(state => state.projects || {});

  useEffect(() => {
    dispatch(fetchProjects());
    
}, [dispatch]);

    return (
      <div>
        <h2>Home Page</h2> 
        {loading ? (
          <p>Loading...</p>
        ) : ( 
          projects?.map((proj, index) => (
            <ProjectCard project={proj}/>

          )))}
          

        
      </div>
    );
  }
  
  export default Home;
  
