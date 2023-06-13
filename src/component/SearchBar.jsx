import React, { useState } from 'react'
import "./searchBar.css"
const SearchBar = ( { onSubmit } ) => {
  const [term,setTerm] = useState("")
  const [color,setColour] = useState("")
  const handleFormSubmit= (e) => {
    onSubmit( term ,color);
    e.preventDefault()
  }
  const handleChange = ( e ) => {
    setTerm( e.target.value )
    
    
  }
  const handleChangeColour = ( e ) => {
    
    setColour(   e.target.value )
    
    
  }
 
  return (
    <div className="search-bar"
    >
      <h3>Search images and filter by color from unsplashed API</h3>

      <form onSubmit={ handleFormSubmit }  >
         <div className='search-color'  >
         <label htmlFor="colors"  >Filter by color</label>
          
        <select name="colors" id="colors" onChange={ handleChangeColour} value={color}>
          <option value=" black_and_white"> black and white</option>
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="yellow">yellow</option>
          <option value="orange">orange</option>
          <option value="red">red</option>
          <option value="purple">purple</option>
          <option value=" magenta"> magenta</option>
          <option value="green">green</option>
          <option value="teal">teal</option>
          <option value="blue">blue</option>
          
        </select>
        </div>
        <div className='search-input'  >

        <label htmlFor="search"   >Enter the search term</label>
        <input placeholder='Search term' id="search" value={ term } onChange={ handleChange } />
        </div>

       
    </form>
    </div>
  )
}

export default SearchBar
