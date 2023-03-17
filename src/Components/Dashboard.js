import React, {useState} from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'

export default function Dashboard() {

//---forms ----

const [blogTitle, setBlogTitle] = useState('');
const [blogImage, setBlogImage] = useState('');
const [blogDescription, setBlogDescription] = useState('');
const [blogCategory, setBlogCategory] = useState('');
const [blogTags, setBlogTags] = useState('');

///---end of forms---

//--------- bools --------
const [show, setShow] = useState(false);
const [editBool, setEdit] = useState(false);

//------
const handleClose = () => setShow(false);
const handleShow = (e) => {
  
  setShow(true);
  if(e.target.textContent == 'Add Blog Item')
  {
   setEdit(false);
  }else {
   setEdit(true);
  }
} 


return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editBool ? 'Edit' : 'Add' }Blog Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          /* title, image, description, category, tags */
          <Form>
            <Form.Group className='mb-3' controlId='Title'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' placeholder='Enter Title' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='Description'>
              <Form.Label>Description</Form.Label>
              <Form.Control type='Description' placeholder='Description' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Category'>
              <Form.Check type='checkbox' label='Category' />
              <Form.Select aria-label='Default select example'>
                <option>Pick a category</option>
                <option value='Sports'>Sport</option>
                <option value='Cats'>Cats</option>
                <option value='Pastas'>Pastas</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='Tags'>
              <Form.Label>Tags</Form.Label>
              <Form.Control type='text' placeholder='Enter Tags' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Image'>
              <Form.Label>Pick an Image</Form.Label>
              <Form.Control
                type='file'
                accept='image/png, image/jpg'
                placeholder='Enter an Image'
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save and Publish
          </Button>
        </Modal.Footer>
      </Modal>

      <Row>
        <Col md={12}>
          <Button onClick={handleShow}>Add Blog Item</Button>
          <Button onClick={handleShow}>Edit Blog Item</Button>
        </Col>
      </Row>
    </Container>
  );
}
