import React from 'react';
import TableList from '../Table';
// import AlertDiv from '../Alert';
import AddNotes from '../forms/AddNotes';

const Home = () => {
  return (
    <div className="d-inline-flex">
      <TableList />
      <AddNotes />
    </div>
  );
};

export default Home;
