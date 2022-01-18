import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import listData from '../../checklistData.json';
import uuid from 'react-uuid';

const AddLists = (props) => {
  const [checklistItemName, setChecklistItemName] = useState('');
  const [checklistData, setChecklistData] = useState(listData);

  const checklist = checklistData.map((checklistItem) => {
    return (
      <div key={uuid()} className="col-md-4 col-sm-6 content-card">
        <Form.Check label={checklistItem.name} />
      </div>
    );
  });

  const changeItemName = (e) => {
    setChecklistItemName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checklist = {
      name: checklistItemName,
      completed: false,
    };
    console.log(checklist);
    addListItems(checklist);
    // clearState();
    setChecklistItemName('');
  };

  // const clearState = () => {
  //   setChecklistItemName('');
  // };

  const addListItems = (data) => {
    const totalNotes = checklist.length;
    console.log(checklist.length);
    data.id = totalNotes + 1;
    const updatedChecklistData = [...checklistData];
    updatedChecklistData.push(data);
    setChecklistData(updatedChecklistData);
    // const json = JSON.stringify(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="to do"
            onChange={changeItemName}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add To List
        </Button>
      </Form>

      <div className="container bootstrap snippets bootdeys">
        <div className="row">{checklist}</div>
      </div>
    </div>
  );
};

export default AddLists;
