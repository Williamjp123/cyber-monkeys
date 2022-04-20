import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import List from './SearchList1'; 
import { Container, Modal, Button, InputGroup, FormControl, Form, Table } from 'react-bootstrap';
import Select from 'react-select';
import searchDepartment from '../Feather Icons/searchDepartment.svg';
import '../Styles/UpdateOnCall.css';


function UpdateOnCall(){
    const [items, setItems] = useState([])

    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')

    const BarStyling = {width:"20rem",background:"white", border:"0.5px solid #707070", borderRadius: "5px", padding:"0.5rem", textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'};

    useEffect(() => {
        const API_URL = 'https://my.api.mockaroo.com/on_call.json?key=ff290f10'
        axios
            .get(API_URL)
            .then(res => {
                const contacts = res.data
                setContacts(contacts)
            })
    }, [])

    const filteredContacts = search.length === 0 ? contacts : 
    contacts.filter(contact => contact.department.
                toLowerCase().includes(search.toLowerCase()))
    
    return(
        <div>
            <div className="UpdateOnCallPage">
        
            <Container fluid>
            <div className="head">
                <br />
                <>&nbsp;Anomalies Detected</>
            </div>
            <Container fluid className="Container5">
                <div >
                    <Container fluid >
                    <br />
                    <div class="row">
                        <div class="col">
                            <div className="headers">
                                Search Anomalies
                            </div>
                            <InputGroup className="mb-3">
                                <input 
                                style={BarStyling}
                                type="text" 
                                placeholder=" ... " 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                />
                                <Button variant="primary" id="button-addon2">
                                    <img className="img-responsive" src={searchDepartment} alt="searchDepartment"/>
                                </Button>
                            </InputGroup>
                        </div>
                        <span> </span>
                        <div class="col">
                            <div className="headers">
                                Toggle Date
                            </div>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Placeholder for datepicker"
                                    aria-label="Type Department Name"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="primary" id="button-addon2">
                                    
                                </Button>
                            </InputGroup>
                        </div>
                        <div class="col">
                            <br />
                        </div>
                        <div class="col">
                            
                            
                        </div>

                    </div>
                   
                    
                    </Container>
                    <Container fluid>
                    <div className = "table" style={{background:'white'}}>
                        <List contacts = {filteredContacts}/>
                    </div>
                    </Container>
                
                </div>                   
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
            </Container> 
        </div> 
        
        
        

  



  </div>
    );
}

export default UpdateOnCall;