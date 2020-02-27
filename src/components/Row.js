import React from 'react';

const Row = ({ id, name, address }, props) => (
    <tr className="row">
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td><button onClick={props.showModal} className="editbtn">Edytuj</button></td>
    </tr>
);





export default Row;