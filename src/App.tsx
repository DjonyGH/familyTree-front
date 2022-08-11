import React from 'react'

import { Sidebar } from './components/sidebar/Sidebar'
import './App.scss'
import { Main } from './components/main/Main'
import { Header } from './components/header/Header'
import { Content } from './components/content/Content'
import { Auth } from './components/auth/Auth'
import { Notification } from './components/notification/Notification'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main>
        <Header />
        <Content />
      </Main>
      <Auth />
      <Notification />
    </div>
  )
}

export default App
