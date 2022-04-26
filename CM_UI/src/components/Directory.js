import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import List from './SearchList2';
import { Container, Button, Modal, FormControl, InputGroup, Table, Row, Col } from 'react-bootstrap';
import PersonAddIcon from '../assets/PersonAddIcon.png';
import AddContact from './AddContact.js';
import searchDepartment from '../Feather Icons/search.svg';
import '../Styles/Directory.css';
import AddContactForm from './AddContactForm.js';
import devicesJSON from '../assets/devices.json';

function Directory(){

    setTimeout(function(){
        window.location.reload();
    }, 1000000);

    const [items, setItems] = useState([])

    const [devices, setDevices] = useState([])
    const [search, setSearch] = useState('')

    const BarStyling = {width:"20rem",background:"white", border:"0.5px solid #707070", borderRadius: "5px", padding:"0.5rem", textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'};

    useEffect(() => { 
            (
                setDevices((devicesJSON))
            )
    })

    const filteredDevices = search.length === 0 ? devices : 
    devices.filter(device => device.fingerprint.
        toLowerCase().includes(search.toLowerCase()))

    return(
        <div className="DirectoryPage" >
        
        <Container fluid>
        <div >
            <br />
            <h1 className="h1">Directory</h1>
        </div>
        <Container className="Container1" fluid>     
        <Container>
        <br />        
        <div className="search">Search Directory</div>
        <br />
        
        
        <InputGroup className="mb-3">
                                <input 
                                style={BarStyling}
                                type="text" 
                                placeholder="Type Fingerprint ... " 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                />
                                <Button variant="primary" id="button-addon2">
                                    <img className="img-responsive" src={searchDepartment} alt="searchDepartment"/>
                                </Button>
                                
                                <AddContact />
                            </InputGroup>
                            
        
                    <Container>
                    <div className="table" style={{background:'white'}}>
                        <List devices={filteredDevices}/>
                    </div>
                    </Container>

        </Container>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </Container> 
        </div> 
    );
}

export default Directory;