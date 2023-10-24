import React from 'react'

export default function SearchBar() {
  return (
    <div className='my-auto'>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" style={{minWidth: "600px"}}/>

        <button className="btn btn-outline-secondary bg-danger" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i></button>
      </div>
    </div>
  )
}

