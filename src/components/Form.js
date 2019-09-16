import React, { useState } from 'react'

function Form() {
  const [user, setUser] = useState({
    'name': '',
    'email': '',
    'position': ''
  });

  const dataChange = e => setUser({ [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Name:
          <input 
            type="text"
            name="name"
            onChange={dataChange}
          />
          Email:
          <input 
            type="text"
            name="email"
            onChange={dataChange}
          />
          Position
          <input 
            type="text"
            name="password"
            onChange={dataChange}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  )
}

export default Form;