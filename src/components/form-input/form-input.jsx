import React from 'react';
import './form-input.scss';

const FormInput = ({handleChange,label,...otherprops}) => (
        <div className="group">
        <input className="form-control" type="email" onChange={handleChange} {...otherprops}/>
        {
            label?(
                <label>{label}</label>
            ):null
        }
    </div>
)

export default FormInput;