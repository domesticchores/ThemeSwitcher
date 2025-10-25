import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import themes from '../data/themes.json'
import { useEffect, useState } from 'react'

export default function Navbar() {
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
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#">Theme Switcher</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse align-center" id="navbarColor01">
                <DropdownButton id="dropdown-menu" title="Theme">
                    {themes.map((item) => (<Dropdown.Item href='' onClick={()=>{changeTheme(item.cdn)}}>{item.name}</Dropdown.Item>))}
                </DropdownButton>

                <div className="nav-item navbar-user text-white mt-2">
                    <img src={imgStr.concat(data.uid)}/>{data.name}
                </div>
            </div>
        </div>
        </nav> 
    </>)
}