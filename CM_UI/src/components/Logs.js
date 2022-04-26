import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import List from './SearchList1'; 
import { Container, InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import {Button} from 'react-bootstrap';
import refresh from '../Feather Icons/refresh.svg'
import '../Styles/Home.css'
import searchDepartment from '../Feather Icons/search.svg';

const options1 = [
    { value: 'dept1', label: 'Department 1' },
    { value: 'dept2', label: 'Department 2' },
]

const options2 = [
    { value: 'position1', label: 'Position 1' }, 
    { value: 'position2', label: 'Position 2'},
]

function Home(){
    const [items, setItems] = useState([])

    // this is for the dropdown buttons if I ever get them to work :)
    const [departments, setDepartments] = useState([])
    const [filteredDepartments, setfilteredDepartments] = useState([])
    const [positions, setPositions] = useState([])
    const [filteredPositions, setfilteredPositions] = useState([])

    function refreshPage() {
        window.location.reload(false); 
    }

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
        <div className="HomePage">
        
        <Container fluid>
        <div class = "row">
                <div class = "col">
        <div className="head">
            <br />
            <h2>&nbsp;Logs</h2>
                        </div>
                        </div>
                    <div class = "col">
            <div>
                <br /> 
                <br />
                <br />
                <br />

                <InputGroup className="refresh">
            <Button variant="primary" id="button-addon2" onClick= {refreshPage}>
                                    <img className="img-responsive" src={refresh} alt="refresh"/>
                                </Button>  <p> &nbsp; Last refreshed: </p> 
                                </InputGroup>
                                </div>
                                </div>
        </div>
        
            <Container className="WhiteBox" fluid> 
            <br />
            <Container>
                <br/> 
            <h2 className="Search">Search Logs</h2>

            <InputGroup className="mb-3">
                                <input 
                                style={BarStyling}
                                type="text" 
                                placeholder="Search logs ... " 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                />
                                <Button variant="primary" id="button-addon2">
                                    <img className="img-responsive" src={searchDepartment} alt="searchDepartment"/>
                                </Button>
                            </InputGroup>

            <br/>
            <br/> 

            <div class = "row">
                <div class = "col">

                <div className="form-group1">
                    <label htmlFor="FormGroupExampleInput">Filter by Day</label>
                    </div>

                    <div className="form-group2">
                    <label htmlFor="FormGroupExampleInput"></label>
                    <Select options={options1} />
                    </div>

                    </div>

                    <div class = "col">

                    <div className="form-group1">
                    <label htmlFor="FormGroupExampleInput">Filter by </label>
                        </div>

                        <div className="form-group2">
                    <label htmlFor="FormGroupExampleInput"> </label>
                    <Select options={options2} />
                    </div>

                    <br/>

                    </div>

            </div> 

                    <Container>
                    <div className= "table" style={{background:'white'}}>
                        <List contacts={filteredContacts}/>
                    </div>
                    </Container>

            </Container>   
            </Container>
            
            <br/>
            <br/>
            <br/>
            <br/>

            </Container>
            </div>
    );
}

export default Home;