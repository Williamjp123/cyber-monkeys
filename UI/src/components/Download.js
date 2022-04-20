import React from 'react';


function Download(){
    return(
        <div style={{background: 'white'}}>
            <h1 style={{ color: 'black'}}>Template</h1>


            <div>
              <a href="/resources/Template.xlsx" download><strong>Download Template</strong></a>
            </div>

        </div> 
    );
}

export default Download;