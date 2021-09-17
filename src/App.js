import React,{useState} from 'react'


export const App = () => {
  const [name,setName] = useState("Epam india");
  return (
    <div>
      <h2>Welcome to {name}</h2>
    </div>
  )
}

export default App