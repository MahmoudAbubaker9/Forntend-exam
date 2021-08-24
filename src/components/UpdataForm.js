import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class UpdataForm extends Component {
    render() {
        return (
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Updata Favorite</Modal.Title>
                    </Modal.Header>
                    <Container>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label>name</Form.Label>
                                <Form.Control type="text" placeholder="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicphoto">
                                <Form.Label>photo</Form.Label>
                                <Form.Control type="text" placeholder="photo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicinstructions">
                                <Form.Label>instructions</Form.Label>
                                <Form.Control type="text" placeholder="instructions" />
                            </Form.Group>

                        </Form>
                    </Container>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdataForm
