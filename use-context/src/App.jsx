
import ComponentC from './components/ComponentC.jsx'
import { createContext  } from 'react';
import React from "react";



export const UserContext = React.createContext();

function App() {

  return (
    <div className = "App">
      <UserContext.Provider  value = {'Learning Use Context Hook'}>
       <ComponentC />
      </UserContext.Provider>
    </div>
  )
}

export default App
