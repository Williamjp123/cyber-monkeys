import React from 'react';
import {Container} from 'react-bootstrap';
import '../Styles/AddContactForm.css';



 class AddContactForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            phoneNumber: '',
            secondaryNumber: '',
            pagerNumber: '',
            secondaryPagerNumber: '',
            title: ''
        }
    }


    resetForm(){
        this.setState({firstName: '', LastName: '', location: '', phoneNumber: '', secondaryNumber: '', pagerNumber: '', secondaryPagerNumber: '', title: ''})
    }
    
    render(){
    return (
        <div className="AddContactForm">
        <h4 className="Header" >
            Register New Device
            </h4>
        <Container className="container">
            <h4 className="Header2">
            INFO
            </h4>  
            <p>
            Required fields designated by: *
            </p>  

            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}  method="POST">
            <div class="row">
                <div class="col" >
                    <div className="form-group">
                        <label htmlFor="firstName" >First Name *</label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)}/>
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label htmlFor="lastName" >Last Name *</label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)}/>
                    </div> 
                </div>
                <div class="col">
                    <div className="form-group">
                        <label htmlFor="location" >Location *</label>
                        <input type="text" className="form-control" value={this.state.location} onChange={this.onLocationChange.bind(this)}/>
                    </div>   
                </div>
            </div>

            <div class="row">
                <div class="col" >
                    <div className="form-group">
                        <label htmlFor="phoneNumber" >Phone Number</label>
                        <input type="text" className="form-control" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange.bind(this)}/>
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label htmlFor="secondaryNumber" >Secondary Number</label>
                        <input type="text" className="form-control" value={this.state.secondaryNumber} onChange={this.onSecondaryNumberChange.bind(this)}/>
                    </div> 
                </div>
                <div class="col">
                    <div className="form-group">
                        
                    </div>   
                </div>
            </div>

            <div class="row">
                <div class="col" >
                    <div className="form-group">
                        <label htmlFor="pagerNumber" >Pager Number</label>
                        <input type="text" className="form-control" value={this.state.pagerNumber} onChange={this.onPagerNumberChange.bind(this)}/>
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label htmlFor="secondaryPagerNumber" >Secondary Pager Number</label>
                        <input type="text" className="form-control" value={this.state.secondaryPagerNumber} onChange={this.onSecondaryPagerNumberChange.bind(this)}/>
                    </div> 
                </div>
                <div class="col">
                    <div className="form-group">
                        <label htmlFor="title" >Title</label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onTitleChange.bind(this)}/>
                    </div>   
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br />
        </Container>
        <br />
            
        </div>
    );
}


onFirstNameChange(event){
    this.setState({firstName: event.target.value})
}

onLastNameChange(event){
    this.setState({lastName: event.target.value})
}

onLocationChange(event){
    this.setState({location: event.target.value})
}

onPhoneNumberChange(event){
    this.setState({phoneNumber: event.target.value})
}


onSecondaryNumberChange(event){
    this.setState({secondaryNumber: event.target.value})
}

onPagerNumberChange(event){
    this.setState({pagerNumber: event.target.value})
}

onSecondaryPagerNumberChange(event){
    this.setState({secondaryPagerNumber: event.target.value})
}

onTitleChange(event){
    this.setState({title: event.target.value})
}

handleSubmit(event){
    event.preventDefault();
    console.log(this.state);

fetch('http://localhost:5555', {
    method: "POST",
    body: JSON.stringify(this.state),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}).then(
    (response) => (response.json())
    ).then((response) => {
        if (response.status === 'success'){
            alert("Contact Added.");
            this.resetForm()
        }
        else if(response.status === 'fail'){
            alert("There was an error adding the contact.")
        }
        
    })
}
}
export default AddContactForm
