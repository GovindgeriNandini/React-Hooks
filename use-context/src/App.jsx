
import ComponentC from './components/ComponentC.jsx'
import { createContext  } from 'react';



export const UserContext = createContext();
export const ChannelContext = createContext();

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
