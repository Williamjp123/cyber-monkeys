import React from 'react';
import Select from 'react-select';


function CustomSelect(props, options, onChange, defaultValue){
    return <div>
        <h1>Recurring*</h1>
        <Select options={options} onChange={onChange}/>
    </div>
}

export default CustomSelect;