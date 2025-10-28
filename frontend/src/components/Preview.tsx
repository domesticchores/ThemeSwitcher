import { useState } from "react";
import { Button, Card, CardBody, CardHeader, CardText, Collapse, DropdownItem, DropdownMenu, DropdownToggle, NavbarToggler, NavLink, UncontrolledDropdown } from "reactstrap";

const Home = () => {
    const [headingOpen, setHeadingOpen] = useState(false);

  return (
    <div>
      <h1 className="display-3">Hello World!</h1>
      <p className="lead">
        Check out <code>src/pages/Home.tsx</code> to see how you can get
        started.
      </p>
      <Card className={"mb-3"}>
        <CardHeader tag={"h5"} className={"bg-primary text-white"}>Text Examples</CardHeader>
        <CardBody>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
            <Button color="primary" onClick={()=>{setHeadingOpen(!headingOpen)}}>Toggle Heading Examples</Button>
            <Collapse isOpen={headingOpen}>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </Collapse>
        </CardBody>
      </Card>

      <Card className={"mb-3"}>
        <CardHeader tag={"h5"} className={"bg-primary text-white"}>Button Examples</CardHeader>
        <CardBody className={"center"}>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="info">Info</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button color="link">Link</Button>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default Home;
