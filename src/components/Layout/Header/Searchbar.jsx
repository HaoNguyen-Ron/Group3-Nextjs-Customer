import React, { useState } from 'react'

export default function SearchBar() {
  const [hover, setHover] = useState(false)
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  return (
    <div className='my-auto'>
      <div className="input-group" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm ở đây nè !..." aria-label="Recipient's username" aria-describedby="button-addon2" style={{ minWidth: "600px" }} />

        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          style={hover ? { backgroundColor: "#ee2d7a" } : { backgroundColor: "#ee4c8d" }}>

          <i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
        </button>
      </div>
    </div>
  )
}

