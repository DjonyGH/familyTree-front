import React from 'react'

import { Sidebar } from './components/sidebar/Sidebar'
import './App.scss'
import { Content } from './components/content/Content'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content>
        <>12</>
      </Content>
    </div>
  )
}

export default App
