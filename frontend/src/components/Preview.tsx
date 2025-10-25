import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function Preview() {
    return (<>
        <div className="container">
        <div className="card mb-3">
            <h5 className="card-header bg-primary text-white">Text Examples</h5>
            <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae auctor ex. Nam congue enim lorem, eu pulvinar nisi molestie vel. Mauris efficitur nisl id velit posuere, lobortis porttitor tortor porttitor. Ut efficitur dignissim metus, vitae volutpat ex porttitor sed. Aenean rhoncus porta eros, non convallis urna egestas non. Curabitur porttitor dui vel metus facilisis, nec consequat lorem vulputate. Nulla sed semper magna. Aenean metus elit, suscipit ac commodo malesuada, mollis ac est. Nullam ante ante, mollis id tempus vitae, rhoncus non nisi. Cras ac justo et purus pretium aliquam non et eros. Quisque mattis rhoncus turpis efficitur ullamcorper. Fusce sed augue sollicitudin, dignissim magna a, rutrum mauris. Donec elementum diam nisl, imperdiet condimentum metus convallis ut.
            <br/><br/>
            <div className="dropdown" >
                <DropdownButton id="dropdown-menu" title="Heading Examples">
                    <Dropdown.ItemText><h1>Heading 1</h1></Dropdown.ItemText>
                    <Dropdown.ItemText><h2>Heading 2</h2></Dropdown.ItemText>
                    <Dropdown.ItemText><h3>Heading 3</h3></Dropdown.ItemText>
                    <Dropdown.ItemText><h4>Heading 4</h4></Dropdown.ItemText>
                    <Dropdown.ItemText><h5>Heading 5</h5></Dropdown.ItemText>
                    <Dropdown.ItemText><h6>Heading 6</h6></Dropdown.ItemText>
                </DropdownButton>
            </div>
            </div>
        </div>

        <div className="card mb-3">
            <h5 className="card-header bg-primary text-white">Button Examples</h5>
            <p className="card-body center">
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-link">Link</button>
            </p>
        </div>

        <div className="card bg-light mb-3">
            <h5 className="card-header bg-primary"><a className="text-white" href="https://plug.csh.rit.edu">Advertisements by CSH: Plug</a></h5>
            <div className="card-body center">
            <a href="https://plug.csh.rit.edu"><img src="https://plug.csh.rit.edu/data" style={{width:'100%'}}/></a>
            </div>
        </div>
        </div>
    </>)
}