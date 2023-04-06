import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import {
  checkToken,
  loggedInData,
  addBlogItem,
  getBlogItemByUserId,
  updateBlogItem,
  getBlogItemsByUserId,
} from "../Services/DataService";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {


let navigate = useNavigate();

useEffect(() => {

  const GetLoggedInData = async () => {
    const loggedIn = loggedInData();
    setUserId(loggedIn.userId);
    setPublisherName(loggedIn.PublisherName);
    console.log(loggedIn);
    let userBlogItems = await getBlogItemsByUserId(loggedIn.userId);
    setBlogItems(userBlogItems);
    console.log(userBlogItems);
  }

  if(!checkToken()){
    navigate('/Login');
  } else {
    GetLoggedInData()
  //get user data and log items

  }
}, [])











  // ---forms ----

  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [blogTags, setBlogTags] = useState("");
  const [blogItems, setBlogItems] = useState([]);
  const [blogId, setBlogId] = useState(0);
  const [blogUserId, setUserId] = useState('0');
  const [blogPublisherName, setPublisherName] = useState('');


  // /---end of forms---

  // --------- bools --------
  const [show, setShow] = useState(false);
  const [editBool, setEdit] = useState(false);
  const [blogIsDeleted, setDeleted] = useState(false);
  const [blogIsPublished, setIsPublished] = useState(false);

  // ------
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);

    if (e.target.textContent == "Add Blog Item") {
      setEdit(false);
      setBlogTitle("");
      setBlogDescription("");
      setBlogCategory("");
      setBlogTags("");
    } else {
      setEdit(true);
      setBlogTitle("Spicy Noodles");
      setBlogDescription("Spicy noodles are good");
      setBlogCategory("Pastas");
      setBlogTags("yummy, spicy, fuego");
    }
  };

  // functions
  const handleTitle = (e) => setBlogTitle(e.target.value);
  const handleDescription = (e) => setBlogCategory(e.target.value);
  const handleCategory = ({ target: { value } }) => setBlogCategory(value);
  const handleTags = ({ target }) => setBlogTags(target.value);

  // ({target: {value}})

  // let e = {
  // target: {
  //     value: "anything we type"
  // }
  // }

  const handleImage =(event) => {
      let file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend=() => {
        console.log(reader.result);
        setBlogImage(reader.result);
      }
        reader.readAsDataURL(file);

  } 


  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editBool ? "Edit" : "Add"}Blog Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {/* //title, image, description, category, tags */}
          <Form>
            <Form.Group className='mb-3' controlId='Title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Title'
                onChange={handleTitle}
                value={blogTitle}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='Description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='Description'
                placeholder='Description'
                onChange={handleDescription}
                value={blogDescription}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Category'>
              {/* <Form.Check type='checkbox' label='Category' value={blogCategory} /> */}

              <Form.Select
                onChange={handleCategory}
                value={blogCategory}
                aria-label='Default select example'
              >
                <option>Pick a category</option>
                <option value='Sports'>Sport</option>
                <option value='Cats'>Cats</option>
                <option value='Pastas'>Pastas</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='Tags'>
              <Form.Label>Tags separated by commas</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Tags separated by commas'
                onChange={handleTags}
                value={blogTags}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Image'>
              <Form.Label>Pick an Image</Form.Label>
              <Form.Control
                type='file'
                accept='image/png, image/jpg'
                placeholder='Enter an Image'
                onChange={handleImage}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            {editBool ? "Save Changes" : "Save"}{" "}
          </Button>
          <Button variant='primary' onClick={handleClose}>
            {editBool ? "Save Changes" : "Save"}
            and Publish
          </Button>
        </Modal.Footer>
      </Modal>

      <Row>
        <Col md={12}>
          <Button onClick={handleShow}>Add Blog Item</Button>
          <Button onClick={handleShow}>Edit Blog Item</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Publish Blog Items</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  {blogItems.map((item, idx) => {
                    return (
                      <div key={idx}>
                        {!item.Published ? (
                          <ListGroup.Item>
                            <Col>{item.Title}</Col>
                            <Col>
                              <Button variant='danger'>Delete</Button>
                              <Button variant='info'>Edit</Button>
                              <Button variant='success'>Unpublished</Button>
                            </Col>
                            {item.Title}
                          </ListGroup.Item>
                        ) : null}
                      </div>
                    );
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Unpublished Blog Items</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  {blogItems.map((item, idx) => {
                    return (
                      <>
                        {!item.Published ? (
                          <ListGroup.Item>
                            <Col>{item.Title}</Col>
                            <Col>
                              <Button variant='danger'>Delete</Button>
                              <Button variant='info'>Edit</Button>
                              <Button variant='success'>Unpublished</Button>
                            </Col>
                            {item.Title}
                          </ListGroup.Item>
                        ) : null}
                      </>
                    );
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          );
        </Col>
      </Row>
    </Container>
  );
}
