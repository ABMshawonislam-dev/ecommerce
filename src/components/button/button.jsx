import React from 'react';
import './button.scss';


const Button = ({children, ...otherprops}) => (
    <button {...otherprops}>{children}</button>
)

export default Button;