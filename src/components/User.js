import React from 'react'

function User(props) {
  const { name, email, position } = props.data;

  return (
    <div className="user-card">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Position: {position}</p>
      <button>Edit</button>
    </div>
  )
}

export default User;