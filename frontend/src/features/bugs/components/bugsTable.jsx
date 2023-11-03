import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import { fetchBugs } from '../slices/bugSlice';

import { apiRequest } from '../../../api/api';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    table {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }


    
    tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    tbody tr:nth-child(odd) {
        background-color: #FDE5D4;
    }
    tbody tr:nth-child(even) {
        background-color: #D6CC99;
    }

    &,
    th,
    td {
        border: thin solid black;
    }

    th,
    td {
        padding: 12px 15px;
    }

    th {
        background-color: #445D48;
        color: #ffffff;
        text-align: left;
    }
`;

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
