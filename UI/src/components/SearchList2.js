import {Table, Container} from 'react-bootstrap';

export default function List({contacts}) {
    return (
        <div>  
            <Container>
            <div style={{background:'white'}}>
            <Table striped hover responsive>
            <thead>
                                <tr>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>ID</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Name</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Phone</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Pager</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Title</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Location</th>
                                </tr>
                            </thead>
        <tbody>
            {contacts.map(contact => (
                <tr key={contact.identification}>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.id}</td>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.name}</td>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.phone}</td> 
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.pager}</td>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.title}</td>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{contact.location}</td>
                </tr>   
            ))}
             </tbody>
            </Table>
            </div>
            </Container>
        </div>
    )
}