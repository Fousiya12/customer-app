import React from 'react';
import './mytable.css';

const TableHeader = () => {
    return (
      <thead className="table-header" > 
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
  }
  export default TableHeader;
