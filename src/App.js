import './App.css';
import 'bootstrap';


import  { Button, Form, FormLabel,Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap'

function App() {
 
  return (
    <div className="App">
      {/* Nav Bar */}
      <Navbar  bg="dark" variant="dark" class="navbar-right">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="#action4">GitHub</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">CodeWars</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    <br />
    {/* Form */}
       <center> 
        <h1>Write to Us </h1>
        <Form>
        <Form.Group className="mb-3" controlId="formName" style={{ width: '500px' }}>
          
          <Form.Control type="text" placeholder="Your name" className="name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail" style={{ width: '500px' }}>
            <Form.Control type="email" placeholder="Your email"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="subject" style={{ width: '500px', }}>
          <Form.Control type="text" placeholder="Subject"  />
        </Form.Group>
        
        <FormLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
              as="textarea"
              placeholder="Leave your message here"
              style= {{ width: '500px', height: '200px' }}
          />
          </FormLabel>
          <br/>
        <FormLabel  className="mb-3" >
          <Button variant="primary" type="submit">
            Sends
          </Button>
        </FormLabel>
      </Form>
      </center>
    </div>
    );
  }


export default App;
