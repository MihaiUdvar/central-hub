import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import AddBookmarkForm from './forms/AddBookmarkForm';
import bookmarksData from '../bookmarksData.json';
import uuid from 'react-uuid';

const TableList = () => {
  const [tableData, setTableData] = useState(bookmarksData);

  const tableRows = tableData.map((info) => {
    return (
      <tr key={uuid()}>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.url}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalLinks = tableData.length;
    // console.log(tableData.length);
    data.id = totalLinks + 1;
    const updatedLinksData = [...tableData];
    updatedLinksData.push(data);
    setTableData(updatedLinksData);
    const json = JSON.stringify(data);
  };

  return (
    <div className="m-3">
      <AddBookmarkForm func={addRows} />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </div>
  );
};

export default TableList;
