//JSX instead of JS we are just being explicity
import React from 'react';
import './search-box.styles.css'

//functional components don't have access to state or lifecycle methods
//use functional if you don't need these two components

export const SearchBox = ({ placeholder, handleChange }) => (
    <input className = 'search'
    type='search' 
    placeholder={placeholder} 
    onChange = {handleChange}
    />
);