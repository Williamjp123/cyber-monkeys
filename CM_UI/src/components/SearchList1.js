import {Table, Container} from 'react-bootstrap';

export default function List({devices}) {
    return (
        <div>  
            <Container>
            <div style={{background:'white'}}>
            <Table striped hover responsive>
            <thead>
                                <tr>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Time Last Seen</th>
                                    <th scope="Col" style={{textAlign: 'left', font: 'normal normal bold 24px/37px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>Mac Address</th>
                                </tr>
                            </thead>
        <tbody>
            {devices.map(device => (
                <tr key={device.identification}>
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{device.timeLastSeen}</td> 
                       <td style={{textAlign: 'left', font: 'normal normal bold 18px/22px Sofia Pro', letterSpacing: '0px', color: '#707070', opacity: '1'}}>{device.macAddress}</td> 
            
                </tr>   
            ))}
             </tbody>
            </Table>
            </div>
            </Container>
        </div>
    )
}