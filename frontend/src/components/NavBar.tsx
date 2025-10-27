import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import { useEffect, useState } from 'react'
import themes from '../../data/themes.json'

export default function NavBar() {
    const [navbarToggle, setNavbarToggle] = useState(false); 

    
    const [data, setData] = useState({uid: '', name: '', rev: ''});
    const imgStr = "https://profiles.csh.rit.edu/image/";

    useEffect(() => {
        fetch('http://localhost:8081/local')
        .then(response => {
          if (!response.ok) {
            console.error("couldnt get data")
          }
          return response.json()
        }).then(jsonresponse => {
          setData(jsonresponse)
        }).catch(err => {
          console.error("Using fallback, error on fetch:",err)
          // use fallback data on error
          setData({uid: 'test',name: 'Testing Tester',rev: ''
        })
        })
    }, []);
    
    const link = document.createElement('link');
    useEffect(() => {
        link.setAttribute('id','dynamicStylesheet');
        link.setAttribute('rel','stylesheet');
        link.setAttribute('href','http://localhost:8081/api/get');
        document.head.appendChild(link);
    }, []);

    function changeTheme(cdn: string) {
        document.getElementById('dynamicStylesheet')?.setAttribute('href',cdn);
        console.log(cdn);
    }

    return (<>
        <Navbar color="primary" dark expand="lg" className={"fixed-top"}>
        <Container>
          <a href="/" className={"navbar-brand"}>
            Theme Switcher
          </a>
          <NavbarToggler onClick={()=>{setNavbarToggle(!navbarToggle)}} />
          <Collapse isOpen={navbarToggle} navbar>
            <Nav navbar>
              <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className="navbar-user">
                            Themes
                        </DropdownToggle>
                        <DropdownMenu>
                            {themes.map((item) => (<DropdownItem href='#' onClick={()=>{changeTheme(item.cdn)}}>{item.name}</DropdownItem>))}
                        </DropdownMenu>
                    </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar className="ml-auto">
                <NavItem className="navbar-user text-white mt-2">
                    <img src={imgStr.concat(data.uid)} aria-hidden={true} width={32} height={32}/> {data.name}
                </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>)
}