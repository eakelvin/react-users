import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Col } from 'react-bootstrap';

function Forms(props) {
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        gen: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setDataForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.newUser(dataForm)
        setDataForm({
            name: "",
            email: "",
            gen: ""
        })
    }

  return (
    <Container className='p-5'>
    <Form onSubmit={handleSubmit}>
        <div className='col'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" 
                            placeholder="Enter name"
                            required 
                            name='name'
                            value={dataForm.name}
                            onChange={handleChange} />
            </Form.Group>
        </div>
        
        <div className='col'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" 
                        placeholder="Enter email"
                        required
                        name='email'
                        value={dataForm.email}
                        onChange={handleChange} />
        </Form.Group>
        </div>

        <div className='col'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>GEN</Form.Label>
            <Form.Control type="text" 
                        placeholder="GEN?"
                        required
                        name='gen'
                        value={dataForm.gen}
                        onChange={handleChange} />
        </Form.Group>
        </div>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </Container>
  );
}

export default Forms;
