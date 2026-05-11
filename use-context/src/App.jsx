
import ComponentC from './components/ComponentC.jsx'
import { createContext  } from 'react';
import React from "react";



export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {

  return (
    <div className = "App">
      <UserContext.Provider  value = {'Learning Use Context Hook'}>
        <ChannelContext.Provider value = {'From Codevolution'}>
                 <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
