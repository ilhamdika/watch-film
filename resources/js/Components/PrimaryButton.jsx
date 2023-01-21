import React from 'react';
import PropTypes from 'prop-types';

// Button.PropTypes={
//     type : PropTypes.oneOf(["submit", "button", "reset"]),
//     className : PropTypes.string,
//     variant : PropTypes.oneOf([
//         "primary", 
//         'warning', 
//         'danger', 
//         'light-outline', 
//         'white-outline'
//     ]),
//     processing : PropTypes.bool,
//     children : PropTypes.node,
// }

export default function PrimaryButton({ 
    type = 'submit', 
    className = '',
    variant = "primary",
    processing, 
    children, 
    onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && 'opacity-30'} btn-${variant} ${className} `
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
