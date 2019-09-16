import React, { useState } from 'react'
import Form from './Form';
import User from './User';

function TeamMembers() {
  const [team, setTeam] = useState([
    {
      name: 'Arthur',
      email: 'arthur@gmail.com',
      position: 'Software Engineer'
    },
    {
      name: 'Mikaela',
      email: 'mikaela@gmail.com',
      position: 'Software Engineer'
    },
    {
      name: 'Candice',
      email: 'candice@gmail.com',
      position: 'Frontend Engineer'
    },
    {
      name: 'Charlie',
      email: 'charlie@gmail.com',
      position: 'Backend Engineer'
    }
  ]);

  const addUser = (user) => {
    setTeam([...team, user])
  }

  const memberToEdit = (user) => {
    if (team[user]) {
      setTeam([team[user] = user])
    }
  }

  return (
    <div>
      <Form addUser={addUser} memberToEdit={memberToEdit}/>
      <div className="card-cont">
        {team.map((user, index) => {
          return <User data={user} key={index}/>
        })}
      </div>
    </div>
  )
}

export default TeamMembers;