import React, { useEffect } from 'react'

import { Sidebar } from './components/sidebar/Sidebar'
import './App.scss'
import { Main } from './components/main/Main'
import { Header } from './components/header/Header'
import { Content } from './components/content/Content'
import { Auth } from './components/auth/Auth'
import { Notification } from './components/notification/Notification'
import { useTypedSelector } from './hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { authActionCreator } from './store/reducers/auth/action-creators'
import { useTypedDispatch } from './hooks/useTypedDispatch'
import { CreateTreeBtn } from './components/createTreeBtn/CreateTreeBtn'
import { CreateTreePopup } from './components/createTreePopup/CreateTreePopup'

function App() {
  const { isAuth } = useTypedSelector((state) => state.authReducer)

  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(authActionCreator.checkAuth())
  }, []) //eslint-disable-line

  console.log('isAuth', isAuth)
  return (
    <div className="App">
      <Sidebar />
      <Main>
        <Header />
        <Content>
          <></>
        </Content>
      </Main>
      <Auth />
      <CreateTreePopup />
      <Notification />
    </div>
  )
}

export default App
