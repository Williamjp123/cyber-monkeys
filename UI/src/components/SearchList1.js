import {Table, Container} from 'react-bootstrap';

export default function List({contacts}) {
    return (
        <div>  
            <Container>
            <div style={{background:'white'}}>
            <Table striped hover responsive>
            <thead>
                                <tr>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Department</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Position</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Contact</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Shift</th>
                                </tr>
                            </thead>
        <tbody>
            {contacts.map(contact => (
                <tr key={contact.id}>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.department}</td>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.position}</td>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.contact}</td> 
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.shift}</td>
                </tr>   
            ))}
             </tbody>
            </Table>
            </div>
            </Container>
        </div>
    )
}