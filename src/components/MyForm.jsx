import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MyForm = ({onSubmit, onEmail, onSelect, onCheckbox, onArea1, onArea2, onArea3}) => {
    return ( 
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={onEmail} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Car Brands</Form.Label>
                <Form.Select onChange={onSelect} name="select" >
                    <option>Tesla</option>
                    <option>Ford</option>
                    <option>Audi</option>
                    <option>Mercedes</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check  onChange={onCheckbox}  name="checkbox"  type="checkbox" label="Check me out" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Control  onChange={onArea1}  name="area1" rows={4} type="textarea" placeholder='Textarea 1' label="Textarea" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Control   onChange={onArea2}  name="area2" rows={4} type="textarea" placeholder='Textarea 2' label="Textarea" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Control  onChange={onArea3}   name="area3" rows={4} type="textarea" placeholder='Textarea 3' label="Textarea" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
 
export default MyForm;