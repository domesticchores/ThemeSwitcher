import { useState } from "react";
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Collapse, DropdownItem, DropdownMenu, DropdownToggle, NavbarToggler, UncontrolledCollapse, UncontrolledDropdown } from "reactstrap";

const Home = () => {
    const [headingOpen, setHeadingOpen] = useState(false);

  return (
    <div>
      <h1 className="display-3">Hello World!</h1>
      <p className="lead">
        Check out <code>src/pages/Home.tsx</code> to see how you can get
        started.
      </p>
      <Card>
        <CardHeader tag={"h5"} className={"bg-primary text-white"}>Text Examples</CardHeader>
        <CardBody>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
            <NavbarToggler color="primary" onClick={()=>{setHeadingOpen(!headingOpen)}}>Toggle Heading Examples</NavbarToggler>
            <Collapse isOpen={headingOpen}>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </Collapse>
            <UncontrolledDropdown>
                <DropdownToggle color="primary">Toggle</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem><h1>yuh</h1></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <Button color="primary">Hi</Button>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default Home;
