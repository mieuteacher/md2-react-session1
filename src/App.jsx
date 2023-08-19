import { useState } from 'react'
import './main.scss'
function App() {
  const [value, setValue] = useState(1);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Phước",
      age: 28
    },
    {
      id: 2,
      name: "Thái",
      age: 28
    },
    {
      id: 3,
      name: "Hảo",
      age: 28
    }
])

function addUser() {
  setUsers([...users, {
    id: Date.now(),
    name: "ABC",
    age: 20
  }])
}

function deleteUser(id) {
  let cloneUsers = [...users];
  setUsers(cloneUsers.filter(user => user.id != id ))
}
  return (
    <>
      {/* Count:  {value}
      <br></br>
      <button onClick={() => {
        setValue(value + 1)
      }}>Tăng</button>
      <br></br>
      <button onClick={() => {
        setValue(value - 1)
      }}>Giảm</button>

      <ul>
        {
          users.map(user => <li key={user.id}>
              Name: {user.name} - age: {user.age} - Name: {user.name}
              <button onClick={() => {
                deleteUser(user.id)
              }}>Delete</button>
            </li>)
        }
      </ul>
      <button onClick={() => {
        addUser()
      }}>Thêm Mới</button> */}
    </>
  )
}

export default App
