import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Table } from '../../../components/tableStyles';
import { fetchBugs } from '../slices/bugSlice';

import { apiRequest } from '../../../api/api';


const BugsTable = () => {
    const dispatch = useDispatch();
    const {items: bugs, loading} = useSelector(state => state.bugs || {});

    //const [bugs, setBugs] = useState([]);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchBugs());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th><div>Actions</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bugs?.map(bug => (
                            <tr key={bug.bug_id}>
                                <td>{bug.bug_id}</td>
                                <td>{bug.title}</td>
                                <td>{bug.description}</td>
                                <td>{bug.status}</td>
                                <td><div>Actions</div></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default BugsTable;
