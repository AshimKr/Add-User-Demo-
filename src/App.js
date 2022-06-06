import React from 'react'
import { useState } from 'react'
import DisplayUsers from './Components/DisplayUsers'
import ErrorModel from './Components/ErrorModel';
import InputForm from './Components/InputForm'


function App() {
  const [users, setUsers] = useState([]);
  const [error,setError] = useState(false);


  const addUser = (newUser) => {
    if (newUser.name.trim().length === 0 || newUser.age < 0 || +newUser.age.trim().length == 0) {
      setError(true)
      return;
    } else {
      setUsers([...users, newUser]);
    }
  }

  //ErrorHandler
  const errorHandler=()=>{
    setError(err=> !err)
  }
  return (
    <>
      {error && <ErrorModel onError={errorHandler} />}
      <div className='container '>
        <InputForm addUser={addUser} />
        <DisplayUsers users={users} />
      </div>
    </>
  )
}

export default App