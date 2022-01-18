import React from 'react';
import Bookmarks from './Bookmarks';
// import AlertDiv from '../Alert';
import AddNotes from '../forms/AddNotes';
import AddLists from '../forms/AddList';

const Home = () => {
  return (
    <div className="d-inline-flex">
      <Bookmarks />
      <AddNotes />
      <AddLists />
    </div>
  );
};

export default Home;
