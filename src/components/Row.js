import React from 'react';

const Row = ({ id, name, address }) => (
    <tr className="row">
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
    </tr>
);

export default Row;