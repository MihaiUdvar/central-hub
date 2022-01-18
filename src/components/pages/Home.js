import React from 'react';
import TableList from '../Table';
// import AlertDiv from '../Alert';
import AddNotes from '../forms/AddNotes';
import AddLists from '../forms/AddList';

const Home = () => {
  return (
    <div className="d-inline-flex">
      <TableList />
      <AddNotes />
      <AddLists />
    </div>
  );
};

export default Home;
