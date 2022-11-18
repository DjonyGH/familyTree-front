import React, { useEffect } from 'react'

import { Sidebar } from './components/sidebar/Sidebar'
import './App.scss'
import { Main } from './components/main/Main'
import { Header } from './components/header/Header'
import { Content } from './components/content/Content'
import { Auth } from './components/auth/Auth'
import { Notification } from './components/notification/Notification'
import { authActionCreator } from './store/reducers/auth/action-creators'
import { useTypedDispatch } from './hooks/useTypedDispatch'
import { CreateTreePopup } from './components/createTreePopup/CreateTreePopup'
import { Routes, Navigate, Route } from 'react-router-dom'
import { ERoutes, privateRoutes, publicRoutes } from './router'
import { PrivateRoute } from './router/PrivateRoute'
import { MyTrees } from './pages/myTrees/MyTrees'

function App() {
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(authActionCreator.checkAuth())
  }, []) //eslint-disable-line

  return (
    <div className="App">
      <Sidebar />
      <Main>
        <Header />
        <Content>
          <Routes>
            {publicRoutes.map((route) => (
              <Route path={route.path} element={<route.component />} key={route.path} />
            ))}
            {privateRoutes.map((route) => (
              <Route path={route.path} element={<PrivateRoute route={route} />} key={route.path} />
            ))}
            <Route path="*" element={<Navigate to={ERoutes.NOT_FOUND} />} />
          </Routes>
        </Content>
      </Main>
      <Auth />
      <CreateTreePopup />
      <Notification />
    </div>
  )
}

export default App
