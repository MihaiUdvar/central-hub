import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import jsonData from '../../notesData.json';
import uuid from 'react-uuid';

const AddNotes = (props) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [notesData, setNotesData] = useState(jsonData);

  const noteCard = notesData.map((note) => {
    return (
      <div key={uuid()} className="col-md-4 col-sm-6 content-card">
        <div className="card-big-shadow">
          <div
            className="card card-just-text"
            note-background="color"
            note-color="blue"
            note-radius="none"
          >
            <div className="content">
              <h4 className="title">{note.title}</h4>
              <p className="description">{note.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const changeNoteTitle = (e) => {
    setNoteTitle(e.target.value);
  };
  const changeNoteBody = (e) => {
    setNoteBody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const noteCard = {
      title: noteTitle,
      body: noteBody,
    };

    addNotes(noteCard);
    clearState();
  };

  const clearState = () => {
    setNoteTitle('');
    setNoteBody('');
  };

  const addNotes = (data) => {
    const totalNotes = noteCard.length;
    console.log(noteCard.length);
    data.id = totalNotes + 1;
    const updatedNotesData = [...notesData];
    updatedNotesData.push(data);
    setNotesData(updatedNotesData);
    const json = JSON.stringify(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="note title"
            onChange={changeNoteTitle}
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            placeholder="note body"
            rows={3}
            onChange={changeNoteBody}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add To List
        </Button>
      </Form>

      <div className="container bootstrap snippets bootdeys">
        <div className="row">{noteCard}</div>
      </div>
    </div>
  );
};

export default AddNotes;
