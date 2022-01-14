import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddBookmarkForm = (props) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const changeUrl = (e) => {
    setUrl(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = {
      name,
      url,
    };
    console.log(val);
    props.func(val);
    clearState();

    // const urlMetadata = require('../../index');
    // urlMetadata('https://serenichron.com/').then(
    //   function (metadata) {
    //     // success handler
    //     console.log(metadata);
    //   },
    //   function (error) {
    //     // failure handler
    //     console.log(error);
    //   }
    // );
  };

  const clearState = () => {
    setName('');
    setUrl('');
  };

  return (
    <Form className="mb-2" onSubmit={handleSubmit}>
      <Form.Group className="" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="awesome link"
          value={url}
          onChange={changeUrl}
        />
        <Form.Text className="text-muted">
          The Uber-Duper-Awesome Page You Found
        </Form.Text>
      </Form.Group>
      <Form.Group className="" controlId="">
        <Form.Control
          type="text"
          placeholder="name"
          value={name}
          onChange={changeName}
        />
        <Form.Text>Name It Your Way!</Form.Text>
      </Form.Group>
      <h4>Page Name: title extracted from link</h4>
      <Button variant="primary" type="submit">
        Add To List
      </Button>
    </Form>
  );
};

export default AddBookmarkForm;
