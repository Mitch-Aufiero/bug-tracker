import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Table } from '../../components/tableStyles';
import {fetchProjects} from '../projects/slices/ProjectSlice';

function Projects() {
  const dispatch = useDispatch();
  const {items: projects, loading} = useSelector(state => state.projects || {});

  useEffect(() => {
    dispatch(fetchProjects());
    
}, [dispatch]);

    return (
      <div>
        <h2>Projects Page</h2> 
        {loading ? (
          <p>Loading...</p>
        ) : ( 
            <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date Created</th>
                            <th><div>Actions</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects?.map(proj => (
                            <tr key={proj.project_id}>
                                <td>{proj.project_id}</td>
                                <td>{proj.name}</td>
                                <td>{proj.description}</td>
                                <td>{proj.date_created}</td>
                                <td><div>Actions</div></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

        )}
          

        
      </div>
    );
  }
  
  export default Projects;