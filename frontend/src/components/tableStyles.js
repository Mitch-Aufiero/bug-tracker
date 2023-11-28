import styled from 'styled-components';

export const Table = styled.table`
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
        border-bottom: 1px solid whi;
    }

    tbody tr:nth-child(even) {
        background-color: #F7F3E3;
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
        background-color: #A8763E;
        color: #ECF0F1;
        text-align: left;
    }
`;